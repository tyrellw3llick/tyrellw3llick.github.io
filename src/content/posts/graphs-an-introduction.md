---
title: Graphs for dummies
description: You are finally going to understand graphs.
pubDate: 04/02/2025
image: {
	src: https://isaaccomputerscience.org/api/v3.5.0/api/images/content/computer_science/data_structures_and_algorithms/data_structures/figures/isaac_cs_dsa_data_struct_graph_components.png,
	alt: Graph infographic
}
tags: [data-structures, algorithms]
---

## What's a graph?

A graph is a data structure to model networks of interconnected objects.

Yes, that explanation was not for dummies. Let's try again!

Imagine you want to map the relationship between you and your Twitter followers.
You could draw a graph where each vertex represented a persona and each edge represented
who follows who.

In graphs, we call **vertex or nodes** to the **objects** we are mapping and edges to the
relationships between them.

![Friendship graph](/blog/graphs-for-dummies/friendship-graph.webp)

**See that some edges have arrows and some don't? Can you guess why?**

Exactly! Arrows represent the direction of the relationship. In this case,
edges with no arrows mean both users are following each other.
While edges with an arrow means that one user is following the other.

### Neighbors

A node can be connected to many other nodes. Those nodes are called neighbors.

Nodes can have *in-neighbors* or *out-neighbors* depending on the direction of the edge.

![Explanation of neighbors](/blog/graphs-for-dummies/graph-neighbors.webp)

### Some Math

Ok, many people out there is going to judge you based on
your ability to mathematically represent graphs so let's dig a bit dipper.
But trust me, even can kid can understand this.

A Graph can be defined by the expression $G = (V, E)$ where:

- $G$: is the graph
- $V$: represents a set of vertices
- $E$: represents a set of edges

![Math representation of graphs](/blog/graphs-for-dummies/graph-maths.webp)

Easy right?

Just one more thing. Remember we use $\{...\}$ to express sets in Math. A set is
a collection of unique values. Also we use $(...)$ to represent tuples. A tuple
is finite sequence of ordered elements.

Too technical? Let's see some examples.

![Explanation of graph math expressions](/blog/graphs-for-dummies/graph-math-expressions.webp)

What if we find a graph with mutual edges?

![Second example](/blog/graphs-for-dummies/graph-math-expressions-2.webp)

### Some key terminology

- **Degree of a vertex:** number of edges connected to a vertex.

![Graph degrees explanation](/blog/graphs-for-dummies/graph-degrees.webp)

- **Path:** sequence of connected nodes.
- **Path length:** number of edges in a path.

![Explanation of paths](/blog/graphs-for-dummies/graph-paths.webp)

- **Cycle:** path that starts and ends at the same vertex.

![Explanation of cycles](/blog/graphs-for-dummies/graph-cycle.webp)

- **Connected nodes:** nodes that are connected by a path.
- **Connected graph:** a graph where there is a path between every pair of vertices.

## Types of graphs

### Based on relationship

With all we know now this is going to be easy.

Remember that no arrows means mutual relationship and arrows
means one-way relationship.

Ok, so is time to introduce you to the two main types of graphs:

- **Directed graphs:** edges have a direction represented by arrows.

- **Undirected graphs:** edges represent connections without any
specific direction. Meaning you can go from A to B and from B to A indifferently.

![Graph main types](/blog/graphs-for-dummies/graph-main-types.webp)

### Flavors of graphs

- **Simple graphs:** no loops or multiple edges between the same pair of vertices.
- **Cyclic graphs:** contain at least one cycle.
- **Acyclic graphs:** do not contain cycles.
- **Labeled graphs:** edges have labels or weights.
- **Weighted graphs:** subtype of labeled graph, edges have weights or costs associated with them.
