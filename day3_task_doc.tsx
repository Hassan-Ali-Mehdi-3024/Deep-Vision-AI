import React from 'react';
import { TaskProps } from './src/types';
import { FileText, Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day3TaskDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day3-task-card" filename="Day3_Task_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div id="day3-task-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <FileText size={32} />
            <h1 className="text-3xl font-bold">Task File (Engineering Brief)</h1>
          </div>
          <p className="text-purple-100 text-lg">Day 3 - Week 1, Day 3</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2">
              Title: Control Flow & Functions Practice
            </h2>
          </div>

          {/* Objective */}
          <div className="mb-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <Target className="text-purple-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Objective:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Apply conditional statements, loops, and functions to solve practical programming challenges. 
                  Develop problem-solving skills and learn to write clean, modular, reusable code.
                </p>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <CheckSquare size={20} className="text-purple-600" />
              Platform:
            </h3>
            <p className="text-gray-700 mb-2">Google Colab (Jupyter Notebook environment)</p>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckSquare size={20} className="text-purple-600" />
              Requirements:
            </h3>
            <p className="text-gray-700 mb-4">
              Create a Colab notebook titled <code className="bg-gray-100 px-2 py-1 rounded">Week1_Day3_ControlFlow_YourName.ipynb</code> and complete the following:
            </p>

            <div className="space-y-6">
              <Task number="1" title="Conditional Logic Practice">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Write a function <code className="bg-gray-100 px-1 rounded">check_grade(score)</code> that returns letter grade based on score (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: below 60).</li>
                  <li>Test with at least 5 different scores.</li>
                  <li>Write a function <code className="bg-gray-100 px-1 rounded">is_leap_year(year)</code> that checks if a year is a leap year.</li>
                  <li>Test with years: 2000, 2020, 2021, 2024, 2100.</li>
                </ul>
              </Task>

              <Task number="2" title="Loop Exercises">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Use a <code className="bg-gray-100 px-1 rounded">for</code> loop to print the multiplication table for number 7 (1-10).</li>
                  <li>Create a list of numbers 1-20, then use a loop to print only even numbers.</li>
                  <li>Write code to find the sum of all numbers from 1 to 100 using a loop.</li>
                  <li>Use a <code className="bg-gray-100 px-1 rounded">while</code> loop to print the Fibonacci sequence up to the 10th term.</li>
                </ul>
              </Task>

              <Task number="3" title="Function Building">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Write <code className="bg-gray-100 px-1 rounded">calculate_bmi(weight, height)</code> that calculates BMI (weight in kg, height in meters).</li>
                  <li>Add a second function <code className="bg-gray-100 px-1 rounded">bmi_category(bmi)</code> that returns: "Underweight" (&lt;18.5), "Normal" (18.5-24.9), "Overweight" (25-29.9), "Obese" (≥30).</li>
                  <li>Create <code className="bg-gray-100 px-1 rounded">is_prime(n)</code> function to check if a number is prime.</li>
                  <li>Test with numbers: 2, 17, 25, 29, 100.</li>
                </ul>
              </Task>

              <Task number="4" title="List Comprehension Practice">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a list of squares of numbers from 1 to 15 using list comprehension.</li>
                  <li>From a list of numbers [1, -2, 3, -4, 5, -6, 7, -8, 9, -10], create a new list with only positive numbers.</li>
                  <li>Given list ["hello", "world", "python", "data", "science"], create a new list with lengths of each string.</li>
                  <li>Create a list of tuples (number, square, cube) for numbers 1-5 using comprehension.</li>
                </ul>
              </Task>

              <Task number="5" title="Combined Challenge">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Write a function <code className="bg-gray-100 px-1 rounded">analyze_list(numbers)</code> that takes a list of numbers and returns a dictionary with:
                    <ul className="list-circle list-inside ml-6 mt-2">
                      <li>"sum": total sum</li>
                      <li>"average": mean value</li>
                      <li>"max": maximum value</li>
                      <li>"min": minimum value</li>
                      <li>"even_count": count of even numbers</li>
                    </ul>
                  </li>
                  <li>Test with list: [12, 45, 23, 67, 34, 89, 11, 56, 78, 90]</li>
                </ul>
              </Task>

              <Task number="6" title="Pattern Printing">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Use nested loops to print a right triangle pattern of stars (5 rows).</li>
                  <li>Print a pyramid pattern of numbers (5 rows).</li>
                  <li>Create a function <code className="bg-gray-100 px-1 rounded">print_pattern(n, char)</code> that prints an n-row triangle using the specified character.</li>
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
                  <li>All functions must include docstrings explaining their purpose.</li>
                  <li>Use meaningful variable names.</li>
                  <li>Add comments explaining complex logic.</li>
                  <li>Test each function with multiple test cases.</li>
                  <li>Use proper indentation and code formatting.</li>
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
              <li>Colab notebook link (Share → Anyone with link → Viewer).</li>
              <li>All 6 tasks completed with working code.</li>
              <li>Markdown section titled <strong>"Reflections (Week 1, Day 3)"</strong> — write 4-5 sentences about:
                <ul className="list-circle list-inside ml-6 mt-2">
                  <li>Which function was most challenging to write and why</li>
                  <li>How list comprehensions make code more concise</li>
                  <li>Real-world applications of these programming concepts</li>
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
                    <td className="px-6 py-4 text-gray-700">Conditional logic correctness</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Loop implementation</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Function design and modularity</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">25</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">List comprehension usage</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Code quality and documentation</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Reflection depth</td>
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
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Submission Notes:</h3>
            <p className="text-gray-700 leading-relaxed">
              This is a <strong>practice day</strong>. Focus on understanding the concepts deeply 
              rather than rushing through. Test your functions thoroughly and experiment with 
              different inputs. The skills you build today are foundational for data analysis.
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

export default Day3TaskDoc;
