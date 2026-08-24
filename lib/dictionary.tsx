import type { Locale } from "./locale";

const dictionary = {
  en: {
    meta: {
      title: "Ismail Kayadelen — Web Developer & Designer",
      description:
        "Web developer & designer based in the Netherlands with 3+ years of experience. Specialising in React, TypeScript, Next.js and Laravel — from database design to the last CSS tweak.",
    },
    nav: {
      homepage: "Homepage",
      about: "About me",
      cv: "CV",
      work: "Work",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      contactMe: "Contact me",
    },
    footer: {
      headline: "Let's chat",
      social: "Social",
      availableStatus: "Limited work slot available",
      bookedStatus: "Fully booked until spring",
      marquee: "Let's work together",
    },
    home: {
      scrollToExplore: "Scroll to explore",
      featuredWorks: "Featured works",
      viewAllWorks: "View all works",
      hiIAm: "Hi, I am",
      whatIDo: "What I do",
      otherTools: "Other tools",
      experience: "Experience",
      education: "Education",
      title: "Title",
      company: "Company",
      institution: "Institution",
      heroIntro: (
        <>
          Hi, I&rsquo;m currently working at{" "}
          <a href="https://notive.nl" style={{ color: "var(--ev-text-primary)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            Notive
          </a>{" "}
          as a fullstack developer and freelancer at{" "}
          <a href="https://yamotion.com" style={{ color: "var(--ev-text-primary)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            YAMOTION
          </a>
          .
        </>
      ),
    },
    work: {
      eyebrow: "Selected work — 2022 / 2026",
      title: "Work",
      highlights: "Highlights",
      nextProjects: "Next projects",
      year: "Year",
      role: "Role",
      duration: "Duration",
      viewLabel: "View",
    },
    about: {
      title: "About me",
      badge: "Web developer & designer",
      toolsIWorkWith: "Tools I work with",
    },
    contact: {
      title: "Contact",
      location: "Location",
      email: "Email",
    },
    form: {
      getInTouch: "Get in touch",
      name: "Name",
      namePlaceholder: "Jane Doe",
      email: "Email",
      emailPlaceholder: "you@studio.com",
      subject: "Subject",
      subjectPlaceholder: "Brand identity for a new studio",
      message: "Message",
      messagePlaceholder: "Tell me about the project",
      send: "Send message",
      sending: "Sending…",
      sent: "Message sent",
      sentNote: "Thanks — I'll reply within two days",
      errorNote: "Something went wrong — please try again",
    },
    cv: {
      title: "CV",
      download: "Download PDF",
    },
  },
  nl: {
    meta: {
      title: "Ismail Kayadelen — Webdeveloper & Designer",
      description:
        "Webdeveloper & designer uit Nederland met 3+ jaar ervaring. Gespecialiseerd in React, TypeScript, Next.js en Laravel — van database-ontwerp tot de laatste CSS-tweak.",
    },
    nav: {
      homepage: "Home",
      about: "Over mij",
      cv: "CV",
      work: "Werk",
      contact: "Contact",
      openMenu: "Menu openen",
      closeMenu: "Menu sluiten",
      contactMe: "Neem contact op",
    },
    footer: {
      headline: "Laten we praten",
      social: "Social",
      availableStatus: "Beperkt aantal werkplekken beschikbaar",
      bookedStatus: "Volgeboekt tot het voorjaar",
      marquee: "Laten we samenwerken",
    },
    home: {
      scrollToExplore: "Scroll om te verkennen",
      featuredWorks: "Uitgelicht werk",
      viewAllWorks: "Bekijk al mijn werk",
      hiIAm: "Hoi, ik ben",
      whatIDo: "Wat ik doe",
      otherTools: "Overige tools",
      experience: "Ervaring",
      education: "Opleiding",
      title: "Titel",
      company: "Bedrijf",
      institution: "School",
      heroIntro: (
        <>
          Hoi, ik werk momenteel bij{" "}
          <a href="https://notive.nl" style={{ color: "var(--ev-text-primary)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            Notive
          </a>{" "}
          als fullstack developer en als freelancer bij{" "}
          <a href="https://yamotion.com" style={{ color: "var(--ev-text-primary)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            YAMOTION
          </a>
          .
        </>
      ),
    },
    work: {
      eyebrow: "Geselecteerd werk — 2022 / 2026",
      title: "Werk",
      highlights: "Hoogtepunten",
      nextProjects: "Volgende projecten",
      year: "Jaar",
      role: "Rol",
      duration: "Duur",
      viewLabel: "Bekijk",
    },
    about: {
      title: "Over mij",
      badge: "Webdeveloper & designer",
      toolsIWorkWith: "Tools waarmee ik werk",
    },
    contact: {
      title: "Contact",
      location: "Locatie",
      email: "E-mail",
    },
    form: {
      getInTouch: "Neem contact op",
      name: "Naam",
      namePlaceholder: "Jan Jansen",
      email: "E-mail",
      emailPlaceholder: "jij@studio.com",
      subject: "Onderwerp",
      subjectPlaceholder: "Merkidentiteit voor een nieuwe studio",
      message: "Bericht",
      messagePlaceholder: "Vertel me over het project",
      send: "Bericht versturen",
      sending: "Versturen…",
      sent: "Bericht verstuurd",
      sentNote: "Bedankt — ik reageer binnen twee dagen",
      errorNote: "Er ging iets mis — probeer het opnieuw",
    },
    cv: {
      title: "CV",
      download: "PDF downloaden",
    },
  },
} satisfies Record<Locale, unknown>;

export function t(locale: Locale) {
  return dictionary[locale];
}
