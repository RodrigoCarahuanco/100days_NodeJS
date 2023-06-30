function isPandigital(number) {
    const digitCount = String(number).length;
    const digits = String(number).split('').map(Number);
    const uniqueDigits = new Set(digits);
  
    return digitCount === 10 && uniqueDigits.size === 10;
  }
  
  // Example usage
  console.log(isPandigital(1234567890));
  console.log(isPandigital(9876543210));
  console.log(isPandigital(12345));