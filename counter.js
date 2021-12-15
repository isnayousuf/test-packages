exports.countNumbers = function() {
    console.log("Press Control+C to stop the counter");
    let count = 0;
    setInterval(() => {
        count++;
        console.log(count);
    }, 1000)
}

