function convertToDate(string) {
    const [day, month, year] = string.split(' ');
    return new Date(year, month - 1, day);
}

function countFine(returnDate, expectedDate) {
    expectedDate = convertToDate(expectedDate);
    returnDate = convertToDate(returnDate);

    // on time
    if(expectedDate.getTime() >= returnDate.getTime()){
        return 0;
    }

    // years late 
    const yearsLate = returnDate.getYear() - expectedDate.getYear();
    if(yearsLate > 0) {
        return 10000;
    }

    // month late 
    const monthsLate = returnDate.getMonth() - expectedDate.getMonth();
    if(monthsLate > 0){
        return monthsLate * 500;
    }

    // days late 
    const daysLate = returnDate.getDate() - expectedDate.getDate();
    if(daysLate > 0) {
        return daysLate * 15;
    }
}

console.log(countFine('31 8 2004', '20 1 2004'));
