import capitalizeFirstLetter from "./capitalize";

test('The first letter is capitalazed', () => {
    expect(capitalizeFirstLetter('hello world!')).toBe('Hello world!')
}) 