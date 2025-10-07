import React from 'react';
import { BookOpen, Target, Lightbulb, ExternalLink } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';
import { SectionProps } from './src/types';

const Day1LearningDoc = () => {
  return (
    <>
      <PDFExportButton 
        elementId="day1-learning-card" 
        filename="Day1_Learning_DataScience_Intro.pdf" 
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div id="day1-learning-card" className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden" style={{padding: '10px', backgroundColor: 'transparent'}}>
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">{/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={32} />
            <h1 className="text-3xl font-bold">Learning File (Handout)</h1>
          </div>
          <p className="text-blue-100 text-lg">Day 1 - Week 1, Day 1</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Objective */}
          <div className="mb-8 bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
            <div className="flex items-start gap-3">
              <Target className="text-indigo-600 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Objective:</h2>
                <p className="text-gray-700 leading-relaxed">
                  Understand the complete data science workflow, set up Python development environment, 
                  and learn the fundamental steps involved in transforming raw data into actionable insights.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section number="1" title="What is Data Science?">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Data Science is an interdisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge from data.</li>
                <li>Combines: Statistics, Programming, Domain Knowledge, and Communication.</li>
                <li>Goal: Turn data into insights that drive decision-making.</li>
                <li>Example: Netflix uses data science to recommend shows based on viewing patterns.</li>
              </ul>
            </Section>

            <Section number="2" title="The Data Science Workflow">
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Step 1: Problem Definition</h4>
                  <p className="text-gray-700">Clearly define the business problem or research question.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Step 2: Data Collection</h4>
                  <p className="text-gray-700">Gather relevant data from databases, APIs, web scraping, or surveys.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Step 3: Data Cleaning</h4>
                  <p className="text-gray-700">Handle missing values, remove duplicates, fix inconsistencies.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Step 4: Exploratory Data Analysis (EDA)</h4>
                  <p className="text-gray-700">Visualize and understand patterns, distributions, and relationships.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Step 5: Feature Engineering</h4>
                  <p className="text-gray-700">Create new features or transform existing ones to improve model performance.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Step 6: Model Building</h4>
                  <p className="text-gray-700">Select and train machine learning algorithms.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Step 7: Model Evaluation</h4>
                  <p className="text-gray-700">Test model performance using appropriate metrics.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Step 8: Deployment & Monitoring</h4>
                  <p className="text-gray-700">Deploy model to production and continuously monitor performance.</p>
                </div>
              </div>
            </Section>

            <Section number="3" title="Why Python for Data Science?">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Easy to Learn:</strong> Simple syntax, readable code.</li>
                <li><strong>Rich Libraries:</strong> NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow.</li>
                <li><strong>Community Support:</strong> Extensive documentation and active community.</li>
                <li><strong>Versatile:</strong> Used for data analysis, machine learning, web development, automation.</li>
                <li><strong>Industry Standard:</strong> Most widely used language in data science.</li>
              </ul>
            </Section>

            <Section number="4" title="Setting Up Python Environment">
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Option 1: Google Colab (Recommended for Beginners)</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>No installation needed - runs in browser</li>
                    <li>Free GPU/TPU access</li>
                    <li>Easy sharing and collaboration</li>
                    <li>Visit: <a href="https://colab.research.google.com" className="text-indigo-600">colab.research.google.com</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Option 2: Local Installation</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Install Anaconda (includes Python + libraries)</li>
                    <li>Download from: anaconda.com</li>
                    <li>Includes Jupyter Notebook for interactive coding</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section number="5" title="Introduction to Jupyter Notebooks">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Interactive environment for writing and running Python code.</li>
                <li>Combines code, text, visualizations, and equations in one document.</li>
                <li>Cells can be <strong>Code</strong> (executable) or <strong>Markdown</strong> (text/documentation).</li>
                <li>Execute cells with: Shift + Enter</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# First Python Code
print("Hello, Data Science!")

# Simple calculation
x = 10
y = 20
print(f"Sum: {x + y}")`}</pre>
              </div>
            </Section>

            <Section number="6" title="Essential Python Libraries Overview">
              <div className="space-y-3 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800">NumPy:</h4>
                  <p className="text-gray-700">Numerical computing, arrays, mathematical operations.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Pandas:</h4>
                  <p className="text-gray-700">Data manipulation and analysis using DataFrames.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Matplotlib:</h4>
                  <p className="text-gray-700">Data visualization, creating plots and charts.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Seaborn:</h4>
                  <p className="text-gray-700">Statistical data visualization built on Matplotlib.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Scikit-learn:</h4>
                  <p className="text-gray-700">Machine learning algorithms and tools.</p>
                </div>
              </div>
            </Section>

            <Section number="7" title="First Steps: Importing Libraries">
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre className="text-gray-800">{`# Standard imports for data science
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Check versions
print(f"NumPy: {np.__version__}")
print(f"Pandas: {pd.__version__}")`}</pre>
              </div>
            </Section>

            <Section number="8" title="Learning Resources">
              <div className="space-y-2 ml-4">
                <a href="https://www.python.org/about/gettingstarted/" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Python Official Getting Started Guide</span>
                </a>
                <a href="https://colab.research.google.com/notebooks/welcome.ipynb" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Google Colab Tutorial</span>
                </a>
                <a href="https://www.kaggle.com/learn" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Kaggle Learn - Free Data Science Courses</span>
                </a>
              </div>
            </Section>
          </div>

          {/* Outcome */}
          <div className="mt-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <div className="flex items-start gap-3">
              <Lightbulb className="text-green-600 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Outcome:</h2>
                <p className="text-gray-700 leading-relaxed">
                  Interns will understand the complete data science workflow and have a functional 
                  Python environment ready for hands-on practice. They will be familiar with the 
                  tools and processes used throughout their data science journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center text-gray-600">
          <p className="text-sm">DeepVisionAI Internship Program</p>
          <p className="text-xs mt-1">Week 1 - Grass Root & Foundations</p>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

const Section: React.FC<SectionProps> = ({ number, title, children }) => {
  return (
    <div className="border-l-2 border-indigo-200 pl-6 py-2">
      <h3 className="text-lg font-bold text-gray-800 mb-3">
        {number}. {title}
      </h3>
      {children}
    </div>
  );
};

export default Day1LearningDoc;