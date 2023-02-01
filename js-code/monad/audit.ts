// // Some numeric functions
// function square(x: number) : number {
//     return x * x;
// }

// function addOne(x: number) : number {
//     return x + 1;
// }

// addOne(square(2)) // = 5

/*
What if we wanted to add logging to our functions?

addOne(square(2)) // =
{
    result: 5,
    logs: [
        "Squared 2 to get 4",
        "Added 1 to 4 to get 5"
    ]
}
*/













interface NumberWithLogs {
    result: number
    logs: string[]
}

// function square(x: number) : NumberWithLogs {
//     return {
//         result: x * x,
//         logs: [ `Squared ${x} to get ${x * x}`]
//     };
// }

// function addOne(x: NumberWithLogs) : NumberWithLogs{
//     return {
//         result: x.result + 1,
//         logs: x.logs.concat([ `Added 1 to ${x.result} to get ${x.result + 1}`])
//     };
// }

/*
What are the issues with this?

What happens if we square(square(2))?

What happens if we addOne(2)?

*/


















interface NumberWithLogs {
    result: number
    logs: string[]
}


function wrapWithLogs(x: number) : NumberWithLogs {
    return {
        result: x,
        logs: []
    }
}

// function square(x: number) : NumberWithLogs {
//     return {
//         result: x * x,
//         logs: [ `Squared ${x} to get ${x* x}`]
//     };

// }
// function addOne(x: NumberWithLogs) : NumberWithLogs{
//     return {
//         result: x.result + 1,
//         logs: x.logs.concat([ `Added 1 to ${x.result} to get ${x.result + 1}`])
//     };
// }

















runWithLogs(wrapWithLogs(5), square)

interface NumberWithLogs {
    result: number
    logs: string[]
}

function runWithLogs(
    input: NumberWithLogs, 
    transform: (_:number) => NumberWithLogs
    ) : NumberWithLogs {

    const newNumberWithLogs = transform(input.result);
    return {
        result: newNumberWithLogs.result,
        logs: input.logs.concat(newNumberWithLogs.logs)
    }
}

function square(x: number) : NumberWithLogs {
    return {
        result: x * x,
        logs: [ `Squared ${x} to get ${x* x}`]
    };
}

function addOne(x: number) : NumberWithLogs {
    return {
        result: x + 1,
        logs: [ `Added 1 to ${x} to get ${x+ 1}`]
    };
}

function multiplyByThree(x: number) : NumberWithLogs {
    return {
        result: x * 3,
        logs: [ `Added 1 to ${x} to get ${x+ 1}`]
    };
}


const a = wrapWithLogs(5);
const b = runWithLogs(a, addOne);
const c = runWithLogs(b, square);












// 























// const c = runWithLogs(b, square);
// const c = runWithLogs(c, multiplyByThree);