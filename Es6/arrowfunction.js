function userdata() {
    this.name = 'Yogesh',
    this.age = 22,
    this.OutName = function () {

        console.log(this.age);
        let innerFunction = () => {
            console.log(this.age);
        }
        innerFunction();
    }
}

const out = new userdata();
out.OutName();