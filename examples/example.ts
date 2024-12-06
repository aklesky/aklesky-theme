class NewComponent {
    name() {}
}

const ClassName = () => {
    return 'NewComponent';
}

// Interface
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

// Type Alias
type Point = { x: number; y: number };

// Enum
enum Status {
  Pending = 'pending',
  Active = 'active',
  Done = 'done',
}

// Generic Function
function identity<T>(value: T): T {
  return value;
}

// Utility Function
function isString(val: unknown): val is string {
  return typeof val === 'string';
}

// Class with Inheritance
class Animal {
  constructor(public name: string) {}
  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

// Abstract Class
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(public radius: number) { super(); }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

// Utility Types
type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;

// Tuple
const tuple: [string, number] = ['foo', 42];

// Type Assertion
const val: any = 'hello';
const len: number = (val as string).length;

// Union & Intersection
type A = { a: string };
type B = { b: number };
type Union = A | B;
type Intersection = A & B;

// Function Overloads
function format(input: string): string;
function format(input: number): string;
function format(input: string | number): string {
  return input.toString();
}

// Namespace
namespace MathHelpers {
  export function add(a: number, b: number) {
    return a + b;
  }
}

// Export/Import Example
export interface Product {
  id: number;
  title: string;
}

// Type Guard
function isUser(obj: any): obj is User {
  return obj && typeof obj.id === 'number' && typeof obj.name === 'string';
}

// Using everything
const user: User = { id: 1, name: 'Alice', isActive: true };
const dog = new Dog('Rex');
const circle = new Circle(5);
const formatted = format(123);
const sum = MathHelpers.add(2, 3);


