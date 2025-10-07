import React from 'react';
import { BookOpen, Target, Lightbulb, ExternalLink } from 'lucide-react';
import { SectionProps } from './src/types';
import PDFExportButton from './src/components/PDFExportButton';

const Day5LearningDoc = () => {
  return (
    <>
      <PDFExportButton 
        elementId="day5-learning-card" 
        filename="Day5_Learning_Pandas.pdf" 
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div id="day5-learning-card" className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden" style={{padding: '10px', backgroundColor: 'transparent'}}>
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={32} />
            <h1 className="text-3xl font-bold">Learning File (Handout)</h1>
          </div>
          <p className="text-blue-100 text-lg">Day 5 - Week 1, Day 5</p>
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
                  Master Pandas library for data manipulation and analysis. Learn to work with DataFrames, 
                  perform data cleaning, filtering, grouping, and transformation operations essential for 
                  real-world data science projects.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section number="1" title="Introduction to Pandas">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Pandas = Panel Data - powerful data analysis library built on NumPy.</li>
                <li>Two main data structures: <strong>Series</strong> (1D) and <strong>DataFrame</strong> (2D).</li>
                <li>Handles missing data, time series, and heterogeneous data types.</li>
                <li>Industry standard for data manipulation in Python.</li>
                <li>Provides SQL-like operations, Excel-like functionality in code.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`import pandas as pd
import numpy as np

# Check version
print(pd.__version__)

# Create a simple Series
s = pd.Series([1, 3, 5, 7, 9])
print(s)

# Create a DataFrame
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['NYC', 'LA', 'Chicago']
})
print(df)`}</pre>
              </div>
            </Section>

            <Section number="2" title="Creating DataFrames">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>From dictionaries, lists, NumPy arrays, or CSV files.</li>
                <li>Columns can have different data types.</li>
                <li>Index provides row labels (default: 0, 1, 2...).</li>
                <li>Can specify custom index and column names.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# From dictionary
data = {
    'Product': ['Laptop', 'Phone', 'Tablet'],
    'Price': [1200, 800, 500],
    'Stock': [15, 30, 25]
}
df = pd.DataFrame(data)

# From list of lists
data = [
    ['Alice', 25, 'NYC'],
    ['Bob', 30, 'LA'],
    ['Charlie', 35, 'Chicago']
]
df = pd.DataFrame(data, columns=['Name', 'Age', 'City'])

# From CSV file
df = pd.read_csv('data.csv')

# From Excel
df = pd.read_excel('data.xlsx')

# With custom index
df = pd.DataFrame(data, index=['A', 'B', 'C'])`}</pre>
              </div>
            </Section>

            <Section number="3" title="Exploring DataFrames">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><code className="bg-gray-100 px-1 rounded">head()</code> / <code className="bg-gray-100 px-1 rounded">tail()</code> - view first/last rows.</li>
                <li><code className="bg-gray-100 px-1 rounded">info()</code> - get column types and non-null counts.</li>
                <li><code className="bg-gray-100 px-1 rounded">describe()</code> - statistical summary.</li>
                <li><code className="bg-gray-100 px-1 rounded">shape</code> - dimensions (rows, columns).</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# View data
print(df.head())       # First 5 rows
print(df.tail(3))      # Last 3 rows

# Basic info
print(df.shape)        # (rows, columns)
print(df.columns)      # Column names
print(df.index)        # Index
print(df.dtypes)       # Data types

# Summary statistics
print(df.describe())   # For numerical columns
print(df.info())       # Detailed info

# Quick checks
print(df.isnull().sum())  # Count missing values
print(df.nunique())       # Count unique values per column`}</pre>
              </div>
            </Section>

            <Section number="4" title="Selecting Data">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Select columns: <code className="bg-gray-100 px-1 rounded">df['column']</code> or <code className="bg-gray-100 px-1 rounded">df.column</code></li>
                <li>Select rows: <code className="bg-gray-100 px-1 rounded">loc[]</code> (by label) and <code className="bg-gray-100 px-1 rounded">iloc[]</code> (by position).</li>
                <li>Boolean indexing for filtering.</li>
                <li>Multiple selection using lists.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Select single column
ages = df['Age']
# or
ages = df.Age

# Select multiple columns
subset = df[['Name', 'Age']]

# Select rows by position (iloc)
first_row = df.iloc[0]
first_three = df.iloc[0:3]
specific = df.iloc[[0, 2, 4]]

# Select by label (loc)
row = df.loc[0]
subset = df.loc[0:2, 'Name':'Age']

# Boolean indexing
adults = df[df['Age'] > 25]
ny_residents = df[df['City'] == 'NYC']

# Multiple conditions
young_ny = df[(df['Age'] < 30) & (df['City'] == 'NYC')]
ny_or_la = df[(df['City'] == 'NYC') | (df['City'] == 'LA')]`}</pre>
              </div>
            </Section>

            <Section number="5" title="Data Cleaning">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Handle missing values: <code className="bg-gray-100 px-1 rounded">dropna()</code>, <code className="bg-gray-100 px-1 rounded">fillna()</code></li>
                <li>Remove duplicates: <code className="bg-gray-100 px-1 rounded">drop_duplicates()</code></li>
                <li>Rename columns: <code className="bg-gray-100 px-1 rounded">rename()</code></li>
                <li>Change data types: <code className="bg-gray-100 px-1 rounded">astype()</code></li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Check for missing values
print(df.isnull().sum())

# Drop rows with any missing values
df_clean = df.dropna()

# Drop rows where all values are missing
df_clean = df.dropna(how='all')

# Fill missing values
df['Age'].fillna(df['Age'].mean(), inplace=True)
df['City'].fillna('Unknown', inplace=True)

# Remove duplicates
df_unique = df.drop_duplicates()

# Rename columns
df.rename(columns={'Name': 'Full_Name'}, inplace=True)

# Change data types
df['Age'] = df['Age'].astype(int)
df['Price'] = df['Price'].astype(float)`}</pre>
              </div>
            </Section>

            <Section number="6" title="Adding and Modifying Data">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Add new columns based on existing data.</li>
                <li>Modify existing columns.</li>
                <li>Drop columns or rows.</li>
                <li>Apply functions to columns.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Add new column
df['Age_Group'] = df['Age'].apply(lambda x: 'Young' if x < 30 else 'Adult')

# Based on conditions
df['Category'] = np.where(df['Price'] > 1000, 'Premium', 'Standard')

# Modify existing column
df['Price'] = df['Price'] * 1.1  # 10% increase

# Drop column
df.drop('Age_Group', axis=1, inplace=True)

# Drop row
df.drop(0, axis=0, inplace=True)

# Apply custom function
def categorize_age(age):
    if age < 25:
        return 'Young'
    elif age < 35:
        return 'Adult'
    else:
        return 'Senior'

df['Category'] = df['Age'].apply(categorize_age)`}</pre>
              </div>
            </Section>

            <Section number="7" title="Grouping and Aggregation">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><code className="bg-gray-100 px-1 rounded">groupby()</code> - group data by categories.</li>
                <li>Aggregate functions: <code className="bg-gray-100 px-1 rounded">sum()</code>, <code className="bg-gray-100 px-1 rounded">mean()</code>, <code className="bg-gray-100 px-1 rounded">count()</code>, <code className="bg-gray-100 px-1 rounded">max()</code>, <code className="bg-gray-100 px-1 rounded">min()</code></li>
                <li>Multiple aggregations simultaneously.</li>
                <li>Similar to SQL GROUP BY operations.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Group by single column
city_groups = df.groupby('City')

# Calculate mean for each group
avg_age = df.groupby('City')['Age'].mean()

# Multiple aggregations
summary = df.groupby('City').agg({
    'Age': ['mean', 'min', 'max'],
    'Price': ['sum', 'mean']
})

# Count by category
counts = df.groupby('City').size()

# Group by multiple columns
multi_group = df.groupby(['City', 'Category'])['Price'].sum()`}</pre>
              </div>
            </Section>

            <Section number="8" title="Sorting and Ranking">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><code className="bg-gray-100 px-1 rounded">sort_values()</code> - sort by column values.</li>
                <li><code className="bg-gray-100 px-1 rounded">sort_index()</code> - sort by index.</li>
                <li>Ascending or descending order.</li>
                <li>Sort by multiple columns.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Sort by single column
df_sorted = df.sort_values('Age')

# Descending order
df_sorted = df.sort_values('Age', ascending=False)

# Sort by multiple columns
df_sorted = df.sort_values(['City', 'Age'])

# Sort by index
df_sorted = df.sort_index()`}</pre>
              </div>
            </Section>

            <Section number="9" title="Learning Resources">
              <div className="space-y-2 ml-4">
                <a href="https://pandas.pydata.org/docs/user_guide/10min.html" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Pandas Official - 10 Minutes to Pandas</span>
                </a>
                <a href="https://www.w3schools.com/python/pandas/" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>W3Schools - Pandas Tutorial</span>
                </a>
                <a href="https://www.kaggle.com/learn/pandas" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Kaggle Learn - Pandas Course</span>
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
                  Interns will be proficient in Pandas for data manipulation, cleaning, and analysis. 
                  These skills are crucial for every data science project—from initial data exploration 
                  to preparing datasets for machine learning models.
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

export default Day5LearningDoc;

