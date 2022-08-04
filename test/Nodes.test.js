import { persistentNode } from '../src/nodes.js'

describe('equals', () => {
  test('should do a deep equality on arrays', () => {
    const node1 = persistentNode([1])
    const node2 = persistentNode([2])

    expect(node1.equals(node1)).toBe(true)
    expect(node1.equals(node2)).toBe(false)
  })
})
