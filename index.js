// // code your solution here
// const record = [
//     { year: "2015", result: "L"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "W"},
// ]


function superbowlWin (objArray) {

    if (objArray.find(object => object.result === 'W')) {
        return (objArray.find(object => object.result === 'W').year);
    } else {
        return undefined;
    }
}

// superbowlWin(record);