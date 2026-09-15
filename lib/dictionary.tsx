import type { Locale } from "./locale";
import { experienceYears } from "./data";

const currentYear = new Date().getFullYear();

const dictionary = {
  en: {
    meta: {
      title: "Ismail Kayadelen — Web Developer & Designer",
      description: `Web developer & designer based in the Netherlands with ${experienceYears}+ years of experience. Specialising in React, TypeScript, Next.js and Laravel — from database design to the last CSS tweak.`,
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
      whatIDo: "What I do",
      mainStack: "Main stack",
      otherTools: "Other tools",
      moreDetailsInCv: "More details in CV",
      experience: "Experience",
      education: "Education",
      title: "Title",
      factLocation: "Location",
      factExperienceValue: `${experienceYears}+ Years`,
      factRole: "Role",
      factRoleValue: "Full Stack",
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
      eyebrow: `Selected work — 2022 / ${currentYear}`,
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
      badge: "Full stack developer",
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
      emailPlaceholder: "you@company.com",
      subject: "Subject",
      subjectPlaceholder: "New website for my business",
      message: "Message",
      messagePlaceholder: "What are you looking to build?",
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
      description: `Webdeveloper & designer uit Nederland met ${experienceYears}+ jaar ervaring. Gespecialiseerd in React, TypeScript, Next.js en Laravel — van database-ontwerp tot de laatste CSS-tweak.`,
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
      whatIDo: "Wat ik doe",
      mainStack: "Main stack",
      otherTools: "Overige tools",
      moreDetailsInCv: "Meer details in cv",
      experience: "Ervaring",
      education: "Opleiding",
      title: "Titel",
      factLocation: "Locatie",
      factExperienceValue: `${experienceYears}+ Jaar`,
      factRole: "Rol",
      factRoleValue: "Full Stack",
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
      eyebrow: `Geselecteerd werk — 2022 / ${currentYear}`,
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
      badge: "Full stack developer",
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
      emailPlaceholder: "jij@bedrijf.com",
      subject: "Onderwerp",
      subjectPlaceholder: "Nieuwe website voor mijn bedrijf",
      message: "Bericht",
      messagePlaceholder: "Wat wil je laten bouwen?",
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
