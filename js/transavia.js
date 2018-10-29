

var favoriet = document.querySelectorAll("article p+img");

for(var i = 0; i < favoriet.length; i++) {
    favoriet[i].addEventListener('click', hartje);
    favoriet[i].id = 'blauw'+(i);
}

function hartje() {
    console.log('hoi');

    var hartVeranderen = this.parentElement.querySelector('article p+img')
        hartVeranderen.src = "img/Favoriet.verhaal.blauw.png";
        hartVeranderen.classList.add('beat');

    var eenToevoegen = document.querySelector("body > header > nav > ul > li:nth-child(2) > a > img");
    eenToevoegen.id = 'hartEen';
    hartEen.src = "img/Favorieten.Icon.1.png";

}

var download = document.querySelectorAll('body > main > section > article > img:last-of-type');

for(var i = 0; i < download.length; i++) {
    download[i].addEventListener('click', veranderIcoon);
    download[i].id = 'vinkje'+(i);
}

function veranderIcoon(e) {
    console.log("geklikt");

    var laden = this.parentElement.querySelector('.progress');
    this.parentElement.querySelector('.progress').classList.add('animated');

    setTimeout(function(){
        laden.classList.remove('animated');

        var vinkToevoegen = laden.parentElement.parentElement.querySelector('img:last-of-type');
        vinkToevoegen.src = "img/Download.Vink.png";

        var eentjeToevoegen = document.querySelector("body > header > nav > ul > li:nth-child(3) > a > img");
        eentjeToevoegen.id = 'downloadEen';
        downloadEen.src = "img/Gedownload.Icon.1.png";

    }, 6000)
}


var filteren = document.querySelectorAll("#achtergrond > section > form > fieldset:nth-child(1) > div > label >[type=checkbox]");

for(var i = 0; i < filteren.length; i++) {
    filteren[i].addEventListener('click',knopAanpassen);
}

function knopAanpassen(){
    console.log('fantastisch');

    var knop = document.querySelector('body > main > div > section > form > input[type="submit"]');

    var totaal = 0;
    var spans = this.parentElement.parentElement.querySelectorAll("label > span");
    for(var i = 0; i < spans.length; i++) {

        if (filteren[i].checked) {
            var spanText = spans[i].innerText;
            console.log(spanText);
            spanText = spanText.replace('(',' ');
            spanText = spanText.replace(')',' ');
            totaal = parseInt(spanText) + totaal;
        }
    }

    knop.value = totaal + ' ' + 'resultaten tonen';

}


var radioButton = document.querySelector("[name=laatste]");

function checked() {
console.log('hoi');

    radioButton.classList.add('activeRadio');

}

radioButton.addEventListener("click", checked);

var link = document.querySelector("main > div > section > form > a");

function klapOpen() {

    var formulier = document.querySelector(".openKlappen");

    formulier.classList.remove('.openKlappen');
    formulier.classList.toggle('active');
}
link.addEventListener("click", klapOpen);
