import { persistentNode } from '../nodes'

class PartiallyPersistentList {
  constructor(initialList) {
    this.rootNode = new persistentNode(initialList || [])
    this._present = this._head = this.rootNode
    this.mods = []
    this.index = 0
    this.lastVal = this._lastNode().val
  }

  add(addVal) {
    if (!this._present.equals(this._lastNode())) {
      throw new Exception(
        'can only add a node to the end of a PartiallyPersistent list, please set "present" to the end of the list before adding',
      )
    }
    const oldLastNode = this._lastNode()
    const newNode = new persistentNode(this._lastNode().val.concat([addVal]))
    newNode.prev = oldLastNode
    oldLastNode.next = newNode
    this._present = newNode
    this.mods.push(`add(${addVal})`)
    return this
  }

  // should they just use filter?
  remove(idx) {
    if (this._lastNode().val.length === 0) {
      throw 'Attempted to remove from empty list'
    }

    const lastVal = this._lastNode().val
    lastVal.delete(idx) // <= FIGURE OUT THIS
    this._lastNode().next = new persistentNode(lastVal)
    return this
  }

  equals(otherList) {
    let thisVal = this._lastNode().val
    let otherVal = otherList._lastNode().val
    return JSON.stringify(thisVal) === JSON.stringify(otherVal)
  }

  tequals(otherList) {
    let currNode = this.rootNode
    let otherNode = otherList.rootNode

    while (Boolean(currNode)) {
      if (JSON.stringify(currNode.val) !== JSON.stringify(otherNode.val)) {
        return false
      }
      currNode = currNode.next
      otherNode = otherNode.next
    }
    if (currNode === otherNode) {
      return true
    }
    return false
  }

  map(f) {
    const nextVal = this.lastVal.map(f)
    const oldLastNode = this._lastNode()
    const newNode = new persistentNode(nextVal)

    newNode.prev = oldLastNode
    oldLastNode.next = newNode
    this._present = newNode
    this.mods.push(`map(${f})`)

    return this
  }

  filter(f) {
    const nextVal = this.lastVal.filter(f)
    const oldLastNode = this._lastNode()
    const newNode = new persistentNode(nextVal)

    newNode.prev = oldLastNode
    oldLastNode.next = newNode
    this._present = newNode
    this.mods.push(`filter(${f})`)

    return this
  }

  reduce(f, init) {
    return this.lastVal.reduce(f, init)
  }

  // Temporal Methods involving the 'present' pointer within the list of nodes
  get present() {
    return this._present
  }
  set present(node) {
    this._present = node
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

  // Inspection Methods
  toJS() {
    return this.present.val
  }
  toString() {
    return `Temporal.PartiallyPersistentList(${this._timeline()})`
  }
  inspect() {
    return `Temporal.PartiallyPersistentList(${this._timeline()})`
  }

  // Private Methods
  _timeline() {
    let retString = ''
    let currNode = this.rootNode
    while (!currNode.equals(this._lastNode())) {
      if (currNode.equals(this._present)) {
        retString += '(present) '
      }
      retString += currNode.toString()
      currNode = currNode.next
    }
    if (this._lastNode().equals(this._present)) {
      retString += '(present) '
    }
    retString += this._lastNode().toString()
    return retString
  }

  // itertor implementation
  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.lastVal.length) {
          return { value: this.lastVal[this.index++], done: false }
        } else {
          this.index = 0
          return { done: true }
        }
      },
    }
  }

  // fucking fix this, walking the entire linked list to find the last node is O(n)
  // just keep a fucking pointer to the last node
  _lastNode() {
    let node = this.rootNode
    while (node.next !== null) {
      node = node.next
    }
    return node
  }

  // Nice to haves
  head() {}
  tail() {}
  indexOf(x) {}

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
