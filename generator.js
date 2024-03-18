function generatePassword() {
  let x = document.getElementById("rangeNumber").value;
  let pass = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (let i = 1; i <= x; i++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }

  document.getElementById("generated-passowrd").innerText = pass;
}
