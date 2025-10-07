import React from 'react';
import { ReactNode } from 'react';
import { SectionProps } from './src/types';
import { BookOpen, Brain } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day19LearningDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day19-card" filename="Day19_Model_Deployment_&_MLOps_Basics.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day19-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={32} />
                <h1 className="text-3xl font-bold">Learning Document</h1>
              </div>
              <p className="text-indigo-100 text-lg">Day 19 - Week 4, Day 4</p>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🎯 Model Deployment & MLOps Basics
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive guide to model deployment & mlops basics, covering fundamental concepts, 
                  practical implementations, and best practices for real-world applications.
                </p>
              </div>
              <div className="space-y-8">
                
                <Section number="1" title="ML in Production">
                  <p className="text-gray-700 mb-4">
                    Challenges of deploying models
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for ML in Production\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 19 - ML in Production')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for ML in Production</li>
                    <li>Key concept 2 for ML in Production</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="2" title="Saving & Loading Models">
                  <p className="text-gray-700 mb-4">
                    Pickle, Joblib, SavedModel format
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Saving & Loading Models\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 19 - Saving & Loading Models')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Saving & Loading Models</li>
                    <li>Key concept 2 for Saving & Loading Models</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="3" title="Model Serving">
                  <p className="text-gray-700 mb-4">
                    REST API with Flask/FastAPI
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Model Serving\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 19 - Model Serving')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Model Serving</li>
                    <li>Key concept 2 for Model Serving</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="4" title="Docker Containers">
                  <p className="text-gray-700 mb-4">
                    Containerize ML applications
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Docker Containers\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 19 - Docker Containers')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Docker Containers</li>
                    <li>Key concept 2 for Docker Containers</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="5" title="Model Monitoring">
                  <p className="text-gray-700 mb-4">
                    Track performance drift
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Model Monitoring\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 19 - Model Monitoring')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Model Monitoring</li>
                    <li>Key concept 2 for Model Monitoring</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="6" title="MLOps Pipeline">
                  <p className="text-gray-700 mb-4">
                    Train, version, deploy, monitor
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for MLOps Pipeline\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 19 - MLOps Pipeline')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for MLOps Pipeline</li>
                    <li>Key concept 2 for MLOps Pipeline</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="7" title="Cloud Deployment">
                  <p className="text-gray-700 mb-4">
                    AWS SageMaker, GCP AI Platform, Azure ML
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Cloud Deployment\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 19 - Cloud Deployment')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Cloud Deployment</li>
                    <li>Key concept 2 for Cloud Deployment</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
              </div>
            </div>
            <div className="bg-gray-100 p-6 text-center text-gray-600">
              <p className="text-sm">DeepVisionAI Internship Program</p>
              <p className="text-xs mt-1">Week 4 - Deep Learning & Deployment</p>
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

export default Day19LearningDoc;
