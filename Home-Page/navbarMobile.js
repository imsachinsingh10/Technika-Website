const navSlideMobile = () => {
    const burger = document.querySelector('.burgerMobile');
    const nav = document.querySelector('.Mnav-links-1');
    const navLinks = document.querySelectorAll('.Mnav-links-1 li');
    
    if (burger) {
        burger.addEventListener('click', () => {
            //toggle Nav
            nav.classList.toggle('Mnav-active');
    
            //Animate Links
             navLinks.forEach((link, index) =>{
                 if (link.style.animation) {
                     link.style.animation = ''
                 } else {
                    link.style.animation = `MnavLinkFade 0.4s ease forwards ${index/7 +0.4}s`;
                 }
             });
            //burger toggle Animation
            burger.classList.toggle('Mtoggle');
        });
    }

}
//all the functions are called here
navSlideMobile();