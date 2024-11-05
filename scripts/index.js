//navbar html fetch
fetch("../navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
        
        const currentPage = window.location.pathname.split("/").pop();
        const links = document.querySelectorAll("nav a");
        links.forEach(link => {
            if(link.getAttribute("href")=== currentPage){
                link.classList.add("nav-active","text-gradient");
            }else{
                link.style.color = "white";
            }
        })
    });
