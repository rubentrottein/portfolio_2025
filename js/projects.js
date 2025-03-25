const projects = [
    {link:"https://mistertea.fr/eshop", img:"https://mistertea.fr/pro/media/img/portfolio/1.png", name:"Eshop", technologies:"HTML / CSS", description:"Site de vente de carrelage full front-end", functions: ['Pages HTML connectées, pas de back end', 'Animations JS'], type: "static-website"},
    {link:"https://mistertea.fr/zoningExport", img:"https://mistertea.fr/pro/media/img/portfolio/3.png", name:"Vitrine PlayStation 5", technologies:"HTML / CSS", description:"Vitrine de présentation du lancement de la PS5", functions: ['CSS Grid', 'Background vidéo'], type: "static-website"},
    {link:"https://mistertea.fr/natureEmoi", img:"https://mistertea.fr/pro/media/img/portfolio/9.png", name:"NatureEtMoi CSS", technologies:"HTML/CSS", description:"Exercice d'intégration", functions: ['Design One Page Grid', 'Présentation et png to html'], type: "static-website"},
    {link:"https://mistertea.fr/JS_pokemon-battle", img:"https://mistertea.fr/pro/media/img/portfolio/11.png", name:"Exercice JS Pokemon battle ", technologies:"JavaScript", description:"Exercice de jeu en JS Vanilla", functions: ['Système de combat au tour par tour', 'Selection du personnage'], type: "static-website"},
    {link:"https://mistertea.fr/galleryFFSMB", img:"https://mistertea.fr/pro/media/img/portfolio/12.png", name:"Exercice JS Gallerie d'images ", technologies:"JavaScript", description:"Exercice de gallerie JS Vanilla", functions: ['Gallery en full JS vanilla (onepage)', "Affichage de l'apercu au clic"], type: "static-website"},
    {link:"https://mistertea.fr/flashcards", img:"https://mistertea.fr/pro/media/img/portfolio/15.png", name:"Exercice JS Flashcards ", technologies:"JavaScript", description:"Composant flashcard en JS Vanilla", functions: ['Découverte du contenu au clic', "Animation style carte à jouer"], type: "static-website"},
    {link:"https://rubentrottein.github.io/apsaras", img:"https://mistertea.fr/pro/media/img/portfolio/21.png", name:"Les Apsaras", technologies:"HTML / CSS / JavaScript", description:"Site vitrine d'agence web", functions: ['Vitrine classique', "Animations CSS", "Sections complètes", "Portfolio"], type: "static-website"},
    {link:"https://r.trottein.free.fr/annexes/vitrineBienveillance/expo.html", img:"https://mistertea.fr/pro/media/img/portfolio/ratsi.png", name:"Site graphique Exposition Olivier Ratsi", technologies:"CSS / HTML / JS", description:"Site illustré en CSS Pur", functions: ['Navigation au clic', "Animations CSS", "Dessin Vectoriel CSS", "Respect de la charte graphique", "Galeries multimedia"], type: "static-website"},
    {link:"https://pokedex-react-ruben-t.vercel.app/", img:"https://mistertea.fr/pro/media/img/portfolio/14.png", name:"Pokedex React", technologies:"JavaScript / React", description:"Liste Triable depuis l'API Pokedex PokeAPI", functions: ['Design One Page', 'Affichage des stat et recherche par nom et numéro'], type: "dynamic-website"},
    {link:"https://mistertea.fr/troc", img:"https://mistertea.fr/pro/media/img/portfolio/2.png", name:"Troc", technologies:"Php procédural", description:"Site d'annonces", functions: ["Site fonctionnel avec système d'annonces", 'Back office admin pour la gestion des membres'], type: "dynamic-website"},
    {link:"https://mistertea.fr/rgstation", img:"https://mistertea.fr/pro/media/img/portfolio/10.png", name:"RG Station", technologies:"Php procédural", description:"Site de retrogaming", functions: ["Site d'achat de jeux rétro", "Création de collection et API d'évaluation de valeur (wip)"], type: "dynamic-website"},
    {link:"https://mistertea.fr/etoiles", img:"https://mistertea.fr/pro/media/img/portfolio/13.png", name:"La tech dans les étoiles", technologies:"Php procédural", description:"Plate forme de Blogging", functions: ["CRUD d'articles", "back-office et modération des commentaires et articles"], type: "dynamic-website"},
    {link:"https://mistertea.fr/tech", img:"https://mistertea.fr/pro/media/img/portfolio/16.png", name:"tech.la", technologies:"HTML, CSS, JS", description:"Exercice d'intégration", functions: ["Carroussels", "Image de fond aléatoire", "animations css"], type: "static-website"},
    {link:"https://mistertea.fr/minxxer", img:"https://mistertea.fr/pro/media/img/portfolio/17.png", name:"Minxxer", technologies:"HTML, CSS, JS", description:"Exercice d'intégration", functions: ["Site typé réseau social", "animations css"], type: "static-website"},
    {link:"https://mistertea.fr/cozy-breaker", img:"https://mistertea.fr/pro/media/img/portfolio/20.png", name:"Cozy Breaker", technologies:"HTML, CSS, JS", description:"Jeu de casse-brique", functions: ["Menu", "animations css/js", "sauvegarde", "thèmes", "jeu vidéo"], type: "static-website"},
    {link:"https://dan.mistertea.fr", img:"https://mistertea.fr/pro/media/img/portfolio/21.png", name:"Hedgehog School", technologies:"Symfony, Node.js, SQL, MongoDB", description:"Light LMS (Learning Management Software)", functions: ["CRUD d'articles", "Interrogation et management d'API distante"], type: "dynamic-website"},
    {link:"https://mistertea.fr/what-todo", img:"https://mistertea.fr/pro/media/img/portfolio/22.png", name:"WhatTo.do", technologies:"Symfony, SQL", description:"Mémo et réseau social", functions: ["Landing page" , "To-do list", "Réseau social interne", "Back office admin pour la gestion des membres"], type: "dynamic-website"}
]

addProject(projects);
function addProject(projects){
    for(let project of projects){
        let link = document.createElement("a");
        link.href = project.link;
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        img.src = project.img
        let figcaption = document.createElement("figcaption");
        let name = document.createElement("h4");
        name.innerHTML = project.name
        let tech = document.createElement("i");
        tech.innerHTML = project.technologies
        let desc = document.createElement("p");
        desc.innerHTML = project.description
        let functions = document.createElement("ul");
        for(let currentFunction of project.functions){
            let li = document.createElement("li");
            li.innerHTML = currentFunction;
            functions.append(li);
        
        }
        figcaption.append(name, tech, desc, functions);
        figure.append(img, figcaption);
        link.append(figure)
        document.getElementsByClassName(project.type)[0].append(link)
    }

    document.querySelector(".nb-projects").innerHTML = projects.length;
};