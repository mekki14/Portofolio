const hamburger =document.querySelector('.hamburger');
const navigation =document.querySelector('.navigation');

hamburger.addEventListener('click',function(){
    
    this.classList.toggle('is-active');
    navigation.classList.toggle('active');


})

let section0 = document.querySelector(".about-sec");
let section1 = document.querySelector(".services");
let section2 = document.querySelector(".testimonial");
let section3 = document.querySelector(".projects");
let section4 = document.querySelector(".contact");
let title1 = document.querySelector(".title1");
let title2 = document.querySelector(".title2");
let title3 = document.querySelector(".title3");
let title4 = document.querySelector(".title4");


let card = document.querySelectorAll(".top");
let pCard = document.querySelectorAll(".project-card");
let card2 = document.querySelectorAll(".bottom");
let cardM = document.querySelectorAll(".Middle");

let header = document.querySelector("header");

let aboutcontent = document.querySelector(".aboutText");
let aboutTitle = document.querySelector(".title-about");
let aboutBtn = document.querySelector(".about-btn");
let aboutImg = document.querySelector(".about-img");

    window.onscroll= function () {
       
       
       
       
       
       
       
        if (window.scrollY>= section1.offsetTop-200){
            card.forEach((card)=> {
                card.classList.add("animate1")
            })
        title1.classList.add("animate1")
     }

    if (window.scrollY>= section2.offsetTop-200){
        title2.classList.add("animate1")
        cardM.forEach((cardM)=> {
            cardM.classList.add("animate1")
        })
    }
    
    if (window.scrollY>= section3.offsetTop-200){
        title3.classList.add("animate1")
        pCard.forEach((pCard)=> {
            pCard.classList.add("animate1")
        })
        

    } 

    if (window.scrollY>= section4.offsetTop-400){
        
        
        card2.forEach((card2)=> {
            card2.classList.add("animate1")
        })
        title4.classList.add("animate1")

    } 

    if (window.scrollY>= section0.offsetTop-720){
        
        header.classList.add("scrolled")

    }
    else
    header.classList.remove("scrolled")


    if (window.scrollY>= section0.offsetTop-200){
            
        aboutcontent.classList.add("animate3")
        aboutTitle.classList.add("animate3")
        aboutBtn.classList.add("animate3")
        aboutImg.classList.add("animate4")
 }
}