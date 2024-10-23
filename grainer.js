
function noising() {
    let grainy = Date.now();
    let grainyVar = grainy.toString();
    grainyVar = grainyVar.slice(-4, -1);
    let subGrainyVar = grainyVar.slice(-5, -4);
    subGrainyVar = parseInt(subGrainyVar);
    console.log(`Congratulations, you're unique session variable is ${grainyVar}`);
    let grainyNum = parseInt(grainyVar) * 0.4;

    let moreNoise = grainyNum * .01;
    let noiseStatus = 0;
    document.getElementById("noiseFilter").innerHTML = `<feTurbulence \n type='fractalNoise' \n baseFrequency= '${grainyNum}' \n numOctaves='2' \n stitchTiles='stitch'/>`;
    document.getElementById("path").innerHTML = `<animate attributeName="d" from="m100,${grainyNum} h0" to="m0,${moreNoise} h1100" dur="${moreNoise}s" begin="0s" repeatCount="indefinite"/>`;
    document.getElementById("horn").style.rotate = `${grainyNum}deg`;
    noiseStatus++;

}


noising();