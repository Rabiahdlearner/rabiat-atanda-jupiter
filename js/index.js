// making the hamburger interactive
//const hamburger = document.querySelectorAll(".hamburger");
// Create footer
document.addEventListener("DOMContentLoaded", function () {

    // skills section
    const skills = ["Javascript", "HTML", "CSS", "Python", "Github"];

    const skillsSection = document.querySelector("#skills");

    const skillsList = skillsSection.getElementsByTagName("ul");

    for (let i = 0; i < skillsList.length; i++) {
        const ul = skillsList[i];

        for (let j = 0; j < skills.length; j++) {
            const skill = skills[j];
            const li = document.createElement("li");
            li.classList.add("skill");
            li.textContent = skill;
            ul.appendChild(li);
        }
    }

    // Create footer
    const foot = document.querySelector("#footer");

    if (foot) {
        const footer = document.createElement("footer");

        footer.setAttribute("id", "foot-parent");


        const copyright = document.createElement("p");

        copyright.classList.add("copyright");

        const today = new Date();

        const thisYear = today.getFullYear();

        copyright.textContent = `Copyright \u00A9 ${thisYear} by Rabiat Atanda`;

        footer.appendChild(copyright);
        foot.appendChild(footer);
    } else {
        console.log("no footer found");
    }



    // Handle message form submit

    const messageForm = document.querySelector("#message-form");

    if (messageForm) {

        messageForm.addEventListener("submit", (event) => {

            event.preventDefault();


            const userName = event.target.querySelector("#username");

            const userEmail = event.target.querySelector("#userEmail");

            const userMessage = event.target.querySelector("#userMessage");

            console.log(userName.value, userEmail.value, userMessage.value);

            console.log("is this working?")


            const messageSection = document.querySelector("#messages");

            const messageList = messageSection.getElementsByTagName("ul");

            console.log(messageList);

            //const newMessage = messageList[0].createElement("li");
            const newMessage = document.createElement("li");

            console.log(newMessage);

            newMessage.innerHTML = `<a href="mailto:${userEmail.value}">
                <span>${userMessage.value}</span>
            </a>`;

            console.log(newMessage)

            const removeButton = document.createElement("button");

            removeButton.type = "button";

            removeButton.textContent = "Remove";

            newMessage.appendChild(removeButton);

            messageList[0].appendChild(newMessage);

            event.target.reset();

            removeButton.addEventListener("click", () => {

                const entry = removeButton.parentElement;
                entry.remove();


            })



            // messageForm.reset();

        }
        )
    }











})

//Lesson 13
//Creating Fetch
fetch("https://api.github.com/users/rabiahdlearner/repos")
    .then(response => response.json()) // parsing response as JSON

    .then(repositories => {
        console.log(repositories);
        //Display Repositories in List
        const projectSection = document.getElementById("projects-section");
        console.log(projectSection);

        const projectList = projectSection.getElementsByTagName("ul");
        console.log(projectList);

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li");
            project.classList.add("project");
            project.innerText = repositories[i].name;
            projectList[0].appendChild(project);
            console.log(repositories[i]);
        }
    })// handling the data

    .catch(err => {
        console.error("Error fetching data: ", err);// handling the errors
    });











