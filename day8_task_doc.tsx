import React from 'react';
import { TaskProps } from './src/types';
import { FileText, Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day8TaskDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day8-task-card" filename="Day8_Task_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div id="day8-task-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <FileText size={32} />
            <h1 className="text-3xl font-bold">Task File (Engineering Brief)</h1>
          </div>
          <p className="text-purple-100 text-lg">Day 8 - Week 2, Day 3</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2">
              Title: Statistical Analysis with Python
            </h2>
          </div>

          {/* Objective */}
          <div className="mb-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <Target className="text-purple-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Objective:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Apply statistical concepts to real datasets. Calculate descriptive statistics, work with 
                  probability distributions, perform hypothesis testing, and interpret statistical results correctly.
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
              Create a Colab notebook titled <code className="bg-gray-100 px-2 py-1 rounded">Week2_Day3_Statistics_YourName.ipynb</code>
            </p>

            <div className="space-y-6">
              <Task number="1" title="Descriptive Statistics">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a dataset with 100 random values (normal distribution, mean=50, std=10).</li>
                  <li>Calculate: mean, median, mode, variance, standard deviation, range, Q1, Q3, IQR.</li>
                  <li>Create a box plot and histogram of the data.</li>
                  <li>Identify and count outliers using IQR method.</li>
                  <li>Write a summary interpreting the statistics.</li>
                </ul>
              </Task>

              <Task number="2" title="Probability Distributions">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Generate and plot 3 normal distributions with different parameters (μ, σ).</li>
                  <li>Generate 1000 samples from each distribution.</li>
                  <li>Create overlapping histograms with KDE curves.</li>
                  <li>Calculate what percentage of values fall within 1, 2, and 3 standard deviations.</li>
                  <li>Verify the 68-95-99.7 empirical rule.</li>
                </ul>
              </Task>

              <Task number="3" title="Correlation Analysis">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a DataFrame with 200 rows and 4 numeric columns (simulated data).</li>
                  <li>Calculate correlation matrix using Pearson correlation.</li>
                  <li>Create an annotated heatmap.</li>
                  <li>Identify strongest positive and negative correlations.</li>
                  <li>Create scatter plots for the 2 strongest correlations with regression lines.</li>
                </ul>
              </Task>

              <Task number="4" title="Hypothesis Testing - One Sample T-Test">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Scenario: A factory claims average widget weight is 500g.</li>
                  <li>Sample 30 widgets: generate random weights (normal, mean=505, std=15).</li>
                  <li>Perform one-sample t-test against claimed mean of 500g.</li>
                  <li>Calculate t-statistic and p-value.</li>
                  <li>State conclusion: reject or fail to reject null hypothesis (α=0.05).</li>
                  <li>Explain what this means in plain English.</li>
                </ul>
              </Task>

              <Task number="5" title="Hypothesis Testing - Two Sample T-Test">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Scenario: Compare test scores of two teaching methods.</li>
                  <li>Method A: 25 students (mean=75, std=10).</li>
                  <li>Method B: 25 students (mean=80, std=12).</li>
                  <li>Perform independent two-sample t-test.</li>
                  <li>Visualize both distributions with box plots.</li>
                  <li>Interpret: Is there a significant difference? (α=0.05)</li>
                </ul>
              </Task>

              <Task number="6" title="Confidence Intervals">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Use the sample from Task 4 (widget weights).</li>
                  <li>Calculate 90%, 95%, and 99% confidence intervals for the mean.</li>
                  <li>Visualize the intervals on a plot.</li>
                  <li>Explain how confidence level affects interval width.</li>
                  <li>What does "95% confident" actually mean?</li>
                </ul>
              </Task>

              <Task number="7" title="Real-World Application">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Load the Seaborn 'tips' dataset.</li>
                  <li>Calculate descriptive statistics for 'total_bill' and 'tip'.</li>
                  <li>Test: Is there a significant difference in tips between Lunch and Dinner?</li>
                  <li>Perform appropriate hypothesis test.</li>
                  <li>Create visualizations supporting your analysis.</li>
                  <li>Write a conclusion with statistical evidence.</li>
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
                  <li>Set random seed to 42 for reproducibility.</li>
                  <li>Use scipy.stats for statistical tests.</li>
                  <li>Always state null and alternative hypotheses clearly.</li>
                  <li>Interpret p-values correctly - never say "probability hypothesis is true".</li>
                  <li>Include visualizations for every major finding.</li>
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
              <li>Proper interpretation of all statistical tests.</li>
              <li>Markdown section titled <strong>"Reflections (Week 2, Day 3)"</strong> — write 5-6 sentences about:
                <ul className="list-circle list-inside ml-6 mt-2">
                  <li>Most challenging statistical concept to understand</li>
                  <li>How hypothesis testing can be used in real data science projects</li>
                  <li>Importance of p-values and confidence intervals in decision making</li>
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
                    <td className="px-6 py-4 text-gray-700">Descriptive statistics accuracy</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Probability distributions</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Correlation analysis</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">One-sample t-test implementation</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Two-sample t-test implementation</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Confidence intervals</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Real-world application</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Interpretation and reflection</td>
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
              Statistics is the language of data science. Focus on understanding WHAT the tests tell you and 
              WHEN to use them. Don't just calculate numbers—interpret what they mean for decision making. 
              Always combine statistical rigor with clear communication.
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

export default Day8TaskDoc;
