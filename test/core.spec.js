import PartialPersistence from '../src/core'

describe('empty test', () => {
    it('should pass', () => {
        expect(PartialPersistence.List()).toEqual([])
        expect(PartialPersistence.Map()).toEqual({})
    })
})
