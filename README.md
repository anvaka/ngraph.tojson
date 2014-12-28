# ngraph.tojson

Library to store graph into simple json format

# usage

``` javascript
var graph = require('ngraph.graph')();
graph.addLink('hello', 'world');

var toJSON = require('ngraph.tojson');
console.log(toJSON(graph));

// Produces output:
// {"nodes":[{"id":"hello"},{"id":"world"}],"links":[{"fromId":"hello","toId":"world"}]}
```

# install

With [npm](https://npmjs.org) do:

```
npm install ngraph.tojson
```

# license

MIT
