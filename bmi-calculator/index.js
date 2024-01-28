const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    

    if ( height === '' || isNaN(height) || height < 0){
        results.innerHTML = "Please give a valid height";
    } else if ( weight === '' || isNaN(weight) || weight < 0){
        results.innerHTML = "Please give a valid weight";
    } else {
       const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       let category;
       if ( bmi <= 18.6 ){
        category = "Under Weight";
       } else if ( bmi >= 18.6 && bmi <= 24.9 ){
        category = "Normal Weight";
       } else if ( bmi > 24.9 ){
        category = "Overweight";
       }
       results.innerHTML = `<span>Your BMI is ${bmi}, which is ${category}.</span>`;
    }
})