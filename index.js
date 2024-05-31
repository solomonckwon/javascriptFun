/* To create console logs in dev tools
// console.log(`Hello`);
*/

/* Creates popups 
// window.alert(`This is an alert!`);
// window.alert(`I like pizza!`);
*/

/* Change the text content of element by ID
// document.getElementById("homeH1").textContent = 'Hello';
// document.getElementById("homeP").textContent = 'I like pizza';
*/

/*  declaration   let x;
    assignment    x = 100;
    let x = 123;
*/

// let age = 26;
// let gpa = 4.0;
// console.log(`You are ${age} years old with a gpa of ${gpa}`);
// console.log(`Nice!`);
// console.log(typeof gpa, typeof age);

// let firstName = "Solomon";
// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`);

// let online = true;
// console.log(`${firstName} is online: ${online}`);

/* Easy way to accept input */
// let username = window.prompt("What's your username?");
// console.log(username);


// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}!`
// }

let file;
document.getElementById("generate").onclick = function() {
    const filePicker = document.getElementById("file_picker");
    if (filePicker.files.length > 0) {
        file = filePicker.files[0];
        console.log(file);
        filePicker.value = "";
    } else {
        console.log("No file selected");
    }
};


// let age1 = window.prompt("How old are you? (String)");
// age1+=1;
// console.log(age1)

// let age = window.prompt("How old are you? (Converted to number)");
// age = Number(age);
// age = String(age);
// age = Boolean(age);
// age+=1;
// console.log(age, typeof age)

// const = a variable that can't be changed 
// const PI = 3.1415
// only variables that are numbers are usually all caps