function Bus() {
  this.passengers = [];
}

Bus.prototype.isEmpty = function() {
  return this.passengers.length === 0;
}

Bus.prototype.add = function(passenger) {
  if ( !this.contains(passenger) ){
    this.passengers.push(passenger);
  }
}

Bus.prototype.size = function() {
  return this.passengers.length;
}

Bus.prototype.contains = function(passenger) {
  return this.passengers.indexOf(passenger) >= 0
}
