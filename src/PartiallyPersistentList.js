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

  // should they just use filter?
  remove(idx) {
    if (this.lastNode().val.length === 0) {
      throw 'Attempted to remove from empty list'
    }

    const lastVal = this.lastNode().val
    lastVal.delete(idx) // <= FIGURE OUT THIS
    this.lastNode().next = new persistentNode(lastVal)
    return this
  }

  length() {
    return this._present.length
  }

  prev() {
    return this._present.prev
  }

  next() {
    return this._present.next
  }

  _timeline() {
    let retString = ''
    let currNode = this.rootNode
    while (!currNode.equals(this.lastNode())) {
      if (currNode.equals(this._present)) {
        retString += '(present) '
      }
      retString += currNode.toString()
      currNode = currNode.next
    }
    if (this.lastNode().equals(this._present)) {
      retString += '(present) '
    }
    retString += this.lastNode().toString()
    return retString
  }

  toString() {
    return `Temporal.PartiallyPersistentList(${this._timeline()})`
  }
  inspect() {
    return `Temporal.PartiallyPersistentList(${this._timeline()})`
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
