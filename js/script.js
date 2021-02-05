



let imgs = Array.from( document.querySelectorAll(".item img") );
let lightBoxContainer = document.getElementById("lightBoxContainer");
let lightBoxItem = document.getElementById("lightBoxItem");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let closeBtn = document.getElementById("closeBtn");

let currentIndex;

for( let i=0 ; i<imgs.length ; i++)
{
    imgs[i].addEventListener("click" , function(e){

        currentIndex = imgs.indexOf(e.target);
        // console.log(currentIndex)


        let imgSrc = e.target.getAttribute("src");
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
        lightBoxContainer.classList.replace("d-none" , "d-flex");
        
    });
}


function nextSlide(){

    currentIndex++;

    if( currentIndex == imgs.length )
    {
        currentIndex = 0;
    }

    let imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
nextBtn.addEventListener("click" , nextSlide);




function prevSlide(){


    currentIndex--;

    if( currentIndex < 0 )
    {
        currentIndex = imgs.length -1;
    }

    let imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
prevBtn.addEventListener("click" , prevSlide);





function closeSlide(){

    lightBoxContainer.classList.replace("d-flex" , "d-none");
}
closeBtn.addEventListener("click" , closeSlide);


document.addEventListener("keydown" , function(e){

    if( e.code == "ArrowRight")
    {
        nextSlide();
    }
    if( e.code == "ArrowLeft")
    {
        prevSlide();
    }
    if( e.code == "Escape")
    {
        closeSlide();
    }
})



lightBoxContainer.addEventListener("click" , function(e){


    if( lightBoxContainer == e.target )
    {
        closeSlide();
    }

});



