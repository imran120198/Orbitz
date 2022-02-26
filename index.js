
let espn=document.querySelector("#Espanol").addEventListener("click",espanolfun)
function espanolfun(){alert("Currently Spanish language is not available")}
var user=JSON.parse(localStorage.getItem("User"))
if(user!==null){
    var username=user.FirstName
    document.querySelector("#signIn a").innerText=user.FirstName
}