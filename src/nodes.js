export const partiallyPersistentNode = (val, next, prev, isRoot) => ({
    val: [val],
    next: partiallyPersistentNode,
    prev: partiallyPersistentNode,
    isRoot: false,
    inspect: `[${val}]`
});