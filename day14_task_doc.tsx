import React from 'react';
import { TaskProps } from './src/types';
import { Target, CheckSquare, AlertCircle, Award, Send } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day14TaskDoc = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Target size={32} />
              <h1 className="text-3xl font-bold">Task File (Assignment)</h1>
            </div>
            <p className="text-purple-100 text-lg">Day 14 - Week 3, Day 4</p>
          </div>
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                🎯 Customer Segmentation with K-Means & PCA
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Complete hands-on project implementing customer segmentation with k-means & pca. Apply concepts learned 
                in Day 14 to solve real-world problems.
              </p>
            </div>
            <div className="space-y-6">
              
              <Task number="1" title="Dataset Loading">
                <p className="text-gray-700 mb-3">Use Mall Customers dataset or create synthetic data</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement dataset loading functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="2" title="Exploratory Analysis">
                <p className="text-gray-700 mb-3">Visualize features, check distributions</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement exploratory analysis functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="3" title="K-Means Clustering">
                <p className="text-gray-700 mb-3">Find optimal K using elbow method and silhouette score</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement k-means clustering functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="4" title="Cluster Visualization">
                <p className="text-gray-700 mb-3">Plot clusters in 2D</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement cluster visualization functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="5" title="PCA Dimensionality Reduction">
                <p className="text-gray-700 mb-3">Reduce to 2-3 components</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement pca dimensionality reduction functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="6" title="Hierarchical Clustering">
                <p className="text-gray-700 mb-3">Create dendrogram</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement hierarchical clustering functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="7" title="Cluster Interpretation">
                <p className="text-gray-700 mb-3">Analyze characteristics of each segment</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement cluster interpretation functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>
              <Task number="8" title="Business Insights">
                <p className="text-gray-700 mb-3">Provide marketing recommendations per segment</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement business insights functionality</li>
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

export default Day14TaskDoc;
