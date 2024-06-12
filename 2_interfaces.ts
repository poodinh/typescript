interface Animal {
    type: string;
  }
  
  // const dog: Animal = { type: "dog", name: "Rex" }; // Error
  
  interface Dog extends Animal {
    breed: string;
  }
  
  interface Cat extends Animal {
    color: string;
  }
  
  const cat: Cat = { type: "cat", color: "black" };
  
  interface DogCat extends Dog, Cat {
    age: number;
  }
  
  const animal: Animal = {
    type: "mammal"
  }
  
  const animal2: DogCat = {
    type: "mammal",
    breed: "labrador",
    color: "black",
    age: 5
  }
  
  interface Rect {
    readonly id: number,
    color?: string,
    size: {
      width: number,
      height: number
    }
  }
  
  const rect1: Rect = {
    id: 1,
    color: "red",
    size: { width: 10, height: 20 }
  }
  
  const rect2: Rect = {
    id: 1,
    size: { width: 1450, height: 20 }
  }
  
  rect1.color = "#ddd";
  
  // rect1.id = 123;
  
  
  const rect3 = {} as Rect;
  
  const rect4 = <Rect>{}; // alternative;
  
  interface RectWithArea extends Rect {
    getArea: () => number;
  }
  
  const rect5: RectWithArea = {
    id: 123,
    color: '#ccc',
    size: {
      width: 20,
      height: 20
    },
    getArea(): number {
      return this.size.width * this.size.height;
    }
  }
  
  console.log(rect5.getArea());
  
  interface IClock {
    time: Date,
    setTime(date: Date): void
  }
  
  interface IStyles {
    [key: string]: string
  }
  
  const css: IStyles = {
    border: "1px solid black",
    marginTop: '2px',
    borderRadius: '5px'
  }