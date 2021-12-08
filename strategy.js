function fedex(){
    this.name='Fedex';
    this.calculate=package=>{
        //fedex calculations
        return 2.45; //fedex shipping rate
    }
}

function UPS(){
    this.name='UPS';
    this.calculate=package=>{
        //UPS calculations
        return 1.56; //UPS shipping rate
    }
}

function USPS(){
    this.name='USPS';
    this.calculate=package=>{
        //USPS calculations
        return 4.5; //USPS shipping rate
    }
}

const fdx=new fedex();
const ups= new UPS();
const usps=new USPS();
const package={from:'india', to:'america',weight:1.56};

// what we can do is :
// fdx.calculate(package);
// ups.calculate(package);
// usps.calculate(package);



// now let's put the creation of fdx, ups, usps in one place and use a STRATEGY

function shipping(){
    this.company='';
    this.setStrategy=(company)=>{
        this.company=company;
        this.name=company.name;
    }

    this.calculate=(package)=>{
        return this.company.calculate(package);
    }
}

const ship=new shipping();
ship.setStrategy(fdx);
console.log(ship.name+' '+ship.calculate(package));

ship.setStrategy(ups);
console.log(ship.name+' '+ship.calculate(package));

ship.setStrategy(usps);
console.log(ship.name+' '+ship.calculate(package));