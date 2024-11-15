export default function addComment(projectName){
    const modal = document.createElement("div");
    modal.classList.add("add-comment-container");
    modal.innerHTML = `
        <div class="add-comment-container">
            <div class="add-comment-card">
                <div class="add-comment-heading">
                    <h4>Project: ${projectName}</h4>
                </div>
                <button class="exit-btn">X</button>
                <form class="comment-form">
                    <input 
                    type='text'
                    placeholder='Your name' 
                    class='comment-name'
                    required
                    />
                    <textarea 
                    placeholder='Your comment' 
                    class='comment-message'
                    rows='3'
                    required
                    ></textarea>
                    <button type='submit' className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector(".exit-btn").addEventListener("click", () => {
        modal.remove();
    });

    modal.querySelector(".comment-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = modal.querySelector(".comment-name").value;
        const message = modal.querySelector(".comment-message").value;

        const newComment = {projectName: projectName, name, message};
        try{
            const response = await fetch('https://portfolio-server-yqaw.onrender.com/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
            })
            const data = await response.json();
            document.getElementById(`comments-${projectName}`).innerHTML += `
                <div id="comment-container-${projectName}" class="comment-container">
                    <h5>${data.name}</h5>
                    <p>${data.message}</p>
                </div>
            `;
            modal.remove();
        }catch(error){
            console.log(error);
        }
    })
}