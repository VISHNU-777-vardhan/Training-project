// Throttle Function
export function throttle(callback, delay = 300) {

    let shouldWait = false;

    return function (...args) {

        if (shouldWait) return;

        callback.apply(this, args);

        shouldWait = true;

        setTimeout(() => {

            shouldWait = false;

        }, delay);

    };

}