import { v4 as uuidv4 } from 'uuid'

class PersistentNode {
  constructor(val) {
    this.val = val
    this.next = undefined
    this.prev = undefined
    this.length = val.length
    this.id = uuidv4()
  }

  toString() {
    return this.next === undefined ? `[${this.val}]` : `[${this.val}] -> `
  }

  toJS() {
    return this.val
  }

  equals(node) {
    return this.id === node.id
  }

  // I think this is unreachable code because of the this.next declaration above
  prev() {
    return this.prev
  }

  inspect() {
    return `PersistentNode(${this.val})`
  }
}

const persistentNode = (initialVal) => new PersistentNode(initialVal)

module.exports = {
  persistentNode,
}
