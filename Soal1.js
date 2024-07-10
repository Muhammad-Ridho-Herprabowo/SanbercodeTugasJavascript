function calculateSquareRoot(x) {
  //Kondisi jika input kurang dari 0
  if (x < 0) {
    return "Tidak bisa input bilangan negatif";
  }
  
  //Kondisi jika input bilangan ganjil
  if (x % 2 !== 0) {
    return "Tidak bisa input bilangan ganjil";
  }
  
  // Menghitung akar pangkat 2 dari x
  return Math.sqrt(x);
}

let userInput = 21; // Gantilah nilai ini untuk menguji program

let result = calculateSquareRoot(userInput);
console.log(result); // Output
