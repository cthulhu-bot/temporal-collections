export class persistentNode {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
    this.length = val.length
  }

  toString() {
    return this.next === null ? `[${this.val}]` : `[${this.val}] -> `
  }

  equals(node) {
    return (
      this.val === node.val &&
      this.next === node.next &&
      this.prev === node.prev
    )
  }
}
