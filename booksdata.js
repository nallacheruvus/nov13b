import Books from "./Books";

function creaBooks() {
    let bArr = [];
    let arr1 = ["Ramayan", "Mahabharat", "Sakuntalam", "Elephant Song", "Quiet sigh of moor"];
    let arr2 = ["Valmiki", "Vyas", "Kalidasa", "Wilbur smith", "Salman Rushdie"];
    for (let i = 0; i < arr1.length; i++) {
        let b = new Books(arr1[i], arr2[i]);
        bArr.push(b);
    }
    return bArr;
}

export default creaBooks;