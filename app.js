// Initialize Variables
let name = "Hugo Figueroa";
let hasDownloadedResume = false;
let endDate = "2026-10-31";
let remainingDays = daysUntilDeadline(endDate);
let downloadCount = 0;
let currentProject = ["DNA", "Tower of Hanoi", "Halloween Shop Project"];
let projectDescription = ["The DNA project was made from an assignment. Throughout this coding system, I made the code from C+. I had it generate random DNA sequenmces. Then from a file which contrains many DNA sequences, It read throught the file and try to match what DNA seqence matched the one that was randomized. I5t6 counts how many matches there were.", 
    "Tower of Hanoi is a project that I made via code in C+. This code was made to look store the smallest-biggest disc from the far left to the far right. The game only has three section where the disk can be placed. The larger disc cannot go on top of a smaller disc. The code was made to auto do it its self. It checks of the disc in a section is bigger than the one that is in the section. If its smaller then it can be placed, if not then i cannot be placed. By the end of the code, tyhe 5 disc smallest on top largest on the bottom are all tranfered to the other side of the board.",
    "A project about serving customsers a scary gift, each gift has a trick or a treat. The project stores was the trick was and what was the treat, then increments for a treat and a trick."];

let projectDeadline = ["2026-02-01", "2026-04-01", "2026-10-31"];

const button = document.querySelector('button');

// Making if function to check if the button was pressed
// if it were pressed, it makes the variable hasDownloadedResume true
// clicking the button will not trigger again
if(button) {
    

    button.addEventListener('click', () => { 
    if (hasDownloadedResume === false) {
    alert("Your resume is downloaded successfully!");
    hasDownloadedResume = true;
    downloaded();
    }else{
        downloaded();
    }});

}



// function called showGreetings with name as a parameter.
// this function returns my name in the HTML
function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}


// function called daysUntilDeadline with endDate as a parameter.
// this calculated todays date with the project due and compares it with the endDate variable
// it calculates how many days left till the project is due.
function daysUntilDeadline(endDate) {
    let currentDate = new Date();
    let end = new Date(endDate);
    let timeDifference = end - currentDate;
    let daysDifference = timeDifference / (1000 * 3600 * 24); 
    return Math.trunc(daysDifference);
}


// checks if the remainings day of the project has not met the deadline
// if it hasn't it'll say "ongoing", othewise it will say completed
if(remainingDays >= 0) {
    document.querySelector("#status").textContent = "Ongoing";
}else{
    document.querySelector("#status").textContent = "Completed";
}

//function called downloaded, 
// increments how many times the download button has been clicked
function downloaded() {
    downloadCount++;
    const countElement = document.querySelector('.count');
    countElement.textContent = downloadCount + " downloads";
}


// creates a set of tex5t about my project into the HTML file. 
// it also displayes the due dates and the days remaining for the current project.
for (let i = 0; i < currentProject.length; i++) {
    document.querySelector(".mproject").innerHTML += "<h4>" + currentProject[i] + "</h4><p>" + projectDescription[i] + "</p><p>Due Date: " + projectDeadline[i] + "</p>";
}


// fuction called addToSkills,
// it takes what the user types on the screen in the chat text
// once the user hits the submit button, that skill is added to the webstie
function addToSkills() {
    let text = document.getElementById("newSkills").value;
    if (text !== "") {
        document.getElementById("list").innerHTML += "<li>" + text + "</li>";
        document.getElementById("newSkills").value = "";
    }
}

