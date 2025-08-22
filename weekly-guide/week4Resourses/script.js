h6Elem = document.querySelector('#h6Elem')
btnListen = document.querySelector('#btnListen')


SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('Yes, Now You Can start to Talk');
}

recognition.onresult = function (e){
    resultReceived = e.results[0][0].transcript;
    h6Elem.textContent = resultReceived;
}


btnListen.addEventListener('click',function(){
    h6Elem.textContent = 'Listening..'
    recognition.start();
})