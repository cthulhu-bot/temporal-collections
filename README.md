# temporal-collections

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

inspect
prev(indexBack)
thead
ttail

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
