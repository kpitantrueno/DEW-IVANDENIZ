
fetch('nav.html')
.then(res => res.text())
.then(data => includeNav(data));



function includeNav(data) {

var nav = document.querySelector('nav');

nav.className = 'navbar navbar-expand-sm bg-dark navbar-dark sticky-top';

nav.innerHTML = data ;

}