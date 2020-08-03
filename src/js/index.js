import { elements } from './views/base';
import * as ui from './views/ui'

async function getText(){

    // 1) get query from input field
    const query = elements.inputNumber.value;
 
    // 2) Search for trivia
    if (query) {
        const result = await fetch(`https://numbersapi.p.rapidapi.com/${query}/trivia?fragment=true&notfound=floor&json=true`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "numbersapi.p.rapidapi.com",
            "x-rapidapi-key": "d2f3381048mshd6c489edddfb755p13e2a1jsn6c9822551821"
        }
    });
    const data = await result.json();
    const trivia = data.text;

    // 3) render number UI 
    ui.renderNumber(query);

    // 4) render trivia UI
    ui.renderTrivia(trivia);
    }
}

elements.submitButton.addEventListener('click', e => {
    e.preventDefault();
    getText();
})
