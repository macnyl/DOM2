'use strict';

// 1.Сделать два инпута: в один вводить параметр(число), во втором показывать объем шара при заданном параметре. Навесить валидацию на 1-й инпут.
const sphereVol = function(){
    const radius = document.getElementById('radius').value;
    const c = (4/3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("outputVolume").innerHTML = c;
}

const radius = document.getElementById('radius');
radius.addEventListener('input', function (event){
    if(radius.validity.typeMismatch){
        radius.setCustomValidity('incorrect')
    } else {
        radius.setCustomValidity('correct')
    }
});

// 2.Дан элемент #elem. Реализуйте 4 функции:
// - Добавьте ему класс www.
// - Удалите у него класс www.
// - Проверьте наличие у него класса www.
// - Добавьте ему класс www, если его нет и удалите - если есть.
const elementEdit = document.querySelector('.elementEdit');
elementEdit.style.width = '150px';
elementEdit.style.paddingBottom = '5px';
elementEdit.classList.add('www')
elementEdit.classList.remove('www')
console.log(elementEdit.classList.contains('www'));
elementEdit.classList.add('www')

// 3. Вставьте элементы массива объектов (id, title, description) в конец ul так, чтобы каждый на каждый объект был свой li.
// Сделайте так, чтобы по нажатию на li - он подсвечивался другим цветом.
// Сделайте так, чтобы по нажатию на кнопку внутри li эта li удалялась из разметки.
const arrObj = [
	{ id: 1, title: "title1", description: "description1" },
	{ id: 2, title: "title2", description: "description2" },
	{ id: 3, title: "title3", description: "description3" },
	{ id: 4, title: "title4", description: "description4" },
];

const listOfli = document.getElementById("listOfli");

arrObj.forEach((item) => listOfli.append(listGenerator(item)));

function listGenerator({ id, title, description }) {
	const listItem = document.createElement("li");
	listItem.append(`${id}) ${title}: ${description}`);
	listItem.addEventListener("click", changeBgColor);

	const delBtn = document.createElement("button");
	delBtn.innerText = "X";
	delBtn.onclick = ({ target }) => {
		target.parentElement.remove();
	};
	listItem.append(delBtn);

	return listItem;
}

function changeBgColor({ target }) {
	if (!target.style.backgroundColor) {
		target.style.backgroundColor = "yellow";
	} else {
		target.style.backgroundColor = "";
	}
}





