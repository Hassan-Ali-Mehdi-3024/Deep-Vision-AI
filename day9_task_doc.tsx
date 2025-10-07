import React from 'react';
import { TaskProps } from './src/types';
import { FileText, Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day9TaskDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day9-task-card" filename="Day9_Task_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div id="day9-task-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <FileText size={32} />
            <h1 className="text-3xl font-bold">Task File (Engineering Brief)</h1>
          </div>
          <p className="text-purple-100 text-lg">Day 9 - Week 2, Day 4</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2">
              Title: Data Preprocessing & Feature Engineering
            </h2>
          </div>

          {/* Objective */}
          <div className="mb-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <Target className="text-purple-600 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Objective:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Practice data preprocessing techniques essential for machine learning. Handle missing values, 
                  encode categorical variables, scale features, engineer new features, and prepare datasets for 
                  modeling using scikit-learn.
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
              Create a Colab notebook titled <code className="bg-gray-100 px-2 py-1 rounded">Week2_Day4_Preprocessing_YourName.ipynb</code>
            </p>

            <div className="space-y-6">
              <Task number="1" title="Dataset Creation with Missing Values">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a DataFrame with 200 rows and these columns:
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>age (numeric, 10% missing)</li>
                      <li>salary (numeric, 15% missing)</li>
                      <li>department (categorical: Sales, IT, HR, Marketing)</li>
                      <li>experience_years (numeric)</li>
                      <li>performance_score (numeric, 5% missing)</li>
                    </ul>
                  </li>
                  <li>Introduce missing values randomly (use np.random).</li>
                  <li>Display missing value summary with visualization.</li>
                </ul>
              </Task>

              <Task number="2" title="Handling Missing Values">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create 3 different versions of the dataset:
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Version 1: Drop all rows with any missing values</li>
                      <li>Version 2: Fill numeric columns with mean, categorical with mode</li>
                      <li>Version 3: Use SimpleImputer with median strategy</li>
                    </ul>
                  </li>
                  <li>Compare resulting dataset shapes.</li>
                  <li>Which approach is best and why? (document your reasoning)</li>
                </ul>
              </Task>

              <Task number="3" title="Encoding Categorical Variables">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Use the cleaned dataset from Task 2 (your chosen version).</li>
                  <li>Apply Label Encoding to 'department' column.</li>
                  <li>Apply One-Hot Encoding to 'department' column (separate copy).</li>
                  <li>Compare both results—show before and after DataFrames.</li>
                  <li>When would you use each encoding method?</li>
                </ul>
              </Task>

              <Task number="4" title="Feature Scaling">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Select numeric columns: age, salary, experience_years, performance_score.</li>
                  <li>Apply StandardScaler—show mean and std before/after.</li>
                  <li>Apply MinMaxScaler—show min and max before/after.</li>
                  <li>Visualize distributions before and after scaling (histograms).</li>
                  <li>Which scaling method preserves the distribution shape?</li>
                </ul>
              </Task>

              <Task number="5" title="Train-Test Split">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Split your preprocessed data: 80% train, 20% test.</li>
                  <li>Set random_state=42 for reproducibility.</li>
                  <li>Display shapes of X_train, X_test, y_train, y_test.</li>
                  <li>Important: Apply scaling AFTER split (fit on train, transform both).</li>
                  <li>Explain why we fit scaler only on training data.</li>
                </ul>
              </Task>

              <Task number="6" title="Feature Engineering">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create 3 new features:
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>salary_per_experience = salary / experience_years</li>
                      <li>age_group (bins: 18-30, 31-45, 46-60, 60+)</li>
                      <li>performance_category (Low: &lt; 3, Medium: 3-4, High: &gt; 4)</li>
                    </ul>
                  </li>
                  <li>Add these to your DataFrame.</li>
                  <li>Visualize relationships between new features and performance_score.</li>
                  <li>Which engineered feature seems most useful?</li>
                </ul>
              </Task>

              <Task number="7" title="Complete Preprocessing Pipeline">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Load a real dataset: Titanic or House Prices from Kaggle/Seaborn.</li>
                  <li>Create a complete preprocessing pipeline:
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Handle missing values</li>
                      <li>Encode categorical variables</li>
                      <li>Engineer 2-3 new features</li>
                      <li>Scale numeric features</li>
                      <li>Train-test split</li>
                    </ul>
                  </li>
                  <li>Document each step with markdown explanations.</li>
                  <li>Final output: X_train_processed, X_test_processed ready for modeling.</li>
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
                  <li>Use scikit-learn for all preprocessing (StandardScaler, SimpleImputer, etc.).</li>
                  <li>NEVER fit scalers/imputers on test data—only transform.</li>
                  <li>Set random_state=42 wherever applicable.</li>
                  <li>Document the "why" for each preprocessing choice.</li>
                  <li>Compare before/after results with visualizations.</li>
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
              <li>All 7 tasks completed with clear explanations.</li>
              <li>Before/after comparisons with visualizations.</li>
              <li>Markdown section titled <strong>"Reflections (Week 2, Day 4)"</strong> — write 5-6 sentences about:
                <ul className="list-circle list-inside ml-6 mt-2">
                  <li>Most important preprocessing step and why</li>
                  <li>Challenges in feature engineering</li>
                  <li>How proper preprocessing affects model performance</li>
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
                    <td className="px-6 py-4 text-gray-700">Dataset creation with missing values</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Missing value handling approaches</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Categorical encoding implementation</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Feature scaling correctness</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Train-test split execution</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Feature engineering creativity</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">Complete pipeline on real data</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Documentation and reflection</td>
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
              Data preprocessing is where 80% of your time in real projects will be spent. Master these 
              techniques—they are non-negotiable for successful machine learning. Bad preprocessing = bad models, 
              no matter how sophisticated the algorithm.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Golden Rule:</strong> Fit on training data, transform on both training and test data. 
              Never let test data information leak into training!
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

export default Day9TaskDoc;
