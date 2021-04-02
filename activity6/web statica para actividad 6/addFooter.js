
fetch('footer.html')
    .then(res => res.text())
    .then(data => includeFooter(data));



function includeFooter(data) {

    var footer = document.querySelector('footer');

    footer.className= 'page-footer font-small ';

    footer.innerHTML = data;

}

