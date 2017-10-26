function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8      
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);             
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (allTextLines.length) {
        lines.push(clearLine(allTextLines.shift());
    }
	console.log(lines);
	drawOutput(lines);
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Cannot read file!");
	}
}

function drawOutput(lines){
	//Clear previous data
	document.getElementById("output").innerHTML = "";
	var table = document.createElement("table");
	for (var i = 0; i < lines.length; i++) {
		var row = table.insertRow(-1);
		for (var j = 0; j < lines[i].length; j++) {
			var firstNameCell = row.insertCell(-1);
			firstNameCell.appendChild(document.createTextNode(lines[i][j]));
		}
	}
	document.getElementById("output").appendChild(table);
}

/**
 * Prevents the splitting of items with double quotes.
 * @param  {string} line line string
 * @return {string}      correctly splitted string
 */
function clearLine(line) {
        var splitline = line.split(',')
        var new_string = []
        var separated_string = []
        var is_separated_string = false
        for (v in splitline) {
                var item = splitline[v]
                if (item.includes('"')) {
                        separated_string.push(item.replace('"', ''))
                        if (!is_separated_string) {
                                is_separated_string = true
                        } else {
                                is_separated_string = false
                                new_string.push(separated_string.join(', '))
                                separated_string = []
                        }
                } else {
                        if (is_separated_string) {
                                separated_string.push(item)
                        } else if (!is_separated_string) {
                                new_string.push(item)
                        }
                }
        }
        return new_string
}
