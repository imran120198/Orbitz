document.querySelector("#form").addEventListener("submit",formfumction)
var userDataBase=JSON.parse(localStorage.getItem("userDataBase"))||[];



var bookedHotels=[];
var currentUser=[];
localStorage.setItem("User",JSON.stringify(currentUser))




function formfumction(){ 
    event.preventDefault();
    // taking info from user

    var email=document.querySelector("#email").value;
    var firstName=document.querySelector("#firstName").value;
    var lastName=document.querySelector("#lastName").value;
    var password=document.querySelector("#password").value;
    //checking if user already exist
    let exist=0;

   userDataBase.map(function(elem){

       if( elem.Email===email)
       {
           exist=1;
           document.querySelector("#sendingMessage").innerHTML="account with this email already exist"
       }
       
    })
    
    //if user doesn't exist
    if(exist===0){

         
   var userDataBaseobj={
         Email:email,
         FirstName:firstName,
         LastName:lastName,
         Password:password,
   }
   
   
   
   userDataBase.push(userDataBaseobj);
// console.log( userDataBaseobj);
localStorage.setItem("userDataBase",JSON.stringify( userDataBase));
//creating saperate object for user,all info related to user will be stored here
localStorage.setItem(email,JSON.stringify(bookedHotels)
)
// console.log(`${email}`)
}

    

}