// PJ0601 - Bouwen benodigde vrijwilligers teller
const aanmeldText = document.getElementById("aanmeld_text");
const SCaanmeldText = document.getElementById("SCaanmeld_text");
const aanmeldCount = document.getElementById("aanmeld_count");
const submitBtn  = document.getElementById("submit");
let count = 15;

submitBtn .addEventListener("click", () => {
  if (count > 0) {
  count--;
}
aanmeldCount.innerText = count;
  if(count <= 5){
    SCaanmeldText.innerText = ("Wees snel er zijn nog plekken!!");
  }else if(count <= 10){
    SCaanmeldText.innerText = ("Nog 10 mensen");
  }else{
    SCaanmeldText.innerText = ("Het Begin is er!");
  }
});