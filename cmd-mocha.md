mocha --recursive ./**/*.spec.js

mocha src\data-structures\tree\binary-search-tree.spec.js
mocha src\data-structures\linked-list\linked-list.spec.js
mocha src\data-structures\linked-list\circular-linked-list.spec.js

mocha --file "src\algorithms\sorting\bubble\bubble-sort.spec.js"

mocha src\algorithms\sorting\distributed-sort\radix-sort\radix-sort.spec.js

