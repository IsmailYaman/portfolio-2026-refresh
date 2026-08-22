export const SITE = {
  name: "Ismail Kayadelen",
  tagline: "web developer & designer based in Rotterdam",
  email: "hello@ismailkayadelen.com",
  available: true,
};

export const bio = {
  lead: "I'm a web developer based in the Netherlands with 3+ years of experience building web apps and e-com solutions.",
  secondary:
    "Outside of work I spend time in the gym and tinkering with my car. Both teach you the same thing: details matter, and shortcuts always show up later.",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/IsmailYaman" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ismail-kayadelen/" },
];

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export type Project = {
  title: string;
  slug: string;
  type: string;
  year: string;
  image: string;
  ratio: string;
  tags: string[];
  role: string;
  duration: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  liveUrl?: string;
  buttonLabel?: string;
  secondaryUrl?: string;
  secondaryButtonLabel?: string;
};

export const projects: Project[] = [
  {
    title: "Quickshift",
    type: "Template",
    year: "2026",
    image: "/work/quickshift.png",
    ratio: "16 / 9",
    tags: ["Framer"],
    role: "Template Designer & Developer",
    duration: "4 weeks",
    description:
      "A premium Framer template for luxury car rental businesses, featuring a refined booking flow, curated fleet showcase, and concierge-focused design.",
    fullDescription:
      "Quickshift is a Framer template designed for luxury car rental businesses. It comes with everything needed to present a high-end fleet — from Audi and BMW to Lamborghini and Rolls Royce — in a way that matches the prestige of the vehicles.\n\nThe template includes a clean booking flow, transparent pricing sections, wedding package pages, and a concierge service layout. It's available for purchase on YAMOTION and is built to be fully customisable out of the box.",
    highlights: [
      "Designed a premium Framer template for luxury car rental brands",
      "Includes fleet showcase, booking flow, wedding packages, and concierge sections",
      "Published and available for purchase on YAMOTION",
      "Built fully responsive with a refined visual identity ready to customise",
    ],
    liveUrl: "https://quickshift.framer.website/",
    buttonLabel: "Visit website",
    secondaryUrl: "https://yamotion.com/templates",
    secondaryButtonLabel: "Get template",
  },
  {
    title: "Pure Fuel Solution",
    type: "Website",
    year: "2025",
    image: "/work/purefuelsolution.png",
    ratio: "16 / 9",
    tags: ["Framer"],
    role: "Web Designer & Developer",
    duration: "3 weeks",
    description: "A website for a 24/7 diesel fuel polishing service protecting critical infrastructure across South Florida.",
    fullDescription:
      "Pure Fuel Solution is a professional fuel polishing and tank maintenance service operating 24/7 across South Florida. They specialise in keeping backup generators running for hospitals, data centres, and other critical infrastructure.\n\nThe website was built to clearly communicate their services and four-step process, build trust with key statistics, and make it easy for potential clients to get in touch at any hour.",
    highlights: [
      "Designed a trust-focused layout highlighting a 500+ client track record",
      "Clearly structured a four-step service process for a technical audience",
      "Built a fully responsive site optimised for 24/7 emergency lead generation",
    ],
    liveUrl: "https://www.purefuelsolution.com/",
    buttonLabel: "Visit website",
  },
  {
    title: "Global Power Services",
    type: "Website",
    year: "2025",
    image: "/work/global-pow.png",
    ratio: "16 / 9",
    tags: ["Framer", "React"],
    role: "Web Designer & Developer",
    duration: "3 weeks",
    description: "A website for a generator specialist showcasing their products, maintenance services, and commitment to reliable power solutions.",
    fullDescription:
      "This client specialises in providing generators and expertise in maintenance and repair services. Their goal is to ensure reliable power solutions for every customer.\n\nThis website was created to showcase their wide range of products and services, as well as their commitment to delivering in the generator industry. With a user-friendly design and detailed content, the platform ensures customers can easily find the right solutions for their power needs.",
    highlights: [
      "Designed a clear product and services showcase for a technical audience",
      "Built with a user-friendly layout to help customers find power solutions quickly",
      "Delivered a fully responsive site reflecting the client's industry expertise",
    ],
    liveUrl: "https://global-pow.com/",
    buttonLabel: "Visit website",
  },
  {
    title: "YAMOTION",
    type: "Website",
    year: "2024",
    image: "/work/yamotion.png",
    ratio: "16 / 9",
    tags: ["Framer", "React"],
    role: "Founder & Developer",
    duration: "Ongoing",
    description: "My freelance web development business, specializing in Framer websites and Shopify webshops with a focus on design, performance, and user experience.",
    fullDescription:
      "YAMOTION is my freelance web development business, specializing in Framer websites and Shopify webshops with a focus on design, performance, and user experience. I create modern, interactive, and high-quality web solutions tailored to clients' needs.",
    highlights: [
      "Founded and built the full brand identity and website",
      "Specialises in Framer websites and Shopify webshops",
      "Focused on design quality, performance, and user experience",
    ],
    liveUrl: "https://yamotion.com/",
    buttonLabel: "Visit website",
  },
  {
    title: "Ajeeth Muthu — Portfolio",
    type: "Website",
    year: "2025",
    image: "/work/ajeeth.png",
    ratio: "16 / 9",
    tags: ["Next.js", "React", "Tailwind CSS"],
    role: "Web Designer & Developer",
    duration: "3 weeks",
    description: "A personal portfolio for a data professional based in Den Haag, showcasing expertise in data engineering, machine learning, and AI.",
    fullDescription:
      "A modern portfolio website built for Ajeeth Muthu, a Data Steward based in Den Haag, Netherlands. The site presents his background in data engineering, machine learning, and AI in a clean, animated interface.\n\nThe portfolio highlights his hard skills — Python, SQL, Power BI, Tableau — alongside his professional experience across data-focused roles. Personal touches throughout the site give it a human feel that goes beyond a standard CV.",
    highlights: [
      "Designed and built a fully responsive portfolio with animated transitions",
      "Structured content to showcase both technical skills and personality",
      "Deployed on Vercel with Next.js for fast, reliable performance",
    ],
    liveUrl: "https://ajeethmuthu.vercel.app/",
    buttonLabel: "Visit website",
  },
  {
    title: "CP-AR",
    type: "Web experience",
    year: "2024",
    image: "/work/cp-ar.png",
    ratio: "4 / 3",
    tags: ["A-Frame", "8th Wall", "Blender"],
    role: "XR Developer",
    duration: "5 months",
    description: "A web-AR experience to teach the basics of first aid actions for a heart attack emergency, built as a thesis project.",
    fullDescription:
      "CP-AR is a web-AR experience to make sure you know the basics of first aid actions for a heart attack emergency.\n\nCP-AR was my thesis project that I had the opportunity to develop for my studies in Creative Media & Game Technologies. Extensive research was done on the areas where improvements could be made within heart attack emergencies in the Netherlands.",
    highlights: [
      "Researched improvements in heart attack emergency response in the Netherlands",
      "Built a web-AR experience accessible on mobile without an app install",
      "Modelled and animated 3D assets in Blender for the AR scene",
      "Completed as thesis project for Creative Media & Game Technologies",
    ],
    liveUrl: "https://cp-ar.vercel.app/",
    buttonLabel: "Visit website (mobile recommended)",
  },
  {
    title: "Achromira",
    type: "Game",
    year: "2022",
    image: "/work/achromira.png",
    ratio: "16 / 9",
    tags: ["Unity", "Blender", "Illustrator"],
    role: "3D Artist",
    duration: "4 months",
    description: "A story-rich platformer where Mira searches for crystal shards to restore colour to three unique worlds.",
    fullDescription:
      "Achromira is a story rich platformer where Mira, the character you play as, has to search for all the crystal shards in order to restore colour to her own world and that of others. Follow her on her journey to rescue three unique worlds, Achrome City, Rutate and Gryd.\n\nThis was the second project with the game development minor. As an artist within the team, I worked mainly on the first level of the game. Almost all the assets in this level are done by me. Next to that I also worked on various assets in other levels.",
    highlights: [
      "Created nearly all 3D and 2D assets for the first game level",
      "Contributed additional assets across the remaining two levels",
      "Published on Steam as part of the game development minor",
      "Collaborated in a multidisciplinary team using Scrum",
    ],
    liveUrl: "https://store.steampowered.com/app/1809760/Achromira/",
    buttonLabel: "Play game",
  },
].map((p) => ({ ...p, slug: slugify(p.title) }));

export type ExperienceEntry = {
  title: string;
  company: string;
  type: "Work" | "Education";
  year: string;
};

export const experience: ExperienceEntry[] = [
  { title: "Full Stack Developer", company: "Notive", type: "Work", year: "May 2024 – Present" },
  { title: "Frontend Developer", company: "Ventaro", type: "Work", year: "May 2024 – Present" },
  { title: "Founder", company: "YAMOTION", type: "Work", year: "Nov 2024 – Present" },
  { title: "XR Developer Intern (Thesis)", company: "360fabriek", type: "Work", year: "Sep 2023 – Feb 2024" },
  { title: "Frontend Developer", company: "WeAreReasonablePeople", type: "Work", year: "Aug 2022 – Sep 2023" },
  { title: "Frontend Developer Intern", company: "Notive", type: "Work", year: "Aug 2020 – Jan 2021" },
  { title: "Bachelor of Creative Media & Game Technologies", company: "University of Applied Sciences, Rotterdam", type: "Education", year: "Sep 2018 – Feb 2023" },
  { title: "MBO 4 — Software Engineer", company: "ROC Mondriaan, The Hague", type: "Education", year: "Sep 2015 – June 2018" },
];

export const workExperience = experience.filter((e) => e.type === "Work");
export const education = experience.filter((e) => e.type === "Education");

export type Skill = { title: string; description: string };

export const skills: Skill[] = [
  {
    title: "React & Next.js",
    description:
      "For years now, I have been using React and Next.js to build web applications. I have a good understanding of the React ecosystem and how to use it to build performant, scalable web applications in combination with Next.js.",
  },
  {
    title: "TypeScript",
    description:
      "After years of using JavaScript, I have switched to TypeScript as it is a type-safe language that helps me catch errors early and makes large codebases a pleasure to navigate.",
  },
  {
    title: "Laravel",
    description:
      "Laravel gave me a new perspective on how to approach backend development. As a mainly frontend developer, I have a good understanding of the Laravel ecosystem and how to use it to build robust backend systems and APIs.",
  },
  {
    title: "Claude Code",
    description:
      "Since the introduction of Claude Code, I have been using it to help me with my development. It has helped me move faster, think through architecture, and tackle problems I'd otherwise spend hours on.",
  },
];

export const tools = [
  "React",
  "Next.js",
  "TypeScript",
  "Laravel",
  "Tailwind",
  "Framer",
  "Figma",
  "Git",
  "Docker",
  "Vercel",
  "Shopify",
  "Python",
  "Kotlin",
  "Jetpack Compose",
  "Blender",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
