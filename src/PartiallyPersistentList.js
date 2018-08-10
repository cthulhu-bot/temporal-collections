import { persistentNode } from './nodes'

export class List {
  static rootNode

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
    this.lastNode().next = new persistentNode(lastNode().val.concat([addVal]))
    return this
  }

  remove(idx) {
    if (lastNode().val.length === 0) {
      throw 'Attempted to remove from empty list'
    }

    const lastVal = lastNode().val
    lastVal.delete(idx)
    lastNode().next = new persistentNode(lastVal)
    return this
  }
  head() {}
  tail() {}
  shift() {}
  unshift() {}
  slice() {}
  splice() {}
  inspect() {
    return `Temporal.PartiallyPersistentList(${lastNode().val || `null`})`
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
    return lastNode().val.length
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