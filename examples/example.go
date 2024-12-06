// Sample Go code to test theme colors

package main

import (
	"fmt"
)

// Constants
const Pi = 3.14159

// Variables
var (
	number int    = 42
	text   string = "Hello, Theme!"
	flag   bool   = true
)

// Struct (like a class)
type Person struct {
	Name string
	Age  int
}

// Interface
type Greeter interface {
	Greet() string
}

// Slice and Map
var numbers = []int{1, 2, 3, 4, 5}
var nameAge = map[string]int{"Bob": 25, "Carol": 28}

// Method on struct
func (p Person) Greet() string {
	return fmt.Sprintf("Hello, my name is %s and I am %d years old.", p.Name, p.Age)
}

// Function
func add(a, b int) int {
	return a + b
}

// Goroutine and Channel
func printAsync(msg string, ch chan<- string) {
	ch <- msg
}

// Error handling
func mayFail(flag bool) (string, error) {
	if flag {
		return "Success", nil
	}
	return "", fmt.Errorf("failed!")
}

// Using everything
func themeTest() {
	// Interface
	var g Greeter = Person{Name: "Bob", Age: 25}
	fmt.Println(g.Greet())

	// Slice
	for _, n := range numbers {
		fmt.Println(n)
	}

	// Map
	for k, v := range nameAge {
		fmt.Printf("%s: %d\n", k, v)
	}

	// Goroutine and Channel
	ch := make(chan string)
	go printAsync("Hello from goroutine!", ch)
	fmt.Println(<-ch)

	// Error handling
	if msg, err := mayFail(false); err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println(msg)
	}
}

func main() {
	// Local variable
	result := add(number, 8)
	fmt.Println(text)
	fmt.Println("Pi:", Pi)
	fmt.Println("Result:", result)
	fmt.Println("Flag:", flag)

	// Struct usage
	alice := Person{Name: "Alice", Age: 30}
	fmt.Println(alice.Greet())

	// Theme test
	themeTest()
}
