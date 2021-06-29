'use strict';

const Vertex = require('../vertex');
const Edge = require('../edge');
const Graph = require('../graph');

describe('graph tests', () => {


  it('check addVertex of graph', () => {
    const graph = new Graph();

    const a = new Vertex('a');
    const b = new Vertex('b');
    const c = new Vertex('c');
    const d = new Vertex('d');
    const e = new Vertex('e');
    const f = new Vertex('f');

    graph.addVertex(a);
    graph.addVertex(b);
    graph.addVertex(c);
    graph.addVertex(d);
    graph.addVertex(e);
    graph.addVertex(f);
    expect(graph.size()).toEqual(6);

  });

  it('check addEdge of graph', () => {
    const graph = new Graph();

    const a = new Vertex('a');
    const b = new Vertex('b');
    const c = new Vertex('c');
    const d = new Vertex('d');

    graph.addVertex(a);
    graph.addVertex(b);
    graph.addVertex(c);
    graph.addVertex(d);

    graph.addEdge(a, b);
    graph.addEdge(b, c);
    graph.addEdge(c, a);
    // console.log('build up graph', graph.relations());
    expect(graph.relations()).toEqual(3);
  });

  it('check removeEdge of graph', () => {

    const graph = new Graph();

    const a = new Vertex('a');
    const b = new Vertex('b');
    const c = new Vertex('c');
    const d = new Vertex('d');

    graph.addVertex(a);
    graph.addVertex(b);
    graph.addVertex(c);
    graph.addVertex(d);
    graph.addEdge(a, b);
    graph.addEdge(b, c);
    graph.removeEdge(b, c);
    expect(graph.relations()).toBe(2);
    // console.log('build up graph', graph);
  });

  it('check get neighbors of graph', () => {

    const graph = new Graph();

    const a = new Vertex('a');
    const b = new Vertex('b');
    const c = new Vertex('c');
    const d = new Vertex('d');

    graph.addVertex(a);
    graph.addVertex(b);
    graph.addVertex(c);
    graph.addVertex(d);
    graph.addEdge(a, b);
    graph.addEdge(b, c);
    expect(graph.relations()).toBe(2);
    // console.log('build up graph', graph);
  });

  it('check size of graph', () => {
    const graph = new Graph();

    const a = new Vertex('a');
    const b = new Vertex('b');
    const c = new Vertex('c');
    graph.addVertex(a);
    graph.addVertex(b);
    graph.addVertex(c);
    expect(graph.size()).toEqual(3);

  });


  it('check breathdfirst', () => {
    const graph = new Graph();

    const a = new Vertex('a');
    const b = new Vertex('b');
    const c = new Vertex('c');
    const d = new Vertex('d');
    graph.addVertex(a);
    graph.addVertex(b);
    graph.addVertex(c);
    graph.addVertex(d);
    graph.addEdge(a, b);
    graph.addEdge(b, c);
    graph.addEdge(c, a);
    graph.breathFirstSearch(a);
    expect(graph.breathFirstSearch(a)).toBeTruthy();
    console.log('build up graph', graph);

  });


});






  // const graph = new Graph();

  // const a = new Vertex('a');
  // const b = new Vertex('b');
  // const c = new Vertex('c');
  // const d = new Vertex('d');
  // const e = new Vertex('e');
  // const f = new Vertex('f');

  // graph.addVertex(a);
  // graph.addVertex(b);
  // graph.addVertex(c);
  // graph.addVertex(d);
  // graph.addVertex(e);
  // graph.addVertex(f);

  // console.log('build up graph', graph);

  // graph.addDirectedEdge(a, b);
  // graph.addDirectedEdge(b, c);
  // graph.addDirectedEdge(c, a);

  // console.log('one edge added', graph);


  // console.log('cyclical', graph);

