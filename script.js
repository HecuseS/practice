let htmlEnternet = document.getElementById("some-text");
//task2
htmlEnternet.classList.add('text-danger');
//task3

const button = document.createElement('button');
button.classList.add('btn');
button.classList.add('btn-info');
button.textContent = " I'm progger Baby";
let bod = document.getElementsByTagName('body')[0];
bod.appendChild(button);
//task4

let changeColor = () => {
  htmlEnternet.classList.remove('text-danger');
  htmlEnternet.classList.add('text-success');

  button.removeEventListener('click', changeColor);

  button.addEventListener('click', () => {
    //task5
    htmlEnternet.classList.remove('text-success');
    htmlEnternet.classList.add('text-primary');

  });
}

button.addEventListener('click', changeColor);

//task6
var div = document.createElement('div');
document.body.appendChild(div);
div.classList.add('d-grid');
div.classList.add('col-12');
div.classList.add('container');
div.appendChild(button);

//task7

let my_form = document.createElement('form');
my_form.classList.add('row');
my_form.classList.add('g-3');
my_form.classList.add('needs-validation');
my_form.setAttribute('novalidate', "");

bod.appendChild(my_form);

my_form.innerHTML = 
'<div class= "col-md-4">' +
  '<label for="validationCustom01" class="form-label">Login</label>' +
  '<input type="text" class="form-control" id="validationCustom01" required>' +
  '<div class="valid-feedback">' +
  'Looks good!' +
  '</div>' +
'</div>' +
'<div class="col-md-4">' +
  '<label for="inputPassword4" class="form-label">Password</label>' +
  '<input type="password" class="form-control" id="inputPassword4" required>' +
  '<div class="valid-feedback">' +
  'Looks good!' +
  '</div>' +
'</div>' +
'<div class="col-md-4">' +
  '<label for="inputEmail4" class="form-label">Email</label>' +
  '<input type="email" class="form-control" id="inputEmail4" required>' +
  '<div class="valid-feedback">' +
  'Looks good!' +
  '</div>' +
'</div>' +
'<div class="col-md-3">' +
  '<label for="validationCustom04" class="form-label">Rh factor</label>' +
  '<select class="form-select" id="validationCustom04" required>' +
  '<option selected disabled value="">Choose Rh</option>' +
  '<option value="1">Rh+</option>' +
  '<option value="2">Rh-</option>' +
  '</select>' +
  '<div class="invalid-feedback">' +
  'Please select a valid Rh factor.' +
  '</div>' +
'</div>' +
'<div class="col-md-3">' +
  '<label for="startDate" class="form-label">Date of birth</label>' +
  '<input id="startDate" class="form-control" type="date" required>' +
'</div>' +
  '<div class="col-12">' +
  '<button class="btn btn-primary" type="submit">Submit form</button>' +
  '</div>';

let startDate = document.getElementById('startDate');
startDate.addEventListener('change', (e) => { });

(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation');
  let isFormValid = true;

  const Http = new XMLHttpRequest();
  const url = 'https://sobaka-ne-sutulaya.net';

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          isFormValid = false;
        }

        form.classList.add('was-validated');
      }, false)
    })

    if(isFormValid == true){
      Http.open("GET", url);
      Http.send();
    }
})()
