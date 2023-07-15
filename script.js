
//hamburgur javascript.

ham=document.querySelector('.hamburger').addEventListener('click',()=>{
    nav=document.querySelector('.navigation');
    u=document.querySelector('.ul');
    l=document.querySelector('.left');
    r=document.querySelector('.right');
   
    
    nav.classList.toggle('h-nav');
    u.classList.toggle('v-nav');
    l.classList.toggle('v-nav');
    r.classList.toggle('v-nav');
})