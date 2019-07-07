const fnQuestion1 = (record) => {
    const newArr = record.map(arr => {
        return { status: arr.split(" ")[0], id: arr.split(" ")[1], name: arr.split(" ")[2] }
    })
    var answer = [...newArr]
    console.log(newArr);

    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (answer[i].id === newArr[j].id) {
                if (newArr[j].name) {
                    answer[i].name = newArr[j].name
                }
            }
        }
        if (answer[i].status === "Enter") {
            answer[i].status = "came in."
        } else if (answer[i].status === "Leave") {
            answer[i].status = "has left."
        } else if (answer[i].status === "Change") {
            answer.splice(i, 1)
        }
    }

    return answer.map(obj => {
        return `${obj.name} ${obj.status}`
    })
}

console.log(fnQuestion1(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));
