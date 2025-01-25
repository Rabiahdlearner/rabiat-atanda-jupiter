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
    const foot=document.querySelector("#footer");

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

   

})

