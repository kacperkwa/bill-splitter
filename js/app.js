const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const countBtn = document.querySelector('.count');
const error = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const countBill = () => {
	const priceValue = parseFloat(price.value);
	const peopleValue = parseInt(people.value);
	const tipValue = parseFloat(tip.value);
	const count = (priceValue + priceValue * tipValue) / peopleValue;
	cost.textContent = `${count.toFixed(2)}`;
	costInfo.style.opacity = '1';
};
const checkForm = () => {
	if (price.value === '' || people.value === '' || tip.value === '0') {
		error.style.opacity = '1';
		costInfo.style.opacity = '0';
	} else {
		error.style.opacity = '0';
		countBill();
	}
};

countBtn.addEventListener('click', checkForm);
