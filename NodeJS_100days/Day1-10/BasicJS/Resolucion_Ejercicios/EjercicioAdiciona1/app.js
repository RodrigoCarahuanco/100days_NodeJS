function generateTriangularSequence(n) {
    const sequence = [];
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      sum += i; // Add the current number to the sum
      sequence.push(sum); // Add the sum to the sequence
    }
  
    return sequence;
  }
  
  // Example usage
  const n = 5;
  const triangularSequence = generateTriangularSequence(n);
  console.log(triangularSequence); // [1, 3, 6, 10, 15]