class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }lecture(){
        console.log('Sir teaching Math')
    }
}

const tapan = new Teacher('Topon Sir', 'Physics');
console.log(tapan);

const habib = new Teacher('Habib sir', 'Arabic');

console.log(habib);

