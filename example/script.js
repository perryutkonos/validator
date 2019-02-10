var setError = function (field) {

  field.classList.remove('success');
  field.classList.add('error');
  field.nextElementSibling.classList.add('active')
};

var deleteError = function(field) {

  field.classList.remove('error');
  field.classList.add('success');
  field.nextElementSibling.classList.remove('active')
};

var validator = validation({
  formSelector: '.form',
  setError:setError,
  deleteError: deleteError
});

document.forms[0].addEventListener('submit', function (event) {

  event.preventDefault();
  alert(validator.formValidate(this) ? 'success' : 'error');
});