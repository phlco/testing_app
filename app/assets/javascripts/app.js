function Bus() {
  this.passengers = [];
}

Bus.prototype.isEmpty = function() {
  return this.passengers.length === 0;
}

Bus.prototype.add = function(passenger) {
  if ( !this.contains(passenger) ){
    this.passengers.push(passenger);
  } else {
    throw "Passenger already on bus"
  }
}

Bus.prototype.size = function() {
  return this.passengers.length;
}

Bus.prototype.contains = function(passenger) {
  return this.passengers.indexOf(passenger) >= 0
}

function Passenger(name) {
  this.name = name;
}

Passenger.sayHello = function() {
  return "Hello! I'm " + this.name;
}
