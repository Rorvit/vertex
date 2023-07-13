var representativeInput = document.getElementById('representative');
var businessTripInput = document.getElementById('businessTrip');
var carInput = document.getElementById('car');
var otherInput = document.getElementById('other');
var totalInput = document.getElementById('total');

representativeInput.addEventListener('input', calculateTotal);
businessTripInput.addEventListener('input', calculateTotal);
carInput.addEventListener('input', calculateTotal);
otherInput.addEventListener('input', calculateTotal);

function calculateTotal() {
  var representative = parseFloat(representativeInput.value) || 0;
  var businessTrip = parseFloat(businessTripInput.value) || 0;
  var car = parseFloat(carInput.value) || 0;
  var other = parseFloat(otherInput.value) || 0;

  var total = representative + businessTrip + car + other;
  totalInput.value = total.toFixed(2);
}
