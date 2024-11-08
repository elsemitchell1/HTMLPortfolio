//navbar component
document.getElementById("navbar"). innerHTML = `
    <div class="nav-container">
        <h1 class="nav-heading text-gradient">Mitchell's HTML Portfolio</h1>
        <button id="hamburger" class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
        <div id="nav-menu-wrapper" class="nav-menu-wrapper">
            <ul class="nav-menu" id="nav-menu">
                <li class="nav-menu-item">
                    <a href="index.html">Home</a>
                </li>
                <li class="nav-menu-item">
                    <a href="work.html">Work</a>
                </li>
                <li class="nav-menu-item">
                    <a href="skills.html">Skills</a>
                </li>
                <li class="nav-menu-item">
                    <a href="resume.html">Resume</a>
                </li>
                <li class="nav-menu-item">
                    <a href="projects.html">Projects</a>
                </li>
            </ul>
        </div>
    </div>`

const hamburger = document.getElementById('hamburger');
const navMenuWrapper = document.getElementById('nav-menu-wrapper');
    
hamburger.addEventListener('click', () => {
    navMenuWrapper.classList.toggle('active');
    hamburger.classList.toggle('active');
});
//footer component
document.getElementById("footer").innerHTML = `
    <div class="footer-container">
        <nav class="footer-nav">
            <ul class="footer-menu" id="footer-menu">
                <li class="nav-menu-item">
                    <a href="index.html">Home</a>
                </li>
                <li class="nav-menu-item">
                    <a href="work.html">Work</a>
                </li>
                <li class="nav-menu-item">
                    <a href="skills.html">Skills</a>
                </li>
                <li class="nav-menu-item">
                    <a href="resume.html">Resume</a>
                </li>
                <li class="nav-menu-item">
                    <a href="projects.html">Projects</a>
                </li>
            </ul>
        </nav>
        <hr/>
        <form class="contact-form">
            <h3>Contact Me</h3>
            <div class="upper-contact">
                <div class="input">
                    <label>Name</label>
                    <input type="text"/>
                </div>
                <div class="input">
                    <label>Email</label>
                    <input type="text"/>
                </div>
            </div>
            <div class="lower-contact">
                <label>Message</label>
                <textarea id="message" name="message" rows="5"
                placeholder="Your Message"></textarea>
            </div>
        </form>
        <hr/>
        <p>&copy 2024 Mitchell Else</p>
    </div>`
let currentPage = window.location.pathname.split("/").pop();
currentPage == '' ? currentPage = 'index.html' : currentPage = currentPage;
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    if(link.getAttribute("href") === currentPage){
        link.classList.add("nav-active","text-gradient");
    }else{
        link.style.color = "white";
    }
})