const allSkills = [
    {
        heading: 'Frontend',
        skills: [
            { icon: 'fab fa-react', skill: 'React JS' },
            { icon: 'fas fa-biohazard', skill: 'Redux' },
            { icon: 'fas fa-wind', skill: 'Tailwindcss' },
            { icon: 'fab fa-html5', skill: 'HTML' },
            { icon: 'fab fa-css3', skill: 'CSS' },
            { icon: 'fab fa-js', skill: 'JavaScript' },
            { icon: 'fab fa-js', skill: 'JQuery' },
        ]
    },
    {
        heading: 'Backend',
        skills: [
            { icon: 'fab fa-node', skill: 'Node JS' },
            { icon: 'fas fa-server', skill: 'Express JS' },
            { icon: 'fas fa-database', skill: 'MySQL' },
            { icon: 'fas fa-fire', skill: 'Firebase' },
            { icon: 'fas fa-sitemap', skill: 'Sanity.io' }, // No direct Sanity icon, used sitemap as placeholder
            { icon: 'fas fa-database', skill: 'MongoDB' },
            { icon: 'fab fa-cc-stripe', skill: 'Stripe' },
        ]
    },
    {
        heading: 'Languages',
        skills: [
            { icon: 'fab fa-html5', skill: 'HTML' },
            { icon: 'fab fa-css3', skill: 'CSS' },
            { icon: 'fab fa-js', skill: 'JavaScript' },
            { icon: 'fab fa-python', skill: 'Python' },
            { icon: 'fas fa-c', skill: 'C++' }, // No direct C++ icon, using 'c' as closest match
            { icon: 'fas fa-c', skill: 'C#' },
            { icon: 'fab fa-java', skill: 'Java' },
            { icon: 'fas fa-circle-dot', skill: 'Dot.Net' }, // Closest available
            { icon: 'fab fa-git', skill: 'Git' },
        ]
    },
    {
        heading: 'Soft Skills',
        skills: [
            { icon: 'fas fa-exclamation-circle', skill: 'Problem Solving' },
            { icon: 'fas fa-chalkboard-teacher', skill: 'Fast Learner' },
            { icon: 'fas fa-brain', skill: 'Critical Thinking' },
            { icon: 'fas fa-comments', skill: 'Communication' },
            { icon: 'fas fa-users', skill: 'Teamwork' },
            { icon: 'fas fa-business-time', skill: 'Time Management' },
        ]
    }
]

//fetch skill component
let mainSection = document.getElementById("main-content");
let templateWrapper = document.createElement("div");
templateWrapper.classList.add("skill-wrapper");
fetch("../htmlcomponents/skill.html")
    .then(response => response.text())
    .then(data => {
        allSkills.map(skills => {
            let template = document.createElement("div");
            template.innerHTML = data;

            function createSkills(template, skillList){
                template.querySelector(".skill-heading").innerHTML = skills.heading;
                let skillGrid = template.querySelector(".skill-grid");
                skillList.map(skill => {
                    let skillItem = document.createElement("div");
                    skillItem.classList.add("skill");
                    skillItem.innerHTML = `
                    <i class='${skill.icon}''></i>
                    <h4 class='skill-name'>${skill.skill}</h4>`
                    skillGrid.appendChild(skillItem);
                })
                templateWrapper.appendChild(template);
            }
            createSkills(template, skills.skills);
            mainSection.appendChild(templateWrapper);
        })
    })