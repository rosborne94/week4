function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
function calculate(){
  var billAmount = $('#bill').value();
  var serviceQuality = $('#service').value();
  var numPeople = $('#people').value();

  if (billAmount == "" || serviceQuality == 0){
    window.alert("Please enter values");
    return;
  }
  if (numPeople == "" || numPeople <= 1){
    numPeople = 1;
    $('#each').style.display = "none";
  }
  else {
    $('#each').style.display = "block";
  }
  var total = (billAmount * serviceQuality) / numPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
$('#totalTip').style.display = "block";
$('#tip').innerHTML = total;
$('#calculate').onclick = function() {
  calculateTip();
};
}
