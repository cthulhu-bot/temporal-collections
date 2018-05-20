import { persistentNode } from './nodes'

export const List = (initialList) => {
    const rootNode = persistentNode(initialList)
    const lastNode = () => {
        let node = rootNode
        while (node.next !== null) {
            node = node.next
        }
        return node
    }

    return {
        add: (val) => {
            lastNode().next = persistentNode(lastNode().val.concat([val]))
            return lastNode().val
        },
        remove: (val) => {
        },
        inspect: () => `foo`
    }
}