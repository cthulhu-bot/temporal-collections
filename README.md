# temporal-collections

The temporal-collections api is a library implementing collections of [persistent data structures](https://en.wikipedia.org/wiki/Persistent_data_structure).


## Persistent Data Structures

### Partial Persistence

#### Partially Persistent List API

read only:
toJS
head
tail

mutative actions:
push
pop
shift
unshift
slice
splice

temporal actions:
These are read only due to partial persistence restraints

past
present
future


#### Partially Persistent Map API

add
remove

temporal actions:
inspect
prev(indexBack)

### Full Persistence

### Confluent Persistence

## Retroactive Data Structures

### Partial Retroactivity

### Full Retroactivity
