import React from 'react';
import { TaskProps } from './src/types';
import { FileText, Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day6TaskDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day6-task-card" filename="Day6_Task_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div id="day6-task-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <FileText size={32} />
            <h1 className="text-3xl font-bold">Task File (Engineering Brief)</h1>
          </div>
          <p className="text-purple-100 text-lg">Day 6 - Week 2, Day 1</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2">
              Title: Data Visualization with Matplotlib & Seaborn
            </h2>
          </div>

          {/* Objective */}
          <div className="mb-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <Target className="text-purple-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Objective:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Create various types of visualizations using Matplotlib and Seaborn. Practice choosing 
                  appropriate chart types, customizing aesthetics, and telling stories with data visually.
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
              Create a Colab notebook titled <code className="bg-gray-100 px-2 py-1 rounded">Week2_Day1_Visualization_YourName.ipynb</code>
            </p>

            <div className="space-y-6">
              <Task number="1" title="Matplotlib Basics">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a line plot showing temperature over 12 months (use random data).</li>
                  <li>Add labels, title, grid, and legend.</li>
                  <li>Create a bar chart comparing sales of 5 products.</li>
                  <li>Create a histogram of 1000 random normally distributed values.</li>
                  <li>Create a scatter plot showing relationship between study hours (1-10) and test scores (random 60-100).</li>
                </ul>
              </Task>

              <Task number="2" title="Advanced Matplotlib">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a 2x2 subplot grid with: line plot, bar chart, pie chart, and scatter plot.</li>
                  <li>Customize colors, markers, and styles for each plot.</li>
                  <li>Add a pie chart showing market share distribution (5 companies).</li>
                  <li>Save the figure as PNG with 300 DPI.</li>
                </ul>
              </Task>

              <Task number="3" title="Seaborn Statistical Plots">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Load the Seaborn 'tips' dataset.</li>
                  <li>Create a count plot showing number of diners by day.</li>
                  <li>Create a box plot showing total_bill distribution by day.</li>
                  <li>Create a violin plot comparing tips by time (Lunch/Dinner).</li>
                  <li>Create a scatter plot with regression line showing relationship between total_bill and tip.</li>
                </ul>
              </Task>

              <Task number="4" title="Correlation and Heatmaps">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a DataFrame with 100 rows and 5 numeric columns (random data).</li>
                  <li>Calculate correlation matrix.</li>
                  <li>Create a heatmap of the correlation matrix with annotations.</li>
                  <li>Use a diverging colormap (e.g., 'coolwarm').</li>
                </ul>
              </Task>

              <Task number="5" title="Distribution Plots">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Generate 3 different distributions: normal, uniform, exponential (500 samples each).</li>
                  <li>Create overlapping histograms with transparency.</li>
                  <li>Create KDE (Kernel Density Estimation) plots for each distribution.</li>
                  <li>Use different colors and add legend.</li>
                </ul>
              </Task>

              <Task number="6" title="Real-World Scenario Visualization">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a dataset: Monthly revenue for 3 product lines over 12 months.</li>
                  <li>Create a grouped bar chart comparing monthly performance.</li>
                  <li>Create a stacked area chart showing cumulative revenue.</li>
                  <li>Add trend lines for each product.</li>
                  <li>Include appropriate titles, labels, and legends.</li>
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
                  <li>Every plot must have title, axis labels, and legend (where applicable).</li>
                  <li>Use appropriate figure sizes for readability.</li>
                  <li>Set random seed to 42 for reproducibility.</li>
                  <li>Use markdown cells to separate and explain each visualization.</li>
                  <li>Choose color-blind friendly color palettes when possible.</li>
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
              <li>All 6 tasks completed with well-formatted visualizations.</li>
              <li>Markdown section titled <strong>"Reflections (Week 2, Day 1)"</strong> — write 4-5 sentences about:
                <ul className="list-circle list-inside ml-6 mt-2">
                  <li>Which visualization type you found most useful and why</li>
                  <li>Challenges faced in creating effective visualizations</li>
                  <li>How visualization helps in understanding data better than raw numbers</li>
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
                    <td className="px-6 py-4 text-gray-700">Matplotlib basics completeness</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Advanced visualizations quality</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Seaborn statistical plots</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Heatmaps and correlations</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Distribution visualization</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Real-world scenario execution</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Aesthetics and reflection</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">5</td>
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
              This is a <strong>practice day</strong>. Focus on creating clear, informative visualizations. 
              Experiment with different styles and options. Good visualization is both an art and science—
              practice makes perfect!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center text-gray-600">
          <p className="text-sm">DeepVisionAI Internship Program</p>
          <p className="text-xs mt-1">Week 2 - Data Exploration & Analysis</p>
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

export default Day6TaskDoc;

