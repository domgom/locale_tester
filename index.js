var lazy = require("lazy"),
    fs = require("fs"),
    Intl = require('intl');

new lazy(fs.createReadStream('./locales.txt'))
    .lines
    .forEach(function (line) {

            //console.log('Testing locale: ' + line);

            var test = new Intl.NumberFormat(line+'',{
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 2
            }).format(-5000.25);

            if (test === '-€ 5.000,25') {
                console.log("FOUND! " + line);
            }
    }
);