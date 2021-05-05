const square = function(x) {
    return x*x
}

const square2 = (x) => {
    return x * x
}
//console.log(square2(3))

const event = { 
    name: "Paty!!", 
    list: ["A","B","C"],
    printGuestList: function() {
        console.log(' List for '+this.name)

        this.list.forEach(element => {
            console.log(element + "  "+this.name)
        });
    }

}

event.printGuestList()