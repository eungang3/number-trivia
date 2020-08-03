import { elements } from './base';

export function renderNumber(number) {

    if (shrink(number)) {
        const newSize = parseInt(elements.numberSize) * (1 - (shrink(number)));
        
        elements.numberUI.setAttribute("style", `font-size: ${newSize}px`);
    };
    
    elements.numberUI.textContent = number;
}

export function renderTrivia(trivia) {
    elements.triviaUI.textContent = trivia;
}

// shrink numbers in case it's too long
function shrink(input) {
    const divSizeLimit = 50;
    let numberLength = (input.length) * 10;
    let howMuch = 0;

    while (numberLength > divSizeLimit) {
        numberLength -= 10;
        howMuch += 0.1;
    }
    
    return howMuch;
}

// howMuch가 1일때마다 string 반으로 나누어서 보여주기
// 클릭 할때마다 숫자 크기 리셋하기