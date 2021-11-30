const sentence = "hello there from lighthouse labs\n";

/*for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(char);  
    }, 1000);
}*/



/*for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
        process.stdout.write(sentence[i]);  
    }, 1000);
}*/
/*let count = 0;
var interval = setInterval(myCallBack, 500)

function myCallBack(string) {
    for (const elem of string) {
        process.stdout.write(elem);
        ++count;
    }
}*/
/*
//Again returns the whole string, but now returns them together as individual elements
let typeWriter = function(string) {
    for (let i = 0; i < string.length; i++) {
        setInterval(() => {
            console.log(string[i]);
        }, 1000);
    }
}

typeWriter(sentence); */
/*for (let i = 0; i <= 2; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}*/

/*for (let i = 1; i <= 3; i++) {
    (function(index) {
        setTimeout(() => {
            console.log(index);
        }, i * 500)
    })(i);
}*/

for (let i = 0; i < sentence.length; i++) {
    (function(i) {
        var letter = sentence[i];
        setTimeout(() => {
            console.log(letter);
        }, i * 500);
    })(i);
}


