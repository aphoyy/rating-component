let selected = 0;

function changeBackground(x) {
    const previousLabel = document.getElementsByClassName("rating")[selected];
    previousLabel.style.background = "";
    previousLabel.style.color = "";
    
    const label = document.getElementsByClassName("rating")[x];
    label.style.background = "var(--orange)";
    label.style.color = "var(--white)";
    selected = x;
}

// Take value from url (which come from the form)
function displayRating() {
    let rating = window.location.search.match(/\d/);
    document.getElementById("selection").innerHTML = "You selected " + rating + " out of 5";
}