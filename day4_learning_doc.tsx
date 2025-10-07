import React from 'react';
import { BookOpen, Target, Lightbulb, ExternalLink } from 'lucide-react';
import { SectionProps } from './src/types';
import PDFExportButton from './src/components/PDFExportButton';

const Day4LearningDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day4-card" filename="Day4_Learning_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day4-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={32} />
            <h1 className="text-3xl font-bold">Learning File (Handout)</h1>
          </div>
          <p className="text-blue-100 text-lg">Day 4 - Week 1, Day 4</p>
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
                  Master NumPy library for numerical computing. Learn to work with arrays, perform 
                  mathematical operations, understand broadcasting, and manipulate array shapes—essential 
                  skills for data science and machine learning.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section number="1" title="What is NumPy?">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>NumPy = Numerical Python - fundamental package for scientific computing.</li>
                <li>Provides powerful N-dimensional array objects (ndarray).</li>
                <li>Much faster than Python lists for numerical operations.</li>
                <li>Foundation for libraries like Pandas, Matplotlib, Scikit-learn, TensorFlow.</li>
                <li>Written in C, making it highly optimized for performance.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`import numpy as np

# Check version
print(np.__version__)

# Why NumPy is faster
import time

# Python list
python_list = list(range(1000000))
start = time.time()
result = [x * 2 for x in python_list]
print(f"Python list: {time.time() - start:.4f}s")

# NumPy array
numpy_array = np.arange(1000000)
start = time.time()
result = numpy_array * 2
print(f"NumPy array: {time.time() - start:.4f}s")`}</pre>
              </div>
            </Section>

            <Section number="2" title="Creating NumPy Arrays">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Arrays can be created from Python lists, tuples, or using NumPy functions.</li>
                <li>All elements in a NumPy array must be of the same data type.</li>
                <li>Common creation functions: <code className="bg-gray-100 px-1 rounded">array()</code>, <code className="bg-gray-100 px-1 rounded">zeros()</code>, <code className="bg-gray-100 px-1 rounded">ones()</code>, <code className="bg-gray-100 px-1 rounded">arange()</code>, <code className="bg-gray-100 px-1 rounded">linspace()</code></li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# From Python list
arr1 = np.array([1, 2, 3, 4, 5])

# 2D array
arr2 = np.array([[1, 2, 3], [4, 5, 6]])

# Array of zeros
zeros = np.zeros((3, 4))  # 3x4 array of zeros

# Array of ones
ones = np.ones((2, 3))

# Array with range of values
range_arr = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]

# Evenly spaced values
linear = np.linspace(0, 1, 5)  # 5 values from 0 to 1

# Random arrays
random_arr = np.random.rand(3, 3)  # 3x3 random [0, 1)
random_int = np.random.randint(0, 100, (4, 4))  # 4x4 random integers

# Identity matrix
identity = np.eye(4)  # 4x4 identity matrix`}</pre>
              </div>
            </Section>

            <Section number="3" title="Array Attributes">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>shape:</strong> Dimensions of the array (rows, columns, etc.)</li>
                <li><strong>ndim:</strong> Number of dimensions</li>
                <li><strong>size:</strong> Total number of elements</li>
                <li><strong>dtype:</strong> Data type of elements</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`arr = np.array([[1, 2, 3], [4, 5, 6]])

print(arr.shape)    # (2, 3) - 2 rows, 3 columns
print(arr.ndim)     # 2 - two dimensions
print(arr.size)     # 6 - total elements
print(arr.dtype)    # int64 or int32 (depends on system)

# Specify data type
float_arr = np.array([1, 2, 3], dtype=np.float64)
print(float_arr.dtype)  # float64`}</pre>
              </div>
            </Section>

            <Section number="4" title="Array Indexing and Slicing">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Similar to Python lists but works for multi-dimensional arrays.</li>
                <li>Negative indices work from the end.</li>
                <li>Slicing syntax: <code className="bg-gray-100 px-1 rounded">start:stop:step</code></li>
                <li>Slicing returns a view, not a copy (modifications affect original).</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# 1D array indexing
arr = np.array([10, 20, 30, 40, 50])
print(arr[0])      # 10
print(arr[-1])     # 50
print(arr[1:4])    # [20, 30, 40]

# 2D array indexing
arr2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(arr2d[0, 0])     # 1 - first row, first column
print(arr2d[1, 2])     # 6 - second row, third column
print(arr2d[0])        # [1, 2, 3] - entire first row
print(arr2d[:, 1])     # [2, 5, 8] - entire second column
print(arr2d[0:2, 1:3]) # [[2, 3], [5, 6]] - subarray

# Boolean indexing
arr = np.array([1, 2, 3, 4, 5, 6])
print(arr[arr > 3])    # [4, 5, 6]
print(arr[arr % 2 == 0])  # [2, 4, 6]`}</pre>
              </div>
            </Section>

            <Section number="5" title="Array Operations">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Arithmetic operations are element-wise.</li>
                <li>Works with scalars (broadcasting).</li>
                <li>Mathematical functions: <code className="bg-gray-100 px-1 rounded">sqrt()</code>, <code className="bg-gray-100 px-1 rounded">exp()</code>, <code className="bg-gray-100 px-1 rounded">log()</code>, <code className="bg-gray-100 px-1 rounded">sin()</code>, etc.</li>
                <li>Aggregation functions: <code className="bg-gray-100 px-1 rounded">sum()</code>, <code className="bg-gray-100 px-1 rounded">mean()</code>, <code className="bg-gray-100 px-1 rounded">std()</code>, <code className="bg-gray-100 px-1 rounded">min()</code>, <code className="bg-gray-100 px-1 rounded">max()</code></li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`arr = np.array([1, 2, 3, 4, 5])

# Arithmetic operations
print(arr + 10)      # [11, 12, 13, 14, 15]
print(arr * 2)       # [2, 4, 6, 8, 10]
print(arr ** 2)      # [1, 4, 9, 16, 25]

# Array-to-array operations
arr2 = np.array([10, 20, 30, 40, 50])
print(arr + arr2)    # [11, 22, 33, 44, 55]

# Mathematical functions
print(np.sqrt(arr))       # Square root
print(np.exp(arr))        # Exponential
print(np.sin(arr))        # Sine

# Aggregation
print(arr.sum())          # 15
print(arr.mean())         # 3.0
print(arr.std())          # Standard deviation
print(arr.min())          # 1
print(arr.max())          # 5

# Axis-specific operations on 2D arrays
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
print(arr2d.sum(axis=0))  # [5, 7, 9] - sum of each column
print(arr2d.sum(axis=1))  # [6, 15] - sum of each row`}</pre>
              </div>
            </Section>

            <Section number="6" title="Array Reshaping">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><code className="bg-gray-100 px-1 rounded">reshape()</code> - change shape without changing data.</li>
                <li><code className="bg-gray-100 px-1 rounded">flatten()</code> / <code className="bg-gray-100 px-1 rounded">ravel()</code> - convert to 1D array.</li>
                <li><code className="bg-gray-100 px-1 rounded">transpose()</code> - swap rows and columns.</li>
                <li>Use -1 in reshape to automatically calculate dimension.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Reshape
arr = np.arange(12)  # [0, 1, 2, ..., 11]
arr_2d = arr.reshape(3, 4)  # 3x4 array
arr_3d = arr.reshape(2, 2, 3)  # 2x2x3 array

# Auto-calculate dimension
arr_auto = arr.reshape(4, -1)  # 4 rows, auto columns

# Flatten
flat = arr_2d.flatten()  # 1D array
# or
flat = arr_2d.ravel()

# Transpose
arr_t = arr_2d.T  # Swap rows and columns

# Stack arrays
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
vstacked = np.vstack([arr1, arr2])  # Vertical stack
hstacked = np.hstack([arr1, arr2])  # Horizontal stack`}</pre>
              </div>
            </Section>

            <Section number="7" title="Broadcasting">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>NumPy's way of performing operations on arrays of different shapes.</li>
                <li>Smaller array is "broadcast" across the larger array.</li>
                <li>Rules: Arrays must be compatible (same dimensions or one is 1).</li>
                <li>Makes code concise and efficient.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Scalar broadcasting
arr = np.array([[1, 2, 3], [4, 5, 6]])
result = arr + 10  # Adds 10 to each element

# 1D to 2D broadcasting
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
row = np.array([10, 20, 30])
result = arr + row  # Adds row to each row of arr

# Column broadcasting (needs reshaping)
col = np.array([[10], [20], [30]])
result = arr + col  # Adds column to each column of arr`}</pre>
              </div>
            </Section>

            <Section number="8" title="Learning Resources">
              <div className="space-y-2 ml-4">
                <a href="https://numpy.org/doc/stable/user/quickstart.html" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>NumPy Official Quickstart Tutorial</span>
                </a>
                <a href="https://www.w3schools.com/python/numpy/" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>W3Schools - NumPy Tutorial</span>
                </a>
                <a href="https://cs231n.github.io/python-numpy-tutorial/" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Stanford CS231n - NumPy Tutorial</span>
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
                  Interns will be proficient in NumPy array operations, enabling efficient numerical 
                  computations essential for data manipulation, statistical analysis, and machine 
                  learning preprocessing. NumPy skills are fundamental for working with real-world datasets.
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

export default Day4LearningDoc;
