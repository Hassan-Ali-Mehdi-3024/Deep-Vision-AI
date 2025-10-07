import React from 'react';
import { TaskProps } from './src/types';
import { Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';

const Day12TaskDoc = () => {
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
            <p className="text-purple-100 text-lg">Day 12 - Week 3, Day 2</p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Project Title */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                🎯 Classification Algorithms: Iris Species Prediction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Build and compare Logistic Regression, Decision Tree, and Random Forest classifiers to predict iris flower species. 
                Master classification metrics and understand when to use each algorithm.
              </p>
            </div>

            {/* Tasks */}
            <div className="space-y-6">
              <Task number="1" title="Data Loading & Exploration">
                <p className="text-gray-700 mb-3">Use the Iris dataset from sklearn:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Load iris dataset using <code className="bg-gray-100 px-1 rounded">load_iris()</code></li>
                  <li>Create DataFrame with feature names</li>
                  <li>Add target column with species names (setosa, versicolor, virginica)</li>
                  <li>Display dataset shape and first 10 rows</li>
                  <li>Check class distribution (how many of each species)</li>
                  <li>Create pair plot showing all features colored by species</li>
                  <li>Generate correlation heatmap</li>
                </ul>
              </Task>

              <Task number="2" title="Data Preprocessing">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Split data: 70% training, 30% testing (random_state=42)</li>
                  <li>Standardize features using StandardScaler</li>
                  <li>Fit scaler on training data only</li>
                  <li>Transform both training and testing sets</li>
                  <li>Print shapes: X_train, X_test, y_train, y_test</li>
                </ul>
              </Task>

              <Task number="3" title="Logistic Regression Implementation">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create LogisticRegression model (multi_class='ovr', max_iter=200)</li>
                  <li>Train on training data</li>
                  <li>Make predictions on test set</li>
                  <li>Calculate accuracy score</li>
                  <li>Print confusion matrix</li>
                  <li>Generate classification report (precision, recall, F1 for each class)</li>
                  <li>Visualize confusion matrix as heatmap</li>
                  <li>Print model coefficients for each feature</li>
                </ul>
              </Task>

              <Task number="4" title="Decision Tree Implementation">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create DecisionTreeClassifier with:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li>criterion='gini'</li>
                      <li>max_depth=4</li>
                      <li>min_samples_split=10</li>
                      <li>random_state=42</li>
                    </ul>
                  </li>
                  <li>Train on training data</li>
                  <li>Make predictions on test set</li>
                  <li>Calculate and print accuracy</li>
                  <li>Print confusion matrix</li>
                  <li>Generate classification report</li>
                  <li>Visualize the decision tree (use plot_tree, max_depth=3 for clarity)</li>
                  <li>Print and visualize feature importances</li>
                </ul>
              </Task>

              <Task number="5" title="Random Forest Implementation">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create RandomForestClassifier with:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li>n_estimators=100</li>
                      <li>max_depth=5</li>
                      <li>min_samples_split=5</li>
                      <li>random_state=42</li>
                    </ul>
                  </li>
                  <li>Train on training data</li>
                  <li>Make predictions on test set</li>
                  <li>Calculate accuracy, precision, recall, F1-score</li>
                  <li>Print confusion matrix</li>
                  <li>Generate full classification report</li>
                  <li>Print feature importances</li>
                  <li>Perform 5-fold cross-validation and print mean accuracy</li>
                </ul>
              </Task>

              <Task number="6" title="Hyperparameter Tuning (Decision Tree)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Use GridSearchCV to find best hyperparameters</li>
                  <li>Test combinations of:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li>max_depth: [2, 3, 4, 5, 6]</li>
                      <li>min_samples_split: [2, 5, 10, 20]</li>
                      <li>criterion: ['gini', 'entropy']</li>
                    </ul>
                  </li>
                  <li>Use 5-fold cross-validation</li>
                  <li>Print best parameters found</li>
                  <li>Print best cross-validation score</li>
                  <li>Evaluate best model on test set</li>
                </ul>
              </Task>

              <Task number="7" title="Model Comparison & Analysis">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create comparison table with columns:
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                      <li>Model Name</li>
                      <li>Accuracy</li>
                      <li>Precision (weighted avg)</li>
                      <li>Recall (weighted avg)</li>
                      <li>F1-Score (weighted avg)</li>
                      <li>Training Time</li>
                    </ul>
                  </li>
                  <li>Create bar chart comparing accuracy of all three models</li>
                  <li>Create grouped bar chart comparing precision, recall, F1 for all models</li>
                  <li>Plot confusion matrices side-by-side for all three models</li>
                  <li>Write analysis: Which model performed best? Why?</li>
                </ul>
              </Task>

              <Task number="8" title="Bonus: ROC Curves & Advanced Metrics">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>For each model, calculate predicted probabilities</li>
                  <li>Plot ROC curve for each class (one-vs-rest)</li>
                  <li>Calculate and display AUC score for each class</li>
                  <li>Create precision-recall curves</li>
                  <li>Compare models based on AUC scores</li>
                  <li>Test models on edge cases (create synthetic data points)</li>
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
                    <li>✅ Jupyter Notebook with all code, outputs, and visualizations</li>
                    <li>✅ All three models implemented and evaluated</li>
                    <li>✅ Confusion matrices, classification reports for each model</li>
                    <li>✅ Comparison table and visualizations</li>
                    <li>✅ Written analysis explaining model performance differences</li>
                    <li>✅ Code properly commented and organized</li>
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
                      <td className="border border-gray-300 px-6 py-4">Data exploration and visualization</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Data preprocessing and scaling</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Logistic Regression implementation</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Decision Tree implementation & visualization</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Random Forest implementation</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Hyperparameter tuning (GridSearchCV)</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Model comparison and analysis</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Code quality, comments, and organization</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">5</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Bonus: ROC curves and advanced metrics</td>
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
                    <li>🎯 Iris is a balanced dataset - accuracy is a reliable metric</li>
                    <li>📊 Visualize decision boundaries to understand model behavior</li>
                    <li>🌲 Decision trees can overfit - constrain depth and samples</li>
                    <li>🌲🌲🌲 Random Forest usually outperforms single tree</li>
                    <li>⚙️ GridSearchCV may take time - start with fewer parameter combinations</li>
                    <li>📈 Compare training vs testing accuracy to detect overfitting</li>
                    <li>🔍 Feature importance helps identify which petals/sepals matter most</li>
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

export default Day12TaskDoc;
