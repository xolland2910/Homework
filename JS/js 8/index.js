let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.prepend(wrapper);

let span = document.createElement('span');
span.classList.add('span');
span.innerText = `Price`;
wrapper.appendChild(span);

let form = document.createElement('form');
form.classList.add('form');
wrapper.appendChild(form);

let field = document.createElement('input');
field.setAttribute('type', 'text');
field.setAttribute('placeholder', 'Enter price...');
field.classList.add('field-inactive');
field.classList.add('field');
form.appendChild(field);

let errorMessage = document.createElement('span');

function fieldOnFocus() {
    field.classList.remove('field-error');
    field.classList.remove('field-inactive');
    field.classList.add('field-active');
    errorMessage.remove();
}

function fieldOnBlur() {
    if (+field.value < 0 || Number.isNaN(+field.value)) {
        field.classList.remove('field-active');
        field.classList.add('field-error');
        errorMessage.classList.add('error-message');
        errorMessage.innerText = `Please enter correct price`;
        form.appendChild(errorMessage);

    } else {
        field.classList.remove('field-error');
        field.classList.remove('field-active');
        field.classList.add('field-inactive');

        if (field.value.trim().length > 0) {
            let value = field.value;
            let deleteButton = document.createElement('span');
            deleteButton.classList.add('delete');
            deleteButton.innerText = `X`;

            if (!document.querySelector('.price-wrapper')) {
                let priceWrapper = document.createElement('span');
                priceWrapper.innerText = `Current price: ${value}`;
                priceWrapper.classList.add('price-wrapper');
                priceWrapper.appendChild(deleteButton);
                form.prepend(priceWrapper);
                deleteButton.addEventListener('click', () => {
                    priceWrapper.remove();
                    field.value = '';
                });

            } else {
                let priceWrapper = document.querySelector('.price-wrapper');
                priceWrapper.innerText = `Current price: ${value}`;
                priceWrapper.appendChild(deleteButton);
                deleteButton.addEventListener('click', () => {
                    priceWrapper.remove();
                    field.value = '';
                });
            }
        }
    }
}

field.addEventListener('focus', fieldOnFocus);
field.addEventListener('blur', fieldOnBlur);