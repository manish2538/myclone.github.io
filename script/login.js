
userDetails = new Map();
userDetails.set("admin","admin");

// const userDetails = new Map();



function signup(){
usernameMap = document.getElementById("usernamemap").value;
passwordMap = document.getElementById('passwordmap').value;

    if(userDetails.has(usernameMap)){
        alert("username already exist !! please choose another username");
      
    }
    else {
        userDetails.set(usernameMap,passwordMap);
    
        alert("account successfully created");
        console.log(userDetails);
        
    }
    return false;
}
// signup();

// userDetails.forEach(function(value, key) {
//     console.log(key + ' = ' + value)
// })


function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById('password').value;
    // console.log(username);
    // console.log(typeof username);
    // console.log(password);
    // console.log(typeof password);
    // console.log(userDetails.has(username));
    // console.log(userDetails.get(username));

    if (userDetails.has(username) && password == userDetails.get(username)) {

        
        // alert("successful login");
        // return location.href = "../music.html";
       
    }
    else if(!userDetails.has(username)){
        alert("user doesn't exist , create a new account");
        return false;
    }
    else {
        alert("Wrong UserName or PassWord  !! Enter Correct Password");
        return false;

    }
}

