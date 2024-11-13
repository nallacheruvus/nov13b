import { Observable } from "rxjs";
import creaBooks from "./booksdata";
import fetchData from "./asyncsamp";

var observer = new Observable(function Subscribe(subscriber) {
    try {
        // setTimeout(() => {
        //     let bArr = creaBooks();
        //     bArr.forEach(n => {
        //         subscriber.next(JSON.stringify(n));
        //     });
        // }, 3000);
        let data = fetchData(120);
        data.then(n => subscriber.next(n));
        // subscriber.next("First Packet");
        // subscriber.next("Second Packet");
        // subscriber.next("Third Packet");
        // subscriber.next("Fourth Packet");
        // subscriber.next("Fifth Packet");
    } catch (e) {
        subscriber.error(e);
    }
});
observer.subscribe(x => console.log(x), (e) => console.log(e), () => console.log("Observable is complete"));
