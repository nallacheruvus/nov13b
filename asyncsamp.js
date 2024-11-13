async function fetchData(a) {
    if (a <= 200 && a > 0) {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos/" + a);
        let data = await res.json();
    }
    return JSON.stringify(data);
}

export default fetchData;