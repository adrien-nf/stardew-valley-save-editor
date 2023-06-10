export type NodeOrEndNode = Node | EndNode;

export interface Node {
	elements: NodeOrEndNode[],
	name: string,
	type: "element",
}

export interface EndNode {
	text: string,
	type: "text"
}