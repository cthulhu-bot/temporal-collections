import { List } from '../src/PartiallyPersistentList'

describe('Partially Persistent List', () => {
  describe('constructor', () => {
    it('with no elements should return empty array', () => {
      let foo = List()
      expect(foo.toJS()).toEqual([])
    })
    it('with an element and toJS work', () => {
      let foo = List([1])
      expect(foo.toJS()).toEqual([1])
    })
  })

  describe('add', () => {
    it('to an empty list', () => {
      const foo = List([])
      expect(foo.toJS()).toEqual([])
      expect(foo.toString()).toEqual(`Temporal.PartiallyPersistentList((present) [])`)

      const bar = foo.add(1)
      expect(bar.toJS()).toEqual([1])
      expect(bar.toString()).toEqual(`Temporal.PartiallyPersistentList([] -> (present) [1])`)
    })

    it('should work and be able to chain adds', () => {
      const foo = List([])
        .add(1)
        .add(2)
      expect(foo.toString()).toEqual(`Temporal.PartiallyPersistentList([] -> [1] -> (present) [1,2])`)
      expect(foo.toJS()).toEqual([1, 2])
    })
  })

  describe('present', () => {
    it('should return [] after an empty list is constructed', () => {
      const foo = List([])
      expect(foo.toJS()).toEqual([])
    })
    it('should return the last node on a collection with one commit', () => {
      let foo = List([1])
      foo = foo.add(2)
      expect(foo.toJS()).toEqual([1, 2])
    })
    it('should return the appropriate value when moving backwards and forwards through time', () => {
      let foo = List([1])
      foo = foo.add(2)
      foo = foo.add(3)
      expect(foo.toJS()).toEqual([1,2,3])
      expect(foo.toString()).toEqual(`Temporal.PartiallyPersistentList([1] -> [1,2] -> (present) [1,2,3])`)

      foo.present = foo.prev()
      expect(foo.toJS()).toEqual([1,2])
      expect(foo.prev().toJS()).toEqual([1])
      expect(foo.toString()).toEqual(`Temporal.PartiallyPersistentList([1] -> (present) [1,2] -> [1,2,3])`)

      foo.present = foo.next()
      expect(foo.toJS()).toEqual([1,2,3])
      expect(foo.toString()).toEqual(`Temporal.PartiallyPersistentList([1] -> [1,2] -> (present) [1,2,3])`)
    })
  })

  describe('prev', () => {
    it('should return undefined on an empty list', () => {})
    it('should return undefined on a collection with a single commit', () => {})
    it('should return the previous state of the list when the list has been operated on once', () => {})
    it('should be able to go back twice on a list that has been operated on twice', () => {})
    it('should return undefined if present is pointing to the root node', () => {})
  })

  describe('next', () => {
    it('should return undefined on an empty list', () => {})
    it('should return undefined if present is pointing to the last node', () => {})
    it('should return the next node if present is pointing to something other than the last node', () => {})
  })

  describe('past', () => {
    it('should return undefined on an empty list', () => {})
    it('should return undefined on a collection with one commit', () => {})
    it('should return a list with 1 element on a collection with 1 commit and present set to HEAD', () => {})
  })

  describe('future', () => {
    it('should return undefined on an empty list', () => {})
    it('should return undefined when present is set to HEAD', () => {})
    it('should return one value when present is moved to the prev of HEAD', () => {})
  })

  describe('should remove things', () => {
    it('should throw an exception trying to remove from an empty collection', () => {})
    it('should remove from a collection with 1 element', () => {})
    it('should remove from a collection with more than 1 element', () => {})
    it('should throw an exception attempting to remove an index that doesnt exist', () => {})
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
})
