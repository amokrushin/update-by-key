# Collection update by key

```
original =
    [
        {id: 'a', val: 1},  // object oA
        {id: 'b', val: 2},  // object oB
        {id: 'c', val: 3}   // object oC
    ]
update =
    [
        {id: 'a', val: 1},  // object uA
        {id: 'c', val: 4},  // object uC
        {id: 'd', val: 5}   // object uD
    ]

result = updateByKey( original, update, 'id' )

result ->
    [
        {id: 'a', val: 1},  // object rA
        {id: 'c', val: 4},  // object rC
        {id: 'd', val: 5}   // object rD
    ]

    rA === oA

    rC === oC
    rC !== uC
    rC.val === uC.val

    rD !== uD
    rD.val === uD.val
```