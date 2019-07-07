const fnQuestion3 = (relation) => {
    relation = relation.map(arr => {
        return {
            sid: arr[0],
            name: arr[1],
            major: arr[2],
            grade: arr[3]
        }
    })
    // return relation.filter(obj => {
    //     return obj.sid === "600"
    // })

    return relation.filter(obj => {
        return obj.name === "apeach" && obj.major === "music"
    })

}

console.log(fnQuestion3(
    [["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"]]));
