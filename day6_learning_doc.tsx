import React from 'react';
import { BookOpen, Target, Lightbulb, ExternalLink } from 'lucide-react';
import { SectionProps } from './src/types';
import PDFExportButton from './src/components/PDFExportButton';

const Day6LearningDoc = () => {
  return (
    <>
      <PDFExportButton 
        elementId="day6-learning-card" 
        filename="Day6_Learning_Data_Visualization.pdf" 
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div id="day6-learning-card" className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden" style={{padding: '10px', backgroundColor: 'transparent'}}>
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={32} />
            <h1 className="text-3xl font-bold">Learning File (Handout)</h1>
          </div>
          <p className="text-blue-100 text-lg">Day 6 - Week 2, Day 1</p>
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
                  Learn data visualization using Matplotlib and Seaborn. Master creating effective charts, 
                  plots, and graphs to communicate data insights visually. Understand principles of good 
                  visualization design.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section number="1" title="Why Data Visualization?">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Makes complex data easier to understand at a glance.</li>
                <li>Reveals patterns, trends, and outliers that numbers alone don't show.</li>
                <li>Essential for communicating findings to stakeholders.</li>
                <li>Supports decision-making with visual evidence.</li>
                <li>"A picture is worth a thousand words" - especially true in data science.</li>
              </ul>
            </Section>

            <Section number="2" title="Introduction to Matplotlib">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Most fundamental plotting library in Python.</li>
                <li>Provides fine-grained control over every aspect of a figure.</li>
                <li>Two interfaces: pyplot (MATLAB-like) and object-oriented.</li>
                <li>Foundation for other visualization libraries like Seaborn.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`import matplotlib.pyplot as plt
import numpy as np

# Simple line plot
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

plt.plot(x, y)
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Simple Line Plot')
plt.grid(True)
plt.show()`}</pre>
              </div>
            </Section>

            <Section number="3" title="Common Plot Types">
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Line Plot:</h4>
                  <p className="text-gray-700">Show trends over time or continuous data.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>plt.plot(x, y, marker='o', linestyle='--', color='blue')</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Bar Chart:</h4>
                  <p className="text-gray-700">Compare categorical data.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>plt.bar(categories, values, color='green')</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Histogram:</h4>
                  <p className="text-gray-700">Show distribution of continuous data.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>plt.hist(data, bins=20, edgecolor='black')</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Scatter Plot:</h4>
                  <p className="text-gray-700">Show relationship between two variables.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>plt.scatter(x, y, alpha=0.5, s=50)</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Pie Chart:</h4>
                  <p className="text-gray-700">Show proportions of a whole.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>plt.pie(sizes, labels=labels, autopct='%1.1f%%')</code>
                  </div>
                </div>
              </div>
            </Section>

            <Section number="4" title="Customizing Plots">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Colors, markers, line styles, and sizes.</li>
                <li>Labels, titles, legends, and annotations.</li>
                <li>Grid lines, axis limits, and ticks.</li>
                <li>Figure size and resolution.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Customized plot
plt.figure(figsize=(10, 6))
plt.plot(x, y, color='red', linewidth=2, marker='o', 
         markersize=8, label='Data')
plt.xlabel('Time', fontsize=12)
plt.ylabel('Value', fontsize=12)
plt.title('Customized Plot', fontsize=14, fontweight='bold')
plt.legend()
plt.grid(True, alpha=0.3)
plt.xlim(0, 6)
plt.ylim(0, 12)
plt.show()`}</pre>
              </div>
            </Section>

            <Section number="5" title="Subplots - Multiple Plots">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Create multiple plots in a single figure.</li>
                <li>Organize plots in rows and columns.</li>
                <li>Share axes for better comparison.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Create 2x2 grid of subplots
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Plot 1: Line plot
axes[0, 0].plot(x, y)
axes[0, 0].set_title('Line Plot')

# Plot 2: Bar chart
axes[0, 1].bar(categories, values)
axes[0, 1].set_title('Bar Chart')

# Plot 3: Scatter plot
axes[1, 0].scatter(x, y)
axes[1, 0].set_title('Scatter Plot')

# Plot 4: Histogram
axes[1, 1].hist(data, bins=20)
axes[1, 1].set_title('Histogram')

plt.tight_layout()  # Prevent overlapping
plt.show()`}</pre>
              </div>
            </Section>

            <Section number="6" title="Introduction to Seaborn">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Built on top of Matplotlib for statistical visualizations.</li>
                <li>More attractive default styles and color palettes.</li>
                <li>Better integration with Pandas DataFrames.</li>
                <li>Simplified syntax for complex plots.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`import seaborn as sns

# Set style
sns.set_style('whitegrid')

# Load sample dataset
tips = sns.load_dataset('tips')

# Count plot
sns.countplot(data=tips, x='day')
plt.title('Count by Day')
plt.show()

# Box plot
sns.boxplot(data=tips, x='day', y='total_bill')
plt.title('Total Bill by Day')
plt.show()`}</pre>
              </div>
            </Section>

            <Section number="7" title="Advanced Seaborn Plots">
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Violin Plot:</h4>
                  <p className="text-gray-700">Combines box plot with distribution.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>sns.violinplot(data=df, x='category', y='value')</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Heatmap:</h4>
                  <p className="text-gray-700">Visualize matrix data with colors.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm')</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Pair Plot:</h4>
                  <p className="text-gray-700">Show relationships between all numeric variables.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>sns.pairplot(df, hue='category')</code>
                  </div>
                </div>
              </div>
            </Section>

            <Section number="8" title="Best Practices">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Choose appropriate chart type</strong> for your data and message.</li>
                <li><strong>Use clear labels</strong> - axis labels, titles, legends.</li>
                <li><strong>Keep it simple</strong> - avoid chartjunk and unnecessary elements.</li>
                <li><strong>Use color purposefully</strong> - consider colorblind-friendly palettes.</li>
                <li><strong>Show the data</strong> - don't hide important information.</li>
                <li><strong>Maintain proper aspect ratios</strong> - don't distort visualizations.</li>
              </ul>
            </Section>

            <Section number="9" title="Learning Resources">
              <div className="space-y-2 ml-4">
                <a href="https://matplotlib.org/stable/tutorials/index.html" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Matplotlib Official Tutorials</span>
                </a>
                <a href="https://seaborn.pydata.org/tutorial.html" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Seaborn Tutorial</span>
                </a>
                <a href="https://www.kaggle.com/learn/data-visualization" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Kaggle - Data Visualization Course</span>
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
                  Interns will create effective data visualizations to explore, analyze, and communicate 
                  insights. Visualization skills are essential for data exploration, presentations, and 
                  sharing findings with technical and non-technical audiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center text-gray-600">
          <p className="text-sm">DeepVisionAI Internship Program</p>
          <p className="text-xs mt-1">Week 2 - Data Exploration & Analysis</p>
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

export default Day6LearningDoc;

