document.getElementById('nextButton').addEventListener('click', function() {
    applyTransition('phaseOne', 'phaseTwo', 'whirl-transition');
});

document.getElementById('nextButton2').addEventListener('click', function() {
    applyTransition('phaseTwo', 'phaseThree', 'carousel-transition');
});

document.getElementById('nextButton3').addEventListener('click', function() {
    applyTransition('phaseThree', 'wherePhase', 'sparkle-transition');
});

document.getElementById('nextButtonWhere').addEventListener('click', function() {
    applyTransition('wherePhase', 'phaseFour', 'strike-transition');
});

document.getElementById('nextButton4').addEventListener('click', function() {
    applyTransition('phaseFour', 'finalPhase', 'clouds-transition');
});

document.getElementById('yesButton').addEventListener('click', function() {
    openNewPage('lisa-leht.html');
});

document.getElementById('noButton').addEventListener('click', function() {

    moveButton(this);
    displayWrongMessage();

});

function applyTransition(currentPhase, nextPhase, animationClass) {
    var currentPhaseElement = document.getElementById(currentPhase);
    var nextPhaseElement = document.getElementById(nextPhase);


    currentPhaseElement.classList.add('fade-out-animation');


    setTimeout(function() {
        currentPhaseElement.style.display = 'none';
        nextPhaseElement.style.display = 'block';


        nextPhaseElement.classList.add(animationClass);


        setTimeout(function() {
            nextPhaseElement.classList.remove(animationClass);
        }, 1500);
    }, 10);
}

function moveButton(button) {
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    var randomX = Math.random() * (viewportWidth - button.clientWidth);
    var randomY = Math.random() * (viewportHeight - button.clientHeight);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function displayMessage() {
    var messageElement = document.getElementById('message');
    messageElement.textContent = "???";
    messageElement.style.marginTop = '20px';
    messageElement.style.textAlign = 'center';
    messageElement.style.fontSize = '40px';
}

function displayWrongMessage() {
    var messageElement = document.getElementById('messageFinal');
    messageElement.textContent = "You pressed the wrong button!";
    messageElement.style.marginTop = '20px';
    messageElement.style.textAlign = 'center';
    messageElement.style.fontSize = '40px';

    var wrongImage = document.createElement('img');
    wrongImage.src = 'pics/me.jpg';
    wrongImage.style.width = '25%';

    document.getElementById('finalPhase').appendChild(wrongImage);
}

function openNewPage(url) {

    setTimeout(function() {
        window.open(url, '_blank');
    }, 1);
}

//var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
//if (!isChrome) {
    //$('#iframeAudio').remove();
//} else {
    //$('#playAudio').remove();
//}
