var h1 = document.getElementById('h1');

var date = new Date();
var hrs=0;
var mins=0;
var sec=-1;
var timer;
var n = -1;

function start(){

    n=n+1

    if (n===0){

    console.log('Started');

    update();
    timer = setInterval(update, 1020);

    function update(){
    sec=Number(sec)+1;
    mins=Number(mins);
    hrs=Number(hrs);

    if(sec<10){
        sec=String('0'+sec);
    }
    if (sec===60){
        sec=String('00');
        mins=Number(mins)+1;
    }
    if (mins<10){
        mins=String('0'+mins);
    }
    if (mins===60){
        mins=String('00');
        hrs=Number(hrs)+1;
    }
    if (hrs<10){
        hrs=String('0'+hrs)
    }
    h1.textContent=hrs+' : '+mins+' : '+sec;}
            }

    else{
        console.log("Can't start");
    }

}

function stop(){
    n=-1
    console.log('stop');
    clearInterval(timer);
}

function reset(){
    n=-1
    clearInterval(timer);
    console.log('Restarted');
    h1.textContent='HH : MM : SS';
    sec=0;
    hrs=0;
    mins=0;
}