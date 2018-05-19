// applyModsPartial
// instead of applying all mods if the array is queried like: HEAD~2
// only the mods up until mods.length-2 should be applied

const applyMods = (init = [], mods = []) => {
    const removeElement = (arr, el) => {
    }

    const arr = mods.reduce((acc, mod) => {
        let modifier, element
        ({ modifier, element } = mod)

        if (modifier === '+') {
            acc.push(element)
        } else if (modifier === '-') {
            removeElement(acc, element)
        }

        return acc
    }, init)
    return arr
}

export const List = (init = []) => {
    let persistentList = init
    let mods = []

    return {
        add: (val) => {
            mods.push({
                modifier: '+',
                element: val
            })
            return applyMods(persistentList, mods)
        },
        remove: () => [],
    }
}

const Map = () => {
    return {}
}