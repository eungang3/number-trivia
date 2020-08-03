export const elements = {
    inputNumber: document.querySelector('#input-number'),
    submitButton: document.querySelector('#getTriviaBtn'),
    numberUI: document.querySelector('.number'),
    triviaUI: document.querySelector('.fact'),
    numberSize: window.getComputedStyle(document.querySelector('.number')).getPropertyValue('font-size')
}