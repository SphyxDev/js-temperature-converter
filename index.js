const from = document.getElementById("from");
const unitFrom = document.getElementById("unitFrom");
const to = document.getElementById("to");
const unitTo = document.getElementById("unitTo");

function readInput(inputField) {
    if (inputField.value === "") {
        return NaN;
    }
    else {
        return inputField.value;
    }
}

from.oninput = onFromValueChanged;
unitFrom.oninput = onFromValueChanged;
unitTo.oninput = onFromValueChanged;
function onFromValueChanged() {
    to.value = convert(unitFrom.value, unitTo.value, readInput(from));
}

to.oninput = onToValueChanged;
function onToValueChanged() {
    from.value = convert(unitTo.value, unitFrom.value, readInput(to));
}

const conversionFormulas = {
    CtoC: (C) => C,
    CtoF: (C) => C * 9 / 5 + 32,
    CtoK: (C) => C + 273.15,
    CtoR: (C) => C * 9 / 5 + 491.67,

    FtoC: (F) => (F - 32) * 5 / 9,
    FtoF: (F) => F,
    FtoK: (F) => (F + 459.67) * 5 / 9,
    FtoR: (F) => F + 459.67,

    KtoC: (K) => K - 273.15,
    KtoF: (K) => K * 9 / 5 - 459.67,
    KtoK: (K) => K,
    KtoR: (K) => K * 9 / 5,

    RtoC: (R) => (R - 491.67) * 5 / 9,
    RtoF: (R) => R - 459.67,
    RtoK: (R) => R * 5 / 9,
    RtoR: (R) => R
};

function convert(unitFrom, unitTo, value) {
    if (isNaN(value)) {
        return "";
    }

    const key = `${unitFrom.charAt(0)}to${unitTo.charAt(0)}`;
    const result = conversionFormulas[key](+value);
    return roundResult(result);
}

function roundResult(result) {
    return +result.toFixed(3);
}
