class Iterator{
    constructor(items){
        this.index=0;
        this.items=items;
    }

    first(){
        this.reset();
        return this.next();  
    }
    next(){
        return this.items[this.index++];
    }
    hasNext(){
        return this.index <= this.items.length;
    }
    reset(){
        this.index = 0;
    }
    each(){
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            console.log(item);
        }
    }
}

function run() {

    var items = ["one", 2, "circle", true, "Applepie"];
    var iter = new Iterator(items);

    // using for loop

    // for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
    //     console.log(item);
    // }
    // console.log("");

    // using Iterator's each method

    iter.each(function (item) {
        console.log(item);
    });
}
run();