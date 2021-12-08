
class Person{
    constructor(name, street, city, state){
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
    }
    hydrate(){
        var memento = JSON.stringify(this);
        console.log('jsonDotStringify', memento);
        return memento;
    }
    dehydrate(memento){
        var m = JSON.parse(memento);
        console.log('jsonDotParse',m);
        this.name = m.name;
        this.street = m.street;
        this.city = m.city;
        this.state = m.state;
    }
}


class CareTaker{
    constructor(){
        this.mementos = {};
    }
    add(key, memento){
        this.mementos[key] = memento;
    }
    get(key){
        return this.mementos[key];
    }
}

function run() {

    var mike = new Person("Karn Pratap", "1112 Main", "Dallas", "TX");
    var john = new Person("Varun Wadhwani", "48th Street", "San Jose", "CA");
    var caretaker = new CareTaker();

    // save state

    caretaker.add(1, mike.hydrate());
    caretaker.add(2, john.hydrate());

    // mess up their names

    mike.name = "dsdfasfasd";
    john.name = "fdfssdfsd";

    // restore original state

    mike.dehydrate(caretaker.get(1));
    john.dehydrate(caretaker.get(2));

    console.log(mike.name);
    console.log(john.name);
}
run();