let arra = [1, 5, 31,1,1,12,3]

function quicksort(arr) {
if (arr.length < 2)
{
    return arr;
}

    const index = Math.floor( Math.random()*arr.length);
    let currnt = arr[index]
    const more = []
    const less = []
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            continue
        }
        if (arr[i] > currnt) {
            more.push(arr[i])

        }
        else {
            
            less.push(arr[i])
        }
    }
    return [
        ...quicksort(less),
        currnt,
        ...quicksort(more)
    ]
}
console.log(quicksort(arra))