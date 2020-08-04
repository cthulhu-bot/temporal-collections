import { persistentNode } from '../nodes'

class PartiallyPersistentList {
  constructor(initialList) {
    this.rootNode = new persistentNode(initialList || [])
    this._present = this._head = this.rootNode
    this.mods = []
    this.index = 0
    this.lastVal = this._lastNode().val
    this.val = this._lastNode().val
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

  // should users just use filter? what's the use case for a mutable remove?
  remove(idx) {
    if (this._lastNode().val.length === 0) {
      throw 'Attempted to remove from empty list'
    }

    const lastVal = this._lastNode().val
    lastVal.delete(idx) // <= FIGURE OUT THIS
    this._lastNode().next = new persistentNode(lastVal)
    return this
  }

  // last node value's equality test
  equals(otherList) {
    let thisVal = this._lastNode().val
    let otherVal = otherList._lastNode().val
    return JSON.stringify(thisVal) === JSON.stringify(otherVal)
  }

  // temporal equality test, i.e. whether one list's timeline is equivalent to another's
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

  collect() {
    let flattenedCollection = []
    let node = this.rootNode
    flattenedCollection.push(node.val)
    while (node.next !== undefined) {
      node = node.next
      flattenedCollection.push(node.val)
    }
    return flattenedCollection
  }

  concat(value) {}

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
    return this._present.prev || undefined
  }
  next() {
    return this._present.next || undefined
  }

  back(numPositions) {
    if (numPositions < 0) {
      throw 'back(numPositions) must be a positive number'
    }
    for (let i = 0; i < numPositions; i++) {}
  }

  forward(numPositions) {
    if (numPositions < 0) {
      throw 'forward(numPositions) must be a positive number'
    }
    for (let i = 0; i < numPositions; i++) {}
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

  _appendNode(newValue, modValue) {
    const oldLastNode = this._lastNode()
    const newNode = new persistentNode(newValue)

    newNode.prev = oldLastNode
    oldLastNode.next = newNode
    this._present = newNode
    this.mods.push(modValue)
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
    while (node.next !== undefined) {
      node = node.next
    }
    return node
  }

  // Nice to haves
  head() {
    if (!this._present.equals(this._lastNode())) {
      throw new Exception(
        'please set "present" to the end of the list before calling head()',
      )
    }
    const oldLastNode = this._lastNode()
    const newNode = this._lastNode().val[0]
      ? new persistentNode([this._lastNode().val[0]])
      : new persistentNode([])
    newNode.prev = oldLastNode
    oldLastNode.next = newNode
    this._present = newNode
    this.mods.push(`head()`)
    return this
  }

  tail() {
    if (!this._present.equals(this._lastNode())) {
      throw new Exception(
        'please set "present" to the end of the list before calling tail()',
      )
    }
    const oldLastNode = this._lastNode()
    const newNode =
      this._lastNode().val.length > 1
        ? new persistentNode(this._lastNode().val.slice(1))
        : new persistentNode([])
    newNode.prev = oldLastNode
    oldLastNode.next = newNode
    this._present = newNode
    this.mods.push(`tail()`)
    return this
  }

  // Sequence algorithms
  map(f) {
    const nextVal = this.lastVal.map(f)
    this._appendNode(nextVal, `map(${f})`)
    return this
  }

  // arr.filter(callback(element[, index, [array]])[, thisArg])
  /**
   *
   * @param {callback} f
   * @param {type} String | Optional ['timeline', 'mods'] defaults to 'collection'
   */
  filter(f, type) {
    if (type === 'timeline') {
      return this
    } else if (type === 'mods') {
      return this
    } else {
      const nextVal = this.lastVal.filter(f)
      this._appendNode(nextVal, `filter(${f})`)
      return this
    }
  }

  reduce(f, init) {
    return this.lastVal.reduce(f, init)
  }

  indexOf(x) {}

  // stretch goals
  slice() {}
  shift() {}
  unshift() {}
  splice() {}
  tInspect() {
    let node = rootNode
    let out = ''
    while (node !== undefined) {
      out += node.toString()
      node = node.next
    }
    return out
  }
  tLength() {
    let node = rootNode
    length = 0
    while (node.next !== undefined) {
      node = node.next
      length++
    }
    return length
  }
}

const List = (initialList) => new PartiallyPersistentList(initialList)

module.exports = {
  List,
}
