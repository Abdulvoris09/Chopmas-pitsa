const radioCustoms = document.querySelectorAll('.radio-custom');
const classDiv = document.querySelector('.class');

radioCustoms.forEach(radioCustom => {
    radioCustom.addEventListener('click', handleRadioCustomClick);
});

function handleRadioCustomClick(event) {
    const clickedRadioCustom = event.target;

    radioCustoms.forEach(radioCustom => {
        radioCustom.style.backgroundColor = 'white';
        radioCustom.style.color = 'black';
    });

    clickedRadioCustom.style.backgroundColor = 'red';
    clickedRadioCustom.style.color = 'white';
};

const select = document.querySelector('.select');
const labell = document.querySelector('.labell .ss');
select.addEventListener('change', function () {
    labell.textContent = select.value;
});


const radios = document.querySelectorAll('.radio-custom');
const labelll = document.querySelector('.labelll .ss');

radios.forEach(radio => {
    radio.addEventListener('click', function () {
        labelll.textContent =  radio.textContent;
    });
});


const checkboxes = document.querySelectorAll('.crad');
const ulElement = document.querySelector('.labellll .ss');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        const spanText = checkbox.nextElementSibling.textContent;
        if (checkbox.checked) {
            const liElement = document.createElement('li');
            liElement.textContent = spanText;
            ulElement.appendChild(liElement);
        } else {
            const liElements = ulElement.getElementsByTagName('li');
            for (let i = 0; i < liElements.length; i++) {
                if (liElements[i].textContent === spanText) {
                    ulElement.removeChild(liElements[i]);
                    break;
                }
            }
        }
    });
});



const checkboxs = document.querySelectorAll('.cras');
const ulElemnt = document.querySelector('.labelllll .ss');

checkboxs.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        const spanText = checkbox.nextElementSibling.textContent;
        if (checkbox.checked) {
            const liElemnt = document.createElement('li');
            liElemnt.textContent = spanText;
            ulElemnt.appendChild(liElemnt);
        } else {
            const liElemnts = ulElemnt.getElementsByTagName('li');
            for (let i = 0; i < liElemnts.length; i++) {
                if (liElemnts[i].textContent === spanText) {
                    ulElemnt.removeChild(liElemnts[i]);
                    break;
                }
            }
        }
    });
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          checkbox.style.backgroundColor = 'red';
        } else {
          checkbox.style.backgroundColor = '';
        }
      });
});



// const checkboxx = document.getElementById('crad');
//     const spann = document.querySelector('.sapn');

//     // checkboxx.addEventListener('click', function(){

//     // const checkbox = document.getElementById('crad');
//     // const span = document.querySelector('.sapn');
//     // });

//     checkboxx.addEventListener('change', () => {
//       if (checkboxx.checked) {
//         checkbox.style.backgroundColor = 'red';
//       } else {
//         checkbox.style.backgroundColor = '';
//       }
//     });
