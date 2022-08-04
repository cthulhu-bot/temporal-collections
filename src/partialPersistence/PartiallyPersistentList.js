import { persistentNode } from '../nodes'

class PartiallyPersistentList {
  constructor(initialList) {
    this.rootNode = persistentNode(initialList || [])
    this._present = this.rootNode
    this.mods = ['(root)']
    this.index = 0
    this.lastVal = this._lastNode().val
    this.val = this._present.val
    this._isPartiallyPersistentList = true
    this.timetraveling = false
  }

  add(addVal) {
    if (!this._present.equals(this._lastNode())) {
      throw new Exception(
        'can only add a node to the end of a PartiallyPersistent list, please set "present" to the end of the list before adding',
      )
    }
    return this._appendNode(addVal, `add(${addVal})`)
  }

  // hello it's not mutable, it's just appending another mod
  remove(idx) {
    if (this._lastNode().val.length === 0) {
      throw 'Attempted to remove from empty list'
    }

    const lastVal = this._lastNode().val
    lastVal.delete(idx) // <= FIGURE OUT THIS
    this._lastNode().next = persistentNode(lastVal)
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

  concat(value) {
    if (!isPartiallyPersistentList(value) && !Array.isArray(value)) {
      throw 'Only able to concat a PartiallyPersistentList to another PartiallyPersistentList or an Array'
    }

    // console.log('lastVal: ', this.lastVal)
    this._appendNode(value, `concat(${value})`)
    // console.log('lastVal: ', this.lastVal)
    // console.log(this)
    return this
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
    if (this._present.prev !== null) {
      this._present = this._present.prev
    } else {
      throw new Exception(`Cannot access data prior to the dawn of time`)
    }
    this.timetraveling = true
    return this
  }

  next() {
    if (this._present.next !== null) {
      this._present = this._present.next
    } else {
      throw new Exception('Cannot access data past the end of time')
    }
    this.timetraveling = true
    return this
  }

  resetPresent() {
    this.timetraveling = false
    this.present = this._lastNode()
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
    return this._present.val
  }
  toString() {
    return `Temporal.PartiallyPersistentList(
    ${this._timeline()}
    )`
  }
  inspect() {
    return `Temporal.PartiallyPersistentList(
    ${this._timeline()}
    )`
  }

  // Private Methods
  _timeline() {
    let retString = ''
    let currNode = this.rootNode
    let i = 0

    while (!currNode.equals(this._lastNode())) {
      const isRoot = this.rootNode.equals(currNode)
      const isPresent = currNode.equals(this._present)

      if (isRoot) {
        retString += '    '
      }

      if (isPresent) {
        retString += '(present) '
      }

      retString += currNode.toString(isRoot)
      retString += `    ${this.mods[i]} -> `

      currNode = currNode.next
    }

    if (this._lastNode().equals(this.rootNode)) {
      retString += '    '
    }
    if (this._lastNode().equals(this._present)) {
      retString += '(present) '
    }
    retString += this._lastNode().toString()
    return retString
  }

  _appendNode(newValue, modValue) {
    const oldLastNode = this._lastNode()
    let newNode
    if (Array.isArray(newValue)) {
      newNode = persistentNode(this._lastNode().val.concat(newValue))
    } else {
      newNode = persistentNode(this._lastNode().val.concat([newValue]))
    }
    newNode.prev = oldLastNode
    oldLastNode.next = newNode
    if (!this.timetraveling) {
      this._present = newNode
    }
    this.mods.push(modValue)
    return this
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
      ? persistentNode([this._lastNode().val[0]])
      : persistentNode([])
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
        ? persistentNode(this._lastNode().val.slice(1))
        : persistentNode([])
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

// identity methods
export function isPartiallyPersistentList(value) {
  return value._isPartiallyPersistentList || false
}

export default (initialList) => new PartiallyPersistentList(initialList)
