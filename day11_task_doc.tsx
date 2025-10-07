import React from 'react';
import { TaskProps } from './src/types';
import { Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';

const Day11TaskDoc = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Target size={32} />
              <h1 className="text-3xl font-bold">Task File (Assignment)</h1>
            </div>
            <p className="text-purple-100 text-lg">Day 11 - Week 3, Day 1</p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Project Title */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                🎯 Regression Algorithms Comparison Project
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Build and compare multiple regression models on a real-world dataset. Implement Linear, Polynomial, Ridge, 
                and Lasso regression, then evaluate which performs best for predicting house prices.
              </p>
            </div>

            {/* Tasks */}
            <div className="space-y-6">
              <Task number="1" title="Data Loading & Exploration">
                <p className="text-gray-700 mb-3">Use California Housing dataset from sklearn:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Load the California housing dataset using <code className="bg-gray-100 px-1 rounded">fetch_california_housing()</code></li>
                  <li>Create a DataFrame with features and target</li>
                  <li>Display first 10 rows, shape, and data types</li>
                  <li>Check for missing values</li>
                  <li>Generate descriptive statistics (mean, std, min, max)</li>
                  <li>Create a correlation heatmap</li>
                  <li>Plot distribution of target variable (median house value)</li>
                </ul>
              </Task>

              <Task number="2" title="Data Preprocessing">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Split data into 80% training and 20% testing sets (random_state=42)</li>
                  <li>Standardize features using StandardScaler</li>
                  <li>Fit scaler on training data only</li>
                  <li>Transform both training and testing sets</li>
                  <li>Print shapes of X_train, X_test, y_train, y_test</li>
                </ul>
              </Task>

              <Task number="3" title="Linear Regression Model">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create and train a LinearRegression model</li>
                  <li>Make predictions on test set</li>
                  <li>Calculate and print: MAE, MSE, RMSE, R² score</li>
                  <li>Print the intercept and first 5 coefficients</li>
                  <li>Create a scatter plot: Actual vs Predicted values</li>
                  <li>Plot residuals (errors) distribution</li>
                </ul>
              </Task>

              <Task number="4" title="Polynomial Regression (Degree 2 & 3)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create PolynomialFeatures with degree=2</li>
                  <li>Transform training and testing data</li>
                  <li>Train LinearRegression on polynomial features</li>
                  <li>Calculate all metrics (MAE, MSE, RMSE, R²)</li>
                  <li>Repeat for degree=3</li>
                  <li>Compare results: Which degree performs better?</li>
                  <li>Warning: Watch for overfitting in higher degrees</li>
                </ul>
              </Task>

              <Task number="5" title="Ridge Regression (Multiple Alphas)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Test Ridge with alpha values: [0.1, 1, 10, 100, 1000]</li>
                  <li>For each alpha:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li>Train Ridge model</li>
                      <li>Calculate R² score</li>
                      <li>Store results</li>
                    </ul>
                  </li>
                  <li>Create a line plot: Alpha vs R² Score</li>
                  <li>Identify optimal alpha value</li>
                  <li>Train final Ridge model with best alpha</li>
                  <li>Print all metrics for best model</li>
                </ul>
              </Task>

              <Task number="6" title="Lasso Regression (Multiple Alphas)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Test Lasso with alpha values: [0.001, 0.01, 0.1, 1, 10]</li>
                  <li>For each alpha:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li>Train Lasso model</li>
                      <li>Calculate R² score</li>
                      <li>Count non-zero coefficients</li>
                    </ul>
                  </li>
                  <li>Create two plots:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li>Alpha vs R² Score</li>
                      <li>Alpha vs Number of Features Selected</li>
                    </ul>
                  </li>
                  <li>Identify optimal alpha</li>
                  <li>Print which features were selected (non-zero coefficients)</li>
                </ul>
              </Task>

              <Task number="7" title="Model Comparison & Visualization">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create a comparison table with columns:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li>Model Name</li>
                      <li>MAE</li>
                      <li>RMSE</li>
                      <li>R² Score</li>
                      <li>Training Time</li>
                    </ul>
                  </li>
                  <li>Create a bar chart comparing R² scores of all models</li>
                  <li>Create a bar chart comparing RMSE of all models</li>
                  <li>Write a conclusion: Which model performed best and why?</li>
                </ul>
              </Task>

              <Task number="8" title="Bonus: Feature Importance Analysis">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>For Linear Regression, plot feature coefficients</li>
                  <li>For Lasso, plot non-zero coefficients only</li>
                  <li>Create horizontal bar charts showing feature importance</li>
                  <li>Identify top 3 most important features</li>
                  <li>Explain why these features are most influential</li>
                </ul>
              </Task>
            </div>

            {/* Submission Requirements */}
            <div className="mt-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="flex items-start gap-3">
                <Send className="text-purple-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Submission Requirements:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Jupyter Notebook (.ipynb) with all code and outputs</li>
                    <li>✅ All visualizations clearly labeled with titles and axes</li>
                    <li>✅ Markdown cells explaining your approach and findings</li>
                    <li>✅ Comparison table and conclusion about best model</li>
                    <li>✅ Code should be well-commented and organized</li>
                    <li>✅ Include observations about overfitting/underfitting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Evaluation Rubric */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-yellow-600" size={28} />
                <h3 className="text-xl font-bold text-gray-800">Evaluation Rubric</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <tr>
                      <th className="border border-gray-300 px-6 py-3 text-left">Criteria</th>
                      <th className="border border-gray-300 px-6 py-3 text-center">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Data loading and exploration (EDA)</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Data preprocessing and splitting</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Linear Regression implementation</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Polynomial Regression (degree 2 & 3)</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Ridge Regression with alpha tuning</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Lasso Regression with feature selection</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Model comparison and visualizations</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Code quality and documentation</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">5</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Bonus: Feature importance analysis</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">5</td>
                    </tr>
                    <tr className="bg-gradient-to-r from-purple-100 to-pink-100 font-bold">
                      <td className="border border-gray-300 px-6 py-4 text-gray-800">Total Points</td>
                      <td className="px-6 py-4 text-gray-800">100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tips */}
            <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-yellow-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">💡 Tips for Success:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>🎯 Start simple with Linear Regression before moving to complex models</li>
                    <li>📊 Always visualize your results - plots reveal insights numbers can't</li>
                    <li>🔍 Use GridSearchCV or cross-validation to find optimal alpha values</li>
                    <li>⚖️ Balance model complexity with performance - simpler is often better</li>
                    <li>📝 Document your observations about each model's strengths/weaknesses</li>
                    <li>🧪 Experiment with different feature combinations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 p-6 text-center text-gray-600">
            <p className="text-sm">DeepVisionAI Internship Program</p>
            <p className="text-xs mt-1">Week 3 - Machine Learning Foundations</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Task: React.FC<TaskProps> = ({ number, title, children }) => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
      <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <CheckSquare className="text-purple-600" size={24} />
        Task {number}: {title}
      </h3>
      {children}
    </div>
  );
};

export default Day11TaskDoc;
