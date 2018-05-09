import { List } from '../src/PartialPersistence'

describe('Partially Persistent List', () => {
    it('should add things to an empty list', () => {
        let foo = List([])
        expect(foo.push(1)).toEqual([1])
    })
    it('should add things to a non-empty list', () => {
        let foo = List([1])
        expect(foo.push(2)).toEqual([1, 2])
    })
})
