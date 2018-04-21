import { List, Map } from '../src/PartialPersistence'

describe('Partially Persistent List', () => {
    it('should add things', () => {
        let foo = List([]);

        expect(foo.push(1)).toEqual([1])
    })
})
