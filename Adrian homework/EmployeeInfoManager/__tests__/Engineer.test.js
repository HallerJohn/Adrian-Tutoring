const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('Engineer class properly setup', () => {
    const engineer = new Engineer("John", 123, "John@gmail.com", "JohnDoe");
    expect(engineer).toEqual({
        name: "John",
        id: 123,
        email: "John@gmail.com",
        github: "JohnDoe",
        role: "Engineer"
    });
    expect(engineer.getName()).toBe("John");
    expect(engineer.getEmail()).toBe("John@gmail.com");
    expect(engineer.getId()).toBe(123);
    expect(engineer.getRole()).toBe("Engineer");
    expect(engineer.getGithub()).toBe("JohnDoe");
})