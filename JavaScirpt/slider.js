// topMenu is the top menu in page witch is fixed 
let topMenu =  document.querySelector(".top-menu-wrapper");
// animating first page while document is loading 
// I'll change some properties of elements to move them after window has been loaded
window.addEventListener("load" , () => {
    const left = document.querySelector(".left-part");
    const name = document.querySelector(".blur-background h2");
    const button = document.querySelector(".blur-background button");
    left.style.width= "45%";
    name.style.opacity = "1";
    button.style.right = "0";
    window.addEventListener("scroll" , () => {
        const firstPage = document.querySelector(".home-wrapper");
        if (window.scrollY > firstPage.scrollHeight ) {
            topMenu.classList.add("position")
        } else {
            topMenu.classList.remove("position")
        }
    })
    const aboutPage = document.querySelector(".about-wrapper");
    if (screen.height > screen.width) {
        aboutPage.classList.add("minHeight");
    }else{
        aboutPage.classList.remove("minHeight");
    }

})
// this code controls the button in first page 
// by clicking on this button window will scroll to about partition
let scroller = document.querySelector('.blur-background button');
scroller.addEventListener("click" , () => {
  
})
let viewPageBtn = document.querySelector(".blur-background button");
viewPageBtn.addEventListener("click" , () => {
   topMenu.scrollIntoView({top:0 , behavior:"smooth"})
   
})


// these codes are controling hidden side menu that will appeare after clicking on menu icon 
let menuIcon = document.querySelector(".top-menu-wrapper>li")
let hiddenMenu = document.querySelector(".sidebar-wrapper")
menuIcon.addEventListener("click" , () => {
    hiddenMenu.style.display = "flex";
})
let colsingIcon = document.querySelector(".sidebar-wrapper > li")
colsingIcon.addEventListener("click" , () => {
    hiddenMenu.style.display = "none";
})


// these are the codes that control hidden slider buttons 
let hiddenBtns = document.querySelectorAll(".h-item")
hiddenBtns.forEach(btn => {
    btn.addEventListener("click" , e => {
        hiddenMenu.style.display = "none";
        const item = e.target
        // console.log(item);
        switch (item.classList[1]) {
            case "h-home":
                window.scrollTo({top:0 , behavior:"smooth"})
                break;
        
            default:
                break;
        }
        
        
    })
})


