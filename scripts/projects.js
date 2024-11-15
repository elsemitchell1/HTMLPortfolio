import { projects } from "./projectArr.js";
import addComment from "./addComment.js";

function fetchData(projectName){
    return fetch(`https://portfolio-server-yqaw.onrender.com/comments/${projectName}`)
        .then(response => response.json())
        .catch(error => {
            console.log(error);
            return [];
        });
}
function toggleComments(projectName, commentLength, buttonText){
    const commentContainer = document.getElementById(`comments-${projectName}`);
    const isVisible = commentContainer.style.display === 'flex';
    commentContainer.style.display = isVisible ? 'none' : 'flex';
    buttonText.innerHTML = buttonText.innerHTML === 'Hide Comments' ? 
    `Show ${commentLength} Comment${commentLength !== 1 ? 's':''}...`:
    `Hide Comments`
}
//fetch project main-content
let mainSection = document.getElementById("main-content");
let templateWrapper = document.createElement("div");
templateWrapper.classList.add("projects-wrapper");

projects.map((project, key) => {
    let template = document.createElement("div");
    template.innerHTML = `
    <div class="project-card">
        <a class="project-link" href="${project.link}">
            <div class="project-content">
                <div class="project-img">
                    <img src="${project.image}" alt="${project.name}"/>    
                </div>
                <div class="project-skills">
                    ${project.skills.map(skill => {
                        return `<div class="project-skill-container">
                                    <i class="${skill.icon}"></i>
                                    <h4 class="skill-name">${skill.skill}</h4>
                                </div>`
                    }).join('')}
                </div>
                <div class="project-info">
                    <h3>${project.name}</h3>
                    <h5>${project.date}</h5>
                    <p>${project.info}</p>
                </div>
            </div>
        </a>
        <div class="comments-container">
            <button id="project-${key+1}" class="comments-toggle">Comments Loading...</button>
            <div id="comments-${project.name}" class="comment-section">
            </div>
            <button class="add-comment-btn">Add Comment</button>
        </div>
    </div>`
    templateWrapper.appendChild(template);
    let buttonText = template.querySelector(`#project-${key+1}`);
    fetchData(project.name).then(commentsData => {
        document.getElementById(`project-${key+1}`).innerHTML = `Show ${commentsData.length} Comment${commentsData.length !== 1 ? 's':''}...`;
        template.querySelector(".comments-toggle").addEventListener('click', () => {
            toggleComments(project.name, commentsData.length, buttonText);
        })
        const commentContainer = document.getElementById(`comments-${project.name}`);
        commentContainer.innerHTML = commentsData.map(comment => {
            return `<div id="comment-container-${project.name}" class="comment-container">
                        <h5>${comment.name}</h5>
                        <p>${comment.message}</p>
                    </div>`
        }).join('');
    });
    template.querySelector(".add-comment-btn").addEventListener("click", () => {
        addComment(project.name);
    })
})
mainSection.appendChild(templateWrapper);