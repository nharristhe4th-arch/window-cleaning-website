function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;
}

export const images = {
  beforeAfterHero: "/images/work/before-after-hero.jpg",
  beforeAfterStoneSill: "/images/work/before-after-stone-sill.jpg",
  galleryHouseExterior: "/images/work/gallery-house-exterior.jpg",
  galleryTechnicianAction: "/images/work/gallery-technician-action.jpg",
  heroBuilding: unsplash("photo-1497366754035-f200968a6e72", 2000),
  glassFacade: unsplash("photo-1444201983204-c43cbd584d93", 2000),
  officeBuilding: unsplash("photo-1497366811353-6870744d04b2", 1800),
  officeBuildingAlt: unsplash("photo-1486406146926-c627a92ad1ab", 1800),
  storefront: unsplash("photo-1524230507669-5ff97982bb5e", 1600),
  officeInterior: unsplash("photo-1556742049-0cfed4f6a45d", 1600),
  officeDesks: unsplash("photo-1521791136064-7986c2920216", 1600),
  cityBlueSky: unsplash("photo-1560518883-ce09059eeffa", 1800),
  cityDusk: unsplash("photo-1519494026892-80bbd2d6fd0d", 1800),
  reception: unsplash("photo-1571624436279-b272aff752b5", 1600),
  glassPattern: unsplash("photo-1497215728101-856f4ea42174", 1800),
  cityLookUp: unsplash("photo-1441986300917-64674bd600d8", 1800),
} as const;
