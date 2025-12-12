var name = null;
var question_num = 0;

var types = {

0 : 0,
12 : 0,
16 : 0,
20 : 0,
30 : 0,
50 : 0,
300 : 0,

};

var results = {

0 : "Гу-гу га-га?",
12 : "Поздравляю, Вы застряли в самом постыдном периоде жизни",
16 : "Вы это вы.",
20 : "Молодость только начинется, всё впереди, Вы уже ни во что не верите, но пытаетесь",
30 : "Каково жить с депрессией и ипотекой?",
50 : "Колени уже хрустят, но душа ещё",
300 : "Как Вы ещё передвигаетесь по этому свету?",

}

const rounds = [

{

name : "Введите имя",

  },

{

name : "Вы следите за трендами?",

options : ["Скибиди туалет!!!", "Да, я не кринж", "..Бритни Спирс?", "Ну, так, пытаюсь быть в курсе", "...", "Зачем?", "За чем?"],

do(option){

	if (option == "1")
	{
		types["12"] += 1;
	}

	if (option == "2")
	{
		types["16"] += 1;
	}

	if (option == "3")
	{
		types["20"] += 1;
	}

	if (option == "4")
	{
		types["30"] += 1;
	}

	if (option == "5")
	{
		types["0"] += 1;
	}

	if (option == "6")
	{
		types["50"] += 1;
	}

	if (option == "7")
	{
		types["300"] += 1;
	}

},

  },

{

name : "Как колени?",

options : ["*хруст*", "После операции", "А с ними должно быть что-то?", "...", "Я не выходил на свет уже 100 лет"],

do(option){

	if (option == "1")
	{
		types["16"] += 1; types["20"] += 1; types["30"] += 1;
	}

	if (option == "2")
	{
		types["50"] += 1;
	}

	if (option == "3")
	{
		types["12"] += 1;
	}

	if (option == "4")
	{
		types["0"] += 1;
	}

	if (option == "5")
	{
		types["300"] += 1;
	}

},

  },

{

name : "Кем хотите стать в будущем?",

options : ["...", "Блогером", "Ну, юрист там.. А может и в IT уйду...", "Открою свой бизнес", "Графом", "Главным инжинером завода", "А надо уже было выбрать?..."],

do(option){

	if (option == "1")
	{
		types["0"] += 1;
	}

	if (option == "2")
	{
		types["12"] += 1;
	}

	if (option == "3")
	{
		types["20"] += 1;
	}

	if (option == "4")
	{
		types["30"] += 1;
	}

	if (option == "5")
	{
		types["300"] += 1;
	}

	if (option == "6")
	{
		types["50"] += 1;
	}

	if (option == "7")
	{
		types["16"] += 1;
	}

},

  },

{

name : "Выберите песню",

options : ["CoComelon", "I came in like a wreeecking baaaall", "Я люблю, ненавижу — у меня срывает крышууу", "*что-то на корейском* ...We are, we are together, bulletproof", "Личный музыкант при дворе", "Зеленоглазое такси... притормози, притормози..."],

do(option){

	if (option == "1")
	{
		types["0"] += 1;
	}

	if (option == "2")
	{
		types["30"] += 1;
	}

	if (option == "3")
	{
		types["12"] += 1;
	}

	if (option == "4")
	{
		types["16"] += 1; types["20"] += 1;
	}

	if (option == "5")
	{
		types["300"] += 1;
	}

	if (option == "6")
	{
		types["50"] += 1;
	}

},

  },

{

name : "Как Вы выбираете одежду?",

options : ["На рынке", "Что стилист в инсте посоветует", "Ну, у меня есть какой-то стиль, и я его придерживаюсь", "Что понравится, то и беру, хотя пытаюсь как-то сочетать всё вместе", "...", "Мантия.", "Ты чё, не шаришь за тренды? Бумер"],

do(option){

	if (option == "1")
	{
		types["50"] += 1;
	}

	if (option == "2")
	{
		types["30"] += 1;
	}

	if (option == "3")
	{
		types["20"] += 1;
	}

	if (option == "4")
	{
		types["16"] += 1;
	}

	if (option == "5")
	{
		types["0"] += 1;
	}

	if (option == "6")
	{
		types["300"] += 1;
	}

	if (option == "7")
	{
		types["12"] += 1;
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
			document.getElementById("test-form").innerHTML = '<label for = "name" id = "question">Поздравляю, ' + name + '! Вам ' + result + ' лет</label><br><br>' +
			'<div for = "questions" id = "form">' + results[result] + '</div><br><br>' +
			'<input type="button" name="button" onclick = "ClickButton()" value="Пройти заново"><br><br>';

			document.getElementById("test-img").src = "img/age/" + result + ".GIF";
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