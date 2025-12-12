var name = null;
var question_num = 0;

var types = {

гусеница : 0,
мотылёк : 0,
капустница : 0,
монарх : 0,
бражник : 0,

};

var results = {

гусеница : "Поздравляю! В тесте про бабочек Вы получили гусеницу. Не знаю, хорошо это или плохо, но Вы можете гордиться своей особенностью.",
мотылёк : "Живёшь за чужой счёт? Ешь чужие вещи? Ночной воришка",
капустница : "Следуете трендам, поэтому не особо уникальны; однако у Вас всё равно есть свои необычные черты и возможности к самореализации",
монарх : "Роскооошно. Так вы думаете о себе. И правильно делаете, Вы великолепны!",
бражник : "Что у Вас за проблемы с божьими коровками???",

}

const rounds = [

{

name : "Введите имя",

  },

{

name : "Какое время суток Вам больше нравится?",

options : ["Утро", "День", "Сумерки", "Ночь"],

do(option){

	if (option == "1")
	{
		types.гусеница += 1;
	}

	if (option == "2")
	{
		types.капустница += 1; types.монарх += 1;
	}

	if (option == "3")
	{
		types.бражник += 1;
	}

	if (option == "4")
	{
		types.мотылёк += 1;
	}

},

  },

{

name : "Что Вы любите есть?",

options : ["Что-нибудь сладенькое!", "Только полезную растительность", "Шуба (ну, или селёдка под ней)"],

do(option){

	if (option == "1")
	{
		types.капустница += 1; types.монарх += 1; types.бражник += 1;
	}

	if (option == "2")
	{
		types.гусеница += 1;
	}

	if (option == "3")
	{
		types.мотылёк += 1;
	}


},

  },

{

name : "Насколько Вам важно чужое мнение?",

options : ["Очень парюсь! Я же всё время прям бледная моль :(", "Нисколько, я вообще красотулька", "Средне. Я знаю свои плюсы и минусы", "Весь стресс я заедаю!"],

do(option){

	if (option == "1")
	{
		types.мотылёк += 1;
	}

	if (option == "2")
	{
		types.монарх += 1;
	}

	if (option == "3")
	{
		types.капустница += 1; types.бражник += 1;
	}

	if (option == "4")
	{
		types.гусеница += 1;
	}

},

  },

{

name : "Насколько Вы обычно голодны?",

options : ["Ем прямо сейчас", "Иногда даже забываю есть", "Аппетит как аппетит"],

do(option){

	if (option == "1")
	{
		types.гусеница += 1;	
	}

	if (option == "2")
	{
		types.бражник += 1;
	}

	if (option == "3")
	{
		types.капустница += 1; types.монарх += 1; types.мотылёк += 1;
	}

},

  },

{

name : "Вы когда-либо хотели быть лампочкой?",

options : ["ЕСТЕСТВЕННО", "зачем,,,,"],

do(option){

	if (option == "1")
	{
		types.мотылёк += 1;	
	}

	if (option == "2")
	{
		types.бражник += 1; types.капустница += 1; types.монарх += 1; types.гусеница += 1;
	}

},

  },

];

function setQuestions(qnum)
{

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

if (question_num == 1)
	document.getElementById("control").value = "Дальше";

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

			document.getElementById("test-img").src = "img/fly/" + result + ".GIF";
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