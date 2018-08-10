import { List } from '../src/PartiallyPersistentList'

describe('Partially Persistent List', () => {
  describe('constructor', () => {
    it('with no elements should return empty array', () => {
      let foo = new List([])
      expect(foo.toJS()).toEqual([])
    })
    it('with an element and toJS work', () => {
      let foo = new List([1])
      expect(foo.toJS()).toEqual([1])
    })
  })

  describe('should add things', () => {
    it('to an empty list', () => {
      let foo = new List([])
      const bar = foo.add(1).add(1)
      console.log('bar: ', bar)
      // expect(foo.add(1)).toEqual(`Temporal.PartiallyPersistentList([1])`)
    })
    // it('to a non-empty list', () => {
    //   let foo = List([1])
    //   expect(foo.add(2)).toEqual([1, 2])
    // })
  })

  // describe('should remove things', () => {
  //   it('removing from an empty list should throw an exception', () => {
  //     let foo = List([])
  //     expect(foo.pop).toThrow('Attempted to remove from empty list')
  //   })
  // })
  // it('empty list should return length of 0', () => {
  //   let foo = List([])
  //   expect(foo.length()).toEqual(0)
  // })
  // it('non empty list should return non-zero length', () => {
  //   let foo = List([1])
  //   expect(foo.length()).toEqual(1)
  //   expect(foo.add(2).length()).toEqual(2)
  // })
  // it('empty list should return tLength of 1', () => {})
  // it('popping from a non-empty list should return the list without the last pushed value', () => {})
  // it('length should return the length', () => {})
  // it('should show all past values upon inspection', () => {})
  // it("tLength should return the number of values back to the variable's initalization", () => {})
})
