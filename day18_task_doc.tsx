import React from 'react';
import { TaskProps } from './src/types';
import { Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day18TaskDoc = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Target size={32} />
              <h1 className="text-3xl font-bold">Task File (Assignment)</h1>
            </div>
            <p className="text-purple-100 text-lg">Day 18 - Week 4, Day 3</p>
          </div>
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                🎯 Custom Image Classification with Transfer Learning
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Complete hands-on project implementing custom image classification with transfer learning. Apply concepts learned 
                in Day 18 to solve real-world problems.
              </p>
            </div>
            <div className="space-y-6">
              
              <Task number="1" title="Dataset Selection">
                <p className="text-gray-700 mb-3">Use Cats vs Dogs or Flowers dataset</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement dataset selection functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="2" title="Data Preparation">
                <p className="text-gray-700 mb-3">Split train/val/test, create data generators</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement data preparation functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="3" title="Feature Extraction Approach">
                <p className="text-gray-700 mb-3">Load VGG16/ResNet50, freeze conv layers</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement feature extraction approach functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="4" title="Add Custom Classifier">
                <p className="text-gray-700 mb-3">GlobalAveragePooling, Dense layers, output layer</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement add custom classifier functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="5" title="Train Model">
                <p className="text-gray-700 mb-3">Compile, fit with data augmentation</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement train model functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="6" title="Evaluate Performance">
                <p className="text-gray-700 mb-3">Accuracy, confusion matrix, sample predictions</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement evaluate performance functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="7" title="Fine-Tuning">
                <p className="text-gray-700 mb-3">Unfreeze last conv block, train with low LR (1e-5)</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement fine-tuning functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="8" title="Compare Results">
                <p className="text-gray-700 mb-3">Feature extraction vs fine-tuning performance</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement compare results functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="9" title="Bonus: Multiple Models">
                <p className="text-gray-700 mb-3">Try MobileNet, InceptionV3, compare speeds</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement bonus: multiple models functionality</li>
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
            <p className="text-xs mt-1">Week 4 - Deep Learning & Deployment</p>
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

export default Day18TaskDoc;
