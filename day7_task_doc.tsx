import React from 'react';
import { TaskProps } from './src/types';
import { FileText, Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day7TaskDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day7-task-card" filename="Day7_Task_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div id="day7-task-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <FileText size={32} />
            <h1 className="text-3xl font-bold">Task File (Engineering Brief)</h1>
          </div>
          <p className="text-purple-100 text-lg">Day 7 - Week 2, Day 2</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2">
              Title: Exploratory Data Analysis (EDA) Project
            </h2>
          </div>

          {/* Objective */}
          <div className="mb-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <Target className="text-purple-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Objective:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Perform comprehensive exploratory data analysis on a real-world dataset. Clean data, handle 
                  missing values, detect outliers, visualize distributions, and uncover insights through statistical 
                  analysis.
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
              Create a Colab notebook titled <code className="bg-gray-100 px-2 py-1 rounded">Week2_Day2_EDA_YourName.ipynb</code>
            </p>

            <div className="space-y-6">
              <Task number="1" title="Dataset Selection and Loading">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Choose ONE dataset from Kaggle or use the Titanic dataset.</li>
                  <li>Load the dataset into a Pandas DataFrame.</li>
                  <li>Display first 10 rows, last 5 rows, and dataset shape.</li>
                  <li>Use <code>df.info()</code> and <code>df.describe()</code> to get overview.</li>
                  <li>Document dataset source and brief description in markdown.</li>
                </ul>
              </Task>

              <Task number="2" title="Missing Data Analysis">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Check for missing values in all columns.</li>
                  <li>Calculate percentage of missing data per column.</li>
                  <li>Visualize missing data using a heatmap or bar chart.</li>
                  <li>Document your strategy for handling missing values.</li>
                  <li>Implement your strategy (drop, fill with mean/median/mode, or forward/backward fill).</li>
                  <li>Verify that missing values are handled correctly.</li>
                </ul>
              </Task>

              <Task number="3" title="Data Cleaning and Type Conversion">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Check data types of all columns.</li>
                  <li>Convert any incorrect data types (e.g., dates stored as strings).</li>
                  <li>Remove or fix any duplicate rows.</li>
                  <li>Handle any obvious data entry errors or inconsistencies.</li>
                  <li>Standardize text data (e.g., consistent capitalization).</li>
                </ul>
              </Task>

              <Task number="4" title="Outlier Detection and Treatment">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Select 2-3 numeric columns for outlier analysis.</li>
                  <li>Create box plots to visualize outliers.</li>
                  <li>Use IQR method to detect outliers mathematically.</li>
                  <li>Document how many outliers found in each column.</li>
                  <li>Decide and implement treatment strategy (remove, cap, or keep with justification).</li>
                </ul>
              </Task>

              <Task number="5" title="Univariate Analysis">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>For 3 numeric columns: create histograms, calculate mean/median/mode.</li>
                  <li>For 3 categorical columns: create bar charts showing value counts.</li>
                  <li>Analyze distributions - are they normal, skewed, or bimodal?</li>
                  <li>Document key observations about each variable.</li>
                </ul>
              </Task>

              <Task number="6" title="Bivariate and Correlation Analysis">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create correlation matrix for all numeric variables.</li>
                  <li>Visualize with a heatmap (annotated).</li>
                  <li>Identify top 3 strongest correlations (positive or negative).</li>
                  <li>Create scatter plots for top 2 correlated pairs.</li>
                  <li>Perform grouped analysis: compare numeric variable across categorical groups (e.g., box plots by category).</li>
                </ul>
              </Task>

              <Task number="7" title="Insights and Recommendations">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a markdown section titled "Key Insights".</li>
                  <li>List 5-7 interesting patterns, trends, or anomalies discovered.</li>
                  <li>Provide recommendations based on your findings.</li>
                  <li>Suggest potential features for machine learning (if applicable).</li>
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
                  <li>Dataset should have at least 500 rows and 8 columns.</li>
                  <li>Use markdown cells to explain EVERY step of your analysis.</li>
                  <li>All visualizations must have titles, labels, and legends.</li>
                  <li>Set random seed to 42 where applicable.</li>
                  <li>Code must be well-commented and organized.</li>
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
              <li>All 7 tasks completed with clear documentation.</li>
              <li>Minimum 8 visualizations total.</li>
              <li>Markdown section titled <strong>"Reflections (Week 2, Day 2)"</strong> — write 5-6 sentences about:
                <ul className="list-circle list-inside ml-6 mt-2">
                  <li>Most challenging aspect of EDA</li>
                  <li>Most surprising insight discovered in the data</li>
                  <li>How EDA changes your understanding compared to just looking at raw data</li>
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
                    <td className="px-6 py-4 text-gray-700">Data loading and initial exploration</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Missing data handling</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Data cleaning and type conversion</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Outlier detection and treatment</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Univariate analysis quality</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Correlation and bivariate analysis</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Insights and documentation</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Code quality and reflection</td>
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
            <p className="text-gray-700 leading-relaxed mb-2">
              This is a <strong>comprehensive EDA project</strong>. Take your time to explore the data thoroughly. 
              The goal is not just to complete tasks, but to truly understand what the data is telling you.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Suggested datasets: Titanic, House Prices, or any Kaggle dataset of your interest with sufficient 
              complexity.
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

export default Day7TaskDoc;
