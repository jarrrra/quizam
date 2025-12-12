var name = null;
var question_num = 0;

var types = {

сиамская : 0,
лысая : 0,
рыжий : 0,
манчкин : 0,
"мейн-кун" : 0,
сейшельская : 0,

};

var results = {

сиамская : "Пассив-агрессив, токсик, абьюзерка, да только все равно Вас любят и хотят погладить. Глупые людишки.",
лысая : "Душа 40летнего в теле котёнка. Ну, немного лысеющего и потеющего котёнка.",
рыжий : "У Вас нет породы, у Вас есть призвание. И это призвание — быть смешнявкой. И что, что у Вас одна клетка мозга? Зато Вас любят.",
манчкин : "Мелкий шкет, однако смелый и дерзкий. Не даёте себя в обиду, однако и за ушком Вас почесать все ещё можно",
"мейн-кун" : "Гигант с таким же большим сердцем. Можете не показывать этого, но у вас очень мягкая, чувствительная натура. А ещё Вы очень пушистые~",
сейшельская : "Я плохая — ты хороший.\n Рот от гнева перекошен.\n Не кричи — я не глухая.\n Ты хороший — я плохая.",

}

const rounds = [

{

name : "Введите имя",

  },

{

name : "Какой у Вас рост?",

options : ["Коротышка", "Гигант", "Достаточный", "Кот", "Меньше моих ушей"],

do(option){

	if (option == "1")
	{
		types.манчкин += 1;
	}

	if (option == "2")
	{
		types["мейн-кун"] += 1;
	}

	if (option == "3")
	{
		types.сиамская += 1; types.лысая += 1;
	}

	if (option == "4")
	{
		types.рыжий += 1;
	}

	if (option == "5")
	{
		types.сейшельская += 1;
	}

},

  },

{

name : "Как Вы отреагируете на ласку и нежности?",

options : ["Убью", "Атакую, но скоро сдамся", "Мммм, массажик сделай ещё, пж", "Сделаю вид, что мне нравится, а потом атакую!"],

do(option){

	if (option == "1")
	{
		types.сиамская += 1;
	}

	if (option == "2")
	{
		types.манчкин += 1;
	}

	if (option == "3")
	{
		types["мейн-кун"] += 1; types.лысая += 1; types.сейшельская += 1;
	}

	if (option == "4")
	{
		types.рыжий += 1;
	}

},

  },

{

name : "Насколько у Вас длинные волосы?",

options : ["Короче ушей", "Длиииинные", "Ну, средненькие", "Не длинные, но мягкие и пушистые", "Я лысею((("],

do(option){

	if (option == "1")
	{
		types.сейшельская += 1;
	}

	if (option == "2")
	{
		types["мейн-кун"] += 1;
	}

	if (option == "3")
	{
		types.рыжий += 1; types.сиамская += 1;
	}

	if (option == "4")
	{
		types.манчкин += 1;
	}

	if (option == "5")
	{
		types.лысая += 1;
	}

},

  },

{

name : "Какую эмоцию вы испытываете чаще всего?",

options : ["Умиротворение", "Гнев", "Грусть", "Чипи-чипи чапа-чапа", "Страх", "Игривость"],

do(option){

	if (option == "1")
	{
		types["мейн-кун"] += 1;
	}

	if (option == "2")
	{
		types.сиамская += 1;
	}

	if (option == "3")
	{
		types.сейшельская += 1;
	}

	if (option == "4")
	{
		types.рыжий += 1;
	}

	if (option == "5")
	{
		types.лысая += 1;
	}

	if (option == "6")
	{
		types.манчкин += 1;
	}

},

  },

{

name : "Выберите перечень цветов",

options : ["Пепельно-розовый, лавандовый", "Желто-оранжевый, песочный", "Темно-синий, изумрудный", "Беж, кофейный, молочный"],

do(option){

	if (option == "1")
	{
		types.лысая += 1;
	}

	if (option == "2")
	{
		types.рыжий += 1; types["мейн-кун"] += 1;
	}

	if (option == "3")
	{
		 types.сейшельская += 1;
	}

	if (option == "4")
	{
		types.сиамская += 1; types.манчкин += 1;
	}

},

  },

];

function setQuestions(qnum)
{

if (question_num == 1)
	document.getElementById("control").value = "Дальше";

document.getElementById("question").innerHTML = rounds[qnum].name;

var frm = document.getElementById("form");
var inf = rounds[qnum].options;

frm.innerHTML = '<input type= "radio" name="pick" value = "1">' + inf[0] + '<br><br>';

for (var i = 1; i < inf.length; i++)
{

frm.innerHTML += '<input type= "radio" name="pick" value =' + (i+1) + '>' + inf[i] + '<br><br>';
}
}

const getMaxKey = obj => {

	const maxValue = Math.max.apply(null, Object.values(obj))
	return Object.keys(obj).filter(k => obj[k] == maxValue)

}

function ClickButton()
{

var el = document.getElementById("name");

if (question_num == 0)
{

	if (el.value != "")
	{
		name = el.value;
		question_num++;
		setTimeout(setQuestions(question_num), 4000);

	}
	else
	{
		alert("Введите имя");
	}

}
else if (question_num == rounds.length - 1)
{
	var state = document.querySelectorAll('input[name = "pick"]');
	var found = false;

	for (var radio of state)
	{
		if(radio.checked){
			found = true;	
			var result = getMaxKey(types)[0];
			question_num++;
			document.getElementById("test-form").innerHTML = '<label for = "name" id = "question">Поздравляю, ' + name + '! Вы ' + result + '</label><br><br>' +
			'<div for = "questions" id = "form">' + results[result] + '</div><br><br>' +
			'<input type="button" name="button" onclick = "ClickButton()" value="Пройти заново"><br><br>';

			if (result == "сейшельская")
				document.getElementById("test-form").innerHTML += '<audio src = "aud/яплохаятыхороший.wav" autoplay></audio>'

			document.getElementById("test-img").src = "img/cat/" + result + ".GIF";
		}
	}

	if(!found)
		alert("Ничего не выбрано");


}
else if (question_num >= rounds.length)
{
	if (confirm("Вы уверены, что хотите перепройти тест?"))
		location.reload();
		


}

else
{
	var state = document.querySelectorAll('input[name = "pick"]');
	var found = false;

	for (var radio of state)
	{
		if(radio.checked){
			found = true;
			rounds[question_num].do(radio.value);
			question_num++;
			setTimeout(setQuestions(question_num), 4000);	
		}
	}

	if(!found)
		alert("Ничего не выбрано");
}

}