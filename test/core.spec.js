import { List } from '../src/PartiallyPersistentList'

describe('Partially Persistent List', () => {
    it('list consturctors dont quite work', () => {
        let foo = new List([1])
        expect(foo).toEqual([1])
    })
    it('should add things to an empty list', () => {
        let foo = new List([])
        expect(foo.add(1)).toEqual([1])
        console.log(foo)
    })
    it('should add things to a non-empty list', () => {
        let foo = new List([1])
        expect(foo.add(2)).toEqual([1, 2])
        console.log(foo)
    })
    it('should show all past values upon inspection', () => {
    })
    // it('should add things to an empty list', () => {
    //     let foo = List([])
    //     expect(foo.add(1)).toEqual([1])
    // })
    // it('should add things to a non-empty list', () => {
    //     let foo = List([1])
    //     expect(foo.add(2)).toEqual([1, 2])
    // })
})
