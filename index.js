var life = require("./life");

var blinker = [
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, false, false, false]
]
var toad = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, true, true, true, false],
    [false, true, true, true, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
]
var random = [...Array(25)].map(e => Array(25));
for (i=0; i< 25; i++){
    for(j=0;j<25; j++){
        random[i][j] = Math.random() >= 0.5;
    }
}
life.main(blinker);
