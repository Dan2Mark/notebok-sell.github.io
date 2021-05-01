/* Установите ширину боковой панели на 250 пикселей (показать его) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "70%";
  document.getElementById("sidetext").style.color = 'white';
}

/* Установите ширину боковой панели в 0 (скройте ее) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0%";
  document.getElementById("sidetext").style.color = 'black';
}