const Services = {
  electricity: 5.48,
  gas: 7.13,
  water: 44.88
}

const servicesList = document.querySelector('.calc__list')
const servicesItems = servicesList.querySelectorAll('.calc__amount')

const form = document.querySelector('.calc-form');
const formSets = form.querySelectorAll('.calc-form__set');
const formTotalResult = form.querySelector('.calc-form__total-result');

// Установка значений.
servicesItems.forEach((item) => {
  item.textContent = Services[item.getAttribute('id')];
});

// Проверка показания.
const checkInput = (input) => {
  if (input.value.length === 0) {
    input.value = '0';
  }
};

// Формула расчета.
const calcValue = (before, after, setName) => (Number(after) - Number(before)) * Services[setName];

// Перевод в строку.
const translateToString = (value) => (value.toFixed(2)).toString() + " руб.";

// Проверка значения.
const validateValue = (result, content) => {
  if (result < 0) {
    content.style.color = '#ff0000';
  } else {
    content.style.color = '#000000';
  }
};

// Расчет каждого значения.
const calcSet = (item) => {
  const inputBefore = item.querySelector('.js-input-before');
  const inputAfter = item.querySelector('.js-input-after');
  const setTotal = item.querySelector('.js-result');

  checkInput(inputBefore);
  checkInput(inputAfter);

  const result = calcValue(inputBefore.value, inputAfter.value, item.dataset.set);

  validateValue(result, setTotal);

  setTotal.textContent = translateToString(result);

  return result;
};

// Расчет всех значений.
const calcTotalSum = (items) => {
  let totalSum = 0;
  items.forEach((set) => {
    totalSum += calcSet(set);
  });
  formTotalResult.textContent = translateToString(totalSum);
  validateValue(totalSum, formTotalResult);
};

// Обработка формы.
const onSubmit = (evt) => {
  evt.preventDefault();
  calcTotalSum(formSets);
};

form.addEventListener('submit', onSubmit);
