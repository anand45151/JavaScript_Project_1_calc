let input = document.getElementById("input");
let button = document.querySelectorAll("button");

function evaluateExpression(expression) {
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Error';
    }
}

button.forEach(element => {
    element.addEventListener("click", (e) => {
        
        console.log(e.target.textContent);
        
        if (e.target.textContent === "C") {
            input.innerText = " ";
        }
        else if (e.target.textContent === "<") {
            input.innerText = input.innerText.slice(0, -1);
        }
        else if (e.target.textContent === "=" ) {
            input.innerText = evaluateExpression(input.innerText);
        }
        else {
            input.innerText += e.target.
            textContent;
        }

        input.scrollLeft = input.scrollWidth;
    
    });
});
