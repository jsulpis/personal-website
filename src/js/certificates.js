import Vue from "vue/dist/vue";
import { MDCRipple } from "@material/ripple";

document.querySelectorAll(".mdc-button").forEach(function(elt, index, listObj) {
  new MDCRipple(elt);
});

new Vue({
  el: "#certificates__content",
  data: {
    categories: [
      {
        name: "Développement Web",
        courses: [
          {
            name: "Apprenez à créer votre site web avec HTML5 et CSS3"
          },
          {
            name: "Comprendre le Web"
          },
          {
            name: "Apprenez à coder avec JavaScript"
          },
          {
            name: "Prenez en main Bootstrap"
          },
          {
            name: "Créez des pages web interactives avec JavaScript"
          },
          {
            name: "Introduction à jQuery"
          },
          {
            name: "Concevez votre site web avec PHP et MySQL"
          },
          {
            name: "Créez votre premier site avec WordPress"
          },
          {
            name: "Découvrez les solutions CMS"
          },
          {
            name: "Les clés pour réussir son référencement web"
          },
          {
            name: "Utilisez des API REST dans vos projets web"
          },
          {
            name: "Des applications ultra-rapides avec Node.js"
          }
        ]
      },
      {
        name: "Développement Android",
        courses: [
          {
            name: "Développez des applications robustes et fiables"
          }
        ]
      },
      {
        name: "Programmation",
        courses: [
          {
            name: "Démarrez votre projet avec Python"
          },
          {
            name: "Découvrez la programmation orientée objet avec Python"
          },
          {
            name: "Testez votre projet avec Python"
          },
          {
            name: "Perfectionnez-vous en Python"
          }
        ]
      },
      {
        name: "Gestion de projet",
        courses: [
          {
            name: "Initiez-vous à la gestion de projet agile"
          },
          {
            name: "Gérez votre projet informatique facilement !"
          }
        ]
      },
      {
        name: "Cybersécurité",
        courses: [
          {
            name: "Protégez l’ensemble de vos données sur votre ordinateur"
          },
          {
            name: "Échangez par e-mail en toute sécurité"
          },
          {
            name: "Protégez l’ensemble de vos communications sur Internet"
          },
          {
            name: "Apprenez à naviguer en sécurité sur Internet"
          },
          {
            name: "Surfez incognito sur Internet avec le réseau Tor"
          }
        ]
      },
      {
        name: "UX Design",
        courses: [
          {
            name: "Améliorez l'impact de vos présentations"
          }
        ]
      },
      {
        name: "Autres",
        courses: [
          {
            name: "Découvrez le cloud avec Amazon Web Services"
          },
          {
            name: "Gérez votre code avec Git et GitHub"
          },
          {
            name: "Apprenez à apprendre"
          },
          {
            name: "Reprenez le contrôle à l'aide de Linux !"
          },
          {
            name: "Mettez en place un système de veille informationnelle"
          },
          {
            name: "Comprendre le Bitcoin et la Blockchain"
          }
        ]
      }
    ]
  }
});

// Create collapsible behaviour
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