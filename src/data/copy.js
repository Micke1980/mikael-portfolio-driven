import spotifyClone from "../assets/Linkedin-spotify klon@2x.jpg";
import orderSumCard from "../assets/Linkedin-best-app - v2@2x.jpg";
import passGen from "../assets/Linkedin-pw-gen-v2.jpg";
import klarna from "../assets/Linkedin-klarna@2x.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import micHero from "../assets/mic-hero.png";

export const COPY = {
  hero: {
    title: "Bygger innovativa lösningar som levererar resultat",
    subtitle:
      "Jag utvecklar användarvänliga system som effektiviserar logistik och förbättrar kundupplevelsen utan krångliga arbetsflöden.",
    cta1: {
      text: "TA KONTAKT",
      callback: () => {
        window.open(
          "https://www.linkedin.com/in/mikael-tuvesson-381129137",
          "_blank"
        );
      },
    },
    cta2: {
      text: "SE PROJEKT",
      to: "/#projects",
    },
    statistic1: "1 000+ timmar kodat",
    statistic2: "Certifierad webbutvecklare",
  },
  aboutMe: {
    title: "Mikael Tuvesson",
    subtitle:
      "Jag hjälper transport- och logistikföretag att optimera sina digitala processer och öka effektiviteten utan att störa den dagliga verksamheten.",
    cta: {
      text: "TA KONTAKT",
      callback: () => {
        window.open(
          "https://www.linkedin.com/in/mikael-tuvesson-381129137",
          "_blank"
        );
      },
    },
    statistics: [
      { statistic: "1 000 +", text: "Timmar kodat" },
      { statistic: "10 +", text: "Projekt byggda" },
    ],
    profilePicture: micHero,
     },
  projects: [
    {
      img: spotifyClone,
      title: "Spotify Klon",
      listOfTechStack: ["React", "Node", "API"],
      description: `A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/Micke1980/tsm-spotify" },
        { Icon: OpenInNewIcon, href: "https://tsm-spotify.vercel.app/" },
      ],
      rightAlign: true,
    },
    {
      img: orderSumCard,
      title: "Beställningskortet",
      listOfTechStack: ["CSS", "HTML", "Responsivitet"],
      description: `Det här projektet är ett perfekt exempel på hur jag kan bidra i roller som Frontend Developer, UI/UX Developer, eller Web Developer i organisationer som värdesätter detaljerad och interaktiv design.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/Micke1980/Bestallningskort" },
        { Icon: OpenInNewIcon, href: "https://bestallningskortet.netlify.app/" },
      ],
      rightAlign: false,
    },
    {
      img: passGen,
      title: "Password generator",
      listOfTechStack: ["Javascript", "CSS", "HTML", "Responsivitet"],
      description: `Denna lösenordsgeneratorapp är en bra illustration av hur jag kan bidra till roller som Frontend Developer, UI/UX Developer eller Software Developer där säkerhet och användarvänlighet är prioriterat.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/Micke1980/Password-Generator" },
        { Icon: OpenInNewIcon, href: "https://guileless-pothos-325484.netlify.app/" },
      ],
      rightAlign: true,
    },
    {
      img: klarna,
      title: "Klarna Checkout",
      listOfTechStack: ["API", "Node", "API", "Express"],
      description: `Jag har byggt en webbtjänst som integrerar Klarna Checkout API, utvecklad med Node.js och Express. Projektet inkluderar autentiska API-anrop för att skapa en fungerande checkout-lösning och simulera en verklig köpprocess med produkter hämtade från FakeStore API.`,
      links: [
        { Icon: GitHubIcon, href: "https://github.com/Micke1980/tsm-klarna-checkout" },
        { Icon: OpenInNewIcon, href: "https://tsm-klarna-checkout.vercel.app/" },
      ],
      rightAlign: false,
    },
  ],
  reviews: [
    {
      author: "John Doe",
      reviewText: `Mikael expertise in page speed optimization has greatly improved our website's performance. Our conversions have increased by 20% since working with him.`,
      img: micHero,
      title: "Head of Cool Stuff",
    },
  ],
  contact: {
    title: "Nå ut till mig på Linkedin!",
    subtitle:
      "Vill du samarbeta eller veta mer om mina projekt? Kontakta mig gärna på LinkedIn – jag ser fram emot att höra från dig!",
    cta: {
      text: "TA KONTAKT",
      callback: () =>
        window.open(
          "https://www.linkedin.com/in/mikael-tuvesson-381129137",
          "_blank"
        ),
    },
  },
};