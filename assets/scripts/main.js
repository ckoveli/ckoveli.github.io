document.querySelectorAll("img").forEach(elem =>{
    elem.addEventListener("contextmenu", (e)=>{e.preventDefault();});
    elem.addEventListener("mousedown", (e)=>{e.preventDefault()});
});

const nav = document.querySelector("nav"),
img = nav.querySelector("img"),
title = document.getElementsByClassName("title")[0],
mode = document.querySelector(".mode"),
sticky = title.offsetTop;

window.onscroll = ()=>{
    if(window.outerWidth<=1150){
        stickyNav();
    }
}
window.onresize =()=>{
    if(window.outerWidth>1150 && nav.querySelector(".ghostNav").classList.contains("stickyNav")){
        notStickyNav();
    }
}

function stickyNav(){
    if(window.pageYOffset >= sticky){
        nav.querySelector(".ghostNav").classList.add("stickyNav");
        img.classList.add("stickyImg");
        img.addEventListener("click", async ()=>{
            window.scroll({top: 0, behavior: "smooth"})
        })
        mode.style.position = "fixed";
        nav.querySelector("h3").classList.add("stickyHidden");
        nav.querySelector("mark").classList.add("stickyHidden");
        nav.querySelector('p').classList.add("stickyHidden");
        nav.querySelector(".info").classList.add("stickyHidden");

        let tmp = 50;

        for(let i=0; i<3; i++){
            nav.getElementsByTagName('i')[i].classList.add("stickyIcon");
            nav.getElementsByTagName('i')[i].style.transform = `translateX(${tmp}px)`;
            tmp+=50;
        }
    }else notStickyNav();
}
function notStickyNav(){
    nav.querySelector(".ghostNav").classList.remove("stickyNav");
    img.classList.remove("stickyImg");
    mode.style.position = "absolute";
    nav.querySelector("h3").classList.remove("stickyHidden");
    nav.querySelector("mark").classList.remove("stickyHidden");
    nav.querySelector('p').classList.remove("stickyHidden");
    nav.querySelector(".info").classList.remove("stickyHidden");

    for(let i=0; i<3; i++){
        nav.getElementsByTagName('i')[i].classList.remove("stickyIcon");
        nav.getElementsByTagName('i')[i].style.transform = "translateX(0)";
    }
}
function switchMode(){
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        document.querySelector(".mode").classList.toggle("darkOn");
        document.querySelector(".circle").classList.remove("circleOn");
        localStorage.removeItem("dark");
    }else{
        document.body.classList.toggle("dark");
        document.querySelector(".mode").classList.toggle("darkOn");
        document.querySelector(".circle").classList.add("circleOn");
        localStorage.setItem("dark", true);
    }
}
function imageView(src, ext, title, link, index){
    document.querySelector(".container").classList.add("backgroundBlur");
    mode.style.display = "none";
    document.querySelector(".image").src = document.body.classList.contains("dark") ? `assets/images/desktop/${src}_dark.${ext}` : `assets/images/desktop/${src}.${ext}`;
    document.querySelector(".pf-desc").querySelector('p').innerHTML = `<a href="${link}">${title}</a>`;
    document.querySelector(".imageView").style.display = "block";

    document.getElementById("leftIndex").innerText = `${index == 0 ? 1 : index-1}`;
    document.getElementById("rightIndex").innerText = `${index == 1 ? 0 : index+1}`;

    document.onkeydown = (e) => switchImage(e.code, false);

    document.querySelector(".imageView").addEventListener("click", (event)=>{
        if(event.target !== document.querySelector(".image") && event.target !== document.querySelector(".ArrowLeft") &&
            event.target !== document.querySelector(".image-right") && event.target !== document.querySelector(".arrow.left") &&
            event.target !== document.querySelector(".arrow.right")) return imageClose();
    }, true)
}
function switchImage(direction){
    if(direction == "ArrowLeft") return document.getElementById(document.getElementById("leftIndex").innerText).click();

    if(direction == "ArrowRight") return document.getElementById(document.getElementById("rightIndex").innerText).click();
}
function imageClose(){
    document.querySelector(".container").classList.remove("backgroundBlur");
    mode.style.display = "block";
    document.querySelector(".image").src = "";
    document.querySelector(".imageView").style.display = "none";
    document.onkeydown = '';
}