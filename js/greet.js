var greetings_used = [];

var Greeter = function(greeting) {
    this.greeting = greeting;

    greetings_used.push(greeting);

    this.greet = function(who, times) {
        for (var i=0; i < times; i++) {
            console.log(this.greeting + " " + who);
        }
    }
}

var get_variaty = function() {
    return greetings_used.length;
}

Sam = new Greeter("Yo");
Jose = new Greeter("Hey");
Veronica = new Greeter("Wassssuppppp");

console.log(get_variaty());
console.log(greetings_used);