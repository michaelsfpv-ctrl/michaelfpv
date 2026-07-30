// ─────────────────────────────────────────────────────────────
// Base-path helper. GitHub project pages serve from a subfolder
// (/Michael-FPV/), so every internal link must be prefixed.
// Using this everywhere means switching to a custom domain later
// is a one-line change in astro.config.mjs.
// ─────────────────────────────────────────────────────────────
export const url = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
};

// ─────────────────────────────────────────────────────────────
// Single source of truth for the whole site.
// Change a phone number or add a video here and it updates
// everywhere — pages, schema, footer, sitemap.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Michael FPV',
  owner: 'Michael Yushchenko',
  tagline: 'Charlotte Drone Cinematography',
  description:
    'FPV drone flythroughs, aerial video, and HDR photography for real estate, weddings, and brands. FAA Part 107 certified. Based in Charlotte, available nationwide.',
  phone: '(980) 397-9127',
  phoneHref: 'tel:+19803979127',
  email: 'michaelfpv06@gmail.com',
  instagram: 'https://www.instagram.com/michael__fpv/',
  instagramHandle: '@michael__fpv',
  city: 'Charlotte',
  region: 'NC',
  regionFull: 'North Carolina',
  formspree: 'https://formspree.io/f/mrenjojd',
} as const;

// Cloudflare Stream helper — keeps the long query strings in one place.
export const streamUrl = (id: string, opts: { sound?: boolean } = {}) =>
  opts.sound
    ? `https://iframe.videodelivery.net/${id}?autoplay=true&muted=false&controls=true&loop=false`
    : `https://iframe.videodelivery.net/${id}?autoplay=true&muted=true&loop=true&controls=false&background=true`;

export const heroStreams = {
  home: '988cd6d1efa131464be779721f4cd16c',
  services: 'f8ff6cc6574816da1a95bd8cd9a8ca2e',
};

export type Video = { stream: string; label: string; portrait?: boolean };
export type Tab = { key: string; label: string; videos: Video[] };

export type Category = {
  slug: string;
  num: string;
  title: string;
  /** Video shown as the tile background on /portfolio */
  cover?: string;
  /** Meta description for this category's own page */
  metaDescription: string;
  videos?: Video[];
  tabs?: Tab[];
};

export const categories: Category[] = [
  {
    slug: 'weddings',
    num: '01',
    title: 'Weddings',
    cover: 'f95bab7559567c9703e0a6ffab7be5cf',
    metaDescription:
      'Wedding drone videography in Charlotte NC. Whisper-quiet ceremony and reception aerial coverage that works alongside your main video team. FAA Part 107 certified.',
    tabs: [
      {
        key: 'main',
        label: 'Weddings',
        videos: [{ stream: 'f95bab7559567c9703e0a6ffab7be5cf', label: 'Ceremony & Reception' }],
      },
      {
        key: 'bts',
        label: 'Wedding BTS',
        videos: [{ stream: '580409878c4579b2c7d65eed3b8fc889', label: 'Behind the Scenes' }],
      },
    ],
  },
  {
    slug: 'moto-auto',
    num: '02',
    title: 'Moto Auto',
    cover: '799eeefcb246891cde55f81bde9edd21',
    metaDescription:
      'Automotive and motorcycle FPV drone videography. High-speed chase and tracking footage for cars, bikes, and motorsport. Charlotte NC, available nationwide.',
    videos: [
      { stream: 'fe4e9b86ce14a9c71427e4136c6bef31', label: 'FPV Chase' },
      { stream: '799eeefcb246891cde55f81bde9edd21', label: 'FPV Tracking' },
    ],
  },
  {
    slug: 'real-estate',
    num: '03',
    title: 'Real Estate & Fly Thru',
    cover: '7577e83ae3176e09db3e9754da65144a',
    metaDescription:
      'Real estate drone videography in Charlotte NC. One continuous FPV flythrough of the whole property, delivered in 4K within 24 hours. MLS-ready exports included.',
    videos: [{ stream: '7577e83ae3176e09db3e9754da65144a', label: 'Fly Thru' }],
  },
  {
    slug: 'production',
    num: '04',
    title: 'Production',
    cover: 'c9469edb28bf6f463bba232523496082',
    metaDescription:
      'Commercial drone video production for venues, hotels, restaurants, and brands. FPV interior flythroughs and exterior aerials. Charlotte NC.',
    videos: [{ stream: 'c9469edb28bf6f463bba232523496082', label: 'Production' }],
  },
];

export const services = [
  {
    tag: '01',
    title: 'Real Estate — Drone Tour',
    preview: 'One continuous FPV flythrough. In the door, through every room, done.',
    body: 'A single immersive FPV flythrough shot in one take. The footage that stops buyers mid-scroll.',
    points: [
      'Custom FPV flythrough (1 continuous take)',
      '4K delivery, color graded',
      'MLS-ready 16:9 and vertical 9:16',
      'Delivered within 24 hours',
    ],
  },
  {
    tag: '02',
    title: 'Real Estate — Standard Kit',
    preview: 'FPV tour + HDR photos + aerials + floor plan in one booking.',
    body: 'The most-booked package. Everything an agent needs to launch a listing, delivered in 24 hours.',
    points: [
      'FPV flythrough',
      'HDR interior photography (25+ photos)',
      'Exterior + aerial photography',
      '2D floor plan',
      'All files in 24 hours',
    ],
  },
  {
    tag: '03',
    title: 'Real Estate — Elite',
    preview: 'Standard Kit plus a cinematic highlight reel and creative direction.',
    body: 'For premium listings. Full Standard Kit plus a polished cinematic highlight video and on-site creative direction.',
    points: [
      'Everything in Standard Kit',
      'Cinematic highlight video (60–90s)',
      'Extended aerial footage',
      'On-site creative direction',
      'Social media cut included',
    ],
  },
  {
    tag: '04',
    title: 'Weddings',
    preview: 'Whisper-quiet aerials that work alongside your main video team.',
    body: 'We stay out of the way, shoot from above, and hand you polished aerial coverage that makes your highlight reel worth watching.',
    points: [
      'Ceremony aerial coverage',
      'Reception + venue aerials',
      'Edited highlight reel',
      'Raw footage included',
      'Delivered within 5–7 business days',
    ],
  },
  {
    tag: '05',
    title: 'Commercial & Venues',
    preview: 'Hotels, restaurants, offices, event spaces — inside and out.',
    body: 'FPV interior flythroughs plus exterior aerials for venue tours, hotel promos, restaurant launches, and office walkthroughs.',
    points: [
      'FPV interior flythrough',
      'Exterior aerial footage',
      'Edited promo video (60–120s)',
      'Photography add-on available',
      'Custom scope available',
    ],
  },
  {
    tag: '06',
    title: 'Production FPV',
    preview: 'Cinema-grade FPV for ads, music videos, and branded productions.',
    body: 'Full production FPV for commercial shoots, music videos, film sets, and campaigns.',
    points: [
      'Full-day and half-day rates',
      'Cinema-grade FPV and drone rigs',
      'Works alongside your production crew',
      'Pre-production scouting included',
      'Custom quote — contact us to scope',
    ],
  },
];

export const faqs = [
  {
    q: 'What is FPV?',
    a: 'FPV stands for First Person View. The pilot wears goggles and flies in a single unbroken take — through doors, down hallways, and around corners. Like walking the space yourself.',
  },
  {
    q: 'What is Part 107?',
    a: "FAA Part 107 is the required federal license to fly drones commercially. Every shoot is fully legal, insured, and authorized — including near airports and at events.",
  },
  {
    q: 'How fast is delivery?',
    a: 'Real estate shoots deliver in 24 hours. Cinematic edits in 3–5 days. Weddings and events in 5–7 days. Rush delivery available on request.',
  },
  {
    q: 'Where are you located?',
    a: 'Based in Charlotte, NC — serving the full area with no travel fee. Available nationwide across all 50 states for the right project.',
  },
  {
    q: 'What services do you offer?',
    a: 'Real estate tours, weddings, events, commercial venues, and production FPV. Every package includes 4K footage, color grading, and full usage rights.',
  },
  {
    q: 'What is the pricing?',
    a: "Pricing is custom for every project — based on location, scope, and what your shoot needs. Contact us and we'll put together a number specific to your project.",
  },
];

export const testimonials = [
  {
    quote:
      "The drone flew straight through the front door and down the hallway. I've never seen a listing video like it. Sold in six days.",
    name: 'Sarah Mitchell',
    role: 'Realtor, Charlotte',
  },
  {
    quote:
      'Professional, fast, and the footage was honestly better than what we get from our normal videographer. Booking again for the next listing.',
    name: 'James Okafor',
    role: 'Realtor, Lake Norman',
  },
  {
    quote:
      'They flew the reception hall during golden hour and the footage made it into our highlight reel. Guests are still talking about it.',
    name: 'Priya & Daniel',
    role: 'Wedding Clients',
  },
];

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/services/', label: 'Services' },
  { href: '/bts/', label: 'BTS' },
];
