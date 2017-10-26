function splitTime(time) {
    let [hours, minutes, seconds] = time.split(':');
    seconds = seconds.split('');
    anteMeridiem = seconds.slice(2);
    seconds = seconds.slice(0, 2);
    return {
        hours: parseInt(hours, 10),
        minutes: parseInt(minutes, 10),
        seconds: parseInt(seconds, 10),
    };
}

function timeConversion() {

}


