import React from 'react';
import { TaskProps } from './src/types';
import { FileText, Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day1TaskDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day1-task-card" filename="Day1_Task_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div id="day1-task-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <FileText size={32} />
            <h1 className="text-3xl font-bold">Task File (Engineering Brief)</h1>
          </div>
          <p className="text-purple-100 text-lg">Day 1 - Week 1, Day 1</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2">
              Title: Python Setup and Data Science Workflow Documentation (Colab)
            </h2>
          </div>

          {/* Objective */}
          <div className="mb-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <Target className="text-purple-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Objective:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Set up Python environment in Google Colab, verify library installations, and document 
                  understanding of the data science workflow through practical exercises and written reflections.
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
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Visit: <a href="https://colab.research.google.com" className="text-purple-600 underline">colab.research.google.com</a></li>
              <li>Sign in with your Google account</li>
              <li>Create a new notebook</li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckSquare size={20} className="text-purple-600" />
              Requirements:
            </h3>
            <p className="text-gray-700 mb-4">
              Create a Colab notebook titled <code className="bg-gray-100 px-2 py-1 rounded">Week1_Day1_Setup_YourName.ipynb</code> and complete the following:
            </p>

            <div className="space-y-6">
              <Task number="1" title="Environment Setup Verification">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Import the following libraries: numpy, pandas, matplotlib, seaborn.</li>
                  <li>Print the version of each library using <code className="bg-gray-100 px-1 rounded">__version__</code> attribute.</li>
                  <li>Print Python version using <code className="bg-gray-100 px-1 rounded">import sys; print(sys.version)</code>.</li>
                  <li>Add a markdown cell with heading "Environment Setup Complete".</li>
                </ul>
              </Task>

              <Task number="2" title="Basic Python Operations">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create variables for your name, age, and city.</li>
                  <li>Print a formatted string: "My name is [name], I am [age] years old, and I live in [city]".</li>
                  <li>Perform basic arithmetic: create two numbers and display their sum, difference, product, and division.</li>
                  <li>Create a list of 5 favorite data science topics and print them.</li>
                </ul>
              </Task>

              <Task number="3" title="Working with NumPy">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a NumPy array with numbers 1 to 10.</li>
                  <li>Calculate and print: mean, median, standard deviation, and sum.</li>
                  <li>Create a 3x3 matrix with random integers between 1 and 50.</li>
                  <li>Display the matrix shape and data type.</li>
                </ul>
              </Task>

              <Task number="4" title="Introduction to Pandas">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a Pandas DataFrame with 3 columns: Name, Age, City (at least 5 rows of sample data).</li>
                  <li>Display the first 3 rows using <code className="bg-gray-100 px-1 rounded">.head(3)</code>.</li>
                  <li>Display basic info using <code className="bg-gray-100 px-1 rounded">.info()</code> and <code className="bg-gray-100 px-1 rounded">.describe()</code>.</li>
                  <li>Add a new column "Country" with default value "Pakistan".</li>
                </ul>
              </Task>

              <Task number="5" title="Simple Visualization">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a simple list of numbers: [10, 20, 15, 25, 30].</li>
                  <li>Plot a line chart using matplotlib with appropriate title and axis labels.</li>
                  <li>Create a bar chart of the same data using a different color.</li>
                  <li>Ensure both plots have titles: "Line Plot Example" and "Bar Plot Example".</li>
                </ul>
              </Task>

              <Task number="6" title="Data Science Workflow Documentation">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a markdown cell with heading "Data Science Workflow".</li>
                  <li>List and briefly explain all 8 steps of the data science workflow.</li>
                  <li>For each step, write 2-3 sentences explaining what happens in that stage.</li>
                  <li>Include an example use case (e.g., predicting house prices or customer churn).</li>
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
                  <li>All code must run without errors in Google Colab.</li>
                  <li>Use markdown cells to separate and label each section clearly.</li>
                  <li>Add comments in code cells explaining what each code block does.</li>
                  <li>Plots must have titles, axis labels, and appropriate colors.</li>
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
              <li>Markdown section titled <strong>"Reflections (Week 1, Day 1)"</strong> — write 4-5 sentences about:
                <ul className="list-circle list-inside ml-6 mt-2">
                  <li>What you learned about Python and data science today</li>
                  <li>Which step of the data science workflow interests you most and why</li>
                  <li>Any challenges faced during setup</li>
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
                    <td className="px-6 py-4 text-gray-700">Environment setup and verification</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Python operations and library usage</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">30</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Visualization quality</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Workflow documentation completeness</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Code organization and reflection depth</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
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
              This is a <strong>submission day</strong>. Ensure your notebook runs from top to bottom 
              without errors (Runtime → Run all). Double-check that your sharing settings allow viewing. 
              This assignment establishes your foundation for all future work in the program.
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

export default Day1TaskDoc;