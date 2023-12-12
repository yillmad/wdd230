const darkIcon = document.querySelector("#dark-icon");
const darkHero1 = document.querySelector("#hero1");
const darkHero2 = document.querySelector("#hero2");

darkIcon.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains("dark-theme")){
        darkIcon.src = "images/sun.webp";

        darkHero1.querySelector('source:nth-child(1)').srcset = "images/hero-dark-small.webp";
        darkHero1.querySelector('source:nth-child(2)').srcset = "images/hero-dark-med.webp";
        darkHero1.querySelector('img').src = "images/hero-dark-large.webp";

        darkHero2.querySelector('source:nth-child(1)').srcset = "images/hero-2-dark-small.webp";
        darkHero2.querySelector('source:nth-child(2)').srcset = "images/hero-2-dark-med.webp";
        darkHero2.querySelector('img').src = "images/hero-2-dark-large.webp";
    }else{
        darkIcon.src = "images/moon.webp";

        darkHero1.querySelector('source:nth-child(1)').srcset = "images/hero-small.webp";
        darkHero1.querySelector('source:nth-child(2)').srcset = "images/hero-med.webp";
        darkHero1.querySelector('img').src = "images/hero-large.webp";

        darkHero2.querySelector('source:nth-child(1)').srcset = "images/hero-2-small.webp";
        darkHero2.querySelector('source:nth-child(2)').srcset = "images/hero-2-med.webp";
        darkHero2.querySelector('img').src = "images/hero-2-large.webp";
    }
});