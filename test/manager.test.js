const Manager = require("../source/manager");
test('manager constructor object creation',()=>{
    const namees=new Manager("Namees",'nm@gmail',123,11)
    expect(namees.name).toEqual(expect.any(String))
    expect(namees.Email).toEqual(expect.any(String))

    expect(namees.id).toBe(123)
    expect(namees.RoomNo).toEqual(expect.any(Number))
    
})

