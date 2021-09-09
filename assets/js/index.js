'use strict';

window.addEventListener("load", () => {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.withCredentials = true;
    xmlHttp.onload = function() {
        console.log('Count: ' + this.responseText);
        const welcome = document.querySelector('.page__lead');

        if (this.responseText && welcome) {
            welcome.innerHTML = `Welcome to my personal site, Visitor no. ${this.responseText} :)`;
        }
    };
    xmlHttp.open('GET', 'https://hitcounter.pythonanywhere.com/count', true);
    xmlHttp.send(null);
});
