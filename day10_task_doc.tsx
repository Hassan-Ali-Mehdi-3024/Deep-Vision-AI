import React from 'react';
import { TaskProps } from './src/types';
import { Target, CheckSquare, AlertCircle, Award, Send, Trophy } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day10TaskDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day10-task-card" filename="Day10_Task_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div id="day10-task-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Trophy size={32} />
            <h1 className="text-3xl font-bold">Capstone Project (Engineering Brief)</h1>
          </div>
          <p className="text-purple-100 text-lg">Day 10 - Week 2, Day 5 - FINAL PROJECT</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2">
              Title: Week 2 Comprehensive Data Analysis Capstone
            </h2>
          </div>

          {/* Objective */}
          <div className="mb-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <Target className="text-purple-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Objective:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Complete an end-to-end data science project integrating all Week 2 skills: EDA, visualization, 
                  statistical analysis, data cleaning, feature engineering, and preprocessing. Deliver a 
                  professional-quality notebook with actionable insights.
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
              Create a Colab notebook titled <code className="bg-gray-100 px-2 py-1 rounded">Week2_Capstone_DataAnalysis_YourName.ipynb</code>
            </p>

            <div className="mb-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-gray-800 mb-2">Dataset Selection:</h4>
              <p className="text-gray-700 mb-2">Choose ONE dataset from the following (or similar complexity):</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Titanic:</strong> Passenger survival analysis</li>
                <li><strong>House Prices:</strong> Real estate price prediction data</li>
                <li><strong>Customer Churn:</strong> Telecom customer retention</li>
                <li><strong>Wine Quality:</strong> Wine characteristics and ratings</li>
                <li><strong>Diabetes:</strong> Health indicators and disease prediction</li>
                <li>Any Kaggle dataset with 500+ rows and 8+ features</li>
              </ul>
            </div>

            <div className="space-y-6">
              <Task number="1" title="Introduction & Business Understanding (10 points)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Define a clear business question or objective.</li>
                  <li>Describe the dataset: source, size, features.</li>
                  <li>State what insights you aim to uncover.</li>
                  <li>Outline success criteria for your analysis.</li>
                </ul>
              </Task>

              <Task number="2" title="Data Loading & Initial Exploration (10 points)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Import all necessary libraries.</li>
                  <li>Load dataset and display first/last 10 rows.</li>
                  <li>Show dataset shape, data types, and basic info.</li>
                  <li>Generate descriptive statistics.</li>
                </ul>
              </Task>

              <Task number="3" title="Comprehensive EDA (20 points)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Missing values analysis with visualization.</li>
                  <li>Univariate analysis: distributions for at least 5 features.</li>
                  <li>Bivariate analysis: relationships between features.</li>
                  <li>Multivariate analysis: correlation heatmap.</li>
                  <li>Identify and document patterns, anomalies, outliers.</li>
                </ul>
              </Task>

              <Task number="4" title="Data Cleaning (15 points)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Handle missing values with justified strategy.</li>
                  <li>Detect and treat outliers (show before/after).</li>
                  <li>Fix data types and inconsistencies.</li>
                  <li>Remove duplicates if any.</li>
                  <li>Document all cleaning decisions with rationale.</li>
                </ul>
              </Task>

              <Task number="5" title="Statistical Analysis (15 points)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Perform at least 2 hypothesis tests relevant to your dataset.</li>
                  <li>Calculate and interpret correlation coefficients.</li>
                  <li>Compute confidence intervals for key metrics.</li>
                  <li>State null/alternative hypotheses clearly.</li>
                  <li>Interpret p-values and statistical significance correctly.</li>
                </ul>
              </Task>

              <Task number="6" title="Advanced Visualizations (15 points)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Minimum 8 high-quality visualizations total.</li>
                  <li>Use diverse plot types: bar, histogram, scatter, box, violin, heatmap, etc.</li>
                  <li>All plots must have titles, labels, and legends.</li>
                  <li>Use color effectively and purposefully.</li>
                  <li>Include at least one advanced visualization (pairplot, facetgrid, or multi-subplot figure).</li>
                </ul>
              </Task>

              <Task number="7" title="Feature Engineering (10 points)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create at least 3 new meaningful features.</li>
                  <li>Transform features where appropriate (log, polynomial, binning).</li>
                  <li>Justify why each engineered feature is useful.</li>
                  <li>Visualize relationships with new features.</li>
                </ul>
              </Task>

              <Task number="8" title="Data Preprocessing for ML (10 points)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Encode all categorical variables appropriately.</li>
                  <li>Scale numeric features using appropriate method.</li>
                  <li>Perform train-test split (80-20, random_state=42).</li>
                  <li>Ensure no data leakage—fit on train only.</li>
                  <li>Final output: X_train, X_test, y_train, y_test ready for modeling.</li>
                </ul>
              </Task>

              <Task number="9" title="Key Insights & Recommendations (10 points)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Summarize 5-7 key findings from your analysis.</li>
                  <li>Support each insight with statistical evidence and visualizations.</li>
                  <li>Provide actionable recommendations based on findings.</li>
                  <li>Discuss limitations of your analysis.</li>
                  <li>Suggest future work or additional analyses.</li>
                </ul>
              </Task>

              <Task number="10" title="Professional Documentation (5 points)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Clear markdown headers organizing notebook sections.</li>
                  <li>Well-commented code explaining complex operations.</li>
                  <li>Executive summary at the beginning.</li>
                  <li>Conclusion section at the end.</li>
                  <li>Markdown section titled <strong>"Reflections (Week 2 Capstone)"</strong> — write 7-10 sentences about:
                    <ul className="list-circle list-inside ml-6 mt-2">
                      <li>Most challenging aspect of the project</li>
                      <li>Most interesting insight discovered</li>
                      <li>What you learned about the end-to-end data science workflow</li>
                      <li>How you'll apply these skills in future projects</li>
                    </ul>
                  </li>
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
                  <li>Dataset must have at least 500 rows and 8 columns.</li>
                  <li>All code must run without errors from top to bottom.</li>
                  <li>Set random_state=42 wherever applicable for reproducibility.</li>
                  <li>Minimum 8 visualizations, all properly labeled.</li>
                  <li>At least 2 hypothesis tests with proper interpretation.</li>
                  <li>Professional quality—imagine presenting to a manager.</li>
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
              <li>All 10 tasks completed comprehensively.</li>
              <li>Professional formatting and organization.</li>
              <li>Executive summary and conclusion sections.</li>
              <li>Reflection markdown (Week 2 Capstone).</li>
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
                    <th className="px-6 py-3 text-left text-gray-800 font-semibold">Task Component</th>
                    <th className="px-6 py-3 text-left text-gray-800 font-semibold">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Introduction & Business Understanding</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Data Loading & Initial Exploration</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Comprehensive EDA</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Data Cleaning</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Statistical Analysis</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Advanced Visualizations</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Feature Engineering</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Data Preprocessing for ML</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Key Insights & Recommendations</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Professional Documentation</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">5</td>
                  </tr>
                  <tr className="bg-purple-100 font-bold">
                    <td className="px-6 py-4 text-gray-800">Total:</td>
                    <td className="px-6 py-4 text-gray-800">110 Points</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-3 italic">
              * Bonus 10 points available for exceptional work: outstanding insights, creative visualizations, 
              or going above and beyond requirements.
            </p>
          </div>

          {/* Submission Notes */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <Trophy className="text-green-600" size={24} />
              Final Notes:
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              This capstone represents the culmination of Week 2. Take your time, be thorough, and produce work 
              you're proud of. This project will be part of your portfolio—make it shine!
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Time Management:</strong> Allocate 4-6 hours for this project. Don't rush—quality over speed.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Remember: The goal isn't just to complete tasks—it's to demonstrate deep understanding of data 
              science fundamentals and the ability to extract meaningful insights from data. Tell a compelling 
              story with your analysis! 🚀
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center text-gray-600">
          <p className="text-sm">DeepVisionAI Internship Program</p>
          <p className="text-xs mt-1">Week 2 Capstone - Data Exploration & Analysis</p>
          <p className="text-xs mt-2 font-semibold text-purple-600">Congratulations on reaching this milestone! 🎉</p>
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
        Task {number}: {title}
      </h4>
      {children}
    </div>
  );
};

export default Day10TaskDoc;
