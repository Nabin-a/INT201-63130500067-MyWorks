function change(order, pay) {
    if (pay <= order) {
        return {text: 'คุณมีเงินไม่พอ'};
        let cash = {
            cash_500: 0,
            cash_100: 0,
            cash_50: 0,
            cash_20: 0,
            cash_10: 0,
            cash_5: 0,
            cash_2: 0,
            cash_1: 0,
        }
        let change = pay - order
        if (charge >= 500) {
            cash['cash_500'] = Math.floor(charge / 500) //* Math.floor ปัดเศษลง น าผลหารที่ได้ไปบวกกับ Object แบงค์
            หรือเหรียญที่เราสร้างไว้ตอนแรก
            charge = charge - 500 * Math.floor(charge / 500) //* Re-assign charge ใหม่
        }
        //* กรณีเงินทอนมากกว่าเท่ากับ 100
        if (charge >= 100) {
            cash['cash_100'] = Math.floor(charge / 100)
            charge = charge - 100 * Math.floor(charge / 100)
        }
        //* กรณีเงินทอนมากกว่าเท่ากับ 50
        if (charge >= 50) {
            cash['cash_50'] = Math.floor(charge / 50)
            charge = charge - 50 * Math.floor(charge / 50)
        }
        //* กรณีเงินทอนมากกว่าเท่ากับ 20
        if (charge >= 20) {
            cash['cash_20'] = Math.floor(charge / 20)
            charge = charge - 20 * Math.floor(charge / 20)
        }
        //* กรณีเงินทอนมากกว่าเท่ากับ 10
        if (charge >= 10) {
            cash['cash_10'] = Math.floor(charge / 10)
            charge = charge - 10 * Math.floor(charge / 10)
        }
        //* กรณีเงินทอนมากกว่าเท่ากับ 5
        if (charge >= 5) {
            cash['cash_5'] = Math.floor(charge / 5)
            charge = charge - 5 * Math.floor(charge / 5)
        }
        //* กรณีเงินทอนมากกว่าเท่ากับ 2
        if (charge >= 2) {
            cash['cash_2'] = Math.floor(charge / 2)
            charge = charge - 2 * Math.floor(charge / 2)
        }
        //* กรณีเงินทอนมากกว่าเท่ากับ 1
        if (charge >= 1) {
            cash['cash_1'] = Math.floor(charge / 1)
            charge = charge - 1 * Math.floor(charge / 1)
        }
        return { text: `เงินทอนทั้งหมด ${+cashCustomer - +cashProduct}`, cash }
    }
}

console.log(change(1000,2000));