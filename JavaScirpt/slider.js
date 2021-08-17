
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
// 4-then we can change the class of item according to remainings
const projects = document.querySelectorAll(".project");
const nextBtns = document.querySelectorAll(".right-one");
const prevBtns = document.querySelectorAll(".left-one");
const lilBtns = document.querySelectorAll(".small-slider-wrapper .slider");
let counter = 1;
let finalNum;
nextBtns.forEach(btn => {
    btn.addEventListener("click" , ()=>{
        
        projects.forEach(project => {
                let secClass = project.classList[1];
                finalNum = parseInt(secClass[8]) + counter;
                if(finalNum >=5)
                {
                    finalNum = finalNum % 5;
                }
                project.classList.replace(secClass, `project-${finalNum}`);
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
// while user clickes on projects 
// if(is shown project ){do nothing}
// if(is back project ){disable the link}
// and bring that project forward.in order to do that :
// need to get the class number and add it up to a certain number till the number equals to 2

projects.forEach(project => {
    project.addEventListener("click" , e => {
        const item = e.target.classList[1];
        console.log(e.target.parentElement)
        if (item === "project-2") {
            // console.log(e.target.parentElement);
        }else{
            e.preventDefault();
            let result;
           let carousel= setInterval(() => {       
                    if (e.target.classList.contains("project-2")) {
                        clearInterval(carousel)
                    } else {

                        projects.forEach(p => {
                            if(parseInt(item[8]) > 2)
                            {
                                result = parseInt(p.classList[1][8]) - 1;
                            }else{
                                result = parseInt(p.classList[1][8]) + 1;
                            }
                            if (result >=5 || result <= -1) {
                                result = (result + 5) % 5;
                            }  
                            p.classList.replace(p.classList[1] , `project-${result}`)
                        })
                    }
                }, 300); 
        }
    })
});

// little sliders under projects
// each one of them represent a project
// so we are going to add an onckick event to this sliders
// while clicking on each slider the project link to it will come forward
lilBtns.forEach(lilBtn => {
    lilBtn.addEventListener("click" , e => { 
        const targetSlider = e.target;
        const targetIndex = parseInt(targetSlider.classList[1][7]);
        const relatedSlider = document.querySelector(`.p-${targetIndex}`);
        let diffIndex = parseInt(relatedSlider.classList[1][8]) - 2;
        let carousel2 = setInterval(() => {
            if (diffIndex == 0) {
                clearInterval(carousel2)
            }else{
                Array.from(projects).forEach(project => {
                    let projectIndex = project.classList[1];
                    let nextIndex;
                    if (diffIndex > 0) {
                         nextIndex = parseInt(projectIndex[8]) -1 ;
                    }else {
                         nextIndex = parseInt(projectIndex[8]) +1 ;
                    }
                    if(nextIndex <=-1 || nextIndex >= 5){
                        nextIndex = (nextIndex +5 ) %5
                    }
                    project.classList.replace(projectIndex , `project-${nextIndex}`)
                })
                if (diffIndex > 0) {
                    diffIndex -= 1;

                }else{
                    diffIndex += 1;

                }
            }

        }, 300);
        targetSlider.classList.add("active");
        

        lilBtns.forEach(unclcik => {
            if (unclcik != e.target) {
                unclcik.classList.remove("active");
            }
        })
    })
})

// automating lilslider moves
// getting .project-2 class
// and adding .active class to related lilslider
projects[0].addEventListener("transitionstart" , () => {
    const mainProject = document.querySelector(".projects .project-2");
    const SliderIndex = parseInt(mainProject.classList[2][2]);
    lilBtns.forEach(lilBtn => {
        lilBtn.classList.remove("active");

    })
    lilBtns[SliderIndex].classList.add("active");
    // removing elements insde projects but project-2
projects.forEach(project => {
    if(project.classList[1] == "project-2")
    {
        Array.from(project.children).forEach(item => {
            item.style.display = "initial"
        })
    }else{
        Array.from(project.children).forEach(item => {
            item.style.display = "none"
        })
    }
})
})
// settings of contact me form
const form = document.querySelector("form.contact-me");
form.addEventListener("submit" , e => {
    // disabling contact me 
    e.preventDefault()
})

// adding direction to projects on click
const opener = document.querySelector(".projects .h-project.hidden");
opener.addEventListener("click" , e => {
    projects.forEach(project => {
        // getting the link of project
        if (project.classList[1] == "project-2") {
            let link = Array.from(project.children)[0];
            link = link.href;
            // opening the window of project
            window.open(link)
        }
    })
})
