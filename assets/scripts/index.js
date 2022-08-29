let quantity = 12

var elements = "";
for (var i = 0; i < quantity; i++) {
   elements += '<div class="element"></div>';
}
var panel = document.getElementById("panel");
panel.innerHTML = elements;

