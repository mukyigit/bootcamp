function randomString(length) {
    var text = "";
    var alpnum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
       text += alpnum.charAt(Math.floor(Math.random() * alpnum.length));
    }
    return text;
}

console.log(randomString(100));



