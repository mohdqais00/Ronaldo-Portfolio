function displayValue (val) {
    document.getElementById("display").value =  document.getElementById("display").value + val
}

function cleardisplay(){
    document.getElementById("display").value = "";
}
 
function calculate() {
      var uesrinput  =   document.getElementById("display").value;
      var result = eval(uesrinput);

      document.getElementById("display").value = result;
}