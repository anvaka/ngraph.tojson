module.exports = save;

// TODO: 
// 1. move customXXX to options object;
// 2. Add customWriter to options object, similar to ngraph.todot
function save(graph, customNodeTransform, customLinkTransform) {
  // Object contains `nodes` and `links` arrays.
  var result = {
    nodes: [],
    links: []
  };

  var nodeTransform = customNodeTransform || defaultTransformForNode;
  var linkTransform = customLinkTransform || defaultTransformForLink;

  graph.forEachNode(saveNode);
  graph.forEachLink(saveLink);

  return '{"nodes": [' + result.nodes.join(',') + '], "links": [' + 
  result.links.join(',') + ']}';

  function saveNode(node) {
    // Each node of the graph is processed to take only required fields
    // `id` and `data`
    result.nodes.push(JSON.stringify(nodeTransform(node)));
  }

  function saveLink(link) {
    // Each link of the graph is also processed to take `fromId`, `toId` and
    // `data`
    result.links.push(JSON.stringify(linkTransform(link)));
  }

  function defaultTransformForNode(node) {
    var result = {
      id: node.id
    };
    // We don't want to store undefined fields when it's not necessary:
    if (node.data !== undefined) {
      result.data = node.data;
    }

    return result;
  }

  function defaultTransformForLink(link) {
    var result = {
      fromId: link.fromId,
      toId: link.toId,
    };

    if (link.data !== undefined) {
      result.data = link.data;
    }

    return result;
  }
}
