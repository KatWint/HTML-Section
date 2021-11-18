function change() {
    document.getElementById("name").innerHTML = "Kat Wint";
}

var profile = document.getElementById("todd");
var requests = 2
function remove() {
    profile.remove();
    requests--;
    document.getElementById("requests").innerHTML = requests + 'Connection Requests';
}