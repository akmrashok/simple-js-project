// Main entry point of the application
import { add, subtract } from './utils.js';

function init() {
    const resultAdd = add(5, 3);
    const resultSubtract = subtract(5, 3);
    
    document.getElementById('addResult').innerText = `Addition Result: ${resultAdd}`;
    document.getElementById('subtractResult').innerText = `Subtraction Result: ${resultSubtract}`;
}

document.addEventListener('DOMContentLoaded', init);