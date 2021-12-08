

class Participant{
    constructor(name){
        this.name=name;
        this.chatroom=null;
    }

    send(message,to){
        this.chatroom.send(message,this,to);
    }

    receive(message,from){
        console.log(from.name + " to " + this.name + ": " + message);
    }
}

class Chatroom{
    constructor(){
        this.participants={};
    }

    register(participant){
        this.participants[participant.name] = participant;
        participant.chatroom = this;
    }
    send(message,from,to){
        if (to) {                      
            to.receive(message, from);
        } else {                    
            Object.values(this.participants).forEach((keyValue)=>{
                if (keyValue!== from) {
                    keyValue.receive(message, from);
                }
            })
        }
    }
}

function run() {

    var A = new Participant("A");
    var B = new Participant("B");
    var C = new Participant("C");
    var D = new Participant("D");

    var chatroom = new Chatroom();
    chatroom.register(A);
    chatroom.register(B);
    chatroom.register(C);
    chatroom.register(D);

    A.send("Hi All!");
    A.send("Hope you are well.");
    B.send("I am fine, A", A);
    C.send("I am good, A",A);
    D.send("Hey C!", C);
}

run();