import React from 'react';
import { TaskProps } from './src/types';
import { FileText, Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day5TaskDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day5-task-card" filename="Day5_Task_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div id="day5-task-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <FileText size={32} />
            <h1 className="text-3xl font-bold">Task File (Engineering Brief)</h1>
          </div>
          <p className="text-purple-100 text-lg">Day 5 - Week 1, Day 5</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2">
              Title: Pandas Data Manipulation & Analysis Project
            </h2>
          </div>

          {/* Objective */}
          <div className="mb-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <Target className="text-purple-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Objective:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Apply Pandas operations to analyze a real-world dataset. Practice data cleaning, 
                  filtering, grouping, and deriving insights from tabular data.
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
              Create a Colab notebook titled <code className="bg-gray-100 px-2 py-1 rounded">Week1_Day5_Pandas_YourName.ipynb</code> and complete the following:
            </p>

            <div className="space-y-6">
              <Task number="1" title="Create Sample Sales Dataset">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a DataFrame with 50 rows containing sales data with columns:
                    <ul className="list-circle list-inside ml-6 mt-2">
                      <li>Product: ['Laptop', 'Phone', 'Tablet', 'Headphones', 'Charger']</li>
                      <li>Category: ['Electronics', 'Accessories']</li>
                      <li>Price: Random values between 50 and 2000</li>
                      <li>Quantity: Random integers between 1 and 10</li>
                      <li>Date: Random dates in 2024</li>
                      <li>Region: ['North', 'South', 'East', 'West']</li>
                    </ul>
                  </li>
                  <li>Randomly insert 5 missing values in Price and Quantity columns.</li>
                  <li>Display first 10 rows, shape, info, and describe.</li>
                </ul>
              </Task>

              <Task number="2" title="Data Cleaning">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Check for and display count of missing values per column.</li>
                  <li>Fill missing Price values with the mean price.</li>
                  <li>Fill missing Quantity values with median quantity.</li>
                  <li>Verify no missing values remain.</li>
                  <li>Add a new column 'Total_Sales' = Price × Quantity.</li>
                </ul>
              </Task>

              <Task number="3" title="Data Filtering">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Filter and display sales where Price &gt; 500.</li>
                  <li>Filter sales from 'North' region only.</li>
                  <li>Find all Electronics products with Quantity &gt; 5.</li>
                  <li>Display top 10 sales by Total_Sales value.</li>
                  <li>Find sales where Total_Sales is between 1000 and 5000.</li>
                </ul>
              </Task>

              <Task number="4" title="Grouping and Aggregation">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Calculate total sales (sum of Total_Sales) by Product.</li>
                  <li>Find average price by Category.</li>
                  <li>Count number of transactions per Region.</li>
                  <li>Find the Region with highest total sales.</li>
                  <li>Create a summary table showing: Product, Total_Quantity_Sold, Total_Revenue, Average_Price.</li>
                </ul>
              </Task>

              <Task number="5" title="Advanced Analysis">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Sort products by total revenue (descending).</li>
                  <li>Add a column 'Price_Category': 'Low' (&lt;500), 'Medium' (500-1000), 'High' (&gt;1000).</li>
                  <li>Calculate percentage contribution of each Product to total revenue.</li>
                  <li>Find the most and least selling product by quantity.</li>
                  <li>Group by Region and Category, calculate total sales for each combination.</li>
                </ul>
              </Task>

              <Task number="6" title="Data Visualization">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a bar plot showing Total Sales by Product.</li>
                  <li>Create a pie chart showing sales distribution by Region.</li>
                  <li>Plot a histogram of Price distribution.</li>
                  <li>Create a bar plot comparing average sales by Price_Category.</li>
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
                  <li>Use Pandas methods; minimize Python loops.</li>
                  <li>Add markdown headings for each task.</li>
                  <li>Display results with clear labels and formatting.</li>
                  <li>Use <code className="bg-gray-100 px-1 rounded">inplace=True</code> where appropriate.</li>
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
              <li>All 6 tasks completed with proper outputs and visualizations.</li>
              <li>Markdown section titled <strong>"Business Insights (Week 1, Day 5)"</strong> — write 5-6 sentences about:
                <ul className="list-circle list-inside ml-6 mt-2">
                  <li>Which product generated most revenue and why</li>
                  <li>Regional sales patterns observed</li>
                  <li>How Pandas simplifies data analysis tasks</li>
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
                    <td className="px-6 py-4 text-gray-700">Dataset creation and exploration</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Data cleaning implementation</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Filtering and selection accuracy</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Grouping and aggregation</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Advanced analysis completeness</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Visualizations quality</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Business insights depth</td>
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
              This is a <strong>submission day</strong> and marks the end of Week 1. This comprehensive 
              project demonstrates your foundational Python and data manipulation skills. Ensure your 
              analysis is thorough and insights are meaningful.
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

export default Day5TaskDoc;

