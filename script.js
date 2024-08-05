
// Loader JS
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 100);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}



// Select Elements

// Elements
let navBar = document.querySelector("nav");

// ID's
let nameBtn = document.getElementById("nameBtn");
let gitHubImg = document.getElementById("GitHub");
let ASCLink = document.getElementById("ASCLink");
let aboutContainer = document.getElementById("aboutContainer");

let html5 = document.getElementById("html5");
let css3 = document.getElementById("css3");
let js = document.getElementById("js");
let python = document.getElementById("python");
let java = document.getElementById("java");

// Classes
let navBtns = document.querySelectorAll(".items"); // Array --> Use a for loop to iterate all the Items
let bio = document.querySelectorAll(".bio");
let presentColumnText = document.querySelector(".presentColumnText");
let Avatar = document.querySelector(".Avatar");


//Function

function changeText(){
  nameBtn.innerText = "Click Me!";
}
function changeTextBack(){
  nameBtn.innerText = "Towaf Hossain";
}


nameBtn.addEventListener("mouseover", changeText);
nameBtn.addEventListener("mouseout", changeTextBack);

function lightMode(){
  //Stylize the Body
  document.body.style.backgroundColor = "snow";
  aboutContainer.style.backgroundColor = "whitesmoke";

  //Stylize the Div's
    //For-Loop to Color all the .bio Divs
    for (i = 0; i < bio.length; i++){
        bio[i].style.color = "black";
        bio[i].style.backgroundColor = "#DED9D9";
    }

  //Stylize the Nav
  navBar.style.backgroundColor = "snow";

  //Stylize Name
  nameBtn.style.color = "black";

  //Stylize the Text
  presentColumnText.style.color = "black";

  //Stylize the Link
  ASCLink.style.color = "black";

  //Stylize Images
  gitHubImg.src = "images/GitHubHover.png";
  Avatar.src = "images/picture2.png";

  html5.src = "images/light_html5.png";
  css3.src = "images/light_css3.png";
  js.src = "images/light_js.png";

  //For-Loop to color all .items in the Nav
  for (i = 0; i < navBtns.length; i++){
    navBtns[i].style.color = "black";
  }
}

function darkMode(){
  //Stylize the Body
  document.body.style.backgroundColor = "#181818";
  aboutContainer.style.backgroundColor = "#433D3D";

  //Stylize the Div's
    //For-Loop to Color all the .bio Divs
    for (i = 0; i < bio.length; i++){
        bio[i].style.color = "whitesmoke";
        bio[i].style.backgroundColor = "#555";
    }

  //Stylize the Nav
  navBar.style.backgroundColor = "#181818";

  //Stylize Name
  nameBtn.style.color = "whitesmoke";

  //Stylize the Text
  presentColumnText.style.color = "whitesmoke";

  //Stylize the Link
  ASCLink.style.color = "whitesmoke";

  //Stylize Images
  gitHubImg.src = "images/GitHub.png";
  Avatar.src = "images/picture.jpg";

  html5.src = "images/html5.png";
  css3.src = "images/css3.png";
  js.src = "images/js.png";
  python.src = "images/light_python.png";
  java.src = "images/light_java.png";


  //For-Loop to color all .items in the Nav
  for (i = 0; i < navBtns.length; i++){
    navBtns[i].style.color = "whitesmoke";
  }
}

nameBtn.addEventListener("click", lightMode);
nameBtn.addEventListener("dblclick", darkMode);

