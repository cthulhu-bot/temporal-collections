export const persistentNode = (val) => ({
    val: val,
    next: null,
    prev: null,
    // inspect: () => `[${val}] -> `,
    toString: () => `[${val}] -> `
});