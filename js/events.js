const header = document.querySelector("header");
const title = document.querySelector("h1");
const links = document.querySelectorAll("header nav a");

window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 10){
        header.style.background="rgba(0,0,0,.4)";
        header.style.fontSize="1em";
        for(let link of links){ link.style.color ="aquamarine";}
    } else {
        header.style.background="transparent";
        title.style.fontSize="2em";
        for(let link of links){ link.style.color ="black";}
    }
    
    if(window.scrollY >= 750){
        document.querySelector("#projects").style.opacity = 1;
    }
})

for(let modal of document.querySelectorAll(".modals")){
    modal.addEventListener("click", ()=>{
        modal.style.left = "-100%";
    })
}
function diplomaDetails(diploma){
    let modal = ".description-modal-" + diploma;
    console.log(modal);
    document.querySelector(".description-modal-" + diploma).style.left = 0;
}
for(let diploma of ["comc","cda", "diw", "poei"]){
    document.querySelector("." + diploma).addEventListener("click", ()=>{
        diplomaDetails(diploma);
    })
}
/*
document.querySelector("table").addEventListener("click", ()=>{
    document.querySelector(".description-modal").style.left = 0;
})
document.querySelector(".description-modal").addEventListener("click", ()=>{
    document.querySelector(".description-modal").style.left = "-100%";
})
    */

document.querySelector(".menu").addEventListener("click", ()=>{
    console.log("click");
    
    document.querySelector("header").classList.toggle("expand");
})