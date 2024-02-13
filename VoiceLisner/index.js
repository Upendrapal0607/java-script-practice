// Check for SpeechRecognition support
const  StartRecored=()=>{
const SpeechRecognition = window.SpeechRecognition|| window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition;

if (SpeechRecognition) {
  
  const recognition = new SpeechRecognition();
  console.log({recognition});
  recognition.onresult = (event) => {
    console.log({event});
    const transcript = event.results[0][0].transcript;
    console.log('Recognized speech:', transcript);
  };

  recognition.start();
}
 else {
  console.error('SpeechRecognition not supported in this browser');
}

}
const  StoptRecored=()=>{
const SpeechRecognition = window.SpeechRecognition|| window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  console.log("stop");
//   recognition.onresult = (event) => {
//     const transcript = event.results[0][0].transcript;
//     console.log('Recognized speech:', transcript);
//   };

  recognition.stop();
}
 else {
  console.error('SpeechRecognition not supported in this browser');
}

}