import { persistentNode } from '../src/nodes.js'

describe('equals', () => {
  it('should do a deep equality on node vals', () => {
    const node1 = persistentNode([1])
    const node2 = persistentNode([2])

    expect(node1.equals(node1)).toBe(true)
    expect(node1.equals(node2)).toBe(false)
  })
  it('should check the next and prev nodes', () => {
  })
})
