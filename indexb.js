import { of, from, interval, range, throwError, timer, iif } from "rxjs";
import creaBooks from "./booksdata";
import { filter, reduce, take, count, max, min, concat } from "rxjs/operators";
import assert from "assert";




// let arr = creaBooks();
// let a = assert.notDeepEqual(arr.length, 5, "are equal");
// console.log(a);

let a_num = of(1, 7, 4, 5, 8, 9, 10, 20);
let fin_vala = a_num.pipe(count());
fin_vala.subscribe(x => console.log(x));
let fin_valb = a_num.pipe(max());
fin_valb.subscribe(a => console.log(a));
let fin_valc = a_num.pipe(min());
fin_valc.subscribe(a => console.log(a));
let b_num = of(11, 12, 13, 14, 15);
console.log("*".repeat(10));
let fin_vald = a_num.pipe(concat(b_num));
fin_vald.subscribe(x => console.log(x));
console.log("*".repeat(10));
let c_num = from([111, 6, 7, 8, 9, 10]);
let fin_vale = c_num.pipe(min((a, b) => a - b));
fin_vale.subscribe(x => console.log(x));











function allSyntsObs() {
    /**
    * Third syntax to create observable
    */
    let obsa = of(11, 12, 13, 14, 15, 16, 7, 18, 19, 20);
    console.log("\t\t\t\tPrinting from of observable");
    obsa.subscribe(c => console.log(c));
    /**
     * Fourth Syntax ofcreating an observable
     */
    let obsb = from(["Science", "Data Science", "Robotics", "AI", "ML"]);
    console.log("\t\t\t\tPrinting from \"from\" observable");
    obsb.subscribe(c => console.log(c.toUpperCase()));
    let arr = creaBooks();
    let obsc = from(arr);
    obsc.subscribe(c => console.log(JSON.stringify(c)));
    /**
     * Fifth Syntax to create an observable
     */
    let obsd = interval(10);
    // obsd.subscribe(x => console.log(x));
    let obse = of(21, 22, 24, 26, 28, 87, 64, 45, 38, 9, 88, 100);
    console.log("\t\t\t\tPrinting from pipe,filter and reduce observable");
    let casea = obse.pipe(filter(x => x % 2 !== 0), reduce((a, b) => a + b));
    casea.subscribe(c => console.log(c));
    let caseb = obsd.pipe(take(20));
    caseb.subscribe(x => console.log("*" + x));
    /**
     * Sixth Syntax to create an observable
     */
    let obsf = range(1, 50);
    console.log("\t\t\t\tPrinting from range observable");
    obsf.subscribe(x => console.log("%" + x));
    const obsg = throwError(new Error("Error in observable"));
    obsg.subscribe(x => console.log(x), (e) => console.log(e));
    /**
     * Seventh Syntax ro create an observable
     */
    let obsh = timer(10, 10);
    let casec = obsh.pipe(take(20));
    casec.subscribe(x => console.log('$' + x));

    /**
     * Eight syntax
     */
    let task1 = iif(() => (Math.random() + 1) % 2 === 0, of("Even Types"), of("Odd Types"));
    task1.subscribe(x => console.log(x));
}

