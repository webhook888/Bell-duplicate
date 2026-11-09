export const SITE_NAME = "Castillo’s Glass";
export const SITE_TAGLINE = "Premium Windows & Doors";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", hasMegaMenu: true },
  { label: "Product Gallery", href: "/product-gallery" },
  { label: "Catalog", href: "/catalog" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "facebook", bg: "white",border:'1px solid black',color:'blue' },
  { label: "YouTube", href: "#", icon: "youtube", bg: "white",border:'1px solid red',color:'red' },
  { label: "Instagram", href: "#", icon: "instagram", bg: "white",color:'#F5017E',border:'1px solid #F5017E' },
  // { label: "Pinterest", href: "#", icon: "pinterest", bg: "#e02424" },
  // { label: "Amazon", href: "#", icon: "amazon", bg: "#232323" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Windows",
    links: [
      { label: "Sliding Windows", href: "/products/category/commercial" },
      { label: "Tilt & Turn Window", href: "/products/category/doors-bifold" },
      { label: "Casments Window", href: "/products/category/shower-doors" },
    ],
  },
  {
    title: "Doors",
    links: [
      { label: "Sliding Door", href: "/products/category/window-and-doors" },
      { label: "Entrance Door", href: "/products/category/cable-system" },
      { label: "Bi-Fold Door", href: "/products/category/doors-bifold" },
      { label: "Tilt And Turn Door", href: "/products/category/glass-railing" },
      { label: "Tilt And Slide Door", href: "/products/category/custom-glass" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Get a Quote", href: "/get-a-quote" },
      { label: "FAQs", href: "/faqs" },
      { label: "Terms and Services", href: "/terms-and-services" },
    ],
  },
];

export const COMPANY_ADDRESS = {
  line1: "6 Crown Street, London WC2B 8FE",
  line2: "United Kingdom",
  phone: "020-7946-0855",
};

export const QUOTE_CONTACT = {
  email: "Castillosglass@gmail.com",
  phones: ["+1 (323) 875-9453"],
  hours: "We are open Monday through Friday from 9:00am – 5:00pm Central Time.",
};
