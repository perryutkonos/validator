const validation = function ({ formSelector, setError, deleteError }) {

  const forms = document.querySelectorAll(formSelector);

  const fields = [];
  for (let i = 0; i < forms.length; i++) {

    forms[i].addEventListener('invalid', event => {
      event.preventDefault();
    }, true);

    const inputs = forms[i].querySelectorAll('input');
    for (let j = 0; j < inputs.length; j++) {
      fields.push(inputs[j])
    }
  }

  const validations = [
    'typeMismatch',
    'tooShort',
    'tooLong',
    'valueMissing',
    'badInput',
    'rangeOverflow',
    'rangeUnderflow',
    'patternMismatch'
  ];

  const setValidate = field => {

    let isValid = true;

    validations.forEach(validator => {

      if (field.validity[validator]) {
        setError(field);
        isValid = false;
      }
    });

    if (isValid) {
      deleteError(field);
    }

    return isValid;
  };

  const formValidate = form => {

    const currentInputs = form.querySelectorAll('input');

    let isValid = true;

    for (let i = 0; i < currentInputs.length; i++) {

      const field = currentInputs[i];
      isValid = setValidate(field)
    }
    return isValid;
  };

  fields.forEach(field => {
    field.addEventListener('blur', setValidate.bind(null, field));
  });
  
};

export default validation;