import { persistentNode } from './nodes'

export class List {
  constructor(initialList) {
    this.rootNode = new persistentNode(initialList || [])
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
  head() {}
  tail() {}
  shift() {}
  unshift() {}
  slice() {}
  splice() {}
  toString() {
    return `Temporal.PartiallyPersistentList([${this.lastNode().val}])`
  }
  inspect() {
    return `Temporal.PartiallyPersistentList([${this.lastNode().val}])`
  }
  tInspect() {
    let node = rootNode
    let out = ''
    while (node !== null) {
      out += node.toString()
      node = node.next
    }
    return out
  }
  prev(num) {}
  length() {
    return this.lastNode().val.length
  }
  tLength() {
    let node = rootNode
    length = 0
    while (node.next !== null) {
      node = node.next
      length++
    }
    return length
  }
  map(f) {}
  filter(f) {}
  reduce(f) {}
  tmap(f) {}
  tfilter(f) {}
  treduce(f) {}
}
