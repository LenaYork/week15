const chosenBackground = document.querySelector("#chooseBackground");
chosenBackground.addEventListener("change", function() {
    document.body.style.background = chosenBackground.value;
    console.log(chosenBackground.value);
});