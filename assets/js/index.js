'use strict';

window.addEventListener("load", () => {
    const dnm = 'stefanheng.github.io';

    // var xhr = new XMLHttpRequest();
    // xhr.responseType = "json";
    // xhr.onload = function() {
    //     // console.log('request loaded');
    //     // console.log('request response', this.response);

    //     const welcome = document.querySelector('.page__lead');
    //     welcome.innerHTML = `Welcome to my personal site, Visitor #${this.response.value} :)`;
    // }
    // xhr.open('GET', `https://api.countapi.xyz/hit/${dnm}/visits`);
    // xhr.send();
    // // console.log('request sent');

    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.onload = function() {
        console.log('Count: ' + this.responseText);
    };
    // xhr.open('GET', 'https://stefanheng.github.io', true);
    xml.open('GET', 'https://hitcounter.pythonanywhere.com/count', true);
    xhr.send(null);
    console.log('2nd request sent');

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.withCredentials = true;
    xmlHttp.open('GET', 'https://hitcounter.pythonanywhere.com/count', false);
    xmlHttp.send(null);
    console.log('3rd request sent');

    count = xmlHttp.responseText;
    console.log('Count 2: ' + count);

    // let targetUrl = 'stefanheng.github.io';
    // fetch(`https://hitcounter.pythonanywhere.com/count?url=${encodeURIComponent(targetUrl)}`, {
    //     credentials: 'include'
    // })
    //     .then(res => res.text())
    //     .then(count => console.log('Count: ' + count));
});
