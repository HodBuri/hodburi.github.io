const magicText = document.querySelector('#magicText');
const letters = Array.from(magicText.children);
let timeoutId = null;

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    letters.forEach(letter => {
        const letterX = letter.offsetLeft + letter.offsetWidth / 2;
        const letterY = letter.offsetTop + letter.offsetHeight / 2;
        const distX = letterX - mouseX;
        const distY = letterY - mouseY;
        const dist = Math.sqrt(distX * distX + distY * distY);

        if (dist < 150) {
            const angle = Math.atan2(distY, distX);
            const force = (150 - dist) / 150;
            const x = Math.cos(angle) * force * 20;
            const y = Math.sin(angle) * force * 20;
            letter.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    if (timeoutId !== null) {
        clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
        letters.forEach(letter => {
            letter.style.transform = '';
        });
    }, 2000);
});

function wrapCharsWithSpan(element) {
    let text = element.textContent;
    element.textContent = '';

    for (let char of text) {
        let span = document.createElement('span');
        span.textContent = char;
        element.appendChild(span);
    }
}

// Call the function with the magicText element when the page loads
window.addEventListener('DOMContentLoaded', (event) => {
    wrapCharsWithSpan(document.getElementById('magicText'));

    const magicText = document.querySelector('#magicText');
    const letters = Array.from(magicText.children);
    let timeoutId = null;

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        letters.forEach(letter => {
            const letterX = letter.offsetLeft + letter.offsetWidth / 2;
            const letterY = letter.offsetTop + letter.offsetHeight / 2;
            const distX = letterX - mouseX;
            const distY = letterY - mouseY;
            const dist = Math.sqrt(distX * distX + distY * distY);

            if (dist < 150) {
                const angle = Math.atan2(distY, distX);
                const force = (150 - dist) / 150;
                const x = Math.cos(angle) * force * 20;
                const y = Math.sin(angle) * force * 20;
                letter.style.transform = `translate(${x}px, ${y}px)`;
            }
        });

        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            letters.forEach(letter => {
                letter.style.transform = '';
            });
        }, 2000);
    });
});