import { Map } from '../../src'

describe('Partially Persistent List', () => {
  describe('constructor', () => {
    it('with no elements should return empty array', () => {})
    it('with empty array should return empty array', () => {})
    it('with an element and toJS work', () => {})
  })

  describe('add', () => {
    it('to an empty list', () => {})
    it('should work and be able to chain adds', () => {})
  })

  describe('remove', () => {
    it('should throw an exception trying to remove from an empty collection', () => {})
    it('should remove from a collection with 1 element', () => {})
    it('should remove from a collection with more than 1 element', () => {})
    it('should throw an exception attempting to remove an index that doesnt exist', () => {})
  })

  describe('length', () => {
    it('should return 0 for an empty array', () => {})
    it('should increment whenever an element gets added', () => {})
    it('should reflect the length of the "present" pointer', () => {})
    it('should decrement whenever an element is removed', () => {})
  })

  describe('prev', () => {
    it('should return undefined on an empty list', () => {})
    it('should return undefined on a collection with a single commit', () => {})
    it('should return the previous state of the list when the list has been operated on once', () => {})
    it('should be able to go back twice on a list that has been operated on twice', () => {})
    it('should return undefined if present is pointing to the root node', () => {})
  })

  describe('present', () => {
    it('should return [] after an empty list is constructed', () => {})
    it('should return the last node on a collection with one commit', () => {})
    it('should return the appropriate value when moving backwards and forwards through time', () => {})
    it('should return undefined if present is pointing to the root node', () => {})
  })

  describe('mods', () => {
    it('should track modifications to the List', () => {})
  })

  describe('equals', () => {
    it('should work with initialization', () => {})
    it('should work if elements have been added via list methods', () => {})
    it('should work if the list was created via instantiation or methods', () => {})
    it('should work with nested lists', () => {})
  })

  describe('tequals', () => {
    it('should work with initialization', () => {})
    it('should work if elements have been added via list methods', () => {})
    it('should fail if the list was created via instantiation as opposed to methods', () => {})
  })

  describe('map', () => {
    it('should replicate mapping behavior on an array for the last value', () => {})
  })

  describe('filter', () => {
    it('should replicate filtering behavior on an array for the last value', () => {})
  })

  describe('reduce', () => {
    it('should replicate reducing behavior on an array for the last value', () => {})
  })

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
