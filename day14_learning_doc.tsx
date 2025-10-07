import React from 'react';
import { ReactNode } from 'react';
import { SectionProps } from './src/types';
import { BookOpen, Brain } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day14LearningDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day14-card" filename="Day14_Unsupervised_Learning_Clustering_&_Dimensionality_Reduction.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day14-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={32} />
                <h1 className="text-3xl font-bold">Learning Document</h1>
              </div>
              <p className="text-indigo-100 text-lg">Day 14 - Week 3, Day 4</p>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🎯 Unsupervised Learning: Clustering & Dimensionality Reduction
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive guide to unsupervised learning: clustering & dimensionality reduction, covering fundamental concepts, 
                  practical implementations, and best practices for real-world applications.
                </p>
              </div>
              <div className="space-y-8">
                
                <Section number="1" title="Introduction to Unsupervised Learning">
                  <p className="text-gray-700 mb-4">
                    No labels, find patterns in data
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Introduction to Unsupervised Learning\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 14 - Introduction to Unsupervised Learning')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Introduction to Unsupervised Learning</li>
                    <li>Key concept 2 for Introduction to Unsupervised Learning</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="2" title="K-Means Clustering">
                  <p className="text-gray-700 mb-4">
                    Partition data into K clusters
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for K-Means Clustering\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 14 - K-Means Clustering')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for K-Means Clustering</li>
                    <li>Key concept 2 for K-Means Clustering</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="3" title="Hierarchical Clustering">
                  <p className="text-gray-700 mb-4">
                    Build tree of clusters
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Hierarchical Clustering\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 14 - Hierarchical Clustering')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Hierarchical Clustering</li>
                    <li>Key concept 2 for Hierarchical Clustering</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="4" title="DBSCAN">
                  <p className="text-gray-700 mb-4">
                    Density-based clustering
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for DBSCAN\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 14 - DBSCAN')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for DBSCAN</li>
                    <li>Key concept 2 for DBSCAN</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="5" title="Principal Component Analysis (PCA)">
                  <p className="text-gray-700 mb-4">
                    Reduce dimensions while preserving variance
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Principal Component Analysis (PCA)\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 14 - Principal Component Analysis (PCA)')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Principal Component Analysis (PCA)</li>
                    <li>Key concept 2 for Principal Component Analysis (PCA)</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="6" title="t-SNE">
                  <p className="text-gray-700 mb-4">
                    Visualization of high-dimensional data
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for t-SNE\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 14 - t-SNE')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for t-SNE</li>
                    <li>Key concept 2 for t-SNE</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="7" title="Practical Applications">
                  <p className="text-gray-700 mb-4">
                    Customer segmentation, anomaly detection
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Practical Applications\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 14 - Practical Applications')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Practical Applications</li>
                    <li>Key concept 2 for Practical Applications</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
              </div>
            </div>
            <div className="bg-gray-100 p-6 text-center text-gray-600">
              <p className="text-sm">DeepVisionAI Internship Program</p>
              <p className="text-xs mt-1">Week 3 - Machine Learning</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Section: React.FC<SectionProps> = ({ number, title, children }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Brain className="text-indigo-600" size={28} />
        {number}. {title}
      </h3>
      {children}
    </div>
  );
};

export default Day14LearningDoc;
