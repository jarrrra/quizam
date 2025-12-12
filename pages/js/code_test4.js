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

0 : "Goo-goo gaa-gaa?",
11 : "Congratulations, you are stuck in quite an embarassing time period for life",
18 : "Young and full of hopes",
23 : "Fully entering your independent and responsible era",
30 : "How the time flies, so much behind, as much ahead",
50 : "Knees are weak, but the spirit is still strong!",
300 : "How are you alive?",

}

const rounds = [

{

name : "Enter your name",

  },

{

name : "Do you follow the trends?",

options : ["six seven six seven six-", "Not really, it's not my first priority", "Somewhat, I usually follow the ones I resonate with", "Yeah, sure!", "...", "Of course, I follow multiple stylists and bloggers, I love staying on top of things!", "What doth thee cullionly whe thee sayeth \"trends\"?"],

do(option){

	if (option == "1")
	{
		types["11"] += 1;
	}

	if (option == "2")
	{
		types["50"] += 1;
	}

	if (option == "3")
	{
		types["18"] += 1;
	}

	if (option == "4")
	{
		types["23"] += 1;
	}

	if (option == "5")
	{
		types["0"] += 1;
	}

	if (option == "6")
	{
		types["30"] += 1;
	}

	if (option == "7")
	{
		types["300"] += 1;
	}

},

  },

{

name : "How are your joints?",

options : ["*cracks*", "Already had an operation", "..Something should be wrong with them?", "...", "I has't not hath felt aught but numb since 1700s"],

do(option){

	if (option == "1")
	{
		types["18"] += 1; types["23"] += 1; types["30"] += 1;
	}

	if (option == "2")
	{
		types["50"] += 1;
	}

	if (option == "3")
	{
		types["11"] += 1;
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

name : "Who do you want to become when you are older?",

options : ["...", "Youtuber", "Whatever I'm studying", "I want to open my business", "The jobs of mere humans doth not apply to me", "I hope I'll retire", "All but unemployed"],

do(option){

	if (option == "1")
	{
		types["0"] += 1;
	}

	if (option == "2")
	{
		types["11"] += 1;
	}

	if (option == "3")
	{
		types["18"] += 1;
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
		types["23"] += 1;
	}

},

  },

{

name : "What's your prefered way of reading?",

options : ["...", "Ewww, reading", "My eyesight isn't that great for it, so whichever is accessible", "Electronic books, maybe even a tablet for them", "Paper books have a certain vibe, yk?", "On fusty paper, in the lighteth of a candle"],

do(option){

	if (option == "1")
	{
		types["0"] += 1;
	}

	if (option == "2")
	{
		types["11"] += 1;
	}

	if (option == "3")
	{
		types["50"] += 1;
	}

	if (option == "4")
	{
		types["30"] += 1;
	}

	if (option == "5")
	{
		types["23"] += 1; types["18"] += 1;
	}

	if (option == "6")
	{
		types["300"] += 1;
	}

},

  },

];

function setQuestions(qnum)
{

if (question_num == 1)
	document.getElementById("control").value = "Next";

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
		start_test(name);
		
		question_num++;
		setTimeout(setQuestions(question_num), 4000);

	}
	else
	{
		alert("Enter your name");
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
			finish_test(name, result);

			question_num++;
			document.getElementById("test-form").innerHTML = '<label for = "name" id = "question">Congrats, ' + name + '! You are ' + result + ' years old!</label><br><br>' +
			'<div for = "questions" id = "form">' + results[result] + '</div><br><br>' +
			'<input type="button" name="button" onclick = "ClickButton()" value="Retake"><br><br>';

			document.getElementById("test-img").src = "../img/age/" + result + ".gif";
		}
	}

	if(!found)
		alert("Nothing chosen");


}
else if (question_num >= rounds.length)
{
	if (confirm("Are you sure you want to start over?"))
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
		alert("Nothing chosen");
}

}