import React from 'react';
import { TaskProps } from './src/types';
import { Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';

const Day13TaskDoc = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Target size={32} />
              <h1 className="text-3xl font-bold">Task File (Assignment)</h1>
            </div>
            <p className="text-purple-100 text-lg">Day 13 - Week 3, Day 3</p>
          </div>
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                🎯 Model Evaluation: Credit Card Fraud Detection
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Build a fraud detection system using highly imbalanced data. Master cross-validation, hyperparameter tuning, 
                and proper evaluation metrics for imbalanced classification problems.
              </p>
            </div>
            <div className="space-y-6">
              <Task number="1" title="Dataset & Imbalance Analysis">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Use Kaggle's Credit Card Fraud dataset or sklearn make_classification</li>
                  <li>Create highly imbalanced dataset: 98% legitimate, 2% fraud</li>
                  <li>Display class distribution and imbalance ratio</li>
                  <li>Visualize class distribution with bar plot</li>
                  <li>Check for missing values and data types</li>
                </ul>
              </Task>

              <Task number="2" title="Baseline Model (No Handling Imbalance)">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Split data: 80% train, 20% test (stratified)</li>
                  <li>Train Logistic Regression without handling imbalance</li>
                  <li>Calculate accuracy, precision, recall, F1-score</li>
                  <li>Print confusion matrix</li>
                  <li>Explain why high accuracy is misleading</li>
                </ul>
              </Task>

              <Task number="3" title="Cross-Validation Comparison">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Compare standard K-Fold vs Stratified K-Fold (k=5)</li>
                  <li>Train RandomForestClassifier with both methods</li>
                  <li>Calculate mean accuracy, precision, recall for each</li>
                  <li>Explain which is better for imbalanced data and why</li>
                </ul>
              </Task>

              <Task number="4" title="Handle Imbalance with Class Weights">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Train RandomForestClassifier with class_weight='balanced'</li>
                  <li>Evaluate with confusion matrix</li>
                  <li>Calculate precision, recall, F1 for fraud class</li>
                  <li>Compare to baseline: Did recall improve?</li>
                </ul>
              </Task>

              <Task number="5" title="SMOTE Oversampling">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Apply SMOTE to training data only</li>
                  <li>Print class distribution before and after SMOTE</li>
                  <li>Train RandomForest on resampled data</li>
                  <li>Evaluate on original test set (not resampled!)</li>
                  <li>Compare results to class weights method</li>
                </ul>
              </Task>

              <Task number="6" title="Hyperparameter Tuning with GridSearchCV">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Use GridSearchCV with StratifiedKFold (cv=5)</li>
                  <li>Tune RandomForest parameters:
                    <ul className="list-circle list-inside ml-6 mt-2">
                      <li>n_estimators: [50, 100, 200]</li>
                      <li>max_depth: [10, 20, None]</li>
                      <li>class_weight: ['balanced', None]</li>
                    </ul>
                  </li>
                  <li>Use 'f1' as scoring metric (not accuracy!)</li>
                  <li>Print best parameters and best F1 score</li>
                  <li>Evaluate best model on test set</li>
                </ul>
              </Task>

              <Task number="7" title="ROC-AUC & Precision-Recall Curves">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Get predicted probabilities from best model</li>
                  <li>Plot ROC curve and calculate AUC score</li>
                  <li>Plot Precision-Recall curve</li>
                  <li>Explain which curve is more informative for imbalanced data</li>
                  <li>Find optimal threshold that balances precision and recall</li>
                </ul>
              </Task>

              <Task number="8" title="Final Model Comparison">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Create comparison table for all methods:
                    <ul className="list-circle list-inside ml-6 mt-2">
                      <li>Baseline (no handling)</li>
                      <li>Class Weights</li>
                      <li>SMOTE</li>
                      <li>Best model from GridSearch</li>
                    </ul>
                  </li>
                  <li>Compare: Accuracy, Precision, Recall, F1, AUC</li>
                  <li>Visualize comparison with bar charts</li>
                  <li>Write conclusion: Best approach and why</li>
                </ul>
              </Task>
            </div>

            <div className="mt-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="flex items-start gap-3">
                <Send className="text-purple-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Submission Requirements:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Jupyter Notebook with all tasks completed</li>
                    <li>✅ Confusion matrices and ROC/PR curves visualized</li>
                    <li>✅ Comparison table and analysis</li>
                    <li>✅ Explanation of why accuracy alone is misleading</li>
                    <li>✅ Code well-commented</li>
                  </ul>
                </div>
              </div>
            </div>

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
                      <td className="border border-gray-300 px-6 py-4">Imbalance analysis & baseline model</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Cross-validation implementation</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Class weights & SMOTE techniques</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">GridSearchCV hyperparameter tuning</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">ROC-AUC & Precision-Recall curves</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Model comparison & analysis</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Code quality and explanations</td>
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

            <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-yellow-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">💡 Tips for Success:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>⚠️ Never use accuracy alone for imbalanced data!</li>
                    <li>🎯 Focus on recall for fraud detection (catching all frauds)</li>
                    <li>📊 Precision-Recall curve &gt; ROC curve for imbalanced data</li>
                    <li>🔄 Apply SMOTE only to training set, never test set</li>
                    <li>⚙️ Use stratified splits to maintain class proportions</li>
                    <li>📈 GridSearchCV with f1 scoring, not accuracy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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

export default Day13TaskDoc;
