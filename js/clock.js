var mybody = document.getElementById("myWebsiteBody");
mybody.style.display= "flex"
mybody.style.height= "100vh"
mybody.style.justifyContent= "center"
mybody.style.alignItems= "center";


var myHead = document.getElementById("time")
//myHead.style.border= "1px solid coral"
//myHead.style.padding= "10px"
//myHead.style.borderRadius= "40px"
myHead.style.fontFamily= "Dancing Script";
myHead.style.fontSize= "50px";


function showTime(params) {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var session = "AM";

    if(hour == 0){
        hour = 12;
    }

    if(hour > 12){
        hour = hour - 12;
        session = "PM";
    }
       //     if(hour < 10){
         //       hour = "0" + hour;
          //  } longer form of the one below, this allows it to return 09 and just 10/11

    hour = (hour<10)?"0" + hour:hour;
    minute = (minute<10)?"0" + minute:minute;
     second = (second<10)?"0" +second:second;

    var time = hour +":" + minute + ":" + second + " " + session
    document.getElementById("time").innerText = time;

    //call the showtime function every 1s
    setTimeout(showTime, 1000);
}

/*var tell = document.getElementById = "time";
tell.style.textAlign*/