function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/iSXBCEjvm/model.json", modelready);

}

function modelready() {
    classifier.classify(getresult);
}
function getresult(e,r){
    if(e){
        console.error(e);
    }
    else{
        console.log(r);
        document.getElementById("s_name").innerHTML="I can hear "+r[0].label;
        document.getElementById("sound_a").innerHTML="Acurracy "+(r[0].confidence*100).toFixed(2);
        img=document.getElementById("d1");
        if(r[0].label=="barking"){
            img.src="dog.png";
        }
        else if(r[0].label=="meowing"){
            img.src="cat.png"
        }
       
    }

}