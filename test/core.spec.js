import { List } from "../src/PartiallyPersistentList";

describe("Partially Persistent List", () => {
    it("empty list constructor should return empty array", () => {
        let foo = List([]);
        expect(foo.toJS()).toEqual([]);
    });
    it("list constructor and toJS work", () => {
        let foo = List([1]);
        expect(foo.toJS()).toEqual([1]);
    });
    it("should add things to an empty list", () => {
        let foo = List([]);
        expect(foo.push(1)).toEqual([1]);
    });
    it("should add things to a non-empty list", () => {
        let foo = List([1]);
        expect(foo.push(2)).toEqual([1, 2]);
    });
    it("removing from an empty list should throw exception", () => {
        let foo = List([]);
        expect(foo.pop).toThrow("Attempted to remove from empty list");
    });
    it("should show all past values upon inspection", () => {});
});
