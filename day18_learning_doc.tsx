import React from 'react';
import { ReactNode } from 'react';
import { SectionProps } from './src/types';
import { BookOpen, Brain } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day18LearningDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day18-card" filename="Day18_Transfer_Learning_&_Pretrained_Models.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day18-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={32} />
                <h1 className="text-3xl font-bold">Learning Document</h1>
              </div>
              <p className="text-indigo-100 text-lg">Day 18 - Week 4, Day 3</p>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🎯 Transfer Learning & Pretrained Models
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive guide to transfer learning & pretrained models, covering fundamental concepts, 
                  practical implementations, and best practices for real-world applications.
                </p>
              </div>
              <div className="space-y-8">
                
                <Section number="1" title="What is Transfer Learning?">
                  <p className="text-gray-700 mb-4">
                    Leverage pre-trained models
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for What is Transfer Learning?\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 18 - What is Transfer Learning?')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for What is Transfer Learning?</li>
                    <li>Key concept 2 for What is Transfer Learning?</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="2" title="Why Transfer Learning Works">
                  <p className="text-gray-700 mb-4">
                    Features learned on ImageNet generalize
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Why Transfer Learning Works\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 18 - Why Transfer Learning Works')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Why Transfer Learning Works</li>
                    <li>Key concept 2 for Why Transfer Learning Works</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="3" title="Pretrained Models">
                  <p className="text-gray-700 mb-4">
                    VGG16, ResNet50, InceptionV3, MobileNet, EfficientNet
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Pretrained Models\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 18 - Pretrained Models')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Pretrained Models</li>
                    <li>Key concept 2 for Pretrained Models</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="4" title="Feature Extraction">
                  <p className="text-gray-700 mb-4">
                    Use conv base as feature extractor, train new classifier
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Feature Extraction\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 18 - Feature Extraction')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Feature Extraction</li>
                    <li>Key concept 2 for Feature Extraction</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="5" title="Fine-Tuning">
                  <p className="text-gray-700 mb-4">
                    Unfreeze top layers, train with low learning rate
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Fine-Tuning\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 18 - Fine-Tuning')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Fine-Tuning</li>
                    <li>Key concept 2 for Fine-Tuning</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="6" title="Transfer Learning Workflow">
                  <p className="text-gray-700 mb-4">
                    Load model, freeze layers, add custom head, train
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Transfer Learning Workflow\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 18 - Transfer Learning Workflow')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Transfer Learning Workflow</li>
                    <li>Key concept 2 for Transfer Learning Workflow</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="7" title="Best Practices">
                  <p className="text-gray-700 mb-4">
                    When to use feature extraction vs fine-tuning
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Best Practices\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 18 - Best Practices')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Best Practices</li>
                    <li>Key concept 2 for Best Practices</li>
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

export default Day18LearningDoc;
