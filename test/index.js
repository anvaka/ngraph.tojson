var test = require('tap').test,
    createGraph = require('ngraph.graph'),
    toJSON = require('..');

test('Can save graph', function (t) {
  var g = createGraph();
  g.addLink(1, 2);

  var storedJSON = toJSON(g);

  var loadedData = JSON.parse(storedJSON),
      links = loadedData.links,
      nodes = loadedData.nodes;

  t.equal(nodes.length, 2, "Stored data has two nodes");
  t.equal(links.length, 1, "Stored data has one link");
  t.equal(links[0].fromId, 1, "Link starts at correct node");
  t.equal(links[0].toId, 2, "Link ends at correct node");

  t.end();
});
