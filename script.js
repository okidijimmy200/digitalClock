// create  showTime func

function showTime(){
   //global date  
   let date = new Date();
   //hours
   let hours = date.getHours(); //0-23
   let minutes = date.getMinutes();// 0-59
   let seconds = date.getSeconds();// 0-59

   // format the hrs
   let formatHours = convertFormat(hours)
   hours = checkTime(hours)

   //include the zeros
   hours = addZero(hours)
   minutes = addZero(minutes)
   seconds = addZero(seconds)

document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`

}

//convert func
function convertFormat(time){
    //get values of Am or PM
    let format = 'AM'
    if(time >= 12) {
        format = 'PM'
    }
    return format;
}

//change to 12-hr clock
function checkTime(time) {
    //if time is past 12
    if(time > 12) {
        time = time - 12
    }
    //time =0
    if(time === 0){
        time = 12;
    }
    return time
}

//func to add zeros
function addZero(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}
showTime()
//set the calltimee
setInterval(showTime, 1000)
