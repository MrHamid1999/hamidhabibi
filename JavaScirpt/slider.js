
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
// scrolling events 
// getting scroll height and adding diffrent states in specefic situation
window.addEventListener("scroll" ,() => {
    let topSliders = document.querySelectorAll(".item");
    let homePage = document.querySelector(".home-wrapper");
    let aboutPage = document.querySelector(".about-wrapper");
    let projectPage = document.querySelector(".projects-wrapper");
    let techPage = document.querySelector(".tech-info-wrapper");
    homePage =homePage.offsetHeight;
    aboutPage = aboutPage.offsetHeight + homePage +techPage.scrollHeight -50 ;
    projectPage = projectPage.offsetHeight + aboutPage;
    const height = window.scrollY;
    if (height <= homePage) {
        topSliders[0].classList.add("clicked");
        topSliders[1].classList.remove("clicked");
        topSliders[2].classList.remove("clicked");
        topSliders[3].classList.remove("clicked");
    } if (height >= homePage) {
        topSliders[0].classList.remove("clicked");
        topSliders[1].classList.add("clicked");
        topSliders[2].classList.remove("clicked");
        topSliders[3].classList.remove("clicked");
    } if (height >= aboutPage) {
        topSliders[1].classList.remove("clicked");
        topSliders[0].classList.remove("clicked");
        topSliders[2].classList.add("clicked");
        topSliders[3].classList.remove("clicked");
    } if (height >= projectPage) {
        topSliders[0].classList.remove("clicked");
        topSliders[1].classList.remove("clicked");
        topSliders[2].classList.remove("clicked");
        topSliders[3].classList.add("clicked");   
    }

})

// projects buttons control
// 1-getting the target button
// 2-on click adding up the value 
// 3-then dividing the value into 5
// 4-then we can change the class of item according to left overs
const projects = document.querySelectorAll(".project");
const nextBtns = document.querySelectorAll(".right-one");
const prevBtns = document.querySelectorAll(".left-one");
let counter = 1;
let finalNum;
nextBtns.forEach(btn => {
    btn.addEventListener("click" , ()=>{
        // counter++;
        projects.forEach(project => {
                let secClass = project.classList[1];
                finalNum = parseInt(secClass[8]) + counter;
                if(finalNum >=5)
                {
                    finalNum = finalNum % 5;
                }
                project.classList.replace(secClass, `project-${finalNum}`)
        })
    })
})
prevBtns.forEach(btn => {
    btn.addEventListener("click" , ()=>{
        // counter++;
        projects.forEach(project => {
                let secClass = project.classList[1];
                finalNum = parseInt(secClass[8]) - counter;
                if(finalNum <=-1)
                {
                    finalNum = (finalNum +5) % 5;
                }
                project.classList.replace(secClass, `project-${finalNum}`)
        })
    })
})
projects.forEach(project => {
    project.addEventListener("click" , e => {
        const item = e.target.parentElement;
        // console.log(item);
        if (item.classList[1] === "project-2") {
            
        }else{
            e.preventDefault()
        }
    })
});