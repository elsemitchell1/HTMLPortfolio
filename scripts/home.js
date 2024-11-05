//fetch hero component
let mainSection = document.getElementById("main-content");
fetch("../htmlcomponents/hero.html")
    .then(response => response.text())
    .then(data => {
        let template1 = document.createElement("div");
        let template2 = document.createElement("div");
        template1.innerHTML = data;
        template2.innerHTML = data;

        function createHero(template, headingText, secondHeading, paragraph, image, alt, reverse){
            template.querySelector(".hero-container").style.flexDirection = reverse ? "row-reverse" : "row";
            template.querySelector(".hero-heading").innerHTML = headingText;
            template.querySelector(".hero-secondHeading").innerHTML = secondHeading;
            template.querySelector(".hero-paragraph").innerHTML = paragraph;
            const imgElement = template.querySelector(".hero-img");
            imgElement.setAttribute("src", image);
            imgElement.setAttribute("alt", alt);
            mainSection.appendChild(template);
        }

        var hero1Heading = "Hi, I am <br/> Mitchell Else";
        var hero1SecondHeading = "I am a, Web Developer";
        var hero1Paragraph = 
        `I am a dedicated web developer currently halfway through 
        my computer science degree. Known for being hardworking and 
        reliable, I take pride in my ability to tackle complex problems 
        with innovative solutions. My passion for coding and continuous 
        learning drives me to excel in creating dynamic and user-friendly 
        web applications.`;
        var hero1Image = "../images/FamilyPortrait.png";
        var hero1Alt = "Family Photo";

        var hero2Heading = "Backstory";
        var hero2SecondHeading = "";
        var hero2Paragraph = 
        `Originally from Australia, I now reside in Edmonton AB, Canada. 
        In Australia I was a trade qualified heavy metal fabricator. 
        After almost 10 years of experience in metal fabrication I am 
        pursuing a new career path, utilising my problem solving skills 
        in web development.`;
        var hero2Image = "../images/australia.jpg";
        var hero2Alt = "Australia Map";
        createHero(template1, hero1Heading, hero1SecondHeading, hero1Paragraph, hero1Image, hero1Alt, false);
        createHero(template2, hero2Heading, hero2SecondHeading, hero2Paragraph, hero2Image, hero2Alt, true);
    })
