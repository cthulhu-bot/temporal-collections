import { persistentNode } from './nodes'

class PartiallyPersistentList {
  constructor(initialList) {
    this.rootNode = new persistentNode(initialList || [])
    this._present = this._head = this.rootNode
  }

  static equals(otherList) {
    return false
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

  get head() {
    return this._head.val
  }
  set head(val) {
    this._head = val
  }

  add(addVal) {
    this.lastNode().next = new persistentNode(
      this.lastNode().val.concat([addVal]),
    )
    if (this._present.equals(this.lastNode())) {
      this._present = this.lastNode()
    }
    this._head = this.lastNode()
    return this
  }

  get present() {
    return this._present.val
  }
  set present(val) {
    this._present = val
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

  // Nice to haves
  head() {}
  tail() {}
  indexOf(x) {}
  map(f) {}
  filter(f) {}
  reduce(f, init) {}

  // stretch goals
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

const List = (initialList) => new PartiallyPersistentList(initialList)
module.exports = {
  List,
}
