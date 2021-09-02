declare module 'ngraph.tojson' {
    import { Graph, Link, Node } from 'ngraph.graph';

    export default function save<NodeData = any, LinkData = any, TransformedNode = any, TransformedLink = any>(
        graph: Graph<NodeData, LinkData>,
        customNodeTransform?: (node: Node<NodeData>) => TransformedNode,
        customLinkTransform?: (link: Link<LinkData>) => TransformedLink
    ): string;
}
