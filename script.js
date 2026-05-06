const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        toggleButton.innerHTML = "☀️";

    } else {

        toggleButton.innerHTML = "🌙";

    }

});