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

let changeColor = () =>
    {
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
//https://getbootstrap.com/docs/5.0/forms/validation/
let my_form = document.createElement('form');
my_form.classList.add('row');
my_form.classList.add('g-3');
my_form.classList.add('needs-validation');
my_form.setAttribute('novalidate',"");
  
bod.appendChild(my_form);

//login
let div_login = document.createElement('div'); 

my_form.appendChild(div_login);

let label_login = document.createElement('label');
label_login.setAttribute('for','validationCustom01');
label_login.classList.add('form-label');
label_login.innerText = 'Login';
label_login.classList.add('container');

div_login.appendChild(label_login);

let input_login = document.createElement('input');
input_login.setAttribute('type','text');
input_login.classList.add('form-control');
input_login.setAttribute('id','validationCustom01');
input_login.setAttribute('required','');
input_login.classList.add('container');

div_login.appendChild(input_login);

//Password
let div_password = document.createElement('div');
my_form.appendChild(div_password);

let label_password = document.createElement('label');
label_password.setAttribute('for','validationCustom01');
label_password.classList.add('form-label');
label_password.innerText = 'Password';
label_password.classList.add('container');

div_password.appendChild(label_password);

let input_password = document.createElement('input');
input_password.setAttribute('type','password');
input_password.classList.add('form-control');
input_password.setAttribute('id','floatingPassword');
input_password.setAttribute('placeholder','');
input_password.classList.add('container');

div_password.appendChild(input_password);

//email
let div_email = document.createElement('div');
my_form.appendChild(div_email);

let label_email = document.createElement('label');
label_email.setAttribute('for','inputEmail');
label_email.classList.add('form-label');
label_email.innerText = 'Email';
label_email.classList.add('container');

div_email.appendChild(label_email);

let input_email = document.createElement('input');
input_email.setAttribute('type','email');
input_email.classList.add('form-control');
input_email.setAttribute('id','floatingInputValue');
input_email.classList.add('container');

div_email.appendChild(input_email);

//rezus-factor
let div_rzf = document.createElement('div');
my_form.appendChild(div_rzf);

let select_rzf = document.createElement('select');
select_rzf.classList.add('form-select');
select_rzf.setAttribute('id','floatingSelectGrid');
select_rzf.setAttribute('aria-label','Floating label select example');

div_rzf.appendChild(select_rzf);

let select_rzf = document.createElement('select');


label_email.innerText = 'Email';
label_email.classList.add('container');

div_email.appendChild(label_email);

let input_email = document.createElement('input');
input_email.setAttribute('type','email');
input_email.classList.add('form-control');
input_email.setAttribute('id','floatingInputValue');
input_email.classList.add('container');

div_email.appendChild(input_email);

//date

//кнопка
let div_btn = document.createElement('div');
div_btn.classList.add('btn');
div_btn.classList.add('btn-primary');
div_btn.setAttribute('type','submit');
div_btn.innerText = 'Submit form';
input_password.classList.add('container');

bod.appendChild(div_btn);

