
function changeTheme() {
    document.body.classList.toggle("dark-mode");

    var icon = document.getElementById("themeIcon");

    if (document.body.classList.contains("dark-mode")) {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}
