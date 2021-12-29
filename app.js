let inputNumber = document.getElementById('inputNumber')
let binaryConverterBtn = document.getElementById('binaryConverter')
let octalConverterBtn = document.getElementById('octalConverter')
let hexaConverterBtn = document.getElementById('hexaConverter')
let numberOutput = document.getElementById('numberOutput')

// Binary converter
binaryConverter.addEventListener('click', function (e) {
    let number = inputNumber.value
    if (number == '') {
        alert('Provide a valid number ')
        inputNumber.value = ''
    } else {
        let binaryNumber = Number(number).toString(2)
        numberOutput.innerText = binaryNumber
        inputNumber.value = ''
    }
})

// Octal converter
octalConverterBtn.addEventListener('click', function (e) {
    let number = inputNumber.value
    if (number == '') {
        alert('Provide a valid number ')
        inputNumber.value = ''
    } else {
        let binaryNumber = Number(number).toString(8)
        numberOutput.innerText = binaryNumber
        inputNumber.value = ''
    }
})

// Hexa converter

hexaConverterBtn.addEventListener('click', function (e) {
    let number = inputNumber.value
    if (number == '') {
        alert('Provide a valid number ')
        inputNumber.value = ''
    } else {
        let binaryNumber = Number(number).toString(16)
        numberOutput.innerText = binaryNumber
        inputNumber.value = ''
    }
})