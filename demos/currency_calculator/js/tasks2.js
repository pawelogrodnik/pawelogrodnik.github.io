// Zmienna posiadająca aktualny kurs EURO
var kurs = 0;

// Suma transakcji w EUR
var akumulator = 0;

// Zmienne posiadające najwyższą wartość transakcji
var topEUR = 0;
var topPLN = 0;


$(document).ready(function() {
    // Funkcja wywoływana w momencie wcisnięcia buttona o id #submit
    // Funkcja dodaje transakcję do tablicy, dba o wyświetlanie poprawnej wartości najwyższej transakcji
    $('#submit').click(function() {
        var nazwa = $('#nazwa').val();
        var kwotaEUR = parseFloat($('#kwota').val());
        var kwotaPLN = zaokraglijDoDwoch(kurs * kwotaEUR); 

        // Dodanie informacji o najwyższej transakcji bądź zaktualizowanie jej
        if( $('#top').is(':empty') || (topEUR<kwotaEUR) ) {
            topEUR = kwotaEUR;
            topPLN = kwotaPLN;
            $("#top").html("<h3>Najwyższa kwota transakcji to: "+kwotaEUR+" EUR ("+kwotaPLN+" PLN)</h3>");
        }

        akumulator += kwotaEUR;
        $("#akum").html("Suma transakcji to: "+zaokraglijDoDwoch(akumulator)+" <br> Nazwa -- Kwota EUR -- Kwota PLN");
        $('#output').prepend("<li>"+nazwa+", "+kwotaEUR+", "+kwotaPLN+"</li>");
    });

    // Funkcja usuwająca element z tablicy
    $('#output').on('click', 'li', function() {

        // Zmienna poiadająca wartość "klikniętego" elementu <li>
        var str = $(this).html();
        var dzielString = str.split(", ");

        // Aktualizacja akumulatora poprzez odjęcie wartości usuniętej transakcji
        // dzielString[1] to kwota EURO danej transakcji
        akumulator-=parseFloat(dzielString[1]);

        $("#akum").html("Suma transakcji to: "+zaokraglijDoDwoch(akumulator)+" <br> Nazwa -- Kwota EUR -- Kwota PLN");
        $("info").html("Nazwa -- Kwota EUR -- Kwota PLN");
        $(this).remove();
    });
});

function zaokraglijDoDwoch (num) {
    return Math.round(num * 100) / 100;
}

// Konfiguracja początkowa:
function init() {
    'use strict';

    // Pobranie JSONA z kursem
    $.getJSON('http://api.fixer.io/latest', function(data){
        // zmienna kurs z wartością aktualnego kursu EURO
        kurs = zaokraglijDoDwoch(data.rates.PLN);
        $("#euro").html(kurs);
    });
} // Koniec funkcji init().
window.onload = init;


