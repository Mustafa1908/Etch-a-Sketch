const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 256; i++) {   
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square-div');
    gridContainer.appendChild(squareDiv);
}

const userSquarePerSideChoice = document.querySelector("#btn-square");

userSquarePerSideChoice.addEventListener("click", function() {
    const userPrompt = prompt("Enter the square per side grid you want(between 1 and 100)");
    if (userPrompt < 1 || userPrompt > 100) {
         alert(`Write a number between 1 and 100 You wrote ${userPrompt}`);
         return
    }
    gridContainer.innerHTML = '';
    for (let i = 0; i < userPrompt * userPrompt; i++) {   
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square-div');
        squareDiv.style.minWidth = `calc(100% / ${userPrompt}`;
        squareDiv.style.minHeight = `calc(100% / ${userPrompt}`;
        gridContainer.appendChild(squareDiv);
    }
});




