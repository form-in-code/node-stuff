const add = (numb1,numb2,callback) => {
    setTimeout(() => {
        callback(numb1+numb2)
    },2000)
}


add(1,4,(sum) => {
    console.log(sum)
})
