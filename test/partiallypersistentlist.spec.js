import { List } from '../src/PartiallyPersistentList'

describe('Partially Persistent List', () => {
  describe('constructor', () => {
    it('with no elements should return empty array', () => {
      let foo = List([])
      expect(foo.toJS()).toEqual([])
    })
    it('with an element and toJS work', () => {
      let foo = List([1])
      expect(foo.toJS()).toEqual([1])
    })
  })

  describe('should add things', () => {
    it('to an empty list', () => {
      const foo = List([])
      expect(foo.toJS()).toEqual([])
      expect(foo.toString()).toEqual(`Temporal.PartiallyPersistentList([])`)

      const bar = foo.add(1)
      expect(bar.toJS()).toEqual([1])
      expect(bar.toString()).toEqual(`Temporal.PartiallyPersistentList([1])`)
    })

    it('and be able to chain adds', () => {
      const foo = List([])
        .add(1)
        .add(2)
      expect(foo.toString()).toEqual(`Temporal.PartiallyPersistentList([1,2])`)
      expect(foo.toJS()).toEqual([1, 2])
    })
  })

  describe('head', () => {
    it('should return [] on an empty list', () => {
      const foo = List([])
      expect(foo.head).toEqual([])
    })
    it('should be equal to head on a collection with one commit', () => {
      let foo = List([1])
      foo = foo.add(2)
      expect(foo.head).toEqual([1, 2])
    })
  })

  describe('present', () => {
    // it('should return [] on an empty list', () => {
    //   const foo = List([])
    //   expect(foo.present.val).toEqual([])
    // })
    // it('should return HEAD on a collection with one commit', () => {
    //   let foo = List([1])
    //   console.log(foo.present)
    //   foo = foo.add(2)
    //   expect(foo.present.val).toEqual([1, 2])
    // })
    it('should return the appropriate value when moved backwards through time', () => {})
  })

  describe('prev', () => {
    it('should return undefined on an empty list', () => {})
    it('should return undefined on a collection with a single commit', () => {})
    it('should return the previous state of the list when the list has been operated on once', () => {})
    it('should be able to go back twice on a list that has been operated on twice', () => {})
  })

  describe('past', () => {
    it('should return undefined on an empty list', () => {})
    it('should return undefined on a collection with one commit', () => {})
    it('should return a list with 1 element on a collection with 1 commit and present set to HEAD', () => {})
  })

  describe('next', () => {
    it('should return undefined on an empty list', () => {})
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
})
