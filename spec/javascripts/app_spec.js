describe("a bus", function(){

  it("is empty by default", function(){
    var bus = new Bus();
    expect(bus.isEmpty()).toBe(true);
  });

  it("can add a passenger", function(){
    var bus = new Bus();
    bus.add("User");
    expect(bus.isEmpty()).toBe(false);
  });

  it("can add multiple passengers", function(){
    var bus = new Bus();
    bus.add("Mick");
    bus.add("Keith");
    expect(bus.size()).toEqual(2);
  });

  it("returns true if it contains a specific passenger", function(){
    var bus = new Bus();
    bus.add("Mick");
    expect(bus.contains("Mick")).toEqual(true);
    expect(bus.contains("Keith")).not.toEqual(true);
  });

  it("can't add the same passenger twice", function(){
    var bus = new Bus();
    bus.add("Mick");
    expect(bus.size()).toEqual(1);
    bus.add("Mick");
    expect(bus.size()).not.toEqual(2);
  });

});
