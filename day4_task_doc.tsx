import React from 'react';
import { TaskProps } from './src/types';
import { FileText, Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day4TaskDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day4-task-card" filename="Day4_Task_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div id="day4-task-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <FileText size={32} />
            <h1 className="text-3xl font-bold">Task File (Engineering Brief)</h1>
          </div>
          <p className="text-purple-100 text-lg">Day 4 - Week 1, Day 4</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2">
              Title: NumPy Array Operations & Statistical Analysis
            </h2>
          </div>

          {/* Objective */}
          <div className="mb-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <Target className="text-purple-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Objective:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Practice NumPy array creation, manipulation, and statistical operations. Apply NumPy 
                  to solve real-world data problems and perform efficient numerical computations.
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
              Create a Colab notebook titled <code className="bg-gray-100 px-2 py-1 rounded">Week1_Day4_NumPy_YourName.ipynb</code> and complete the following:
            </p>

            <div className="space-y-6">
              <Task number="1" title="Array Creation & Properties">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a 1D NumPy array with values from 1 to 20.</li>
                  <li>Create a 4x5 array of all zeros.</li>
                  <li>Create a 3x3 identity matrix.</li>
                  <li>Create an array of 50 evenly spaced values between 0 and 10.</li>
                  <li>Create a 5x5 array with random integers between 1 and 100.</li>
                  <li>For each array, print: shape, ndim, size, and dtype.</li>
                </ul>
              </Task>

              <Task number="2" title="Array Indexing & Slicing">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a 6x6 array with values from 1 to 36 (reshaped from arange).</li>
                  <li>Extract and print:
                    <ul className="list-circle list-inside ml-6 mt-2">
                      <li>The first row</li>
                      <li>The last column</li>
                      <li>A 3x3 subarray from the center</li>
                      <li>Every second element in the third row</li>
                    </ul>
                  </li>
                  <li>Use boolean indexing to get all values greater than 20.</li>
                </ul>
              </Task>

              <Task number="3" title="Mathematical Operations">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create two arrays: <code className="bg-gray-100 px-1 rounded">a = np.array([1, 2, 3, 4, 5])</code> and <code className="bg-gray-100 px-1 rounded">b = np.array([10, 20, 30, 40, 50])</code></li>
                  <li>Perform and print: addition, subtraction, multiplication, division.</li>
                  <li>Calculate: square of a, square root of b, exponential of a.</li>
                  <li>Find the dot product of a and b.</li>
                  <li>Create a 4x4 matrix and calculate its determinant and transpose.</li>
                </ul>
              </Task>

              <Task number="4" title="Statistical Analysis">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a random array of 100 elements (normally distributed, mean=50, std=10).</li>
                  <li>Calculate and print:
                    <ul className="list-circle list-inside ml-6 mt-2">
                      <li>Mean, median, standard deviation</li>
                      <li>Minimum and maximum values</li>
                      <li>25th, 50th, and 75th percentiles</li>
                      <li>Variance</li>
                    </ul>
                  </li>
                  <li>Create a histogram visualization using matplotlib (10 bins).</li>
                </ul>
              </Task>

              <Task number="5" title="Array Reshaping & Stacking">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create an array with values 1-24.</li>
                  <li>Reshape it to 4x6, then to 2x3x4.</li>
                  <li>Flatten the 2x3x4 array back to 1D.</li>
                  <li>Create two arrays: <code className="bg-gray-100 px-1 rounded">x = np.array([1, 2, 3])</code> and <code className="bg-gray-100 px-1 rounded">y = np.array([4, 5, 6])</code></li>
                  <li>Stack them vertically and horizontally.</li>
                  <li>Transpose a 3x4 matrix and verify the shape changes to 4x3.</li>
                </ul>
              </Task>

              <Task number="6" title="Real-World Application: Grade Analysis">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a 2D array representing test scores for 20 students across 5 subjects (random scores 60-100).</li>
                  <li>Calculate:
                    <ul className="list-circle list-inside ml-6 mt-2">
                      <li>Average score for each student (across all subjects)</li>
                      <li>Average score for each subject (across all students)</li>
                      <li>Overall class average</li>
                      <li>Highest and lowest scoring student (by average)</li>
                      <li>Most difficult subject (lowest average)</li>
                    </ul>
                  </li>
                  <li>Use boolean indexing to find students who scored above 85 in all subjects.</li>
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
                  <li>Use NumPy functions; avoid Python loops where possible.</li>
                  <li>Set random seed to 42 for reproducibility: <code className="bg-gray-100 px-1 rounded">np.random.seed(42)</code></li>
                  <li>Add markdown cells with headings for each task.</li>
                  <li>Include comments explaining complex operations.</li>
                  <li>Display results with clear labels.</li>
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
              <li>All 6 tasks completed with correct outputs.</li>
              <li>Markdown section titled <strong>"Reflections (Week 1, Day 4)"</strong> — write 4-5 sentences about:
                <ul className="list-circle list-inside ml-6 mt-2">
                  <li>How NumPy differs from Python lists in performance</li>
                  <li>Most useful NumPy function you learned today</li>
                  <li>How NumPy can be applied to real-world data problems</li>
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
                    <td className="px-6 py-4 text-gray-700">Array creation and properties</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Indexing and slicing accuracy</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Mathematical operations correctness</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Statistical analysis completeness</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Grade analysis implementation</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Code quality and reflection</td>
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
              This is a <strong>submission day</strong>. Ensure all outputs are visible and your 
              notebook runs from top to bottom without errors. NumPy proficiency is crucial for 
              efficient data science workflows. Take time to experiment and understand each function.
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

export default Day4TaskDoc;
