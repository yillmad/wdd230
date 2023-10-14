const darkIcon = document.querySelector("#dark-icon");

darkIcon.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains("dark-theme")){
        darkIcon.src = "images/sun.png";
    }else{
        darkIcon.src = "images/moon.png";
    }
});