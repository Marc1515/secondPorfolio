import learrnAppImg from "./../../assets/img/learrnApp.png";
import trailersAppImg from "./../../assets/img/trailersApp.png";
import weatherAppImg from "./../../assets/img/weatherApp.png";
import montsiaClinicAppImg from "./../../assets/img/montsiaClinicApp.png";
import annaAppImg from "./../../assets/img/annaApp.png";
import euromafeAppImg from "./../../assets/img/euromafeApp.png";
import gifsAppImg from "./../../assets/img/gifsApp.png";
import countriesApp from "./../../assets/img/countriesApp.png";

import htmlSvgIMG from "./../../assets/img/techSVG/html5-color.svg";
import cssSvgIMG from "./../../assets/img/techSVG/css3-color.svg";
import angularSvgIMG from "./../../assets/img/techSVG/angular-color.svg";
import reactSvgIMG from "./../../assets/img/techSVG/react-color.svg";
import javaScriptSvgIMG from "./../../assets/img/techSVG/javascript-color.svg";
import typeScriptSvgIMG from "./../../assets/img/techSVG/typescript-color.svg";
import wordpressSvgIMG from "./../../assets/img/techSVG/wordpress-color.svg";
import wooSvgIMG from "./../../assets/img/techSVG/woo-color.svg";


const PortfolioQuestions = [
  {
    id: 1,
    nombre: "Countries App",
    githubURL: "https://github.com/Marc1515/CountriesApp",
    pageURL: "https://countries.marcespana.com/",
    img: countriesApp,
    techBuild: {
      angularSVG: angularSvgIMG,
      htmlSVG: htmlSvgIMG,
      cssSVG: cssSvgIMG,
      typeScriptSvg: typeScriptSvgIMG,
    }
  },
  {
    id: 2,
    nombre: "Gifs App",
    githubURL: "https://github.com/Marc1515/gifs-app",
    pageURL: "https://gifs.marcespana.com",
    img: gifsAppImg,
    techBuild: {
      angularSVG: angularSvgIMG,
      htmlSVG: htmlSvgIMG,
      cssSVG: cssSvgIMG,
      typeScriptSvg: typeScriptSvgIMG,
    }
  },
  {
    id: 3,
    nombre: "Learn English App",
    githubURL: "https://github.com/Marc1515/learn-english",
    pageURL: "https://learning.marcespana.com",
    img: learrnAppImg,
    techBuild: {
      htmlSVG: htmlSvgIMG,
      cssSVG: cssSvgIMG,
      reactSVG: reactSvgIMG,
      javaScriptSvg: javaScriptSvgIMG
    }
  },
  {
    id: 4,
    nombre: "Trailers App",
    githubURL: "https://github.com/Marc1515/movieapp-youtube",
    pageURL: "https://trailers.marcespana.com",
    img: trailersAppImg,
    techBuild: {
      htmlSVG: htmlSvgIMG,
      cssSVG: cssSvgIMG,
      reactSVG: reactSvgIMG,
      javaScriptSvg: javaScriptSvgIMG
    }
  },
  {
    id: 5,
    nombre: "Weather App",
    githubURL: "https://github.com/Marc1515/openweather",
    pageURL: "https://theweather.marcespana.com",
    img: weatherAppImg,
    techBuild: {
      htmlSVG: htmlSvgIMG,
      cssSVG: cssSvgIMG,
      reactSVG: reactSvgIMG,
      javaScriptSvg: javaScriptSvgIMG
    }
  },
  {
    id: 6,
    nombre: "Montsia Clinic App",
    githubURL: null,
    pageURL: "https://montsiaclinic.marcespana.com/",
    img: montsiaClinicAppImg,
    techBuild: {
      htmlSVG: htmlSvgIMG,
      cssSVG: cssSvgIMG,
      wordpressSVG: wordpressSvgIMG,
    }
  },
  {
    id: 7,
    nombre: "Tienda Anna App",
    githubURL: null,
    pageURL: "https://anna.marcespana.com/",
    img: annaAppImg,
    techBuild: {
      htmlSVG: htmlSvgIMG,
      cssSVG: cssSvgIMG,
      wordpressSVG: wordpressSvgIMG,
      wooSVG: wooSvgIMG,
    }
  },
  {
    id: 8,
    nombre: "Euromafe App",
    githubURL: null,
    pageURL: "https://euromafe.marcespana.com",
    img: euromafeAppImg,
    techBuild: {
      htmlSVG: htmlSvgIMG,
      cssSVG: cssSvgIMG,
      wordpressSVG: wordpressSvgIMG,
    }
  },
];

export default PortfolioQuestions;
