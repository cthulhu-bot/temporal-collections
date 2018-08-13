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

  length() {
    return this.lastNode().val.length
  }
  head() {}
  tail() {}
  indexOf(x) {}
  map(f) {}
  filter(f) {}
  reduce(f, init) {}

  // Nice to haves
  slice() {}
  shift() {}
  unshift() {}
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
  tLength() {
    let node = rootNode
    length = 0
    while (node.next !== null) {
      node = node.next
      length++
    }
    return length
  }
  tmap(f) {}
  tfilter(f) {}
  treduce(f) {}
}
