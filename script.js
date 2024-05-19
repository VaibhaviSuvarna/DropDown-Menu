const btn= document.querySelector(".btn-menu");
const menu= document.querySelector(".menu");
let isOpen=false;

btn.addEventListener('click',() =>{
if(isOpen){
    menu.classList.remove('menu-active');
    isOpen=false;
}else{
    menu.classList.add('menu-active');
    isOpen=true;
}
});