import gamepadsmoll from "@/app/assets/images/gamepad.jpg";
import gamepadBig from "@/app/assets/images/gamepad@2x.jpg";
import politiciansSmall from "@/app/assets/images/politicians.jpg";
import politiciansBig from "@/app/assets/images/politicians@2x.png";
import oldCarSmall from "@/app/assets/images/old-car.jpg";
import oldCarBig from "@/app/assets/images/old-car@2x.jpg";
import fashionSmall from "@/app/assets/images/fashion.jpg";
import fashionBig from "@/app/assets/images/fashion@2x.jpg";

export const MAIN_STORY = {
  id: "a",
  title:
    "Estudio: Los videojuegos mejoran los reflejos y el pensamiento crítico",
  image: {
    srcSmall: gamepadsmoll,
    srcBig: gamepadBig,
    alt: "Un gamepad de XBox, mostrado con iluminación dramática",
  },
  location: "San Francisco",
  abstract: `Anthony Vega, de 24 años, disfrutaba matando zombis, pero no se daba cuenta de que esas habilidades lo estaban preparando para trabajar en el siglo XXI. Resulta que juegos como Super Mario Brothers y Mega Zombie Bash 2099 tienen una sorprendente correlación con habilidades demandadas como el razonamiento crítico y el pensamiento abstracto.

Investigadores del grupo de reflexión Bestcap Innovations en San Francisco postulan que el tiempo dedicado a jugar videojuegos puede ser productivo, con moderación. La práctica activa puede mejorar los reflejos, habilidades que serán útiles independientemente de tu visión del futuro. Incluso en caso de un apocalipsis zombi, el tiempo dedicado a Mega Zombie Bash 2099 debería tener un impacto poderoso.

No todos lo ven de la misma manera, sin embargo. David Davidson Sr., profesor en la Universidad LIT, dice a The Grid que cualquier beneficio se ve eclipsado por el aislamiento social causado por largas sesiones de juego, solo en un sótano oscuro. “Mi gato mejora sus reflejos saltando sobre la mesa del comedor y comiendo mis palitos de pescado, ¡pero no celebro ese comportamiento!”. Cabe señalar que el Dr. Davidson no tiene un gato.

En 1996, los primeros investigadores de videojuegos descubrieron que los jugadores de Pac-Man tenían un 12% más de probabilidades de ser admitidos en la universidad, pero un 31% más de probabilidades de abandonar. Esto sugiere que, como el famoso velocista Roger Bannister, los jugadores de videojuegos sobresalen en ráfagas rápidas de actividad, pero tienen dificultades con el esfuerzo sostenido a largo plazo.

Más de 8 mil millones de personas en todo el mundo juegan videojuegos, ya sea de manera recreativa o profesional.`,
};

export const SECONDARY_STORIES = [
  {
    id: "b",
    title: "Politicians scramble as court overrules invalid legislation",
    image: {
      srcSmall: politiciansSmall,
      srcBig: politiciansBig,
      alt: "Lots of white men in suits listen apathetically to a presentation",
    },
    abstract: `In a surprising judgment that surprised no one, the New Amsterdam court of appeals finds Bill 234 unconstitutional, overturning one of the Modern Sovereign party's core legislative achievements. Now, lawmakers are working furiously to rewrite the law before the Royal Ascent next month.`,
  },
  {
    id: "c",
    title: "Vintage cars fetch a premium as car industry shifts gears",
    image: {
      srcSmall: oldCarSmall,
      srcBig: oldCarBig,
      alt: "A vintage old Beetle (car), orange and with signs of wear",
    },
    abstract: `In a Landsdowne auction, a vintage 1900s beetle sold “as-is” for ȿ120,000, shattering expectations and records alike. As the automotive industry focuses on ALVs (Autonomous Levitated Vehicles), some enthusiasts are paying big bucks for a more traditional driving experience.`,
  },
  {
    id: "d",
    title:
      "This season’s hottest fashions unveiled amidst designer controversy",
    image: {
      srcSmall: fashionSmall,
      srcBig: fashionBig,
      alt: "A stylish woman carries a dozen shopping bags",
    },
    abstract: `Ludish Atvalatashia was in his 50s when he launched his first couture line. Famously, he worked as an engineer for Blue Rocket, and learned that many of his inventions were quite eye-catching on the runway. This week, though, whistleblowers from within his agency have revealed the toxic nature of their work environment.`,
  },
];

export const OPINION_STORIES = [
  {
    id: "o-a",
    author: "Stephen Abebe",
    avatar: "/images/avatar-stephen-abebe.jpg",
    title:
      "¡Los humanos necesitan agua para sobrevivir, y tus plantas en maceta también!",
  },
  {
    id: "o-b",
    author: "Mario DeLuciano",
    avatar: "/images/avatar-mario-deluciano.jpg",
    title: "¡Deportes! ¿El secreto para ganar en grande?",
  },
  {
    id: "o-c",
    author: "Alice Smith",
    avatar: "/images/avatar-alice-smith.jpg",
    title: "Por qué nunca volveré a comprar comestibles en persona",
  },
  {
    id: "o-d",
    author: "Rocko Pierce Stanley",
    avatar: "/images/avatar-rocko-pierce-stanley.jpg",
    title: "Predicción: La música disco volverá, con venganza",
  },
];

export const MARKET_DATA = [
  {
    tickerSymbol: "AAPL",
    exchangeName: "NASDAQ",
    percentChange: 4.5,
  },
  {
    tickerSymbol: "AMC",
    exchangeName: "NYSE",
    percentChange: 7.9,
  },
  {
    tickerSymbol: "ENB",
    exchangeName: "TSE",
    percentChange: -12.4,
  },
  {
    tickerSymbol: "GOOG",
    exchangeName: "NASDAQ",
    percentChange: 8.1,
  },
  {
    tickerSymbol: "AMZN",
    exchangeName: "NASDAQ",
    percentChange: -6.6,
  },
  {
    tickerSymbol: "MSFT",
    exchangeName: "NASDAQ",
    percentChange: -1.2,
  },
];

export const SPORTS_STORIES = [
  {
    id: "s-a",
    image: {
      src: "/images/habs.jpg",
      alt: "El portero de los Montreal Canadiens, Carey Price, cubriendo su red",
    },
    title: "Los Montreal Canadiens esperan ajustar cuentas en Las Vegas",
  },
  {
    id: "s-b",
    image: {
      src: "/images/bicycles.jpg",
      alt: "Muchos hombres en lindos trajes a juego montando bicicletas",
    },
    title:
      "En un movimiento sorpresa, el Tour de Francia se traslada a Bélgica",
  },
  {
    id: "s-c",
    image: {
      src: "/images/football.jpg",
      alt: "Un jugador de fútbol corre con el balón, mientras es perseguido por otro jugador",
    },
    title:
      "Los Texas Giants logran una victoria tras un touchdown en el último minuto",
  },
  {
    id: "s-d",
    image: {
      src: "/images/decathlon.jpg",
      alt: "Mujeres corriendo en una pista de carreras",
    },
    title: "El sorprendente resultado de este decatlón de verano",
  },
  {
    id: "s-3",
    image: {
      src: "/images/coach.jpg",
      alt: "Un entrenador de fútbol coloca conos en un campo",
    },
    title: "Detrás de escena: entrenando a un equipo de la liga infantil",
  },
];
