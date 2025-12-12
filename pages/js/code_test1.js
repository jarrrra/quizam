function get_result(types) {
    var type_list = ["isfj", "esfj", "istj", "isfp", "estj", "esfp", "enfp", "istp", "infp", "estp", "intp", "entp", "enfj", "intj", "entj", "infj"];
	var saved_funcs = [];

	if (types.Ne + types.Ni > types.Se + types.Si) {
		types.Se = types.Si = -10;
	}
	else {
		types.Ne = types.Ni = -10;
	}

	if (types.Te + types.Ti > types.Fe + types.Fi) {
		types.Fe = types.Fi = -10;
	}
	else {
		types.Te = types.Ti = -10;
	}

    while (type_list.length > 4) {
		var keys = getMaxKey(types);

    	for (let i = 0; i < keys.length; i++) {
			saved_funcs.push(keys[i]);
			delete types[keys[i]];

			keys[i] = keys[i].substring(0, 1).toLowerCase();

			new_types = [];

			for (let ii = 0; ii < type_list.length; ii++) {
				if (type_list[ii].search(keys[i]) != -1) {
					new_types.push(type_list[ii]);
				}
			}

			type_list = new_types;
    	}
    }


    to_look_for = "p";

    switch(saved_funcs[0].substring(1, 2)) {
  		case "i":
			if (saved_funcs[0].substring(0, 1) == "N" || saved_funcs[0].substring(0, 1) == "S") {
				to_look_for = "j";
			}
    	    break;

  		case "e":
			if (saved_funcs[0].substring(0, 1) == "F" || saved_funcs[0].substring(0, 1) == "T") {
				to_look_for = "j";
			}
    		break;
    }



    type = "";

    for (let i = 0; i < type_list.length; i++) {
		if (type_list[i].search(saved_funcs[0].substring(1, 2)) != -1 && type_list[i].search(to_look_for) != -1) {
			type = type_list[i];
		}
    }

    return type;
}



var name = null;
var question_num = 0;

var types = {

Se : 0,
Si : 0,
Ne : 0,
Ni : 0,
Fe : 0,
Fi : 0,
Te : 0,
Ti : 0,

};

var results = {

isfj : "Why do other's opinions bother you? You are big empaths, but sometimes you should take things easier",
esfj : "You are just a ray of sunshine! But remember to take care about yourself as well, please",
istj : "Mr./Ms. Serious over here? (joking). Sometimes your schedule is just too strict! Let yourself relax a little",
isfp : "Misunderstood artists. Don't worry, they just don't see your vision!",
estj : "Very competent and vigilant, but being overly strict to yourself and others is not the best decision. Smile! It suits you ;)",
esfp : "Center of attention, and you love it (everyone else does as well). Life is in aesthetics.",
enfp : "You are easy-going and energetic, but secretly a softie. Your thoughts jump around, but it's not a you problem, others just should be better at keeping up!",
istp : "Independent, full of ideas. Although sighing like that when things don't go your way isn't needed...",
infp : "Depressive 24/7. But so creative! You are really interesting to talk to, if only you weren't so shy!",
estp : "Bold, brass, all the sass. Maybe going to the gym. Where that energy comes from??",
intp : "No one knows what's going on in your head. You are full of ideas, but not so full on accomplishing them",
entp : "You just love arguing, huh? You think bullying is a love languange, but actually you really care about your close ones. Showing your emotions is not a weakness! Other than that, you are very funny and good at improvising, good job :)",
enfj : "Golden retriever. Full of ideas and things to say before cheers at the table. You are strong-willed and keep your composure even when tired, but balance is good, you know?",
intj : "People think you are cold, and you kind of are. Mostly because you have a lot of feelings you bottled up, rationalizing everything you do. Don't be scared to open up, someone will definitely understand you and your grand plans!",
entj : "If you are set to do something, you are unstoppable. What a force. You can be strict sometimes, but it's mostly because you are so motivated. Chill, pal!",
infj : "You are on your own wave. Come back when your derealization and overanalyzation of the results stops.",

}

const rounds = [

{

name : "Enter your name",

  },

{

name : "What your day is usually like?",

options : ["Work work work work", "Creating something...", "Different day-to-day, but I HAVE to talk to my friends!!!", "Tbh, I don't even know where the day starts and ends to say"],

do(option){

	if (option == "1")
	{
		types.Si += 1; types.Te += 1;
	}

	if (option == "2")
	{
		types.Fi += 1; types.Ne += 1;
	}

	if (option == "3")
	{
		types.Fe += 1; types.Se += 1;
	}

	if (option == "4")
	{
		types.Ti += 1; types.Ni += 1;
	}

},

  },

{

name : "What are you thinking about rn?",

options : ["..This test?", "I'm soooo mysterious, you won't get my thoughts", "Where my moral compass is actually directed", "What I have to do after I'm done with the quiz"],

do(option){

	if (option == "1")
	{
		types.Se += 1; types.Te += 1; 
	}

	if (option == "2")
	{
		types.Ni += 1; types.Ti += 1;
	}

	if (option == "3")
	{
		types.Fe += 1; types.Fi += 1;
	}

	if (option == "4")
	{
		types.Ne += 1; types.Si += 1;
	}

},

  },

{

name : "What clothes do you prefer?",

options : ["Vintage, or a certain subculture. I'm cool as hell", "Old sweater. Not in a vintage way, in a it's comfy I won't change it way", "I have a capsule wardrobe with multiple identical shirts", "Avant-garde (I throw darts to choose things)"],

do(option){

	if (option == "1")
	{
		types.Fi += 1; types.Fe += 1;
	}

	if (option == "2")
	{
		types.Ti += 1; types.Ni += 1; 
	}

	if (option == "3")
	{
		types.Si += 1; types.Te += 1; 
	}

	if (option == "4")
	{
		types.Ne += 1; types.Se += 1; 
	}

},

  },

{

name : "What are your plans in life?",

options : ["Plans?...", "I'm the only one who actually sees themselves in 10 years", "Eat some tasty things", "1. Lalala 2. Success"],

do(option){

	if (option == "1")
	{
		types.Fe += 1;
	}

	if (option == "2")
	{
		types.Si += 1; types.Ni += 1; types.Te += 1;
	}

	if (option == "3")
	{
		types.Fi += 1;
	}

	if (option == "4")
	{
		types.Se += 1; types.Ne += 1; types.Ti += 1; 
	}

},

  },

{

name : "If life was a story, which character would you be?",

options : ["Main, of course??", "Main hero friend", "That smart bud that fixes everything", "The morally gray one", "Depressed", "Fanbase loves me, I'm just so cool"],

do(option){

	if (option == "1")
	{
		types.Se += 1;
	}

	if (option == "2")
	{
		types.Fe += 1;
	}

	if (option == "3")
	{
		types.Te += 1; types.Ti += 1; types.Si += 1;

	}

	if (option == "4")
	{
		types.Ni += 1;
	}

	if (option == "5")
	{
		types.Fi += 1;
	}

	if (option == "6")
	{
		types.Ne += 1;
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
			var result = get_result(types);
			finish_test(name, result);

			question_num++;
			document.getElementById("test-form").innerHTML = '<label for = "name" id = "question">Congrats, ' + name + '! You are ' + result + '</label><br><br>' +
			'<div for = "questions" id = "form">' + results[result] + '</div><br><br>' +
			'<input type="button" name="button" onclick = "ClickButton()" value="Retake"><br><br>';

			document.getElementById("test-img").src = "../img/mbti/" + result + ".gif";
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
