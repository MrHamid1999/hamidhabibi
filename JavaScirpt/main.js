// animating first page while document is loading 
// window.onload => change left , right ,and opacity of elements
window.addEventListener("load" , () => {
    // topMenu is the top menu in page witch is fixed 
    const topMenu =  document.querySelector(".top-menu-wrapper");
    const button = document.querySelector(".blur-background button");
    const left = document.querySelector(".left-part");
    const name = document.querySelector(".blur-background h2");
    const aboutPage = document.querySelector(".about-wrapper");
    const viewPage = document.querySelector(".view-page-btn");
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
    // this code controls the button in first page 
    // by clicking on this button window will scroll to about partition
    viewPage.addEventListener("click" , () => {
        topMenu.scrollIntoView({top:0 , behavior:"smooth"})
    })
})

