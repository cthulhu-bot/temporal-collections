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
      const foo = new List([])
      expect(foo.toJS()).toEqual([])
      expect(foo.toString()).toEqual(`Temporal.PartiallyPersistentList([])`)

      const bar = foo.add(1)
      expect(bar.toJS()).toEqual([1])
      expect(bar.toString()).toEqual(`Temporal.PartiallyPersistentList([1])`)
    })

    it('and be able to chain adds', () => {
      const foo = new List([]).add(1).add(2)
      expect(foo.toString()).toEqual(`Temporal.PartiallyPersistentList([1,2])`)
      expect(foo.toJS()).toEqual([1, 2])
    })
  })

  describe('should remove things', () => {
    it('should throw an exception trying to remove from an empty collection', () => {})
    it('should remove from a collection with 1 element', () => {})
    it('should remove from a collection with more than 1 element', () => {})
    it('should throw an exception attempting to remove an index that doesnt exist', () => {})
  })

  describe('calling head on a list', () => {
    it('should return undefined on an empty list', () => {})
    it('should return a single value on a list with 1 element', () => {})
    it('should return a single value on a list with more than 1 element', () => {})
  })

  describe('calling tail on a list', () => {
    it('should return undefined on an empty list', () => {})
    it('should return undefined on a list with 1 element', () => {})
    it('should return a list with a single value on a list with 2 elements', () => {})
    it('should return a list from a list with more than 2 elements', () => {})
  })

  describe('calling indexOf(x) on a list', () => {
    it('should return an empty array if x doesnt exist', () => {})
    it('should return an array with 1 element if x exists once', () => {})
    it('should return an array with 2 elments if x exists twice', () => {})
  })

  describe('calling map on a list', () => {
    it('should apply the function and return a new list', () => {})
    it('should also append a new node', () => {})
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
