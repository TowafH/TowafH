let aboutContainer = document.getElementById("aboutContainer");

let displayCoursesButton = document.getElementById("displayBtn")

let grade9Content = document.getElementById("nineth");
let grade10Content = document.getElementById("tenth");
let grade11Content = document.getElementById("eleventh");
let grade12Content = document.getElementById("twelveth");


function displayCourses() {
    grade9Content.style.display = "block";
    grade9Content.style.display = "flex";
    grade9Content.style.flexDirection = "column";

    grade10Content.style.display = "block";
    grade10Content.style.display = "flex";
    grade10Content.style.flexDirection = "column";

    grade11Content.style.display = "block";
    grade11Content.style.display = "flex";
    grade11Content.style.flexDirection = "column";

    grade12Content.style.display = "block";
    grade12Content.style.display = "flex";
    grade12Content.style.flexDirection = "column";

    displayCoursesButton.style.display = "none";
}



displayCoursesButton.addEventListener("click", displayCourses);