import React from 'react';
import { ReactNode } from 'react';
import { SectionProps } from './src/types';
import { BookOpen, Brain } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day17LearningDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day17-card" filename="Day17_Convolutional_Neural_Networks_(CNNs)_for_Computer_Vision.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day17-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={32} />
                <h1 className="text-3xl font-bold">Learning Document</h1>
              </div>
              <p className="text-indigo-100 text-lg">Day 17 - Week 4, Day 2</p>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🎯 Convolutional Neural Networks (CNNs) for Computer Vision
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive guide to convolutional neural networks (cnns) for computer vision, covering fundamental concepts, 
                  practical implementations, and best practices for real-world applications.
                </p>
              </div>
              <div className="space-y-8">
                
                <Section number="1" title="Introduction to CNNs">
                  <p className="text-gray-700 mb-4">
                    Why CNNs for images?
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Introduction to CNNs\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 17 - Introduction to CNNs')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Introduction to CNNs</li>
                    <li>Key concept 2 for Introduction to CNNs</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="2" title="Convolutional Layers">
                  <p className="text-gray-700 mb-4">
                    Filters, feature maps, receptive fields
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Convolutional Layers\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 17 - Convolutional Layers')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Convolutional Layers</li>
                    <li>Key concept 2 for Convolutional Layers</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="3" title="Pooling Layers">
                  <p className="text-gray-700 mb-4">
                    Max pooling, average pooling, downsampling
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Pooling Layers\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 17 - Pooling Layers')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Pooling Layers</li>
                    <li>Key concept 2 for Pooling Layers</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="4" title="CNN Architecture Patterns">
                  <p className="text-gray-700 mb-4">
                    Conv-Pool-Conv-Pool-Dense
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for CNN Architecture Patterns\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 17 - CNN Architecture Patterns')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for CNN Architecture Patterns</li>
                    <li>Key concept 2 for CNN Architecture Patterns</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="5" title="Famous CNN Architectures">
                  <p className="text-gray-700 mb-4">
                    LeNet, AlexNet, VGG, ResNet
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Famous CNN Architectures\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 17 - Famous CNN Architectures')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Famous CNN Architectures</li>
                    <li>Key concept 2 for Famous CNN Architectures</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="6" title="Data Augmentation">
                  <p className="text-gray-700 mb-4">
                    Rotation, flip, zoom for better generalization
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Data Augmentation\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 17 - Data Augmentation')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Data Augmentation</li>
                    <li>Key concept 2 for Data Augmentation</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>
                <Section number="7" title="Building CNNs in Keras">
                  <p className="text-gray-700 mb-4">
                    Conv2D, MaxPooling2D, Flatten, Dense
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Code examples for Building CNNs in Keras\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\n\n# Implementation code here\nprint('Day 17 - Building CNNs in Keras')`}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for Building CNNs in Keras</li>
                    <li>Key concept 2 for Building CNNs in Keras</li>
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

export default Day17LearningDoc;
