const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links-1');
    const navLinks = document.querySelectorAll('.nav-links-1 li');
    
    burger.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
         navLinks.forEach((link, index) =>{
             if (link.style.animation) {
                 link.style.animation = ''
             } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index/7 +0.4}s`;
             }
         });
        //burger toggle Animation
        burger.classList.toggle('toggle');
    });

}
//all the functions are called here
navSlide();