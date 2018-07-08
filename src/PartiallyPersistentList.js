import { persistentNode } from './nodes'

export const List = (initialList) => {
    let rootNode = new persistentNode(initialList)
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
            return lastNode().val
        },
        pop: () => {
            if (rootNode === null) {
                throw "Attempted to remove from empty list"
            }
            if (rootNode.val === lastNode().val) {
                rootNode = null
            }

            const lastVal = lastNode().val
            while (lastVal.indexOf(removeVal) !== -1) {
                lastVal.splice(lastVal.indexOf(removeVal), 1, )
            }
            lastNode().next = new persistentNode(lastNode().val.slice())
        },
        inspect: () => {
            let node = rootNode
            let out = ''
            while (node !== null) {
                out += node.toString()
                node = node.next
            }
            return out
        },
        prev: (num) => {
        },
    }
}
