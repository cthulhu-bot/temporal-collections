const applyMods = (init = [], mods = []) => {
    const removeElement = (arr, el) => {
    }

    const arr = mods.reduce((acc, mod) => {
        [modifier, element] = mod
        if (modifier === '+') {
            acc.push(element)
        } else if (modifier === '-') {
            removeElement(acc, element)
        }

        return acc
    }, init)
    return arr
}

const List = (init = []) => {
    let persistentList = init

    return {
        push: (val) => {
            // persistentList.push(internalList)
            // internalList.push(val)
            // console.log('internalList: ', internalList)
            // console.log('persistentList: ', persistentList)
            // return internalList[internalList.length].concat([val])
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
