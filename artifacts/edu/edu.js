//Select Elements

// Elements to display Freshmen/Sophomore/Junior/Senior Year when hover
let grade9 = document.getElementById("nine");
let grade10 = document.getElementById("ten");
let grade11 = document.getElementById("eleven");
let grade12 = document.getElementById("twelve");

//Functions

//Freshmen
function displayFreshmenText(){
    grade9.innerText = "Freshmen Year!";
    grade9.style.color = "skyblue"
}

function hideFreshmenText(){
    grade9.innerText = "9th Grade";
    grade9.style.color = "white";
}

// Sophomore
function displaySophomoreText(){
    grade10.innerText = "Sophomore Year!";
    grade10.style.color = "lightgreen"
}

function hideSophomoreText(){
    grade10.innerText = "10th Grade";
    grade10.style.color = "white";
}

// Junior
function displayJuniorText(){
    grade11.innerText = "Junior Year!";
    grade11.style.color = "magenta"
}

function hideJuniorText(){
    grade11.innerText = "11th Grade";
    grade11.style.color = "white";
}

// Senior
function displaySeniorText(){
    grade12.innerText = "Senior Year!";
    grade12.style.color = "maroon"
}

function hideSeniorText(){
    grade12.innerText = "12th Grade";
    grade12.style.color = "white";
}


//Add Event Listeners

//Freshmen
grade9.addEventListener("mouseover", displayFreshmenText);
grade9.addEventListener("mouseout", hideFreshmenText);
//Sophomore
grade10.addEventListener("mouseover", displaySophomoreText);
grade10.addEventListener("mouseout", hideSophomoreText);
//Junior
grade11.addEventListener("mouseover", displayJuniorText);
grade11.addEventListener("mouseout", hideJuniorText);
//Senior
grade12.addEventListener("mouseover", displaySeniorText);
grade12.addEventListener("mouseout", hideSeniorText);


// Elements to modify AWARDS, CLUBS, NHS, CHESS, CERT when hover
let awards = document.getElementById("awards");
let clubs = document.getElementById("clubs");
let nhs = document.getElementById("nhs");
let chess = document.getElementById("chess");
let cert = document.getElementById("cert");

//Functions

//Awards
function modifyAwardsColor(){
    awards.style.color = "gold";
}
function hideAwardsColor(){
    awards.style.color = "white";
}

//Clubs
function modifyClubsColor(){
    clubs.style.color = "orange";
}
function hideClubsColor(){
    clubs.style.color = "white";
}

//NHS
function modifyNHSColor(){
    nhs.style.color = "navy";
}
function hideNHSColor(){
    nhs.style.color = "#b3b7bf";
}

//Chess
function modifyChessColor(){
    chess.style.color = "white";
}
function hideChessColor(){
    chess.style.color = "#b3b7bf";
}

//Cert
function modifyCertColor(){
    cert.style.color = "slategray";
}
function hideCertColor(){
    cert.style.color = "white";
}

//Ad Event Listeners

//Awards
awards.addEventListener("mouseover", modifyAwardsColor);
awards.addEventListener("mouseout", hideAwardsColor);
//Clubs
clubs.addEventListener("mouseover", modifyClubsColor);
clubs.addEventListener("mouseout", hideClubsColor);
//NHS
nhs.addEventListener("mouseover", modifyNHSColor);
nhs.addEventListener("mouseout", hideNHSColor);
//Chess
chess.addEventListener("mouseover", modifyChessColor);
chess.addEventListener("mouseout", hideChessColor);
//Cert
cert.addEventListener("mouseover", modifyCertColor);
cert.addEventListener("mouseout", hideCertColor);