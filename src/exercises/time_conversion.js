function splitTime(time) {
    let [hours, minutes, seconds] = time.split(':');
    seconds = seconds.split('');
    anteMeridiem = seconds.slice(2).join('');
    seconds = seconds.slice(0, 2).join('');
    return {
        hours: parseInt(hours, 10),
        minutes: parseInt(minutes, 10),
        seconds: parseInt(seconds, 10),
        anteMeridiem,
    };
}

function toString(hours, minutes, seconds) {
    hours = hours > 9 ? hours : `0${hours}`;
    minutes = minutes > 9 ? minutes : `0${minutes}`;
    seconds = seconds > 9 ? seconds : `0${seconds}`;
    return `${hours}:${minutes}:${seconds}`;
}

function timeConversion(time) {
    const parts = splitTime(time);

    let hours = parts.hours;
    if(parts.anteMeridiem === 'PM') {
        if(hours < 12) {
            hours += 12;
            if(hours > 23) {
                hours = hours - 24;
            }
        }
    } else {
        if(hours === 12) {
            hours = 0;
        }
    }

    return toString(hours, parts.minutes, parts.seconds);
}

module.exports.timeConversion = timeConversion;