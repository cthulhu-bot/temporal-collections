import { Map } from '../../src'

describe('Partially Persistent List', () => {
  describe('constructor', () => {
    test('with no elements should return empty array', () => {})
    test('with empty array should return empty array', () => {})
    test('with an element and toJS work', () => {})
  })

  describe('add', () => {
    test('to an empty list', () => {})
    test('should work and be able to chain adds', () => {})
  })

  describe('remove', () => {
    test('should throw an exception trying to remove from an empty collection', () => {})
    test('should remove from a collection with 1 element', () => {})
    test('should remove from a collection with more than 1 element', () => {})
    test('should throw an exception attempting to remove an index that doesnt exist', () => {})
  })

  describe('length', () => {
    test('should return 0 for an empty array', () => {})
    test('should increment whenever an element gets added', () => {})
    test('should reflect the length of the "present" pointer', () => {})
    test('should decrement whenever an element is removed', () => {})
  })

  describe('prev', () => {
    test('should return undefined on an empty list', () => {})
    test('should return undefined on a collection with a single commit', () => {})
    test('should return the previous state of the list when the list has been operated on once', () => {})
    test('should be able to go back twice on a list that has been operated on twice', () => {})
    test('should return undefined if present is pointing to the root node', () => {})
  })

  describe('present', () => {
    test('should return [] after an empty list is constructed', () => {})
    test('should return the last node on a collection with one commit', () => {})
    test('should return the appropriate value when moving backwards and forwards through time', () => {})
    test('should return undefined if present is pointing to the root node', () => {})
  })

  describe('mods', () => {
    test('should track modifications to the List', () => {})
  })

  describe('equals', () => {
    test('should work with initialization', () => {})
    test('should work if elements have been added via list methods', () => {})
    test('should work if the list was created via instantiation or methods', () => {})
    test('should work with nested lists', () => {})
  })

  describe('tequals', () => {
    test('should work with initialization', () => {})
    test('should work if elements have been added via list methods', () => {})
    test('should fail if the list was created via instantiation as opposed to methods', () => {})
  })

  describe('map', () => {
    test('should replicate mapping behavior on an array for the last value', () => {})
  })

  describe('filter', () => {
    test('should replicate filtering behavior on an array for the last value', () => {})
  })

  describe('reduce', () => {
    test('should replicate reducing behavior on an array for the last value', () => {})
  })

  // Still need these? are these node tests?

  describe('next', () => {
    test('should return undefined on an empty list', () => {})
    test('should return undefined if present is pointing to the last node', () => {})
    test('should return the next node if present is pointing to something other than the last node', () => {})
  })

  describe('past', () => {
    test('should return undefined on an empty list', () => {})
    test('should return undefined on a collection with one commit', () => {})
    test('should return a list with 1 element on a collection with 1 commit and present set to HEAD', () => {})
  })

  describe('future', () => {
    test('should return undefined on an empty list', () => {})
    test('should return undefined when present is set to HEAD', () => {})
    test('should return one value when present is moved to the prev of HEAD', () => {})
  })

  // Maybe stretch goals
  describe('indexOf(x)', () => {
    test('should return an empty array if x doesnt exist', () => {})
    test('should return an array with 1 element if x exists once', () => {})
    test('should return an array with 2 elments if x exists twice', () => {})
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
