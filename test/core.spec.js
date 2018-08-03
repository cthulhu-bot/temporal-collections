import { List } from '../src/PartiallyPersistentList'

describe('Partially Persistent List', () => {
  it('empty list constructor should return empty array', () => {
    let foo = List([])
    expect(foo.toJS()).toEqual([])
  })
  it('list constructor and toJS work', () => {
    let foo = List([1])
    expect(foo.toJS()).toEqual([1])
  })
  it('should add things to an empty list', () => {
    let foo = List([])
    expect(foo.push(1)).toEqual([1])
  })
  it('should add things to a non-empty list', () => {
    let foo = List([1])
    expect(foo.push(2)).toEqual([1, 2])
  })
  //   need to work on removal api
  //   it('removing from an empty list should throw an exception', () => {
  //     let foo = List([])
  //     expect(foo.pop).toThrow('Attempted to remove from empty list')
  //   })
  it('empty list should return length of 0', () => {
    let foo = List([])
    expect(foo.length()).toEqual(0)
  })
  it('non empty list should return non-zero length', () => {
    let foo = List([1])
    expect(foo.length()).toEqual(1)
    expect(foo.push(2).length()).toEqual(2)
  })
  it('empty list should return tLength of 1', () => {})
  it('popping from a non-empty list should return the list without the last pushed value', () => {})
  it('length should return the length', () => {})
  it('should show all past values upon inspection', () => {})
  it("tLength should return the number of values back to the variable's initalization", () => {})
})
