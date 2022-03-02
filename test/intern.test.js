const Intern=require('../source/intern')
test('Intern function return array of object',()=>{
    const Intern1=new Intern('sara','ss@',1232,'UW')
    expect(Intern1).toEqual(expect.any(Object))
    expect(Intern1.name).toEqual(expect.any(String))
    expect(Intern1.id).toEqual(expect.any(Number))
    expect(Intern1.School).toEqual(expect.any(String))

    expect(Intern1.Email).toBe('ss@')



})