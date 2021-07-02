let topMenu =  document.querySelector(".top-menu-wrapper")

window.addEventListener("load" , () => {
    const left = document.querySelector(".left-part")
    const name = document.querySelector(".blur-background h2")
    const button = document.querySelector(".blur-background button")
    left.style.width= "45%";
    name.style.opacity = "1"
    button.style.right = "0"
    window.addEventListener("scroll" , () => {
        const firstPage = document.querySelector(".home-wrapper");
        if (window.scrollY > firstPage.scrollHeight ) {
            topMenu.classList.add("position")
        } else {
            topMenu.classList.remove("position")
        }
    })
})
let scroller = document.querySelector('.blur-background button');
scroller.addEventListener("click" , () => {
  
})
let viewPageBtn = document.querySelector(".blur-background button");
viewPageBtn.addEventListener("click" , () => {
   topMenu.scrollIntoView({top:0 , behavior:"smooth"})
    
})
