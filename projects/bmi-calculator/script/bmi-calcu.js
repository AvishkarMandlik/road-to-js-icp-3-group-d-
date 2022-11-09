let button = document.getElementById('btn');
button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    if (height && weight) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.5) {
            result.innerHTML = 'Under weight : ' + bmi;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML = 'Normal : ' + bmi;
        } else {
            result.innerHTML = 'Over weight : ' + bmi;
        }
    } else {
        alert('Please add a valid height and weight...');
        result.innerHTML = '';
    }
});