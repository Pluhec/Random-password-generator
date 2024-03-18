var copybtn = document.getElementById("copy-btn")
var password = document.getElementById("generated-password")

copybtn.onclick = function(){
    navigator.clipboard.writeText(password.innerHTML)
}