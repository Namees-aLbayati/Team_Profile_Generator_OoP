const Engineer = require('../source/engineer');

test('Engineer Object testing', () => {
    const engineer = new Engineer("nameesmohammed", 11, "n@gmail","n@git");
  
    expect(engineer.name).toBe('nameesmohammed');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.Email).toBe('n@gmail');
    expect(engineer.getinfoG()).toBe('n@git');
    expect(engineer.getposition()).toBe('Engineer')
    
  });