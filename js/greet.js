
document.getElementsByClassName("externallink")[0].addEventListener("click", external_check);

function external_check(e) {
    if (confirm("Would you really leave us? :-'( ")) {
        return;
    }
    else {
        e.preventDefault();
    }
}
