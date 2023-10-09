<script>

// Javascript program to print Euler tour of a
// tree.
var MAX = 1001;

// Adjacency list representation of tree
var adj = Array.from(Array(MAX), () => Array()); 

// Visited array to keep track visited 
// nodes on tour
var vis = Array(MAX);

// Array to store Euler Tour
var Euler = Array(2 * MAX);

// Function to add edges to tree
function add_edge(u, v)
{
	adj[u].push(v);
	adj[v].push(u);
}

// Function to store Euler Tour of tree
function eulerTree(u, index)
{
	vis[u] = 1;
	Euler[index++] = u;
	
	for(var it of adj[u])
	{
		if (!vis[it]) 
		{
			index = eulerTree(it, index);
			Euler[index++] = u;
		}
	}
	return index;
}

// Function to print Euler Tour of tree
function printEulerTour(root, N)
{
	var index = 0; 
	index = eulerTree(root, index);
	for(var i = 0; i < (2 * N - 1); i++)
		document.write(Euler[i] + " ");
}

// Driver code
var N = 4;
add_edge(1, 2);
add_edge(2, 3);
add_edge(2, 4);

// Consider 1 as root and print
// Euler tour 
printEulerTour(1, N);
</script>
