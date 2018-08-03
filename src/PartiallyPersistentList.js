import { persistentNode } from './nodes'

export const List = (initialList) => {
  const rootNode = new persistentNode(initialList)
  const lastNode = () => {
    let node = rootNode
    while (node.next !== null) {
      node = node.next
    }
    return node
  }

  return {
    toJS: () => {
      return lastNode().val
    },
    push: (addVal) => {
      lastNode().next = new persistentNode(lastNode().val.concat([addVal]))
      return lastNode().next
    },
    pop: () => {
      if (lastNode().val.length === 0) {
        throw 'Attempted to remove from empty list'
      }

      const lastVal = lastNode().val
      while (lastVal.indexOf(removeVal) !== -1) {
        lastVal.splice(lastVal.indexOf(removeVal), 1)
      }
      lastNode().next = new persistentNode(lastNode().val.slice())
    },
    head: () => {},
    tail: () => {},
    shift: () => {},
    unshift: () => {},
    slice: () => {},
    splice: () => {},
    inspect: () => {
      return `Temporal.PartiallyPersistentList(${rootNode.val})`
    },
    tInspect: () => {
      let node = rootNode
      let out = ''
      while (node !== null) {
        out += node.toString()
        node = node.next
      }
      return out
    },
    prev: (num) => {},
    length: () => lastNode().val.length,
    tLength: () => {
      let node = rootNode,
        length = 0
      while (node.next !== null) {
        node = node.next
        length++
      }
      return length
    },
  }
}
