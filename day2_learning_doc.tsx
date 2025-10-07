import React from 'react';
import { BookOpen, Target, Lightbulb, ExternalLink } from 'lucide-react';
import { SectionProps } from './src/types';
import PDFExportButton from './src/components/PDFExportButton';

const Day2LearningDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day2-card" filename="Day2_Learning_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day2-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={32} />
            <h1 className="text-3xl font-bold">Learning File (Handout)</h1>
          </div>
          <p className="text-blue-100 text-lg">Day 2 - Week 1, Day 2</p>
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
                  Master Python's fundamental building blocks including objects, data types, and 
                  essential data structures (lists, tuples, dictionaries, and sets) that form 
                  the foundation for all data manipulation tasks.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section number="1" title="Python Objects and Data Types">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Everything in Python is an <strong>object</strong> - numbers, strings, lists, functions, etc.</li>
                <li>Objects have a <strong>type</strong> (determines what operations can be performed) and a <strong>value</strong>.</li>
                <li>Use <code className="bg-gray-100 px-1 rounded">type()</code> to check an object's type.</li>
                <li>Python is <strong>dynamically typed</strong> - no need to declare variable types explicitly.</li>
              </ul>
            </Section>

            <Section number="2" title="Basic Data Types">
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Integers (int):</h4>
                  <p className="text-gray-700">Whole numbers without decimal points.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>age = 25<br />count = -10</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Floats (float):</h4>
                  <p className="text-gray-700">Numbers with decimal points.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>price = 99.99<br />temperature = -5.2</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Strings (str):</h4>
                  <p className="text-gray-700">Text data enclosed in quotes (single or double).</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>name = "Alice"<br />message = 'Hello, World!'</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Booleans (bool):</h4>
                  <p className="text-gray-700">True or False values for logical operations.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>is_active = True<br />has_error = False</code>
                  </div>
                </div>
              </div>
            </Section>

            <Section number="3" title="Lists - Ordered Mutable Collections">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Ordered collection that can contain mixed data types.</li>
                <li>Created using square brackets <code className="bg-gray-100 px-1 rounded">[]</code></li>
                <li><strong>Mutable:</strong> Can be modified after creation.</li>
                <li>Support indexing (starts at 0) and slicing.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Creating lists
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# Accessing elements
first = numbers[0]  # 1
last = numbers[-1]  # 5

# Modifying lists
numbers.append(6)      # Add to end
numbers.insert(0, 0)   # Insert at position
numbers.remove(3)      # Remove specific value
popped = numbers.pop() # Remove and return last

# Slicing
subset = numbers[1:4]  # Elements from index 1 to 3`}</pre>
              </div>
            </Section>

            <Section number="4" title="Tuples - Ordered Immutable Collections">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Similar to lists but <strong>immutable</strong> - cannot be changed after creation.</li>
                <li>Created using parentheses <code className="bg-gray-100 px-1 rounded">()</code></li>
                <li>Faster than lists for fixed data.</li>
                <li>Often used to return multiple values from functions.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Creating tuples
coordinates = (10, 20)
person = ("Alice", 25, "Engineer")

# Accessing elements
x = coordinates[0]  # 10
name = person[0]    # "Alice"

# Tuple unpacking
x, y = coordinates
name, age, job = person

# Tuples are immutable - this will raise an error:
# coordinates[0] = 15  # TypeError!`}</pre>
              </div>
            </Section>

            <Section number="5" title="Dictionaries - Key-Value Pairs">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Unordered collection of key-value pairs.</li>
                <li>Created using curly braces <code className="bg-gray-100 px-1 rounded">{'{}'}</code></li>
                <li>Keys must be unique and immutable (strings, numbers, tuples).</li>
                <li>Extremely fast lookup by key.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Creating dictionaries
student = {
    "name": "Bob",
    "age": 22,
    "major": "Computer Science"
}

# Accessing values
name = student["name"]        # "Bob"
age = student.get("age")      # 22
major = student.get("major", "Unknown")  # Safe access

# Modifying dictionaries
student["age"] = 23           # Update value
student["gpa"] = 3.8          # Add new key-value
del student["major"]          # Remove key

# Useful methods
keys = student.keys()         # Get all keys
values = student.values()     # Get all values
items = student.items()       # Get key-value pairs`}</pre>
              </div>
            </Section>

            <Section number="6" title="Sets - Unique Unordered Collections">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Unordered collection of <strong>unique</strong> elements.</li>
                <li>Created using curly braces <code className="bg-gray-100 px-1 rounded">{'{}'}</code> or <code className="bg-gray-100 px-1 rounded">set()</code></li>
                <li>No duplicate values allowed - automatically removes duplicates.</li>
                <li>Useful for mathematical set operations (union, intersection, difference).</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Creating sets
numbers = {1, 2, 3, 4, 5}
unique = set([1, 2, 2, 3, 3, 3])  # {1, 2, 3}

# Set operations
numbers.add(6)           # Add element
numbers.remove(3)        # Remove element
numbers.discard(10)      # Remove if exists (no error)

# Mathematical operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

union = set1 | set2              # {1, 2, 3, 4, 5, 6}
intersection = set1 & set2       # {3, 4}
difference = set1 - set2         # {1, 2}`}</pre>
              </div>
            </Section>

            <Section number="7" title="Choosing the Right Data Structure">
              <div className="bg-blue-50 p-4 rounded-lg ml-4">
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Use Lists when:</strong> Order matters, need duplicates, frequent modifications.</li>
                  <li><strong>Use Tuples when:</strong> Data shouldn't change, faster access needed, returning multiple values.</li>
                  <li><strong>Use Dictionaries when:</strong> Need key-value mapping, fast lookup by key required.</li>
                  <li><strong>Use Sets when:</strong> Need unique values, performing set operations, membership testing.</li>
                </ul>
              </div>
            </Section>

            <Section number="8" title="Learning Resources">
              <div className="space-y-2 ml-4">
                <a href="https://docs.python.org/3/tutorial/datastructures.html" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Python Official Documentation - Data Structures</span>
                </a>
                <a href="https://www.w3schools.com/python/python_lists.asp" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>W3Schools - Python Data Structures</span>
                </a>
                <a href="https://realpython.com/python-data-structures/" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Real Python - Common Data Structures</span>
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
                  Interns will have solid understanding of Python's core data structures and be able 
                  to select the appropriate structure for different data manipulation tasks. This 
                  foundation is essential for working with Pandas DataFrames and NumPy arrays in 
                  upcoming sessions.
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

export default Day2LearningDoc;