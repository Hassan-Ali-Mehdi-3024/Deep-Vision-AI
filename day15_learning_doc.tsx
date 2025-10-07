import React from 'react';
import { ReactNode } from 'react';
import { SectionProps } from './src/types';
import { BookOpen, Brain } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day15LearningDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day15-card" filename="Day15_Ensemble_Methods_&_Model_Stacking.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day15-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={32} />
                <h1 className="text-3xl font-bold">Learning Document</h1>
              </div>
              <p className="text-indigo-100 text-lg">Day 15 - Week 3, Day 5</p>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🎯 Ensemble Methods & Model Stacking
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive guide to ensemble methods & model stacking, covering fundamental concepts, 
                  practical implementations, and best practices for real-world applications.
                </p>
              </div>
              <div className="space-y-8">
                
                <Section number="1" title="Introduction to Ensemble Learning">
                  <p className="text-gray-700 mb-4">
                    Combine multiple models for better performance
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Introduction to Ensemble Learning\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 15 - Introduction to Ensemble Learning')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Introduction to Ensemble Learning</li>
                    <li>Key concept 2 for Introduction to Ensemble Learning</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="2" title="Bagging: Random Forest">
                  <p className="text-gray-700 mb-4">
                    Bootstrap aggregating
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Bagging: Random Forest\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 15 - Bagging: Random Forest')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Bagging: Random Forest</li>
                    <li>Key concept 2 for Bagging: Random Forest</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="3" title="Boosting: AdaBoost">
                  <p className="text-gray-700 mb-4">
                    Sequential learning from mistakes
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Boosting: AdaBoost\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 15 - Boosting: AdaBoost')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Boosting: AdaBoost</li>
                    <li>Key concept 2 for Boosting: AdaBoost</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="4" title="Gradient Boosting (XGBoost, LightGBM)">
                  <p className="text-gray-700 mb-4">
                    Powerful boosting algorithms
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Gradient Boosting (XGBoost, LightGBM)\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 15 - Gradient Boosting (XGBoost, LightGBM)')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Gradient Boosting (XGBoost, LightGBM)</li>
                    <li>Key concept 2 for Gradient Boosting (XGBoost, LightGBM)</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="5" title="Voting Classifiers">
                  <p className="text-gray-700 mb-4">
                    Combine different algorithms
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Voting Classifiers\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 15 - Voting Classifiers')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Voting Classifiers</li>
                    <li>Key concept 2 for Voting Classifiers</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="6" title="Stacking">
                  <p className="text-gray-700 mb-4">
                    Meta-learning from predictions
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Stacking\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 15 - Stacking')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Stacking</li>
                    <li>Key concept 2 for Stacking</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="7" title="When to Use Which Ensemble">
                  <p className="text-gray-700 mb-4">
                    Comparison and best practices
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for When to Use Which Ensemble\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 15 - When to Use Which Ensemble')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for When to Use Which Ensemble</li>
                    <li>Key concept 2 for When to Use Which Ensemble</li>
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

export default Day15LearningDoc;
