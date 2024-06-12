// number

function sum(a: number, b: number): number {
    return a + b;
  }
  
  // string
  
  function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
  }
  
  console.log(toUpperCase("Alex.Ageev@gmail.com"));
  
  // ------ Sobrecarga de funções
  
  function getCar(name: string): string;
  function getCar(name: string, price: number): string;
  function getCar(name: string, price?: number): string {
    return price ? `Nome: ${name}, Preço: ${price}` : `Nome: ${name}`
  }
  
  const car1 = getCar('BMW');
  const car2 = getCar('Ferrari', 331000)
  
  console.log(car1)
  console.log(car2)