
//Template used by any User
class template{
    constructor(obj){
        this.obj=obj;
    }
    decorate(){
        //decorating the object
        this.obj.company='EPAM';
        this.obj.branch='India';
    }
    layout(){
        //a specific way of presenting the data
        console.log(`          Name : ${this.obj.name}`);
        if(this.obj.age){
            console.log(`           Age : ${this.obj.age}`);
        }
        if(this.obj.phone){
            console.log(`     Phone No. : ${this.obj.phone}`);
        }
        console.log(`      Comapany : ${this.obj.company}`);
        console.log(`Company Branch : ${this.obj.branch}`);
    }
}
//***************************************************************************



// Creating a User object
class User{
 constructor(name){
     this.name=name;
 }
}


//Building that user step by step
class Builder{
    constructor(name){
        this.user=new User(name);
    }
    age(a){
        this.user.age=a;
        return this;
    }
    phone(p){
        this.user.phone=p;
        return this;
    }
    build(){
        return this.user;
    }
}
//********************************************************************** 



function run(){
    //Creating & bilding an Employee
    const user1=new Builder('Karn');
    const user1_updated=user1.age(23).build();
    
    //Using predefined template to showcase our Employee records
    const user1_template=new template(user1_updated);
    user1_template.decorate();
    user1_template.layout();
}

run();

