function rand() {
    return parseInt(Math.random() * 5000 + 800)
}


function func() {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve();
        } else {
            reject();
        }
    });

}