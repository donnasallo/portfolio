// Initialization
const carousel = document.querySelector('.carousel-slides'); //hämtar carousel-slides klassen och lägger den i variavbeln carousel
const slides = Array.from(document.querySelectorAll('.carousel-slide')); // alla bilder i carousel-slidE görs om till en array
let currentSlide = 1; // lägg märke till att det står 1 och inte 0, vi skippar första bilden i arrayen så slide 2 blir "egentligen" slide 1

// Cloning Slides för att skapa en infinite loop
const firstSlideClone = slides[0].cloneNode(true); //kopiera första slide i arrayen -> lägg i variabeln firstSlideClone
const lastSlideClone = slides[slides.length - 1].cloneNode(true); //kopiera sista slide i arrayen  -> lägg i variabeln lastSlideClone

// Add the copies to the carousel
carousel.appendChild(firstSlideClone); //första sliden
carousel.insertBefore(lastSlideClone, carousel.firstChild); //sista sliden

// previous knappen
document.querySelector('.carousel-btn-prev').addEventListener('click', function() { //aktivera koden nedan när klass .carousel-btn-prev klickas
    if (currentSlide === 0) { // Kolla om vi är på första sliden i arrayen (klonen av sista sliden)
        jumpToEnd(); // Hoppa till sista sliden (som är en klon av första sliden)
        setTimeout(() => {
            currentSlide--;
            updateCarousel();
        }, 50); // Small delay for the jump to finish
    } else { // Om man inte befann sig på den klonade slide [0], dvs man befann sig på en vanlig icke-klon
        currentSlide--; //gå tillbaka ett steg i arrayen
        updateCarousel();
    }
});

// next knappen
document.querySelector('.carousel-btn-next').addEventListener('click', function() {
    if (currentSlide === slides.length + 1) { // Kollar om vi befinner oss på den klonade första sliden[sista sliden]
        jumpToStart(); // Hoppa till början av arrayen vilket vi har etablerat att det är slide [1]
        setTimeout(() => { 
            currentSlide++; // Öker slide räknaren med 1 (flyttar framåt en slide)
            updateCarousel();
        }, 50); // Small delay for the jump to finish
    } else { // Om vi inte befinner oss på den klonade första sliden, dvs en vanlig icke-klon slide
        currentSlide++; // Öka arrayen med 1
        updateCarousel();
    }
});

// Update the carousel
function updateCarousel() { 
    // anropas vid varje ny slide
    const offset = -currentSlide * 100; 
    // procentuell offset för den aktiva sliden, slide 2 = 200% offset etc
    // minustecknet säkerställer att karusellen rör sig åt vänster  
    // * 100 innebär att varje slide tar upp hela karusellens bredd
    carousel.style.transform = `translateX(${offset}%)`; 
    // applicerar offset som kalkylerades ovan och ser till att den rör sig horizontellt 
}

//Jump to end of the carousel
function jumpToEnd() {
    carousel.style.transition = "none"; // Temporarily remove transitions to jump without animation
    currentSlide = slides.length; // Go to the last original slide
    updateCarousel();
    // Restore transitions
    setTimeout(() => {
        carousel.style.transition = "";
    });
}

//Jump to start of the carousel
function jumpToStart() {
    carousel.style.transition = "none";
    currentSlide = 1; // Go to the first original slide
    updateCarousel();
    setTimeout(() => {
        carousel.style.transition = "";
    });
}

// Anropa funktionen
updateCarousel();

