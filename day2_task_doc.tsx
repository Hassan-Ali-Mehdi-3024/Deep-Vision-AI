import React from 'react';
import { TaskProps } from './src/types';
import { FileText, Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day2TaskDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day2-task-card" filename="Day2_Task_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div id="day2-task-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <FileText size={32} />
            <h1 className="text-3xl font-bold">Task File (Engineering Brief)</h1>
          </div>
          <p className="text-purple-100 text-lg">Day 2 - Week 1, Day 2</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2">
              Title: Python Data Structures Mastery (Colab)
            </h2>
          </div>

          {/* Objective */}
          <div className="mb-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <Target className="text-purple-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Objective:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Practice working with Python's core data structures (lists, tuples, dictionaries, and sets) 
                  through hands-on exercises that simulate real-world data manipulation scenarios.
                </p>
              </div>
            </div>
          </div>

          {/* Dataset */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <CheckSquare size={20} className="text-purple-600" />
              Platform:
            </h3>
            <p className="text-gray-700">Google Colab - Create a new notebook</p>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckSquare size={20} className="text-purple-600" />
              Requirements:
            </h3>
            <p className="text-gray-700 mb-4">
              Create a Colab notebook titled <code className="bg-gray-100 px-2 py-1 rounded">Week1_Day2_DataStructures_YourName.ipynb</code> and complete the following:
            </p>

            <div className="space-y-6">
              <Task number="1" title="Lists Operations">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a list of 10 cities you'd like to visit.</li>
                  <li>Add 2 more cities to the end of the list using <code className="bg-gray-100 px-1 rounded">.append()</code>.</li>
                  <li>Insert "Paris" at the 3rd position using <code className="bg-gray-100 px-1 rounded">.insert()</code>.</li>
                  <li>Remove a city of your choice and print the updated list.</li>
                  <li>Sort the list alphabetically and display first 5 cities using slicing.</li>
                  <li>Print the total number of cities in your list.</li>
                </ul>
              </Task>

              <Task number="2" title="Tuples and Immutability">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a tuple containing your: name, age, favorite programming language, and city.</li>
                  <li>Use tuple unpacking to assign each value to separate variables.</li>
                  <li>Print each variable with a descriptive label.</li>
                  <li>Try to modify one element of the tuple and document the error in a markdown cell.</li>
                  <li>Create a new tuple by concatenating your original tuple with <code className="bg-gray-100 px-1 rounded">("Python", "Data Science")</code>.</li>
                </ul>
              </Task>

              <Task number="3" title="Dictionary - Student Records">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a dictionary representing a student with keys: name, age, major, gpa, courses (list of 3 courses).</li>
                  <li>Add a new key "graduation_year" with an appropriate value.</li>
                  <li>Update the GPA to a new value.</li>
                  <li>Add a new course to the courses list.</li>
                  <li>Print all dictionary keys using <code className="bg-gray-100 px-1 rounded">.keys()</code>.</li>
                  <li>Print all values using <code className="bg-gray-100 px-1 rounded">.values()</code>.</li>
                  <li>Use a loop to print each key-value pair in the format: "key: value".</li>
                </ul>
              </Task>

              <Task number="4" title="Nested Dictionary - Company Data">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a dictionary with 3 employee records, each containing: name, position, salary, department.</li>
                  <li>Access and print the salary of the second employee.</li>
                  <li>Add a new employee to the dictionary.</li>
                  <li>Calculate and print the average salary of all employees.</li>
                  <li>Create a list of all employee names using dictionary comprehension or loop.</li>
                </ul>
              </Task>

              <Task number="5" title="Sets - Data Deduplication">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a list with duplicate numbers: [1, 2, 3, 2, 4, 5, 3, 6, 1, 7].</li>
                  <li>Convert the list to a set to remove duplicates and print the result.</li>
                  <li>Create two sets: set A = {'{1, 2, 3, 4, 5}'} and set B = {'{4, 5, 6, 7, 8}'}.</li>
                  <li>Find and print: union, intersection, and difference (A - B).</li>
                  <li>Check if 3 is in set A using the <code className="bg-gray-100 px-1 rounded">in</code> operator.</li>
                  <li>Check if set A is a subset of the union of A and B.</li>
                </ul>
              </Task>

              <Task number="6" title="Real-World Scenario - Shopping Cart">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a shopping cart using a list of dictionaries. Each item should have: name, price, quantity.</li>
                  <li>Add at least 4 items to your cart.</li>
                  <li>Calculate and print the total cost (price × quantity for all items).</li>
                  <li>Find and print the most expensive item in the cart.</li>
                  <li>Remove an item from the cart and recalculate the total.</li>
                  <li>Create a set of unique product categories if you add a "category" key to each item.</li>
                </ul>
              </Task>

              <Task number="7" title="Data Structure Comparison Table">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a markdown cell with a comparison table.</li>
                  <li>Include columns: Data Structure, Ordered, Mutable, Allows Duplicates, Use Case.</li>
                  <li>Fill in details for Lists, Tuples, Dictionaries, and Sets.</li>
                </ul>
              </Task>
            </div>
          </div>

          {/* Constraints */}
          <div className="mb-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-yellow-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Constraints:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use meaningful variable names that describe the data.</li>
                  <li>Add comments explaining complex operations.</li>
                  <li>Use markdown cells to separate each task clearly with headings.</li>
                  <li>Print outputs with descriptive labels (don't just print raw data).</li>
                  <li>Test each code cell individually before moving to the next task.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Send size={20} className="text-purple-600" />
              Deliverables:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Colab notebook link (Anyone with link → Viewer).</li>
              <li>Markdown section titled <strong>"Reflections (Week 1, Day 2)"</strong> — write about:
                <ul className="list-circle list-inside ml-6 mt-2">
                  <li>Which data structure you found most useful and why</li>
                  <li>A real-world scenario where you'd use each data structure</li>
                  <li>Any challenges you faced with mutability or immutability</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Evaluation Criteria */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Award size={20} className="text-purple-600" />
              Evaluation Criteria:
            </h3>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-800 font-semibold">Criteria</th>
                    <th className="px-6 py-3 text-left text-gray-800 font-semibold">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Lists and tuples operations accuracy</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">25</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Dictionary manipulations and nested structures</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">25</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Sets operations and real-world scenario</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">25</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Code quality and documentation</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Reflection depth and comparison table</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-purple-100 font-bold">
                    <td className="px-6 py-4 text-gray-800">Total:</td>
                    <td className="px-6 py-4 text-gray-800">100 Points</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Submission Notes */}
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Submission Notes:</h3>
            <p className="text-gray-700 leading-relaxed">
              This is a <strong>submission day</strong>. Ensure all tasks are completed with proper 
              output formatting. The comparison table should clearly demonstrate your understanding of 
              when to use each data structure. Test the shopping cart scenario thoroughly to ensure 
              accurate calculations.
            </p>
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

const Task: React.FC<TaskProps> = ({ number, title, children }) => {
  return (
    <div className="border-l-2 border-purple-300 pl-6 py-2">
      <h4 className="text-lg font-bold text-gray-800 mb-2">
        {number}. {title}
      </h4>
      {children}
    </div>
  );
};

export default Day2TaskDoc;