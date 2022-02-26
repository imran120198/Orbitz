

var userDataBase=JSON.parse(localStorage.getItem("userDataBase"))||[];
document.querySelector("#form").addEventListener("submit",formfumction)




function formfumction(){ 
    event.preventDefault();
    // taking info from user

    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    userDataBase.map(function(elem){
        let flag=0;
        if(email===elem.Email && password===elem.Password)
        {
            localStorage.setItem("User",JSON.stringify(elem))
            flag=1;
            location.href="index.html";
        }
        if(flag===0)
        {document.querySelector("#sendingMessage").innerHTML="email or password is incorrect"}


    })

  
    
   
   

   
 
// console.log( userDataBaseobj);

//creating saperate object for user,all info related to user will be stored here

// console.log(`${email}`)
}

    

