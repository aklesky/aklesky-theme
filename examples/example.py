import math

# Sample variables
number = 42
name = "Alice"
colors = ["red", "green", "blue"]

# Sample function
def greet(user_name):
    print(f"Hello, {user_name}!")

# Sample class
class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2

    def circumference(self):
        return 2 * math.pi * self.radius

# Decorator example
def debug(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args}, {kwargs}")
        return func(*args, **kwargs)
    return wrapper

# Function with type hints and default args
def add(a: int, b: int = 10) -> int:
    return a + b

# Lambda and map/filter/reduce
squared = list(map(lambda x: x ** 2, range(5)))
evens = list(filter(lambda x: x % 2 == 0, squared))

# List, set, dict comprehensions
squares = [x * x for x in range(10)]
unique = {x for x in squares}
lookup = {x: chr(65 + x) for x in range(5)}

# Exception handling
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
finally:
    print("Done with exception handling.")

# Inheritance and super()
class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "Woof!"

# Static and class methods
class Math:
    @staticmethod
    def pi():
        return math.pi
    @classmethod
    def double_pi(cls):
        return 2 * cls.pi()

# Generator
def countdown(n):
    while n > 0:
        yield n
        n -= 1

# Sample usage
if __name__ == "__main__":
    greet(name)
    c = Circle(5)
    print(f"Area: {c.area():.2f}")
    print(f"Circumference: {c.circumference():.2f}")
    for idx, color in enumerate(colors, 1):
        print(f"Color {idx}: {color}")
    print(add(3))
    print(squared, evens)
    print(squares, unique, lookup)
    d = Dog()
    print(d.speak())
    print(Math.pi(), Math.double_pi())
    for n in countdown(3):
        print(n)
