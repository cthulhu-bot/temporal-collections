
const List = (init = []) => {
    let persistentList = []
    let internalList = []
    let mod

    return {
        append: (val) => {
            persistentList.push(internalList)
            internalList.push(val)
            console.log('internalList: ', internalList)
            console.log('persistentList: ', persistentList)
            return internalList[internalList.length].concat([val])
        },
        pop: () => [],
    }
}

const Map = () => {
    return {}
}

const PartialPersistence = {
    List,
    Map,
}

export default PartialPersistence
