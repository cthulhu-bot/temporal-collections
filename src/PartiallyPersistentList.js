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
    return this.present.val
  }

  add(addVal) {
    if (!this._present.equals(this.lastNode())) {
      throw new Exception('can only add a node to the end of a PartiallyPersistent list, please set "present" to the end of the list before adding')
    }
    const oldLastNode = this.lastNode()
    const newNode = new persistentNode(
      this.lastNode().val.concat([addVal]),
    )
    newNode.prev = oldLastNode
    oldLastNode.next = newNode
    this._present = newNode
    return this
  }

  get present() {
    return this._present
  }
  set present(node) {
    this._present = node
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

  prev() {
    return this._present.prev
  }

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
