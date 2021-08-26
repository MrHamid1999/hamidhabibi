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


// animation for all of elements;

// animating the about section
const aboutChange =() => {
    // getting elements
    const picture = document.querySelector('.img-wrapper img');
    const topMenu = document.querySelector(".top-menu-wrapper nav");
    const infoWrapper =document.querySelector(".info-wrapper")
    topMenu.classList.add("fade-in")

    setTimeout(() => {picture.classList.add("move")} , 500)
    setTimeout(() => {infoWrapper.classList.add("turn-true")} , 800)
    
    }



const techChange = () => {
    const items = document.querySelectorAll('.percent-container');
    Array.from(items).forEach(item => {

        item.classList.add("full")
    })
}
const liAdder = (item1 , item2 ) => {
    let counter =0;

    let adderInterval =  setInterval(()=>{
       if(item2[counter] ==undefined) {clearInterval(adderInterval)}
            
        item1[counter].classList.add("visiable");
        item2[counter].classList.add("visiable");
        counter++ ;
        
    } , 800)


}



const dispalyRepeat = ()=> {

    let devTools = document.querySelectorAll('.developer-tools ul li');
    let designTools = document.querySelectorAll('.design-tools ul li');
    devTools = Array.from(devTools);
    designTools = Array.from(designTools);
   

    liAdder(devTools , designTools);
}



// getting the amount of scroll
// getting inner height of elements
let getEinHeight= window.addEventListener('scroll', () => {
   const windowHeight =  window.scrollY;
     const intro = document.querySelector(".home-wrapper").clientHeight - 50;
     const aboutHeight = document.querySelector('.about-wrapper').clientHeight+intro -200;
     const techHeight = document.querySelector(".statistics").clientHeight + aboutHeight


    switch (true) {
        case ( windowHeight >= intro && windowHeight <= intro+250 ):
            aboutChange()
            break;
        case ( windowHeight >= aboutHeight && windowHeight <= aboutHeight +100)  :
           setTimeout( techChange , 200)
            break;
        case (windowHeight >= techHeight+100 && windowHeight <= techHeight +300) :
            dispalyRepeat()
            break;    
       
    }
    
})

const scrollEfects = (windowHeight) => {
}






