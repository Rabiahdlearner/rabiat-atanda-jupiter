// making the hamburger interactive
//const hamburger = document.querySelectorAll(".hamburger");
// Create footer
document.addEventListener("DOMContentLoaded", function () {

    const footer = document.createElement("footer")

    footer.setAttribute("id", "foot-parent")  

    const footParent = document.querySelector("#foot-parent");

    if (footParent) {
    

    const copyright = document.createElement("p");

    copyright.classList.add("copyright");

    const thisYear = new Date().getFullYear();

    copyright.textContent = "Copyright \u00A9" + thisYear + " by Rabiat Atanda";

    footParent.appendChild(copyright);
    } else {
        console.log("no footParent found");
    }
})
