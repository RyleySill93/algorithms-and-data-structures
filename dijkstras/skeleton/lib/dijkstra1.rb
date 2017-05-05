require_relative 'graph'

# O(|V|**2 + |E|).
def dijkstra1(start)
  possible_paths = {}
  shortest_paths = {}

  current = start
  start.out_edges.each do |edge|
    possible_paths[edge.to_vertex] = { cost: edge.cost, last_edge: current }
  end
  possible_paths
  possible_paths.each do |v, data|
    if shortest_paths[v].nil?
      shortest_paths[v] = data
    end
  end
  shortest_paths
end
