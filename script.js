function createBox(length){
    let box = "";
    for(i=0;i<length*length;i++){
        box+='<div class="cell" id="no'+ i +'"></div>';
    }

    document.getElementById("main").innerHTML=box

    main.style.gridTemplateColumns = `repeat(${length}, 1fr)`;

    function turnRed(x){
        document.getElementById("no"+x).style.backgroundColor="red"
    }
    for(j=0;j<length*length;j++){
        let a=j
        document.getElementById("no"+a).addEventListener("mouseover",function(){turnRed(a)});
    }
}

createBox(16)

function createNewbox(){
    console.log("button clicked!");
    const newLength=parseInt(prompt("Please enter new size"));
    createBox(newLength);
}
document.getElementById("change").addEventListener("click",createNewbox);
