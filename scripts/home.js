//typewriter function
function typeWords(element){
    const prefix = "I am a, ";
    let wordArr = ["Web Developer", "Problem Solver", "Tech Enthusiast", "Hard Worker"];
    let wordIndex = 0;
    let charIndex = 0;
    function type(){
        if(charIndex < wordArr[wordIndex].length){
            element.innerHTML = prefix + wordArr[wordIndex].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, 300);
        } else {
            setTimeout(() => {
                charIndex = 0;
                wordIndex = (wordIndex + 1) % wordArr.length;
                setTimeout(type, 800)
            }, 1000);
        }
    }
    type()
}
//fetch hero component
let mainSection = document.getElementById("main-content");
/*fetch("../htmlcomponents/hero.html")
    .then(response => response.text())
    .then(data => {*/
    const herotemplate = `
    <div class="hero-container">
    <div class="hero-content">
        <h2 class="hero-heading"></h2>
        <div class="hero-secondHeading-container">
            <h3 class="hero-secondHeading text-gradient"></h3>
        </div> 
        <p class="hero-paragraph"></p>
    </div>
    <div class="hero-img-container">
        <img class="hero-img" />
    </div>
</div>`
        let template1 = document.createElement("div");
        let template2 = document.createElement("div");
        template1.innerHTML = herotemplate;
        template2.innerHTML = herotemplate;

        function createHero(template, headingText, secondHeading, paragraph, image, alt, reverse){
            template.querySelector(".hero-container").style.flexDirection = reverse ? "row-reverse" : "row";
            template.querySelector(".hero-heading").innerHTML = headingText;
            template.querySelector(".hero-secondHeading-container").innerHTML += secondHeading ? "<span class='cursor'></span>" : "";
            const subHeading = template.querySelector(".hero-secondHeading");
            template.querySelector(".hero-paragraph").innerHTML = paragraph;
            const imgElement = template.querySelector(".hero-img");
            imgElement.setAttribute("src", image);
            imgElement.setAttribute("alt", alt);
            mainSection.appendChild(template);
            secondHeading && typeWords(subHeading);
        }

        var hero1Heading = "Hi, I am <br/> Mitchell Else";
        var hero1SecondHeading = true;
        var hero1Paragraph = 
        `I am a dedicated web developer currently halfway through 
        my computer science degree. Known for being hardworking and 
        reliable, I take pride in my ability to tackle complex problems 
        with innovative solutions. My passion for coding and continuous 
        learning drives me to excel in creating dynamic and user-friendly 
        web applications.`;
        var hero1Image = "images/FamilyPortrait.png";
        var hero1Alt = "Family Photo";

        var hero2Heading = "Backstory";
        var hero2SecondHeading = false;
        var hero2Paragraph = 
        `Originally from Australia, I now reside in Edmonton AB, Canada. 
        In Australia I was a trade qualified heavy metal fabricator. 
        After almost 10 years of experience in metal fabrication I am 
        pursuing a new career path, utilising my problem solving skills 
        in web development.`;
        var hero2Image = "images/australia.jpg";
        var hero2Alt = "Australia Map";
        createHero(template1, hero1Heading, hero1SecondHeading, hero1Paragraph, hero1Image, hero1Alt, false);
        createHero(template2, hero2Heading, hero2SecondHeading, hero2Paragraph, hero2Image, hero2Alt, true);
    //})
