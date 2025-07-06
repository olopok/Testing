import { analyzeArray } from "./analyzeArray";

object = {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};

test('The object is good!', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject(object);
})