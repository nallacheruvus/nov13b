import { Observable } from "rxjs";

/**
 * Second syntax of creating an observable
 */
function secSynt() {
    var observableb = Observable.create(function Subscribe(subscriber) {
        subscriber.next("This is second observable");
    });
    observableb.subscribe(x => console.log(x));
}

/**
 * First syntax of creating an observable
 */
function firstSynt() {
    var observablea = new Observable(function Subscribe(subscriber) {
        subscriber.next("This is first observable");
    });
    observablea.subscribe(x => console.log(x));
}
