
//clicking a picture and make it fullscreen
var modal = document.getElementById("myModal");
var img = document.getElementById("flowerShop");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


window.onload = function() {
    if(img != null){
        img.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
        }
        var span = document.getElementsByClassName("close")[0];

        span.onclick = function() {
        modal.style.display = "none";
        }
    } 
    else{
        //after clicking submit
        let form = document.getElementsByTagName("form")[0];
        form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Form Submitted!");
        });

    }
 

}


//nav bar- know where we at
const activePge = window.location.href;
const navList = document.querySelectorAll('nav a').
forEach(link => {
    if(link.href == activePge){
        console.log(activePge);
        link.classList.add('active');
    }
});
