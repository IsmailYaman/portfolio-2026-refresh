import type { Locale } from "./locale";

type L = Record<Locale, string>;
type LL = Record<Locale, string[]>;

const EXPERIENCE_START = new Date(2023, 1, 1); // Feb 2023

function yearsSince(date: Date): number {
  const now = new Date();
  let years = now.getFullYear() - date.getFullYear();
  const anniversaryPassed = now.getMonth() > date.getMonth() || (now.getMonth() === date.getMonth() && now.getDate() >= date.getDate());
  if (!anniversaryPassed) years--;
  return years;
}

export const experienceYears = yearsSince(EXPERIENCE_START);

export const SITE = {
  name: "Ismail Kayadelen",
  tagline: { en: "Full stack developer based in the Netherlands", nl: "Full stack developer gevestigd in Nederland" } satisfies L,
  email: "hello@ismailkayadelen.com",
  location: { en: "Netherlands", nl: "Nederland" } satisfies L,
  available: true,
  url: "https://ismailkayadelen.com",
};

export const bio = {
  lead: {
    en: `I'm a full stack developer based in the Netherlands with ${experienceYears}+ years of experience building web apps and e-com solutions.`,
    nl: `Ik ben een full stack developer uit Nederland met ${experienceYears}+ jaar ervaring in het bouwen van webapplicaties en e-commerce oplossingen.`,
  } satisfies L,
  secondary: {
    en: "Outside of work I spend time in the gym and tinkering with my car. Both teach you the same thing: details matter, and shortcuts always show up later.",
    nl: "Buiten werk ben ik in de sportschool te vinden of aan het sleutelen aan mijn auto. Beide leren je hetzelfde: details doen ertoe, en shortcuts komen altijd later terug.",
  } satisfies L,
};

export const cvProfile = {
  en: `Creative developer based in the Netherlands with ${experienceYears}+ years of experience building web apps and e-com solutions. I like combining creative technology with technical know-how to build interactive products that not only work well, but are also pleasant to use and look sharp.`,
  nl: `Creatieve developer uit Nederland met ${experienceYears}+ jaar ervaring in het bouwen van webapplicaties en e-commerce oplossingen. Ik combineer graag creatieve technologie met technische kennis om interactieve toepassingen te bouwen die niet alleen goed werken, maar ook prettig zijn in gebruik en er strak uitzien.`,
} satisfies L;

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
  role: L;
  duration: L;
  description: L;
  fullDescription: L;
  highlights: LL;
  liveUrl?: string;
  buttonLabel?: L;
  secondaryUrl?: string;
  secondaryButtonLabel?: L;
};

export const projects: Project[] = [
  {
    title: "Quickshift",
    type: "Template",
    year: "2026",
    image: "/work/quickshift.png",
    ratio: "16 / 9",
    tags: ["Framer"],
    role: { en: "Template Designer & Developer", nl: "Sjabloonontwerper & Developer" },
    duration: { en: "4 weeks", nl: "4 weken" },
    description: {
      en: "A premium Framer template for luxury car rental businesses, featuring a refined booking flow, curated fleet showcase, and concierge-focused design.",
      nl: "Een premium Framer-sjabloon voor luxe autoverhuurbedrijven, met een verfijnde boekingsflow, uitgelichte wagenpark-showcase en een op concierge gerichte uitstraling.",
    },
    fullDescription: {
      en: "Quickshift is a Framer template designed for luxury car rental businesses. It comes with everything needed to present a high-end fleet — from Audi and BMW to Lamborghini and Rolls Royce — in a way that matches the prestige of the vehicles.\n\nThe template includes a clean booking flow, transparent pricing sections, wedding package pages, and a concierge service layout. It's available for purchase on YAMOTION and is built to be fully customisable out of the box.",
      nl: "Quickshift is een Framer-sjabloon ontworpen voor luxe autoverhuurbedrijven. Het bevat alles wat nodig is om een high-end wagenpark te presenteren — van Audi en BMW tot Lamborghini en Rolls Royce — op een manier die past bij het prestige van de voertuigen.\n\nHet sjabloon bevat een overzichtelijke boekingsflow, transparante prijssecties, pagina's voor trouwpakketten en een concierge-service layout. Het is te koop via YAMOTION en volledig aanpasbaar out-of-the-box.",
    },
    highlights: {
      en: [
        "Designed a premium Framer template for luxury car rental brands",
        "Includes fleet showcase, booking flow, wedding packages, and concierge sections",
        "Published and available for purchase on YAMOTION",
        "Built fully responsive with a refined visual identity ready to customise",
      ],
      nl: [
        "Premium Framer-sjabloon ontworpen voor luxe autoverhuurmerken",
        "Inclusief wagenpark-showcase, boekingsflow, trouwpakketten en concierge-secties",
        "Gepubliceerd en te koop via YAMOTION",
        "Volledig responsive gebouwd met een verfijnde visuele identiteit, klaar om aan te passen",
      ],
    },
    liveUrl: "https://quickshift.framer.website/",
    buttonLabel: { en: "Visit website", nl: "Bezoek website" },
    secondaryUrl: "https://yamotion.com/templates",
    secondaryButtonLabel: { en: "Get template", nl: "Sjabloon aanschaffen" },
  },
  {
    title: "Pure Fuel Solution",
    type: "Website",
    year: "2025",
    image: "/work/purefuelsolution.png",
    ratio: "16 / 9",
    tags: ["Framer"],
    role: { en: "Web Designer & Developer", nl: "Webdesigner & Developer" },
    duration: { en: "3 weeks", nl: "3 weken" },
    description: {
      en: "A website for a 24/7 diesel fuel polishing service protecting critical infrastructure across South Florida.",
      nl: "Een website voor een 24/7 diesel fuel polishing service die kritieke infrastructuur in Zuid-Florida beschermt.",
    },
    fullDescription: {
      en: "Pure Fuel Solution is a professional fuel polishing and tank maintenance service operating 24/7 across South Florida. They specialise in keeping backup generators running for hospitals, data centres, and other critical infrastructure.\n\nThe website was built to clearly communicate their services and four-step process, build trust with key statistics, and make it easy for potential clients to get in touch at any hour.",
      nl: "Pure Fuel Solution is een professionele fuel polishing- en tankonderhoudsservice die 24/7 actief is in heel Zuid-Florida. Ze zijn gespecialiseerd in het draaiende houden van noodgeneratoren voor ziekenhuizen, datacenters en andere kritieke infrastructuur.\n\nDe website is gebouwd om hun diensten en vierstappenproces duidelijk te communiceren, vertrouwen op te bouwen met kerncijfers, en het voor potentiële klanten op elk moment eenvoudig te maken om contact op te nemen.",
    },
    highlights: {
      en: [
        "Designed a trust-focused layout highlighting a 500+ client track record",
        "Clearly structured a four-step service process for a technical audience",
        "Built a fully responsive site optimised for 24/7 emergency lead generation",
      ],
      nl: [
        "Vertrouwenwekkende layout ontworpen rond een trackrecord van 500+ klanten",
        "Vierstaps serviceproces helder gestructureerd voor een technisch publiek",
        "Volledig responsive site gebouwd, geoptimaliseerd voor 24/7 spoedaanvragen",
      ],
    },
    liveUrl: "https://www.purefuelsolution.com/",
    buttonLabel: { en: "Visit website", nl: "Bezoek website" },
  },
  {
    title: "Global Power Services",
    type: "Website",
    year: "2025",
    image: "/work/global-pow.png",
    ratio: "16 / 9",
    tags: ["Framer", "React"],
    role: { en: "Web Designer & Developer", nl: "Webdesigner & Developer" },
    duration: { en: "3 weeks", nl: "3 weken" },
    description: {
      en: "A website for a generator specialist showcasing their products, maintenance services, and commitment to reliable power solutions.",
      nl: "Een website voor een generatorspecialist die producten, onderhoudsdiensten en betrouwbare stroomoplossingen laat zien.",
    },
    fullDescription: {
      en: "This client specialises in providing generators and expertise in maintenance and repair services. Their goal is to ensure reliable power solutions for every customer.\n\nThis website was created to showcase their wide range of products and services, as well as their commitment to delivering in the generator industry. With a user-friendly design and detailed content, the platform ensures customers can easily find the right solutions for their power needs.",
      nl: "Deze klant is gespecialiseerd in generatoren en expertise in onderhoud en reparatie. Hun doel is betrouwbare stroomoplossingen voor elke klant.\n\nDeze website is gemaakt om hun brede assortiment producten en diensten te tonen, samen met hun expertise binnen de generatorindustrie. Met een gebruiksvriendelijk design en gedetailleerde content vinden klanten eenvoudig de juiste oplossing voor hun stroombehoefte.",
    },
    highlights: {
      en: [
        "Designed a clear product and services showcase for a technical audience",
        "Built with a user-friendly layout to help customers find power solutions quickly",
        "Delivered a fully responsive site reflecting the client's industry expertise",
      ],
      nl: [
        "Heldere showcase van producten en diensten ontworpen voor een technisch publiek",
        "Gebruiksvriendelijke layout gebouwd zodat klanten snel de juiste oplossing vinden",
        "Volledig responsive site opgeleverd die de expertise van de klant weerspiegelt",
      ],
    },
    liveUrl: "https://global-pow.com/",
    buttonLabel: { en: "Visit website", nl: "Bezoek website" },
  },
  {
    title: "YAMOTION",
    type: "Website",
    year: "2024",
    image: "/work/yamotion.png",
    ratio: "16 / 9",
    tags: ["Framer", "React"],
    role: { en: "Founder & Developer", nl: "Oprichter & Developer" },
    duration: { en: "Ongoing", nl: "Doorlopend" },
    description: {
      en: "My freelance web development business, specializing in Framer websites and Shopify webshops with a focus on design, performance, and user experience.",
      nl: "Mijn freelance webdevelopment-bedrijf, gespecialiseerd in Framer-websites en Shopify-webshops met focus op design, performance en gebruikservaring.",
    },
    fullDescription: {
      en: "YAMOTION is my freelance web development business, specializing in Framer websites and Shopify webshops with a focus on design, performance, and user experience. I create modern, interactive, and high-quality web solutions tailored to clients' needs.",
      nl: "YAMOTION is mijn freelance webdevelopment-bedrijf, gespecialiseerd in Framer-websites en Shopify-webshops met focus op design, performance en gebruikservaring. Ik bouw moderne, interactieve en hoogwaardige weboplossingen op maat van de klant.",
    },
    highlights: {
      en: [
        "Founded and built the full brand identity and website",
        "Specialises in Framer websites and Shopify webshops",
        "Focused on design quality, performance, and user experience",
      ],
      nl: [
        "Volledige merkidentiteit en website opgezet en gebouwd",
        "Gespecialiseerd in Framer-websites en Shopify-webshops",
        "Focus op designkwaliteit, performance en gebruikservaring",
      ],
    },
    liveUrl: "https://yamotion.com/",
    buttonLabel: { en: "Visit website", nl: "Bezoek website" },
  },
  {
    title: "Ajeeth Muthu — Portfolio",
    type: "Website",
    year: "2025",
    image: "/work/ajeeth.png",
    ratio: "16 / 9",
    tags: ["Next.js", "React", "Tailwind CSS"],
    role: { en: "Web Designer & Developer", nl: "Webdesigner & Developer" },
    duration: { en: "3 weeks", nl: "3 weken" },
    description: {
      en: "A personal portfolio for a data professional based in Den Haag, showcasing expertise in data engineering, machine learning, and AI.",
      nl: "Een persoonlijk portfolio voor een data-professional uit Den Haag, met focus op data engineering, machine learning en AI.",
    },
    fullDescription: {
      en: "A modern portfolio website built for Ajeeth Muthu, a Data Steward based in Den Haag, Netherlands. The site presents his background in data engineering, machine learning, and AI in a clean, animated interface.\n\nThe portfolio highlights his hard skills — Python, SQL, Power BI, Tableau — alongside his professional experience across data-focused roles. Personal touches throughout the site give it a human feel that goes beyond a standard CV.",
      nl: "Een moderne portfoliowebsite gebouwd voor Ajeeth Muthu, een Data Steward uit Den Haag. De site presenteert zijn achtergrond in data engineering, machine learning en AI in een strakke, geanimeerde interface.\n\nHet portfolio belicht zijn technische vaardigheden — Python, SQL, Power BI, Tableau — naast zijn werkervaring in data-gerichte rollen. Persoonlijke accenten door de hele site geven het een menselijk gevoel dat verder gaat dan een standaard cv.",
    },
    highlights: {
      en: [
        "Designed and built a fully responsive portfolio with animated transitions",
        "Structured content to showcase both technical skills and personality",
        "Deployed on Vercel with Next.js for fast, reliable performance",
      ],
      nl: [
        "Volledig responsive portfolio ontworpen en gebouwd met geanimeerde transities",
        "Content gestructureerd om zowel technische skills als persoonlijkheid te tonen",
        "Gedeployed op Vercel met Next.js voor snelle, betrouwbare performance",
      ],
    },
    liveUrl: "https://ajeethmuthu.vercel.app/",
    buttonLabel: { en: "Visit website", nl: "Bezoek website" },
  },
  {
    title: "CP-AR",
    type: "Web experience",
    year: "2024",
    image: "/work/cp-ar.png",
    ratio: "4 / 3",
    tags: ["A-Frame", "8th Wall", "Blender"],
    role: { en: "XR Developer", nl: "XR Developer" },
    duration: { en: "5 months", nl: "5 maanden" },
    description: {
      en: "A web-AR experience to teach the basics of first aid actions for a heart attack emergency, built as a thesis project.",
      nl: "Een web-AR ervaring om de basis van eerste hulp bij een hartaanval aan te leren, gebouwd als afstudeerproject.",
    },
    fullDescription: {
      en: "CP-AR is a web-AR experience to make sure you know the basics of first aid actions for a heart attack emergency.\n\nCP-AR was my thesis project that I had the opportunity to develop for my studies in Creative Media & Game Technologies. Extensive research was done on the areas where improvements could be made within heart attack emergencies in the Netherlands.",
      nl: "CP-AR is een web-AR ervaring die ervoor zorgt dat je de basis van eerste hulp bij een hartaanval kent.\n\nCP-AR was mijn afstudeerproject, ontwikkeld voor mijn studie Creative Media & Game Technologies. Er is uitgebreid onderzoek gedaan naar de gebieden waarop verbeteringen mogelijk zijn binnen hartaanval-noodsituaties in Nederland.",
    },
    highlights: {
      en: [
        "Researched improvements in heart attack emergency response in the Netherlands",
        "Built a web-AR experience accessible on mobile without an app install",
        "Modelled and animated 3D assets in Blender for the AR scene",
        "Completed as thesis project for Creative Media & Game Technologies",
      ],
      nl: [
        "Onderzoek gedaan naar verbeteringen in de respons bij hartaanval-noodsituaties in Nederland",
        "Web-AR ervaring gebouwd, toegankelijk op mobiel zonder app-installatie",
        "3D-assets gemodelleerd en geanimeerd in Blender voor de AR-scene",
        "Afgerond als afstudeerproject voor Creative Media & Game Technologies",
      ],
    },
    liveUrl: "https://cp-ar.vercel.app/",
    buttonLabel: { en: "Visit website (mobile recommended)", nl: "Bezoek website (mobiel aanbevolen)" },
  },
  {
    title: "Achromira",
    type: "Game",
    year: "2022",
    image: "/work/achromira.png",
    ratio: "16 / 9",
    tags: ["Unity", "Blender", "Illustrator"],
    role: { en: "3D Artist", nl: "3D Artist" },
    duration: { en: "4 months", nl: "4 maanden" },
    description: {
      en: "A story-rich platformer where Mira searches for crystal shards to restore colour to three unique worlds.",
      nl: "Een verhalende platformer waarin Mira op zoek gaat naar kristalscherven om kleur terug te brengen in drie unieke werelden.",
    },
    fullDescription: {
      en: "Achromira is a story rich platformer where Mira, the character you play as, has to search for all the crystal shards in order to restore colour to her own world and that of others. Follow her on her journey to rescue three unique worlds, Achrome City, Rutate and Gryd.\n\nThis was the second project with the game development minor. As an artist within the team, I worked mainly on the first level of the game. Almost all the assets in this level are done by me. Next to that I also worked on various assets in other levels.",
      nl: "Achromira is een verhalende platformer waarin Mira, het personage dat je speelt, op zoek moet naar alle kristalscherven om kleur terug te brengen in haar eigen wereld en die van anderen. Volg haar reis om drie unieke werelden te redden: Achrome City, Rutate en Gryd.\n\nDit was het tweede project binnen de minor Game Development. Als artist binnen het team werkte ik voornamelijk aan het eerste level van de game. Vrijwel alle assets in dit level zijn door mij gemaakt. Daarnaast werkte ik ook aan diverse assets in andere levels.",
    },
    highlights: {
      en: [
        "Created nearly all 3D and 2D assets for the first game level",
        "Contributed additional assets across the remaining two levels",
        "Published on Steam as part of the game development minor",
        "Collaborated in a multidisciplinary team using Scrum",
      ],
      nl: [
        "Vrijwel alle 3D- en 2D-assets voor het eerste level gemaakt",
        "Aanvullende assets bijgedragen in de overige twee levels",
        "Gepubliceerd op Steam als onderdeel van de minor Game Development",
        "Samengewerkt in een multidisciplinair team met Scrum",
      ],
    },
    liveUrl: "https://store.steampowered.com/app/1809760/Achromira/",
    buttonLabel: { en: "Play game", nl: "Speel de game" },
  },
].map((p) => ({ ...p, slug: slugify(p.title) }));

export type ExperienceEntry = {
  title: L;
  company: string;
  type: "Work" | "Education";
  year: L;
  description: L;
  bullets?: LL;
};

export const experience: ExperienceEntry[] = [
  {
    title: { en: "Full Stack Developer", nl: "Full Stack Developer" },
    company: "Notive",
    type: "Work",
    year: { en: "May 2024 – Present", nl: "Mei 2024 – Heden" },
    description: {
      en: "Returned to Notive as a frontend developer, building modern web applications and contributing to the technical direction of projects. Also working on backend projects and other technical stuff.",
      nl: "Teruggekeerd bij Notive als frontend developer, waar ik moderne webapplicaties bouw en meedenk over de technische richting van projecten. Daarnaast werk ik aan backend-projecten en andere technische zaken.",
    },
    bullets: {
      en: [
        "Developed new software using React, TypeScript, and Laravel",
        "Provided technical support and software assistance to clients",
        "Delivered workshops and training sessions on Shopify and Framer",
        "Managed client communication and guided projects from kickoff to delivery",
      ],
      nl: [
        "Nieuwe software ontwikkeld met React, TypeScript en Laravel",
        "Technische ondersteuning en software support verleend aan klanten",
        "Workshops en trainingen gegeven in Shopify en Framer",
        "Klantcommunicatie onderhouden en projecten begeleid van start tot oplevering",
      ],
    },
  },
  {
    title: { en: "Frontend Developer", nl: "Frontend Developer" },
    company: "Ventaro",
    type: "Work",
    year: { en: "May 2024 – Present", nl: "Mei 2024 – Heden" },
    description: {
      en: "Ventaro, a Notive sister company where the focus lies on smaller scale projects. Working on Framer and Shopify projects, and supporting existing clients with questions.",
      nl: "Ventaro, een zusterbedrijf van Notive gericht op kleinschaligere projecten. Ik werk aan Framer- en Shopify-projecten en ondersteun bestaande klanten met vragen.",
    },
    bullets: {
      en: ["Working on Framer and Shopify projects for smaller scale clients", "Supporting existing clients with technical questions"],
      nl: ["Werken aan Framer- en Shopify-projecten voor kleinschaligere klanten", "Bestaande klanten ondersteunen bij technische vragen"],
    },
  },
  {
    title: { en: "Founder", nl: "Eigenaar & Developer" },
    company: "YAMOTION",
    type: "Work",
    year: { en: "Nov 2024 – Present", nl: "Nov 2024 – Heden" },
    description: {
      en: "Founded YAMOTION, where I focus on creating websites and webshops for my clients.",
      nl: "YAMOTION opgericht, waar ik me richt op het bouwen van websites en webshops voor klanten.",
    },
    bullets: {
      en: ["Building Framer websites and Shopify webshops for clients", "Handling everything from client communication to delivery"],
      nl: ["Framer-websites en Shopify-webshops bouwen voor klanten", "Alles verzorgen van klantcommunicatie tot oplevering"],
    },
  },
  {
    title: { en: "XR Developer Intern (Thesis)", nl: "XR Developer Stagiair (Afstuderen)" },
    company: "360fabriek",
    type: "Work",
    year: { en: "Sep 2023 – Feb 2024", nl: "Sep 2023 – Feb 2024" },
    description: {
      en: "Completed my thesis internship focusing on XR development, exploring immersive technologies and their applications in the healthcare industry.",
      nl: "Afstudeerstage gericht op XR-development, waarbij ik immersieve technologieën en hun toepassingen binnen de zorgsector heb onderzocht.",
    },
    bullets: {
      en: [
        "Thesis research into how web-AR can make inexperienced people more aware of the correct first-aid actions during a heart attack",
        "Conducted qualitative research, including interviews with users and experts",
        "Developed and tested a web-AR prototype within a multidisciplinary project team",
      ],
      nl: [
        "Afstudeeronderzoek naar hoe web-AR onervaren mensen bewuster kan maken van de juiste handelingen bij eerste hulp aan een hartaanval",
        "Kwalitatief onderzoek uitgevoerd, waaronder interviews met gebruikers en experts",
        "Web-AR prototype ontwikkeld en getest binnen een multidisciplinair projectteam",
      ],
    },
  },
  {
    title: { en: "Junior Creative Developer", nl: "Junior Creative Developer" },
    company: "WeAreReasonablePeople",
    type: "Work",
    year: { en: "Aug 2022 – Sep 2023", nl: "Aug 2022 – Sep 2023" },
    description: {
      en: "Developed user interfaces and dashboards, collaborating with design and backend teams to deliver high-quality digital products.",
      nl: "Interfaces en dashboards ontwikkeld, in samenwerking met design- en backendteams om hoogwaardige digitale producten op te leveren.",
    },
    bullets: {
      en: ["Contributed to a variety of projects within multidisciplinary teams", "Participated in and organised retrospectives, reviews, and other Scrum events"],
      nl: ["Meegewerkt aan diverse projecten binnen multidisciplinaire teams", "Retrospectives, reviews en andere Scrum events bijgewoond en (mede) georganiseerd"],
    },
  },
  {
    title: { en: "Frontend Developer Intern", nl: "Frontend Developer Stagiair" },
    company: "Notive",
    type: "Work",
    year: { en: "Aug 2020 – Jan 2021", nl: "Aug 2020 – Jan 2021" },
    description: {
      en: "Started my professional journey as a frontend development intern, learning industry practices and contributing to real-world projects.",
      nl: "Startte mijn professionele carrière als frontend development stagiair, waar ik de praktijk leerde kennen en meewerkte aan echte projecten.",
    },
    bullets: {
      en: ["Learned industry practices and professional workflows", "Contributed to real-world client projects"],
      nl: ["Praktijkgerichte werkwijzen en professionele workflows geleerd", "Bijgedragen aan echte klantprojecten"],
    },
  },
  {
    title: { en: "Teamlead", nl: "Teamleider" },
    company: "Action",
    type: "Work",
    year: { en: "Sep 2018 – Aug 2023", nl: "Sep 2018 – Aug 2023" },
    description: {
      en: "Started as a store assistant alongside my studies, helping customers and keeping the shop floor running smoothly. After two years I was promoted to teamlead, where I ran daily operations independently — coordinating a small team, planning shifts, and taking responsibility when things went wrong. Working in retail taught me to stay structured under pressure, communicate clearly with a team, and take ownership instead of waiting to be told what to do — habits I still rely on today when planning sprints and taking a project from start to finish.",
      nl: "Begonnen als winkelmedewerker naast mijn studie, waar ik klanten hielp en de winkelvloer draaiende hield. Na twee jaar werd ik gepromoveerd tot teamleider, waar ik de dagelijkse gang van zaken zelfstandig runde — een klein team aansturen, diensten inplannen en verantwoordelijkheid dragen wanneer er iets misging. Werken in de retail leerde me gestructureerd blijven onder druk, duidelijk communiceren met een team, en eigenaarschap pakken in plaats van wachten tot me iets werd opgedragen — gewoontes die ik nu nog steeds gebruik bij het plannen van sprints en het dragen van verantwoordelijkheid voor een project van begin tot eind.",
    },
    bullets: {
      en: [
        "Assisted customers and stocked shelves as a store assistant",
        "Operated the register and handled daily store tasks",
        "Promoted to teamlead after two years, taking full ownership of the store",
        "Guided and supervised colleagues, and made staff planning and schedules",
        "Opened and closed the store, placed orders, and unloaded deliveries",
      ],
      nl: [
        "Klanten geholpen en schappen aangevuld als winkelmedewerker",
        "Kassa bediend en dagelijkse winkeltaken uitgevoerd",
        "Gepromoveerd tot teamleider na twee jaar, met volledige verantwoordelijkheid voor de winkel",
        "Collega's begeleid en planningen gemaakt",
        "Winkel geopend en gesloten, bestellingen geplaatst en laden gelost",
      ],
    },
  },
  {
    title: { en: "Bachelor of Creative Media & Game Technologies", nl: "Bachelor Creative Media & Game Technologies" },
    company: "University of Applied Sciences, Rotterdam",
    type: "Education",
    year: { en: "Sep 2018 – Feb 2024", nl: "Sep 2018 – Feb 2024" },
    description: {
      en: "Pursued a degree in Creative Media & Game Technologies with emphasis on frontend development and design.",
      nl: "Een opleiding Creative Media & Game Technologies gevolgd met de nadruk op frontend development en design.",
    },
    bullets: {
      en: ["Focused on frontend development and interactive design", "Graduated with a thesis on web-AR for first aid education"],
      nl: ["Gericht op frontend development en interactief design", "Afgestudeerd met een scriptie over web-AR voor EHBO-educatie"],
    },
  },
  {
    title: { en: "MBO 4 — Software Engineer", nl: "MBO 4 — Software Engineer" },
    company: "ROC Mondriaan, The Hague",
    type: "Education",
    year: { en: "Sep 2015 – June 2018", nl: "Sep 2015 – Jun 2018" },
    description: {
      en: "Gained valuable experience in both frontend and backend development, with a strong preference for frontend work due to the immediate visual feedback and creative possibilities.",
      nl: "Waardevolle ervaring opgedaan in zowel frontend als backend development, met een sterke voorkeur voor frontend werk vanwege de directe visuele feedback en creatieve mogelijkheden.",
    },
    bullets: {
      en: ["Learned both frontend and backend development fundamentals", "Discovered a strong preference for frontend work"],
      nl: ["Basis geleerd in zowel frontend als backend development", "Sterke voorkeur ontdekt voor frontend werk"],
    },
  },
];

export const languages = [
  { name: "Dutch", level: "Native" },
  { name: "Turkish", level: "Native" },
  { name: "English", level: "Fluent" },
];

export const hobbies = ["Gym", "Cars", "Travel", "Gaming"];

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

export const mainStack = ["React", "Next.js", "TypeScript", "Laravel", "PHP", "Tailwind", "Git", "Docker", "Vercel", "Python", "Kotlin", "Jetpack Compose"];

export const otherTools = ["Figma", "Framer", "Shopify", "Blender", "Jira", "Claude", "Gemini", "ChatGPT"];

export const tools = [...mainStack, ...otherTools];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
