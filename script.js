const container = document.querySelector('#container');
container.classList.add('container');
const selectedSize = document.querySelector('#size');
const selectedColor = document.querySelector('#color');
const clearButton = document.querySelector('#clear');

// Set default values for grid and color
let gridSize = +selectedSize.firstElementChild.value;
let colorMode = selectedColor.firstElementChild.value;

// Run resetting functions whenever the settings are changed
selectedSize.onchange = setSize;
selectedColor.onchange = setColor;

// Any time the clear button is clicked, anonymous function runs to redraw the grid
clearButton.addEventListener('click', () => {
    console.log('bombs away');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    drawGrid();
});

// Redraw the grid whenever gridSize is changed
function setSize() {
    gridSize = +selectedSize.value;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    drawGrid();
};

// Redraw the grid whenever colorMode is changed
function setColor() {
    colorMode = selectedColor.value;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    drawGrid();
}

// Forgot what this does
document.addEventListener("DOMContentLoaded", () => {
    setSize();
})

// function clear() {
//     console.log('bombs away');
//     setColor();
// }

// Generates a random color
function randomColor() {
    x = Math.floor(Math.random() * 255);
    y = Math.floor(Math.random() * 255);
    z = Math.floor(Math.random() * 255);
    return `rgb(${x}, ${y}, ${z})`;
}

// Make 16 vertical rows
function drawGrid() {
    Array.from( {length: gridSize}, () => {
        const row = document.createElement('div');
        row.classList.add('row');

        // Add each new row to container
        container.appendChild(row);

        // Make 16 squares in each row
        Array.from( {length: gridSize}, () => {
            const square = document.createElement('div');
            square.classList.add('square');

            // Add each new square to row
            row.appendChild(square);

            // Hover effect

            let alpha = 0.0;
            // let shade;

            square.addEventListener('mouseover', () => {
                console.log('hover event');
                console.log(colorMode);

                if (colorMode === 'black') {
                    (square.style.backgroundColor = 'black')

                } else if (colorMode === 'shading') {

                    if (alpha < 1.0) {
                        alpha += 0.1;
                        console.log(alpha);
                    
                        square.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
                        
                    }
                    

                } else {
                    (square.style.backgroundColor = randomColor())
                }
            });

            square.removeEventListener('mouseover', () => {});
            
        });
        
    });
}
