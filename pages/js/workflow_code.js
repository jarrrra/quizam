function start_test(name) {
    fetch("https://jara12345.app.n8n.cloud/webhook/started-event", {
        method: "POST",
        body: JSON.stringify({
            username: name,
            quizname: document.getElementById("test-title").innerText
        }),
        headers: {
            "Content-type": "application/json"
        }
    });
}

function finish_test(name, result) {
    fetch("https://jara12345.app.n8n.cloud/webhook/passed-event", {
        method: "POST",
        body: JSON.stringify({
            username: name,
            quizname: document.getElementById("test-title").innerText,
            result: result
        }),
        headers: {
            "Content-type": "application/json"
        }
    });

    pass_results(name, result);
}

function pass_results(name, result) {
    fetch("https://jara12345.app.n8n.cloud/webhook/save-result", {
        method: "POST",
        body: JSON.stringify({
            username: name,
            quizname: document.getElementById("test-title").innerText,
            result: result
        }),
        headers: {
            "Content-type": "application/json"
        }
    });
}

function get_all_results() {
    function getvals() {
        return fetch("https://jara12345.app.n8n.cloud/webhook/get-results", {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                return responseData;
            })
            .catch((error) => console.log('error occured ', error));

    }

    return getvals().then(response => {

        return display_results(response);

    });
}

function display_results(results) {
    console.log('results', results);
    var data = "";

    if (results.length > 0) {

        data = "<tr bgcolor=\"#9fc8e3\"><td>Name</td><td>Quiz</td><td>Result</td></tr>";

        for (let i = 0; i < results.length; i++) {
            console.log('results', results[i]);
            data += "<tr><td>" + results[i].username + "</td><td>" + results[i].quizname + "</td><td>" + results[i].result + "</td></tr>";
        }

    }

    console.log(data)
    document.getElementById("results_table").innerHTML = data;

}