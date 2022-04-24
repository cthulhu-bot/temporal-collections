import List, { isPartiallyPersistentList } from '../../src'

describe('Partially Persistent List', () => {
  describe('identity test', () => {
    test('should know its own identity', () => {
      let foo = List()
      expect(isPartiallyPersistentList(foo)).toBe(true)
    })
  })

  describe('constructor', () => {
    it('with no elements should return empty array', () => {
      let foo = List()
      expect(foo.toJS()).toEqual([])
    })
    it('with empty array should return empty array', () => {
      let foo = List([])
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
      expect(foo.toString()).toEqual(
        `Temporal.PartiallyPersistentList((present) [])`,
      )

      const bar = foo.add(1)
      expect(bar.toJS()).toEqual([1])
      expect(bar.toString()).toEqual(
        `Temporal.PartiallyPersistentList([] -> (present) [1])`,
      )
    })

    it('should work and be able to chain adds', () => {
      const foo = List([]).add(1).add(2)
      expect(foo.toString()).toEqual(
        `Temporal.PartiallyPersistentList([] -> [1] -> (present) [1,2])`,
      )
      expect(foo.toJS()).toEqual([1, 2])
    })
  })

  describe('remove', () => {
    it('should throw an exception trying to remove from an empty collection', () => {})
    it('should remove from a collection with 1 element', () => {})
    it('should remove from a collection with more than 1 element', () => {})
    it('should throw an exception attempting to remove an index that doesnt exist', () => {})
  })

  describe('length', () => {
    it('should return 0 for an empty array', () => {
      let list = List([])
      expect(list.length()).toEqual(0)
    })
    it('should increment whenever an element gets added', () => {
      let list = List([])
      list.add(1)
      expect(list.length()).toEqual(1)
      list.add(2)
      expect(list.length()).toEqual(2)
    })
    it('should reflect the length of the "present" pointer', () => {
      let list = List([])
      list.add(1)
      expect(list.length()).toEqual(1)
      list.add(2)
      expect(list.length()).toEqual(2)

      list.present = list.prev()
      console.log(list.inspect())
      expect(list.length()).toEqual(1)

      // list.present = list.prev()
      // expect(list.length()).toEqual(0)
    })
    it('should decrement whenever an element is removed', () => {
      let list = List([1, 2])
      expect(list.length()).toEqual(2)
    })
  })

  // describe('prev', () => {
  //   it('should return undefined on an empty list', () => {
  //     let foo = List([])
  //     foo = foo.prev()
  //     expect(foo.present.val).toEqual(null)
  //   })
  //   it('should return undefined on a collection with a single element', () => {
  //     let foo = List([1])
  //     foo = foo.prev()
  //     expect(foo.present.val).toEqual(null)
  //   })
  //   it('should return the previous state of the list when the list has been operated on once', () => {
  //     const foo = List([1])
  //     let bar = foo.add(2)
  //     bar = bar.prev()
  //     expect(bar.present.val).toEqual([1])
  //   })
  //   it('should be able to go back twice on a list that has been operated on twice', () => {
  //     const foo = List([1])
  //     const bar = foo.add(2)
  //     const baz = bar.add(3)
  //     expect(baz.prev().toJS()).toEqual([1, 2])
  //     expect(baz.prev().prev().toJS()).toEqual([1])
  //   })
  //   it('should return undefined if present is pointing to the root node', () => {})
  // })

  // describe('present', () => {
  //   it('should return [] after an empty list is constructed', () => {
  //     const foo = List([])
  //     expect(foo.present.toJS()).toEqual([])
  //   })
  //   it('should return the last node on a collection with one commit', () => {
  //     let foo = List([1])
  //     foo = foo.add(2)
  //     expect(foo.toJS()).toEqual([1, 2])
  //   })
  //   it('should return the appropriate value when moving backwards and forwards through time', () => {
  //     let foo = List([1])
  //     foo = foo.add(2)
  //     foo = foo.add(3)
  //     expect(foo.toJS()).toEqual([1, 2, 3])
  //     expect(foo.toString()).toEqual(
  //       `Temporal.PartiallyPersistentList([1] -> [1,2] -> (present) [1,2,3])`,
  //     )

  //     foo.present = foo.prev() // should this be foo.back(1)? should we support a side effecty api?
  //     expect(foo.toJS()).toEqual([1, 2])
  //     expect(foo.prev().toJS()).toEqual([1])
  //     expect(foo.toString()).toEqual(
  //       `Temporal.PartiallyPersistentList([1] -> (present) [1,2] -> [1,2,3])`,
  //     )

  //     foo.present = foo.next()
  //     expect(foo.toJS()).toEqual([1, 2, 3])
  //     expect(foo.toString()).toEqual(
  //       `Temporal.PartiallyPersistentList([1] -> [1,2] -> (present) [1,2,3])`,
  //     )
  //   })
  //   it('should return undefined if present is pointing to the root node', () => {})
  // })

  // describe('mods', () => {
  //   it('should track modifications to the List', () => {
  //     let foo = List([])
  //     foo = foo.add(1)
  //     expect(foo.mods).toEqual([`add(1)`])
  //     foo = foo.add(2)
  //     expect(foo.mods).toEqual([`add(1)`, `add(2)`])
  //   })
  // })

  // describe('equals', () => {
  //   it('should work with initialization', () => {
  //     let foo = List([])
  //     let bar = List([])
  //     expect(foo.equals(bar)).toBe(true)
  //     foo = List([1])
  //     bar = List([2])
  //     expect(foo.equals(bar)).toBe(false)
  //   })
  //   it('should work if elements have been added via list methods', () => {
  //     let foo = List([])
  //     let bar = List([])
  //     foo = foo.add(1)
  //     bar = bar.add(1)
  //     expect(foo.equals(bar)).toBe(true)
  //     bar = bar.add(2)
  //     expect(foo.equals(bar)).toBe(false)
  //   })
  //   it('should work if the list was created via instantiation or methods', () => {
  //     let foo = List([])
  //     let bar = List([1, 2])
  //     foo = foo.add(1)
  //     foo = foo.add(2)
  //     expect(foo.equals(bar)).toBe(true)
  //   })
  //   it('should work with nested lists', () => {
  //     let foo = List([[1]])
  //     let bar = List([[1]])
  //     expect(foo.equals(bar)).toBe(true)
  //   })
  // })

  // describe('tequals', () => {
  //   it('should work with initialization', () => {
  //     let foo = List([])
  //     let bar = List([])
  //     expect(foo.tequals(bar)).toBe(true)
  //     foo = List([1])
  //     bar = List([2])
  //     expect(foo.tequals(bar)).toBe(false)
  //   })
  //   it('should work if elements have been added via list methods', () => {
  //     let foo = List([])
  //     let bar = List([])
  //     foo = foo.add(1)
  //     bar = bar.add(1)
  //     expect(foo.tequals(bar)).toBe(true)
  //     bar = bar.add(2)
  //     expect(foo.tequals(bar)).toBe(false)
  //   })
  //   it('should fail if the list was created via instantiation as opposed to methods', () => {
  //     let foo = List([])
  //     let bar = List([1, 2])
  //     foo = foo.add(1)
  //     foo = foo.add(2)
  //     expect(foo.tequals(bar)).toBe(false)
  //   })
  // })

  // describe('map', () => {
  //   it('should replicate mapping behavior on an array for the last value', () => {
  //     let foo = List([1, 2, 3])
  //     foo = foo.map((x) => ++x)
  //     expect(foo.toJS()).toEqual([2, 3, 4])
  //   })
  // })

  // describe('filter', () => {
  //   it('should replicate filtering behavior on an array for the last value', () => {
  //     let foo = List([1, 2, 3])
  //     foo = foo.filter((x) => x > 2)
  //     expect(foo.toJS()).toEqual([3])
  //   })
  // })

  // describe('reduce', () => {
  //   it('should replicate reducing behavior on an array for the last value', () => {
  //     let foo = List([1, 2, 3])
  //     const bar = foo.reduce((acc, x) => acc + x, 0)
  //     expect(bar).toEqual(6)
  //   })
  // })

  describe('head', () => {
    it('should return undefined for an empty array', () => {})
  })

  describe('tail', () => {
    it('should retrun undefined for an empty array', () => {})
  })

  describe('slice', () => {})

  describe('splice', () => {})

  describe('shift', () => {})

  describe('splice', () => {})

  // describe('collect', () => {
  //   it('should return a flattened array of the each nodes value', () => {
  //     let foo = List([])
  //     const bar = foo.add(1).add(2).collect()
  //     expect(bar).toEqual([[], [1], [1, 2]])
  //   })
  // })

  // Still need these? are these node tests?

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

  // Maybe stretch goals
  describe('indexOf(x)', () => {
    it('should return an empty array if x doesnt exist', () => {})
    it('should return an array with 1 element if x exists once', () => {})
    it('should return an array with 2 elments if x exists twice', () => {})
  })
  describe('find(x)', () => {})
  describe('keyOf', () => {})
  describe('max', () => {})
  describe('min', () => {})
  describe('slice', () => {})

  // these will matter more with Maps
  describe('keys', () => {})
  describe('values', () => {})
  describe('entries', () => {})
})
