const Employee=require('../source/employee')
test('testing main class by return Object',()=>{
    const employee=new Employee('namees','n@g',1122)
    expect(employee).toEqual(expect.any(Object))
})