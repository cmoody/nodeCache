nodeCache
=========

No external npm modules installed

To run make sure you have installed http://nodejs.org/ globally.

To run
`
node index.js
`

Commands
--------
Gets specific key from cache
```
> get <key>
```

Sets value for existing key
```
> set <key> <value>
```

Add a new key and value
```
> add <key> <value>
```

Increment value of a key (Must be integer)
```
> increment <key> <amount>
```

Decrement value of a key (Must be integer)
```
> decrement <key> <amount>
```

Deletes a key and its value from cache
```
> delete <key>
```

Empties the entire cache
```
> empty
```

Exists Program
```
> quit
```