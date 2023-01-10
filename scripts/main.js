
// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


// Used to switch to the page that was clicked
function navigateFunction(selected) {
    // TODO: get all components rather than brute force 'enum'
    const pages = ['home', 'about', 'portfolio', 'resume', 'contact']

    let size = pages.length;
    for (let i = 0; i < size; i++) {
        var x = document.getElementById(pages[i]);

        if (selected == pages[i]) {
            // un-hide if currently hidden
            if (x.className.indexOf("w3-hide w3-hide-large w3-hide-medium") != -1) {
                x.className = x.className.replace(" w3-hide w3-hide-large w3-hide-medium", "");
            }
        } else {
            // hide if currently unhidden
            if (x.className.indexOf("w3-hide w3-hide-large w3-hide-medium") == -1) {
                x.className += " w3-hide w3-hide-large w3-hide-medium";
            }
        }
    }
}

function navigateAndToggle(id) {
    toggleFunction();
    navigateFunction(id);
}