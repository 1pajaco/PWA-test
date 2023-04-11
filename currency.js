const inputField = document.getElementById('input-currency');
const fromTypeField = document.getElementById('input-type');
const toTypeField = document.getElementById('output-type');
const outputField = document.getElementById('output-currency');
const form = document.getElementById('currency');
var curr = '';

function convertCurrency(currency, fromType, toType) {

    if (fromType == 'e') {
        if (toType == 'u') {
            return currency / 1.09;
        } else if (toType == 'p') {
            return currency / 0.88;
        }
        return currency; 
    }
    if (fromType == 'u') {
        if (toType == 'e') {
            return currency * 1.09;
        } else if (toType == 'p') {
            return currency / 0.80;
        }
        return currency;
    }
    if (fromType == 'p') {
        if (toType == 'e') {
            return currency * 0.88;
        } else if (toType == 'u') {
            return currency * 0.80;
        }
        return currency;
    }
    throw new Error('Invalid Type');

}

form.addEventListener('input', () => {
    const inputCurrency = parseFloat(inputField.value);
    const fromType = fromTypeField.value;
    const toType = toTypeField.value;

    if (toType == 'e') {
        curr = '\u20AC';
    } else if (toType == 'u') {
        curr = '$';
    } else {
        curr = '\u00A3';
    }

    const outputCurrency = convertCurrency(inputCurrency, toType, fromType);
    outputField.value = (Math.round(outputCurrency * 100) / 100) + ' ' + curr.toUpperCase();
});

