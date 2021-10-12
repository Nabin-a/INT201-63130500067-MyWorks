let thai_fruit = ["mango", "pineapple", "coconut"]; //กำหนด Array ผลไม้ของประเทศไทย
let other_fruit = ["grape", "apple", "strawberry"]; //กำหนด Array ของผลไม้นอกประเทศไทย

/*
    join() คือการนำ String หรือ Separator มาต่อกัน เพื่อให้เกิด Output รูปแบบใหม่
    return String
*/

//* ตัวอย่างที่ 1
//* นำ thai_fruit กับ other_fruit มารวมกันด้วย Separator และ join (แบ่ง) ด้วย comma (,)
let all_fruit = [...thai_fruit, ...other_fruit].join(", ");

console.log(all_fruit); //* Output: mango, pineapple, coconut, grape, apple, strawberry

//* ตัวอย่างที่ 2 = การใช้สร้าง Function reduce()
/**
 * เป็น Function คำนวณผลรวมของผลไม้ทั้งหมด
 * @param {Array} array เป็น Array ของผลไม้
 * @returns {number} ผลรวมของไม้ผลไม้ทั้ง
 */
function sum_fruit(array = []) {
    /**
     * reduce = คำนวณผลรวมของ Array
     * @param {number} prev ผลรวมของจำนวนก่อนหน้า
     * @param {fruit} fruit element ของ Array ณ ที่นี่คือ Object
     * @returns {number} ผลรวมทั้งหมด
     */
    return array.reduce((prev, fruit) => fruit.qty+ prev, 0);
}

//* ตัวอย่างที่ 3 = การ Pass Array และเรียกใช้งาน Function sum_fruit
let s10_have_fruit = [
    { name: "mango", qty: 5 },
    { name: "coconut", qty: 2 },
    { name: "strawberry", qty: 3 },
    { name: "banana", qty: 4}
]; //* กำนหดให้ s10_have_fruit เป็น Array Object ที่มัผลไม้

//* เรียกใช้ Function sum_fruit()
let sum_total_fruits = sum_fruit(s10_have_fruit);

console.log(sum_total_fruits); //* Output: 10

let haveFruit = s10_have_fruit.reduce((sum, fruit) => sum + fruit.qty, 0);

console.log(haveFruit);