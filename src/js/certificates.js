import Vue from "vue/dist/vue";
import { MDCRipple } from "@material/ripple";

document.querySelectorAll(".mdc-button").forEach(function(elt, index, listObj) {
  new MDCRipple(elt);
});

var rawJsonContent = [
  {
    "category": "Développement Web",
    "institution": "Openclassrooms",
    "name": "Apprenez à créer votre site web avec HTML5 et CSS3 ",
    "course_url": "https://openclassrooms.com/courses/apprenez-a-creer-votre-site-web-avec-html5-et-css3",
    "certificate_url": "https://openclassrooms.com/course-certificates/1911693166"
  },
  {
    "category": "Développement Web",
    "institution": "Openclassrooms",
    "name": "Comprendre le Web",
    "course_url": "https://openclassrooms.com/courses/comprendre-le-web",
    "certificate_url": "https://openclassrooms.com/course-certificates/2149203273"
  },
  {
    "category": "Développement Web",
    "institution": "Openclassrooms",
    "name": "Apprenez à coder avec JavaScript",
    "course_url": "https://openclassrooms.com/courses/apprenez-a-coder-avec-javascript",
    "certificate_url": "https://openclassrooms.com/course-certificates/3698932718"
  },
  {
    "category": "Développement Web",
    "institution": "Openclassrooms",
    "name": "Prenez en main Bootstrap",
    "course_url": "https://openclassrooms.com/courses/prenez-en-main-bootstrap",
    "certificate_url": ""
  },
  {
    "category": "Développement Web",
    "institution": "Openclassrooms",
    "name": "Créez des pages web interactives avec JavaScript",
    "course_url": "https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript",
    "certificate_url": ""
  },
  {
    "category": "Développement Web",
    "institution": "Openclassrooms",
    "name": "Introduction à jQuery",
    "course_url": "https://openclassrooms.com/courses/introduction-a-jquery-4",
    "certificate_url": ""
  },
  {
    "category": "Développement Web",
    "institution": "Openclassrooms",
    "name": "Concevez votre site web avec PHP et MySQL",
    "course_url": "https://openclassrooms.com/courses/concevez-votre-site-web-avec-php-et-mysql",
    "certificate_url": "https://openclassrooms.com/course-certificates/7070337510"
  },
  {
    "category": "Développement Web",
    "institution": "Openclassrooms",
    "name": "Créez votre premier site avec WordPress",
    "course_url": "https://openclassrooms.com/courses/creez-votre-site-avec-wordpress",
    "certificate_url": "https://openclassrooms.com/course-certificates/2803290502"
  },
  {
    "category": "Développement Web",
    "institution": "Openclassrooms",
    "name": "Découvrez les solutions CMS",
    "course_url": "https://openclassrooms.com/courses/decouvrez-les-solutions-cms",
    "certificate_url": ""
  },
  {
    "category": "Développement Web",
    "institution": "Openclassrooms",
    "name": "Les clés pour réussir son référencement web",
    "course_url": "https://openclassrooms.com/courses/les-cles-pour-reussir-son-referencement-web",
    "certificate_url": "https://openclassrooms.com/course-certificates/5894704277"
  },
  {
    "category": "Développement Web",
    "institution": "Openclassrooms",
    "name": "Utilisez des API REST dans vos projets web",
    "course_url": "https://openclassrooms.com/courses/utilisez-des-api-rest-dans-vos-projets-web",
    "certificate_url": ""
  },
  {
    "category": "Développement Web",
    "institution": "Openclassrooms",
    "name": "Des applications ultra-rapides avec Node.js",
    "course_url": "https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js",
    "certificate_url": ""
  },
  {
    "category": "Développement Web",
    "institution": "Tuto",
    "name": "Créer son CV One Page en ligne",
    "course_url": "https://fr.tuto.com/photoshop/gratuit-creer-son-cv-one-page-en-ligne-photoshop,81941.html",
    "certificate_url": "https://fr.tuto.com/cert-528551-gt"
  },
  {
    "category": "Développement Web",
    "institution": "Tuto",
    "name": "Boostez votre CSS avec Sass",
    "course_url": "https://fr.tuto.com/css/boostez-votre-css-avec-sass-css,50011.html",
    "certificate_url": "https://fr.tuto.com/cert-262528-gt"
  },
  {
    "category": "Développement Android",
    "institution": "Openclassrooms",
    "name": "Développez des applications robustes et fiables",
    "course_url": "https://openclassrooms.com/courses/developpez-des-applications-robustes-et-fiables",
    "certificate_url": ""
  },
  {
    "category": "Programmation",
    "institution": "Openclassrooms",
    "name": "Démarrez votre projet avec Python",
    "course_url": "https://openclassrooms.com/courses/demarrez-votre-projet-avec-python",
    "certificate_url": ""
  },
  {
    "category": "Programmation",
    "institution": "Openclassrooms",
    "name": "Découvrez la programmation orientée objet avec Python",
    "course_url": "https://openclassrooms.com/courses/decouvrez-la-programmation-orientee-objet-avec-python",
    "certificate_url": ""
  },
  {
    "category": "Programmation",
    "institution": "Openclassrooms",
    "name": "Testez votre projet avec Python",
    "course_url": "https://openclassrooms.com/courses/testez-un-projet-python",
    "certificate_url": ""
  },
  {
    "category": "Programmation",
    "institution": "Openclassrooms",
    "name": "Perfectionnez-vous en Python",
    "course_url": "https://openclassrooms.com/courses/manipulez-des-donnees-avec-python-1",
    "certificate_url": ""
  },
  {
    "category": "Gestion de projet",
    "institution": "Openclassrooms",
    "name": "Initiez-vous à la gestion de projet agile",
    "course_url": "https://openclassrooms.com/courses/initiez-vous-a-la-gestion-de-projet-agile",
    "certificate_url": ""
  },
  {
    "category": "Gestion de projet",
    "institution": "Openclassrooms",
    "name": "Gérez votre projet informatique facilement !",
    "course_url": "https://openclassrooms.com/courses/gerez-votre-projet-informatique-facilement",
    "certificate_url": ""
  },
  {
    "category": "Cybersécurité",
    "institution": "Openclassrooms",
    "name": "Protégez l’ensemble de vos données sur votre ordinateur",
    "course_url": "https://openclassrooms.com/courses/protegez-l-ensemble-de-vos-donnees-sur-votre-ordinateur-1",
    "certificate_url": "https://openclassrooms.com/course-certificates/4381882871"
  },
  {
    "category": "Cybersécurité",
    "institution": "Openclassrooms",
    "name": "Échangez par e-mail en toute sécurité",
    "course_url": "https://openclassrooms.com/courses/echangez-par-e-mail-en-toute-securite",
    "certificate_url": "https://openclassrooms.com/course-certificates/1221285701"
  },
  {
    "category": "Cybersécurité",
    "institution": "Openclassrooms",
    "name": "Protégez l’ensemble de vos communications sur Internet",
    "course_url": "https://openclassrooms.com/courses/protegez-l-ensemble-de-vos-communications-sur-internet-1",
    "certificate_url": "https://openclassrooms.com/course-certificates/7442195845"
  },
  {
    "category": "Cybersécurité",
    "institution": "Openclassrooms",
    "name": "Apprenez à naviguer en sécurité sur Internet",
    "course_url": "https://openclassrooms.com/courses/apprenez-a-naviguer-en-securite-sur-internet",
    "certificate_url": "https://openclassrooms.com/course-certificates/7025441840"
  },
  {
    "category": "Cybersécurité",
    "institution": "Openclassrooms",
    "name": "Surfez incognito sur Internet avec le réseau Tor",
    "course_url": "https://openclassrooms.com/courses/surfez-incognito-sur-internet-avec-le-reseau-tor",
    "certificate_url": ""
  },
  {
    "category": "UX Design",
    "institution": "Openclassrooms",
    "name": "Améliorez l’impact de vos présentations",
    "course_url": "https://openclassrooms.com/courses/ameliorez-l-impact-de-vos-presentations",
    "certificate_url": ""
  },
  {
    "category": "Autre",
    "institution": "Openclassrooms",
    "name": "Gérez votre code avec Git et GitHub",
    "course_url": "https://openclassrooms.com/courses/gerer-son-code-avec-git-et-github",
    "certificate_url": "https://openclassrooms.com/course-certificates/1069437307"
  },
  {
    "category": "Autre",
    "institution": "Openclassrooms",
    "name": "Comprendre le Bitcoin et la Blockchain",
    "course_url": "https://openclassrooms.com/courses/comprendre-le-bitcoin-et-la-blockchain",
    "certificate_url": ""
  },
  {
    "category": "Autre",
    "institution": "Openclassrooms",
    "name": "Apprenez à apprendre",
    "course_url": "https://openclassrooms.com/courses/apprenez-a-apprendre",
    "certificate_url": ""
  },
  {
    "category": "Autre",
    "institution": "Openclassrooms",
    "name": "Mettez en place un système de veille informationnelle",
    "course_url": "https://openclassrooms.com/courses/mettez-en-place-un-systeme-de-veille",
    "certificate_url": ""
  },
  {
    "category": "Autre",
    "institution": "Openclassrooms",
    "name": "Découvrez le cloud avec Amazon Web Services",
    "course_url": "https://openclassrooms.com/courses/decouvrez-le-cloud-avec-amazon-web-services",
    "certificate_url": ""
  },
  {
    "category": "Autre",
    "institution": "Openclassrooms",
    "name": "Reprenez le contrôle à l'aide de Linux !",
    "course_url": "https://openclassrooms.com/courses/reprenez-le-controle-a-l-aide-de-linux",
    "certificate_url": ""
  }
];

// Parse the raw json to have the data structure we want
var parsedJson = [];
rawJsonContent.forEach(function(elem) {
  var categoryExists = false;
  parsedJson.forEach(function(obj) {
    if (obj.name == elem.category) {
      obj.courses.push(elem);
      categoryExists = true;
    }
  });
  if (!categoryExists) {
    parsedJson.push({
      name: elem.category,
      courses: [elem]
    });
  }
});

// Fill the section with Vue
var app = new Vue({
  el: "#certificates__content",
  data: {
    categories: []
  },
  methods: {
    redirect: function(url) {
      if (url != "") {
        location.href = url;
      }
    }
  }
});
app.categories = parsedJson;

// Create collapsible behaviour after the vue has been updated (nextTick)
Vue.nextTick(function() {
  var coll = document.getElementsByClassName("collapsible");
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
