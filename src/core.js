const List = (init = []) => {
    let internalList = init;

    return {
        push: (val) => {
            console.log(internalList)
            internalList.push([val])
            console.log(internalList)
            console.log(internalList[internalList.length])
            return internalList[internalList.length].concat([val])
        },
        pop: () => [],
    }
}

const Map = () => {
    return {}
}

export {
    List,
    Map,
}
