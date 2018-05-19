import { partiallyPersistentNode } from './nodes'

export const List = (initialList) => {
    const rootNode = partiallyPersistentNode(initialList)
    let persistentList = [rootNode]

    return {
        add: (val) => {
            const newNode = partiallyPersistentNode(val)
            persistentList.push(newNode)
            console.log('last list item: ', persistentList[persistentList.length-1])
            return persistentList[persistentList.length]
        },
        remove: (val) => {
        },
        inspect: () => `foo`
    }
}