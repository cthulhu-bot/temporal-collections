export class persistentNode {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }

    toString() {
        return this.next === null ? `[${this.val}]` : `[${this.val}] -> `
    }
}

// export const persistentNode = (val) => ({
//     val: val,
//     next: null,
//     prev: null,
//     toString: () => next === null ? `[${val}]` : `[${val}] -> `
// });
