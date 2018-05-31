export const persistentNode = (val) => ({
    val: val,
    next: null,
    prev: null,
    toString: () => `[${val}] -> `
});