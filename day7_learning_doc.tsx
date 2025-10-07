import React from 'react';
import { BookOpen, Target, Lightbulb, ExternalLink } from 'lucide-react';
import { SectionProps } from './src/types';
import PDFExportButton from './src/components/PDFExportButton';

const Day7LearningDoc = () => {
  return (
    <>
      <PDFExportButton 
        elementId="day7-learning-card" 
        filename="Day7_Learning_EDA.pdf" 
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div id="day7-learning-card" className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden" style={{padding: '10px', backgroundColor: 'transparent'}}>
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={32} />
            <h1 className="text-3xl font-bold">Learning File (Handout)</h1>
          </div>
          <p className="text-blue-100 text-lg">Day 7 - Week 2, Day 2</p>
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
                  Master Exploratory Data Analysis (EDA) techniques to understand datasets thoroughly. Learn to 
                  clean data, handle missing values, detect outliers, and uncover patterns before modeling.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section number="1" title="What is Exploratory Data Analysis?">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Initial investigation of data to discover patterns and anomalies.</li>
                <li>Test hypotheses and check assumptions before formal modeling.</li>
                <li>Understand data structure, relationships, and distributions.</li>
                <li>Critical first step in any data science project.</li>
                <li>Often reveals insights that guide entire analysis strategy.</li>
              </ul>
            </Section>

            <Section number="2" title="Loading and Initial Exploration">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Load dataset and examine first/last rows.</li>
                <li>Check shape (rows and columns).</li>
                <li>Understand data types of each column.</li>
                <li>Get summary statistics.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`import pandas as pd
import numpy as np

# Load data
df = pd.read_csv('dataset.csv')

# Basic exploration
print(df.head())          # First 5 rows
print(df.tail())          # Last 5 rows
print(df.shape)           # (rows, columns)
print(df.info())          # Data types and non-null counts
print(df.describe())      # Statistical summary
print(df.columns.tolist()) # Column names`}</pre>
              </div>
            </Section>

            <Section number="3" title="Handling Missing Values">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Identify missing data patterns.</li>
                <li>Decide strategy: drop, fill, or impute.</li>
                <li>Different approaches for numeric vs categorical data.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Check for missing values
print(df.isnull().sum())
print(df.isnull().sum() / len(df) * 100)  # Percentage

# Drop rows with any missing values
df_clean = df.dropna()

# Drop columns with > 50% missing
threshold = 0.5
df_clean = df.dropna(thresh=int(threshold * len(df)), axis=1)

# Fill missing values
df['age'].fillna(df['age'].mean(), inplace=True)    # Mean
df['category'].fillna(df['category'].mode()[0], inplace=True)  # Mode
df.fillna(method='ffill', inplace=True)  # Forward fill`}</pre>
              </div>
            </Section>

            <Section number="4" title="Detecting and Handling Outliers">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Outliers can skew analysis and model performance.</li>
                <li>Use visualization and statistical methods to detect.</li>
                <li>Decide whether to remove, cap, or transform.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Using IQR (Interquartile Range) method
Q1 = df['price'].quantile(0.25)
Q3 = df['price'].quantile(0.75)
IQR = Q3 - Q1

# Define outlier boundaries
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

# Filter outliers
df_no_outliers = df[(df['price'] >= lower_bound) & 
                     (df['price'] <= upper_bound)]

# Or cap outliers instead of removing
df['price'] = df['price'].clip(lower_bound, upper_bound)`}</pre>
              </div>
            </Section>

            <Section number="5" title="Data Type Conversion">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Ensure each column has appropriate data type.</li>
                <li>Convert strings to datetime, categories, or numeric.</li>
                <li>Optimize memory usage with correct types.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Convert to datetime
df['date'] = pd.to_datetime(df['date'])

# Convert to category (saves memory)
df['category'] = df['category'].astype('category')

# Convert string to numeric (coerce errors to NaN)
df['price'] = pd.to_numeric(df['price'], errors='coerce')

# Convert boolean
df['is_active'] = df['is_active'].astype(bool)`}</pre>
              </div>
            </Section>

            <Section number="6" title="Univariate Analysis">
              <p className="text-gray-700 ml-4 mb-3">
                Analyze each variable individually to understand distributions:
              </p>
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Numeric Variables:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Histograms for distribution</li>
                    <li>Box plots for spread and outliers</li>
                    <li>Summary statistics (mean, median, std, etc.)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Categorical Variables:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Value counts and frequencies</li>
                    <li>Bar charts for category comparison</li>
                    <li>Pie charts for proportions</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Numeric analysis
df['age'].describe()
df['age'].hist(bins=20)
df.boxplot(column='age')

# Categorical analysis
df['category'].value_counts()
df['category'].value_counts().plot(kind='bar')`}</pre>
              </div>
            </Section>

            <Section number="7" title="Bivariate Analysis">
              <p className="text-gray-700 ml-4 mb-3">
                Examine relationships between pairs of variables:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Numeric vs Numeric:</strong> Scatter plots, correlation coefficients</li>
                <li><strong>Categorical vs Numeric:</strong> Box plots by category, grouped statistics</li>
                <li><strong>Categorical vs Categorical:</strong> Cross-tabulation, stacked bar charts</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Numeric vs Numeric
df.plot(x='age', y='income', kind='scatter')
correlation = df['age'].corr(df['income'])

# Categorical vs Numeric
df.groupby('category')['price'].mean()
df.boxplot(column='price', by='category')

# Categorical vs Categorical
pd.crosstab(df['category'], df['region'])
pd.crosstab(df['category'], df['region']).plot(kind='bar', stacked=True)`}</pre>
              </div>
            </Section>

            <Section number="8" title="Correlation Analysis">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Measure strength and direction of relationships.</li>
                <li>Correlation coefficient ranges from -1 to +1.</li>
                <li>Visualize with heatmaps for multiple variables.</li>
                <li>Remember: correlation ≠ causation!</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`import seaborn as sns
import matplotlib.pyplot as plt

# Correlation matrix
corr_matrix = df.corr()
print(corr_matrix)

# Heatmap visualization
plt.figure(figsize=(10, 8))
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', 
            center=0, vmin=-1, vmax=1)
plt.title('Correlation Heatmap')
plt.show()`}</pre>
              </div>
            </Section>

            <Section number="9" title="Feature Engineering Basics">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Create new features from existing ones.</li>
                <li>Extract information from dates (year, month, day, weekday).</li>
                <li>Bin continuous variables into categories.</li>
                <li>Combine multiple columns into new meaningful features.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Extract from datetime
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.dayofweek

# Binning
df['age_group'] = pd.cut(df['age'], 
                         bins=[0, 18, 35, 60, 100],
                         labels=['Child', 'Young Adult', 'Adult', 'Senior'])

# Creating new features
df['bmi'] = df['weight'] / (df['height'] ** 2)
df['total_score'] = df['score1'] + df['score2'] + df['score3']`}</pre>
              </div>
            </Section>

            <Section number="10" title="Learning Resources">
              <div className="space-y-2 ml-4">
                <a href="https://www.kaggle.com/learn/data-cleaning" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Kaggle - Data Cleaning Course</span>
                </a>
                <a href="https://pandas.pydata.org/docs/user_guide/missing_data.html" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Pandas - Working with Missing Data</span>
                </a>
                <a href="https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Towards Data Science - EDA Guide</span>
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
                  Interns will conduct thorough exploratory data analysis, clean messy datasets, and extract 
                  meaningful insights. EDA is the foundation of all data science work—understanding your data 
                  deeply ensures better models and more reliable conclusions.
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

export default Day7LearningDoc;
