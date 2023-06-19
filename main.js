function hearing(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yqcrU8KUz/model.json",modelLoaded)

}

function modelLoaded(){
    console.log("model Initialised")
    classifier.classify(gotResults)
}

function gotResults(error,results){
if(error){
    console.log(error)

}
else{
    console.log(results)
    document.getElementById("hear").innerHTML="I Can Hear- "+results[0].label
document.getElementById("accuracy").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+"%"
}

}