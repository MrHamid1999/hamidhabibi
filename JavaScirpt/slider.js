
// these codes are controling hidden side menu that will appeare after clicking on menu icon 
let menuIcon = document.querySelector(".top-menu-wrapper>li");
let hiddenMenu = document.querySelector(".sidebar-wrapper");
menuIcon.addEventListener("click" , () => {
    hiddenMenu.style.display = "flex";
})
let colsingIcon = document.querySelector(".sidebar-wrapper > li");
colsingIcon.addEventListener("click" , () => {
    hiddenMenu.style.display = "none";
})


// hidden sidebar on mobile
// scrolling buttons using if else
let hiddenBtns = document.querySelectorAll(".h-item");
Array.from(hiddenBtns).forEach(btn => {
    btn.addEventListener("click" , e => {
        hiddenMenu.style.display = "none";
        const about = document.querySelector(".about-wrapper");
        const projects = document.querySelector(".projects-wrapper");
        const contact = document.querySelector(".contact-wrapper");
        const item = e.target;
        if (item.classList.contains("h-home")) {
            window.scrollTo({top:0 , behavior:"smooth"})
        } else if(item.classList.contains("h-about")){
            about.scrollIntoView({top:0, behavior:'smooth'})
        } else if(item.classList.contains("h-projects")) {
            projects.scrollIntoView({top : 0 , behavior:"smooth"})
        } else {
            contact.scrollIntoView({top:0 , behavior:"smooth"})
        }
    })
})

// top-menu scrolling states
// using if else
let topBtns = document.querySelectorAll(".item");
Array.from(topBtns).forEach( btn => {
    btn.addEventListener("click" , e => {
        const about = document.querySelector(".about-wrapper");
        const projects = document.querySelector(".projects-wrapper");
        const contact = document.querySelector(".contact-wrapper");
        const item = e.target;
        if (item.classList.contains("home")) {
            window.scrollTo({top:0 , behavior:"smooth"})
        } else if(item.classList.contains("about")){
            about.scrollIntoView({top:0, behavior:'smooth'})
        } else if(item.classList.contains("projects")) {
            projects.scrollIntoView({top : 0 , behavior:"smooth"})
        } else {
            contact.scrollIntoView({top:0 , behavior:"smooth"})
        } 
        item.classList.add("clicked");
        Array.from(topBtns).forEach( w => {
            if (w !== btn) {
                w.classList.remove("clicked")
            }
        })
    })
})