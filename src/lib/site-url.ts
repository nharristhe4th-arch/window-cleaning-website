// squeegeeguys.com is not purchased/connected yet, so metadata (OG images,
// sitemap, robots) must resolve against whatever URL is actually live.
// VERCEL_PROJECT_PRODUCTION_URL is auto-injected by Vercel and always
// points at the real production URL, so once the custom domain is bought
// and set as primary in the Vercel dashboard, this updates with no code change.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://squeege-guys-window.vercel.app";
