import {sum } from "../sum.js"

test("sum function should return sum of two numbers",()=>{
    const res = sum(2,5);

    expect(res).toBe(7);
})