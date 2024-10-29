const transpose = function (matrix) {
let transposed = []
for (let i = 0; i < matrix[0].length; i++) { // Prints arrays for vertical indexes 
  transposed.push([])
  for (let j = 0; j < matrix.length; j++) { // 
    transposed[i].push(matrix[j][i])    
  }
}
return transposed
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

module.exports = transpose