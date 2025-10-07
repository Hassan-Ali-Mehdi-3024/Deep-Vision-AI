import React from 'react';
import { ReactNode } from 'react';
import { SectionProps } from './src/types';
import { BookOpen, Brain } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day16LearningDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day16-card" filename="Day16_Deep_Learning_Fundamentals_Neural_Networks.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day16-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={32} />
                <h1 className="text-3xl font-bold">Learning Document</h1>
              </div>
              <p className="text-indigo-100 text-lg">Day 16 - Week 4, Day 1</p>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🎯 Deep Learning Fundamentals: Neural Networks
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive guide to deep learning fundamentals: neural networks, covering fundamental concepts, 
                  practical implementations, and best practices for real-world applications.
                </p>
              </div>
              <div className="space-y-8">
                
                <Section number="1" title="Introduction to Neural Networks">
                  <p className="text-gray-700 mb-4">
                    Biological inspiration, perceptrons
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Introduction to Neural Networks\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 16 - Introduction to Neural Networks')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Introduction to Neural Networks</li>
                    <li>Key concept 2 for Introduction to Neural Networks</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="2" title="Network Architecture">
                  <p className="text-gray-700 mb-4">
                    Layers, neurons, connections
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Network Architecture\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 16 - Network Architecture')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Network Architecture</li>
                    <li>Key concept 2 for Network Architecture</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="3" title="Activation Functions">
                  <p className="text-gray-700 mb-4">
                    ReLU, Sigmoid, Tanh, Softmax
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Activation Functions\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 16 - Activation Functions')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Activation Functions</li>
                    <li>Key concept 2 for Activation Functions</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="4" title="Forward Propagation">
                  <p className="text-gray-700 mb-4">
                    Computing predictions
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Forward Propagation\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 16 - Forward Propagation')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Forward Propagation</li>
                    <li>Key concept 2 for Forward Propagation</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="5" title="Backpropagation">
                  <p className="text-gray-700 mb-4">
                    Learning via gradient descent
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Backpropagation\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 16 - Backpropagation')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Backpropagation</li>
                    <li>Key concept 2 for Backpropagation</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="6" title="Loss Functions">
                  <p className="text-gray-700 mb-4">
                    MSE, Cross-Entropy
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Loss Functions\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 16 - Loss Functions')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Loss Functions</li>
                    <li>Key concept 2 for Loss Functions</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="7" title="Building NNs with TensorFlow/Keras">
                  <p className="text-gray-700 mb-4">
                    Sequential API, functional API
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Building NNs with TensorFlow/Keras\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 16 - Building NNs with TensorFlow/Keras')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Building NNs with TensorFlow/Keras</li>
                    <li>Key concept 2 for Building NNs with TensorFlow/Keras</li>
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

export default Day16LearningDoc;
