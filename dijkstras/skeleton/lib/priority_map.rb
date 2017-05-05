require_relative 'heap2'

class PriorityMap
  attr_accessor :map, :queue
  def initialize(&prc)
    @map = {}
    @queue = BinaryMinHeap.new
  end

  def [](key)
    @map[key]
  end

  def []=(key, value)
    @map[key] = value
    @queue.push(key)
  end

  def count
    @queue.count - 1
  end

  def empty?
    count <= 0
  end

  def extract
    [@queue.peek, @map.delete(@queue.extract)]
  end

  def has_key?(key)
    @map[key] ? true : false
  end

  protected
  attr_accessor :map, :queue

  def insert(key, value)
  end

  def update(key, value)
  end
end
