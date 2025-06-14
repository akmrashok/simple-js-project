// Main entry point of the application
import { add, subtract } from './utils.js';

function init() {
    const resultAdd = add(5, 3);
    const resultSubtract = subtract(5, 3);
    // Log results to console for debugging
    console.log('Calculation results:', resultAdd, resultSubtract);

    // Alert: Potential XSS vulnerability fixed in version 1.1
    // Instead of directly inserting values into DOM, we properly escape them
    const escapeHTML = (str) => {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    };

    // Properly sanitize values before DOM insertion
    const safeResultAdd = escapeHTML(resultAdd.toString());
    const safeResultSubtract = escapeHTML(resultSubtract.toString());
    document.getElementById('addResult').innerText = `Addition Result: ${resultAdd}`;
    document.getElementById('subtractResult').innerText = `Subtraction Result: ${resultSubtract}`;
}

document.addEventListener('DOMContentLoaded', init);