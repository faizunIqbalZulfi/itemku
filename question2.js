const fnQuestion2 = (N, users) => {
    var array = [...users]
    var praAnswer = []
    for (var i = 0; i < users.length; i++) {
        var length = array.length
        var tot = 0
        users.forEach((arr, j) => {
            if (arr === i + 1) {
                tot += 1
                delete array.splice(i, 1)
            }
        })
        praAnswer.push({ q: i + 1, z: tot / length })
    }
    var answer = praAnswer.slice(0, N).sort(function (a, b) {
        return b.z - a.z
    });
    return answer.map(arr => {
        return arr.q
    })
}

console.log(fnQuestion2(20, [2, 5, 6, 2, 7, 4, 2, 4, 8, 4, 7, 2, 1, 2, 6, 2, 4, 3, 3, 5, 2, 7, 3, 7, 9, 2, 5, 9, 4, 1, 3]));
