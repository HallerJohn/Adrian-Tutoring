const { test } = require("@jest/globals");
const Intern = require("../lib/Intern");

test('Intern class properly setup', () => {
    const intern = new Intern("John", 123, "John@gmail.com", "RCC");
    expect(intern).toEqual({
        name: "John",
        id: 123,
        email: "John@gmail.com",
        school: "RCC",
        role: "Intern"
    });
    expect(intern.getName()).toBe("John");
    expect(intern.getEmail()).toBe("John@gmail.com");
    expect(intern.getId()).toBe(123);
    expect(intern.getRole()).toBe("Intern");
    expect(intern.getSchool()).toBe("RCC");
})