var madness;
var content;
const divArray = [];
var i;

console.log('hahahahahahahahahhahahahahaha, good luck getting to the content here 😎')
run();

async function setup(){
    await sleep(2000);
    for(i=0;i<20;i++){
        divArray.push(document.getElementById(i.toString()));
    }
    i=0;
    madness = document.getElementById('madness');
    content = document.getElementById('catch-me-if-you-can');
}

async function scramble(){
    let temp = document.createElement('div');
    if(i === 10){
        temp.appendChild(content);
    }
    divArray[i].remove();
    divArray[i] = temp;
    divArray[i].id = Date.now();
    madness.appendChild(divArray[i]);
    i++;
    if(i >= 20) i = 0;
    await(sleep(100));
    scramble();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run(){
    await setup();
    scramble();
}