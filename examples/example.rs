#![allow(dead_code)]

/// Sample struct to test theme colors
struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: &str, age: u32) -> Self {
        Self {
            name: name.to_string(),
            age,
        }
    }

    fn greet(&self) -> String {
        format!("Hello, my name is {} and I am {} years old.", self.name, self.age)
    }
}

/// Sample enum
enum Status {
    Active,
    Inactive,
    Pending(u32),
}

/// Sample function
fn add(a: i32, b: i32) -> i32 {
    a + b
}

/// Sample trait
trait Drawable {
    fn draw(&self);
}

impl Drawable for Person {
    fn draw(&self) {
        println!("Drawing person: {}", self.name);
    }
}

/// Sample constant
const PI: f64 = 3.14159;

/// Sample static variable
static mut COUNTER: u32 = 0;

/// Entry point for testing
fn main() {
    let alice = Person::new("Alice", 30);
    let bob = Person::new("Bob", 25);

    let status = Status::Pending(5);

    let sum = add(10, 20);

    println!("{}", alice.greet());
    println!("{}", bob.greet());
    println!("Sum: {}", sum);

    match status {
        Status::Active => println!("Status: Active"),
        Status::Inactive => println!("Status: Inactive"),
        Status::Pending(n) => println!("Status: Pending ({})", n),
    }

    alice.draw();

    println!("PI constant: {}", PI);

    unsafe {
        COUNTER += 1;
        println!("Counter: {}", COUNTER);
    }
}
