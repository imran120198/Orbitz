let espn=document.querySelector("#Espanol").addEventListener("click",espanolfun)
function espanolfun(){alert("Currently Spanish language is not available")}

//2nd div

document.getElementById("nationalPark").addEventListener("click", function(){
    event.preventDefault();
    window.open("https://www.orbitz.com/blog/2016/01/national-parks-centennial/")
})

document.getElementById("roadTrip").addEventListener("click", function () {
        event.preventDefault();
        window.open("https://www.orbitz.com/blog/2016/08/perfect-road-trips-every-season/")
    })

