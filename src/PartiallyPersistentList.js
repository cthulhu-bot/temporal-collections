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
        inspect: () => `foo`
    }
}