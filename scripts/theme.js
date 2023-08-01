const darktheme = document.getElementById("button-dark-theme")
var darkmode; 

darktheme.addEventListener("click", () => {
    document.body.classList.toggle("darkmode")
    darkmode = !darkmode
    localStorage.setItem("darkmode", darkmode)
}) 
function loadUserTheme(){
    darkmode = JSON.parse(localStorage.getItem("darkmode"))
    if(darkmode){
        document.body.classList = "darkmode"
    }
}
loadUserTheme()