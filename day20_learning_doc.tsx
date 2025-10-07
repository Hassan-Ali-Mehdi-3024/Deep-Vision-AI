import React from 'react';
import { SectionProps } from './src/types';
import { BookOpen, Brain } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day20LearningDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day20-card" filename="Day20_Final_Capstone_Project_Overview.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day20-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={32} />
                <h1 className="text-3xl font-bold">Learning Document</h1>
              </div>
              <p className="text-indigo-100 text-lg">Day 20 - Week 4, Day 5</p>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🎯 Final Capstone Project Overview
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive guide to final capstone project overview, covering fundamental concepts, 
                  practical implementations, and best practices for real-world applications.
                </p>
              </div>
              <div className="space-y-8">
                
                <Section number="1" title="Project Requirements">
                  <p className="text-gray-700 mb-4">
                    End-to-end computer vision or ML project
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Project Requirements\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 20 - Project Requirements')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Project Requirements</li>
                    <li>Key concept 2 for Project Requirements</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="2" title="Project Ideas">
                  <p className="text-gray-700 mb-4">
                    Object detection, facial recognition, medical image classification
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Project Ideas\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 20 - Project Ideas')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Project Ideas</li>
                    <li>Key concept 2 for Project Ideas</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="3" title="Project Structure">
                  <p className="text-gray-700 mb-4">
                    Data, notebooks, models, deployment, README
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Project Structure\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 20 - Project Structure')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Project Structure</li>
                    <li>Key concept 2 for Project Structure</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="4" title="Best Practices">
                  <p className="text-gray-700 mb-4">
                    Version control, documentation, testing
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Best Practices\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 20 - Best Practices')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Best Practices</li>
                    <li>Key concept 2 for Best Practices</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="5" title="Presentation Tips">
                  <p className="text-gray-700 mb-4">
                    Problem, approach, results, deployment
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Presentation Tips\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 20 - Presentation Tips')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Presentation Tips</li>
                    <li>Key concept 2 for Presentation Tips</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="6" title="Career Next Steps">
                  <p className="text-gray-700 mb-4">
                    Portfolio building, interviews, continued learning
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Career Next Steps\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 20 - Career Next Steps')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Career Next Steps</li>
                    <li>Key concept 2 for Career Next Steps</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="7" title="Resources">
                  <p className="text-gray-700 mb-4">
                    Courses, papers, communities
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Resources\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 20 - Resources')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Resources</li>
                    <li>Key concept 2 for Resources</li>
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

export default Day20LearningDoc;
