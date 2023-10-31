const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};


/* typed js*/
const SecondText=document.querySelector('.second-text')
const TextFunction=()=> {
    setTimeout(()=> {
        SecondText.innerHTML=" A Phototographer"
    },0)
    setTimeout(()=> {
        SecondText.innerHTML="A Freelancer"
    },4000)
    setTimeout(()=> {
        SecondText.innerHTML="A Desaigner"
    },8000)
}
TextFunction()
setInterval(TextFunction,12000)
