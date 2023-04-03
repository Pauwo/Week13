let studentsArray = []
function clickHandler(event) {
    if (event.target.tagName === "BUTTON") {
        //if the button is change bg (use textcontent or id)
        if(event.target.id === "bgButton"){
        console.log("bg clicked");
        }
        //else if it is submit
        else if (event.target.textContent === "Submit") {
            // console.log("submit clicked")
            let firstNameInput = document.querySelector("#firstname");
            let lastNameInput = document.querySelector("#lastname");
            console.log(lastNameInput.value);
            let progNameInput = document.querySelector("#progname");
            let student = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                progName: progNameInput.value,
            }
            console.log(student);
            //loop through the array to check
            studentsArray.push(student);
            addStudentToList(student);
            firstNameInput.value = "";
            lastNameInput.value = "";
            progNameInput.value = "";
        }
        // console.log(event.target);
    }
}
document.body.addEventListener("click", clickHandler);

function addStudentToList(newStudent) {
    //newStudent is an obj with firstName, lastName, and progName
    //create new li
    //find the correct ul based on the progName of newStudent
    //append the new li to the ul
    //update the textContent of new li
    const newli = document.createElement("li")
    if (newStudent.progName === "CIT") {
        const citlist = document.querySelector(".CIT");
        citlist.appendChild(newli)
    } else if (newStudent.progName === "CST") {
        const cstlist = document.querySelector(".CST");
        cstlist.appendChild(newli)
    }
}
