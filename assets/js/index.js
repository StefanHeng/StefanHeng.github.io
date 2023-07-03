'use strict';

import countapi from 'countapi-js';

countapi.visits().then((result) => {
    console.log(result.value);
  });


window.addEventListener("load", () => {
    // let xmlHttp = new XMLHttpRequest();
    // xmlHttp.withCredentials = true;
    // xmlHttp.onload = function() {
    //     console.log('Count: ' + this.responseText);
    //     const welcome = document.querySelector('.page__lead');

    //     if (this.responseText && welcome) {
    //         welcome.innerHTML = `Welcome to my personal site, Visitor #${this.responseText} :)`;
    //     }
    // };
    // xmlHttp.open('GET', 'https://hitcounter.pythonanywhere.com/count', true);
    // xmlHttp.send(null);

    const dnm = 'stefanheng.github.io';

    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onload = function() {
        console.log('request loaded');
        console.log('request response', this.response);
        // document.getElementById('visits').innerText = this.response.value;

        const welcome = document.querySelector('.page__lead');
        welcome.innerHTML = `Welcome to my personal site, Visitor #${this.response.value} :)`;
    }
    xhr.open('GET', `https://api.countapi.xyz/hit/${dnm}/visits`);
    xhr.send();
    console.log('request sent');
});
