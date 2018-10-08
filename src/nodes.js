import uuidv1 from 'uuid/v1'

class PersistentNode {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
    this.length = val.length
    this.id = uuidv1()
  }

  toString() {
    return this.next === null ? `[${this.val}]` : `[${this.val}] -> `
  }

  toJS() {
    return this.val
  }

  equals(node) {
    return this.id === node.id
  }

  inspect() {
    return `PersistentNode(${this.val})`
  }
}

const persistentNode = (initialVal) => new PersistentNode(initialVal)

module.exports = {
  persistentNode,
}
