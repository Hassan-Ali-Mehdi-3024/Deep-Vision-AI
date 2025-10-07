import React from 'react';
import { BookOpen, Target, Lightbulb, ExternalLink } from 'lucide-react';
import { SectionProps } from './src/types';
import PDFExportButton from './src/components/PDFExportButton';

const Day3LearningDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day3-card" filename="Day3_Learning_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day3-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={32} />
            <h1 className="text-3xl font-bold">Learning File (Handout)</h1>
          </div>
          <p className="text-blue-100 text-lg">Day 3 - Week 1, Day 3</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Objective */}
          <div className="mb-8 bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
            <div className="flex items-start gap-3">
              <Target className="text-indigo-600 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Objective:</h2>
                <p className="text-gray-700 leading-relaxed">
                  Master control flow in Python using conditional statements, loops, and functions. 
                  Learn to write modular, reusable code and understand how to control program execution 
                  based on different conditions and iterate through data structures.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section number="1" title="Conditional Statements - Making Decisions">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Control program flow based on conditions using <code className="bg-gray-100 px-1 rounded">if</code>, <code className="bg-gray-100 px-1 rounded">elif</code>, and <code className="bg-gray-100 px-1 rounded">else</code>.</li>
                <li>Conditions evaluate to <code className="bg-gray-100 px-1 rounded">True</code> or <code className="bg-gray-100 px-1 rounded">False</code> (Boolean values).</li>
                <li>Use comparison operators: <code className="bg-gray-100 px-1 rounded">==</code>, <code className="bg-gray-100 px-1 rounded">!=</code>, <code className="bg-gray-100 px-1 rounded">&lt;</code>, <code className="bg-gray-100 px-1 rounded">&gt;</code>, <code className="bg-gray-100 px-1 rounded">&lt;=</code>, <code className="bg-gray-100 px-1 rounded">&gt;=</code></li>
                <li>Combine conditions with logical operators: <code className="bg-gray-100 px-1 rounded">and</code>, <code className="bg-gray-100 px-1 rounded">or</code>, <code className="bg-gray-100 px-1 rounded">not</code></li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Simple if statement
age = 20
if age >= 18:
    print("You are an adult")

# if-elif-else
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(f"Grade: {grade}")

# Multiple conditions
temperature = 25
is_sunny = True
if temperature > 20 and is_sunny:
    print("Perfect day for outdoor activities!")`}</pre>
              </div>
            </Section>

            <Section number="2" title="For Loops - Iterating Over Sequences">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Used to iterate over sequences (lists, tuples, strings, ranges).</li>
                <li><code className="bg-gray-100 px-1 rounded">range()</code> function generates sequences of numbers.</li>
                <li>Access both index and value using <code className="bg-gray-100 px-1 rounded">enumerate()</code>.</li>
                <li>Iterate over dictionary keys, values, or items.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Using range()
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

# With enumerate (index + value)
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Loop through dictionary
person = {"name": "Alice", "age": 25, "city": "NYC"}
for key, value in person.items():
    print(f"{key}: {value}")`}</pre>
              </div>
            </Section>

            <Section number="3" title="While Loops - Conditional Repetition">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Repeats code block while a condition is <code className="bg-gray-100 px-1 rounded">True</code>.</li>
                <li>Useful when number of iterations is unknown in advance.</li>
                <li>Be careful of infinite loops - ensure condition eventually becomes <code className="bg-gray-100 px-1 rounded">False</code>.</li>
                <li>Use <code className="bg-gray-100 px-1 rounded">break</code> to exit loop early, <code className="bg-gray-100 px-1 rounded">continue</code> to skip to next iteration.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Basic while loop
count = 0
while count < 5:
    print(count)
    count += 1

# Using break
while True:
    user_input = input("Enter 'quit' to exit: ")
    if user_input == 'quit':
        break
    print(f"You entered: {user_input}")

# Using continue
number = 0
while number < 10:
    number += 1
    if number % 2 == 0:  # Skip even numbers
        continue
    print(number)  # Only prints odd numbers`}</pre>
              </div>
            </Section>

            <Section number="4" title="Functions - Reusable Code Blocks">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Functions organize code into reusable blocks.</li>
                <li>Defined using <code className="bg-gray-100 px-1 rounded">def</code> keyword.</li>
                <li>Can accept parameters (inputs) and return values (outputs).</li>
                <li>Help make code more organized, readable, and maintainable.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Simple function
def greet():
    print("Hello, World!")

greet()  # Call the function

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")

# Function with return value
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(result)  # 8

# Function with default parameters
def power(base, exponent=2):
    return base ** exponent

print(power(5))      # 25 (5^2)
print(power(5, 3))   # 125 (5^3)`}</pre>
              </div>
            </Section>

            <Section number="5" title="Function Arguments">
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Positional Arguments:</h4>
                  <p className="text-gray-700">Arguments passed in order.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>def divide(a, b):<br />    return a / b</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Keyword Arguments:</h4>
                  <p className="text-gray-700">Arguments passed by name.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>divide(b=2, a=10)  # Order doesn't matter</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Variable-length Arguments:</h4>
                  <p className="text-gray-700">Accept any number of arguments using <code className="bg-gray-100 px-1 rounded">*args</code> and <code className="bg-gray-100 px-1 rounded">**kwargs</code>.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>def sum_all(*numbers):<br />    return sum(numbers)<br /><br />print(sum_all(1, 2, 3, 4, 5))  # 15</code>
                  </div>
                </div>
              </div>
            </Section>

            <Section number="6" title="List Comprehensions - Elegant Iteration">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Concise way to create lists based on existing sequences.</li>
                <li>More readable and often faster than traditional loops.</li>
                <li>Can include conditions (filtering).</li>
                <li>Syntax: <code className="bg-gray-100 px-1 rounded">[expression for item in sequence if condition]</code></li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Traditional way
squares = []
for i in range(10):
    squares.append(i ** 2)

# List comprehension
squares = [i ** 2 for i in range(10)]

# With condition
even_squares = [i ** 2 for i in range(10) if i % 2 == 0]

# String manipulation
fruits = ["apple", "banana", "cherry"]
upper_fruits = [fruit.upper() for fruit in fruits]

# Nested comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]`}</pre>
              </div>
            </Section>

            <Section number="7" title="Scope and Lifetime of Variables">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Local Scope:</strong> Variables defined inside functions.</li>
                <li><strong>Global Scope:</strong> Variables defined outside all functions.</li>
                <li>Local variables are not accessible outside their function.</li>
                <li>Use <code className="bg-gray-100 px-1 rounded">global</code> keyword to modify global variables inside functions (use sparingly).</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Global variable
x = 10

def my_function():
    # Local variable
    y = 5
    print(f"Local y: {y}")
    print(f"Global x: {x}")

my_function()
print(x)  # Works
# print(y)  # Error - y is not defined outside function

# Modifying global variable
counter = 0

def increment():
    global counter
    counter += 1

increment()
print(counter)  # 1`}</pre>
              </div>
            </Section>

            <Section number="8" title="Learning Resources">
              <div className="space-y-2 ml-4">
                <a href="https://docs.python.org/3/tutorial/controlflow.html" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Python Official Documentation - Control Flow</span>
                </a>
                <a href="https://www.w3schools.com/python/python_functions.asp" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>W3Schools - Python Functions</span>
                </a>
                <a href="https://realpython.com/python-conditional-statements/" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Real Python - Conditional Statements</span>
                </a>
              </div>
            </Section>
          </div>

          {/* Outcome */}
          <div className="mt-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <div className="flex items-start gap-3">
              <Lightbulb className="text-green-600 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Outcome:</h2>
                <p className="text-gray-700 leading-relaxed">
                  Interns will be able to write programs with decision-making capabilities, iterate 
                  through data efficiently, and create reusable functions. These skills are fundamental 
                  for data processing, analysis automation, and building machine learning pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center text-gray-600">
          <p className="text-sm">DeepVisionAI Internship Program</p>
          <p className="text-xs mt-1">Week 1 - Grass Root & Foundations</p>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Section: React.FC<SectionProps> = ({ number, title, children }) => {
  return (
    <div className="border-l-2 border-indigo-200 pl-6 py-2">
      <h3 className="text-lg font-bold text-gray-800 mb-3">
        {number}. {title}
      </h3>
      {children}
    </div>
  );
};

export default Day3LearningDoc;
