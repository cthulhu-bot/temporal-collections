import { persistentNode } from './nodes'

export class List {
    constructor(initialList) {
        this.rootNode = persistentNode(initialList)
    }

    // will need performance testing
    lastNode() {
        let node = this.rootNode
        while (node.next !== null) {
            node = node.next
        }
        return node
    }

    add(addVal) {
        this.lastNode().next = persistentNode(this.lastNode().val.concat([addVal]))
        return this.lastNode().val
    }

    remove(idx) {
        const lastVal = this.lastNode().val
        while (lastVal.indexOf(removeVal) !== -1) {
            lastVal.splice(lastVal.indexOf(removeVal), 1, )
        }
        this.lastNode().next = persistentNode(this.lastNode().val.slice())
    }

    inspect() {
        let node = this.rootNode
        let out = ''
        while (node !== null) {
            out += node.toString()
            node = node.next
        }
        return out
    }
}

export const ListFunc = (initialList) => {
    const rootNode = persistentNode(initialList)
    const lastNode = () => {
        let node = rootNode
        while (node.next !== null) {
            node = node.next
        }
        return node
    }

    return {
        add: (addVal) => {
            lastNode().next = persistentNode(lastNode().val.concat([addVal]))
            return lastNode().val
        },
        remove: (idx) => {
            const lastVal = lastNode().val
            while (lastVal.indexOf(removeVal) !== -1) {
                lastVal.splice(lastVal.indexOf(removeVal), 1, )
            }
            lastNode().next = persistentNode(lastNode().val.slice())
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
    }
}
