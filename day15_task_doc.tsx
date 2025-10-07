import React from 'react';
import { TaskProps } from './src/types';
import { Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';

const Day15TaskDoc = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Target size={32} />
              <h1 className="text-3xl font-bold">Task File (Assignment)</h1>
            </div>
            <p className="text-purple-100 text-lg">Day 15 - Week 3, Day 5</p>
          </div>
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                🎯 Week 3 Capstone: End-to-End ML Pipeline
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Complete hands-on project implementing week 3 capstone: end-to-end ml pipeline. Apply concepts learned 
                in Day 15 to solve real-world problems.
              </p>
            </div>
            <div className="space-y-6">
              
              <Task number="1" title="Problem Definition">
                <p className="text-gray-700 mb-3">Choose classification problem (e.g., churn prediction)</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement problem definition functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="2" title="Data Loading & EDA">
                <p className="text-gray-700 mb-3">Load real-world dataset, comprehensive analysis</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement data loading & eda functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="3" title="Feature Engineering">
                <p className="text-gray-700 mb-3">Create new features, encode categoricals</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement feature engineering functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="4" title="Train Multiple Models">
                <p className="text-gray-700 mb-3">Logistic, Decision Tree, Random Forest, XGBoost</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement train multiple models functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="5" title="Cross-Validation">
                <p className="text-gray-700 mb-3">5-fold stratified CV for all models</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement cross-validation functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="6" title="Hyperparameter Tuning">
                <p className="text-gray-700 mb-3">GridSearch for top 2 models</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement hyperparameter tuning functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="7" title="Ensemble Creation">
                <p className="text-gray-700 mb-3">Voting classifier combining best models</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement ensemble creation functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="8" title="Final Evaluation">
                <p className="text-gray-700 mb-3">Detailed metrics, confusion matrix, feature importance</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement final evaluation functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="9" title="Deployment Preparation">
                <p className="text-gray-700 mb-3">Save best model with pickle/joblib</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement deployment preparation functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
            </div>

            <div className="mt-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="flex items-start gap-3">
                <Send className="text-purple-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Submission Requirements:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Complete Jupyter Notebook with all tasks</li>
                    <li>✅ All visualizations and metrics included</li>
                    <li>✅ Code well-commented and organized</li>
                    <li>✅ Written analysis and conclusions</li>
                    <li>✅ Professional presentation of results</li>
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
                      <td className="border border-gray-300 px-6 py-4">Task completion and correctness</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">40</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Code quality and organization</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Analysis and insights</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Visualizations and documentation</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Creativity and going beyond requirements</td>
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
                    <li>📊 Start with data exploration before modeling</li>
                    <li>🧪 Experiment with different approaches</li>
                    <li>📝 Document your thought process and decisions</li>
                    <li>🎯 Focus on understanding, not just completing tasks</li>
                    <li>🤝 Ask questions if stuck - learning is a journey!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-6 text-center text-gray-600">
            <p className="text-sm">DeepVisionAI Internship Program</p>
            <p className="text-xs mt-1">Week 3 - Machine Learning</p>
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

export default Day15TaskDoc;
