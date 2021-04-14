function appendContent (lang) {
    fetch('index.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.documentElement.setAttribute('lang', lang);
            document.getElementById("career").innerHTML=data.languages[lang].career;
            document.getElementById("about-header").innerHTML=data.languages[lang].about;
            appendAboutText(data.languages[lang].p_array);
            document.getElementById("license").innerHTML=data.languages[lang].license;
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

    function appendAboutText(data) {
        var aboutContainer = document.getElementById("about-body");
        for (var i = 0; i < data.length; i++) {
            var p = document.createElement("p");
            p.innerHTML = data[i];
            aboutContainer.appendChild(p);
        }
    }

} 

var userLanguage = (navigator.language || navigator.userLanguage).split("-")[0];
if (userLanguage == "es") {
    appendContent(userLanguage)
} else {
    appendContent("en")
}


if ('addEventListener' in window) {

    window.addEventListener('load', function() { 
        document.body.className = document.body.className.replace(/\bis-preload\b/, ''); 
    });
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');

}