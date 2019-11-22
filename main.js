const utils = require('./utils');




let h =

    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12]
    ]

let a =

    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]

    ]

let i =

    [
        [1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3]

    ]

let l =

    [
        [1, 1, 3, 1, 1],
        [1, 1, 2, 1, 1],
        [1, 1, 5, 1, 1],
        [6, 3, 2, 2, 1],
        [6, 4, 3, 1, 2]

    ]

utils.print(utils.mutiplyMatrices(a, h));

utils.print(utils.mutiplyMatrices(h, a));

utils.print(utils.mutiplyMatrices(i, l));