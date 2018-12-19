import { persistentNode } from '../nodes'

export class FullyPersistentList {
  constructor(initialList) {
    this.rootNode = new persistentNode(initialList || [])
    this.current = this.rootNode
  }

  lastNode() {
    let node = this.rootNode
    while (node.next !== null) {
      node = node.next
    }
    return node
  }

  toJS() {
    return this.lastNode().val
  }

  add(addVal) {
    this.lastNode().next = new persistentNode(
      this.lastNode().val.concat([addVal]),
    )
    return this
  }

  remove(idx) {
    if (this.lastNode().val.length === 0) {
      throw 'Attempted to remove from empty list'
    }

    const lastVal = this.lastNode().val
    lastVal.delete(idx)
    this.lastNode().next = new persistentNode(lastVal)
    return this
  }

  length() {
    return this.lastNode().val.length
  }

  prev(num) {}
}
