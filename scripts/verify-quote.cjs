/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const ts = require('typescript');
const vm = require('vm');
const assert = require('assert/strict');
const source = fs.readFileSync(__dirname + '/../src/app/actions/quote.ts', 'utf8');
const js = ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
let mode='success', calls=[];
const context={exports:{},Set,console:{error:()=>{}},process:{env:{RESEND_API_KEY:'mock-key-only'}},require(name){
 if(name==='resend') return {Resend:class{emails={send:async(args)=>{calls.push(args); if(mode==='throw') throw Error('mock'); return {error:mode==='error'?{message:'mock rejected'}:null};}}}};
 if(name==='@/lib/site-data') return {company:{name:'Squeegee Guys',email:'owner@example.test'}};
 throw Error('Unexpected import '+name);
}};
vm.runInNewContext(js,context);
const submit=context.exports.submitQuoteRequest;
function form(overrides={}){const f=new FormData();for(const [k,v]of Object.entries({name:'Test Homeowner',email:'homeowner@example.test',location:'Daniel Island',...overrides})) f.set(k,v);return f;}
(async()=>{
 let checks=0;
 for(const [overrides,key]of [[{name:''},'name'],[{email:''},'email'],[{email:'bad'},'email'],[{location:''},'location']]){const r=await submit({status:'idle'},form(overrides));assert.equal(r.status,'error');assert.ok(r.errors[key]);checks++;}
 assert.equal(calls.length,0);
 let r=await submit({status:'idle'},form());assert.equal(r.status,'success');assert.match(calls.at(-1).subject,/Test Homeowner/);assert.match(calls.at(-1).text,/Company or HOA: Not supplied/);assert.match(calls.at(-1).text,/Phone: Not supplied/);assert.match(calls.at(-1).text,/Daniel Island/);checks++;
 r=await submit({status:'idle'},form({business:'Example HOA',location:'Nearby area to check',property:'HOA or managed property',service:'Inside and outside',message:'Two properties; access details to follow.'}));assert.equal(r.status,'success');assert.match(calls.at(-1).text,/Nearby area to check/);assert.match(calls.at(-1).text,/HOA or managed property/);checks++;
 r=await submit({status:'idle'},form({business:'Example Office',property:'Commercial'}));assert.equal(r.status,'success');assert.match(calls.at(-1).text,/Property type: Commercial/);checks++;
 for(const service of ['Pressure washing','Soft washing','Multiple services']){r=await submit({status:'idle'},form({service}));assert.equal(r.status,'success');assert.ok(calls.at(-1).text.includes('Service requested: '+service));checks++;}
 mode='error';r=await submit({status:'idle'},form());assert.equal(r.status,'error');checks++;
 mode='throw';r=await submit({status:'idle'},form());assert.equal(r.status,'error');checks++;
 delete context.process.env.RESEND_API_KEY;const before=calls.length;r=await submit({status:'idle'},form());assert.equal(r.status,'error');assert.equal(calls.length,before);checks++;
 r=await submit({status:'idle'},form({message:'x'.repeat(5001)}));assert.equal(r.status,'error');checks++;
 console.log(checks+' form-action checks passed using a mocked email provider. No network requests or emails sent.');
})().catch(e=>{console.error(e);process.exitCode=1});
