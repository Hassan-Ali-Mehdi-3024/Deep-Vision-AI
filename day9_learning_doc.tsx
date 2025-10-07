import React from 'react';
import { BookOpen, Target, Lightbulb, ExternalLink } from 'lucide-react';
import { SectionProps } from './src/types';
import PDFExportButton from './src/components/PDFExportButton';

const Day9LearningDoc = () => {
  return (
    <>
      <PDFExportButton 
        elementId="day9-learning-card" 
        filename="Day9_Learning_ML_Intro.pdf" 
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div id="day9-learning-card" className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden" style={{padding: '10px', backgroundColor: 'transparent'}}>
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={32} />
            <h1 className="text-3xl font-bold">Learning File (Handout)</h1>
          </div>
          <p className="text-blue-100 text-lg">Day 9 - Week 2, Day 4</p>
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
                  Learn foundational machine learning concepts and introduction to scikit-learn. Understand 
                  the ML workflow, types of learning, and prepare data for modeling with feature engineering 
                  and preprocessing.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section number="1" title="What is Machine Learning?">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Teaching computers to learn patterns from data without explicit programming.</li>
                <li>Models improve automatically through experience.</li>
                <li>Used for predictions, classifications, clustering, and recommendations.</li>
                <li>Powers modern AI applications: image recognition, voice assistants, recommendations.</li>
              </ul>
            </Section>

            <Section number="2" title="Types of Machine Learning">
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Supervised Learning:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Learn from labeled data (input-output pairs).</li>
                    <li><strong>Classification:</strong> Predict categories (spam/not spam, dog/cat).</li>
                    <li><strong>Regression:</strong> Predict continuous values (house prices, temperature).</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Unsupervised Learning:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Find patterns in unlabeled data.</li>
                    <li><strong>Clustering:</strong> Group similar items (customer segmentation).</li>
                    <li><strong>Dimensionality Reduction:</strong> Simplify data while preserving information.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Reinforcement Learning:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Learn through trial and error with rewards/penalties.</li>
                    <li>Used in game AI, robotics, autonomous vehicles.</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section number="3" title="Machine Learning Workflow">
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Problem Definition:</strong> Clearly define what you want to predict.</li>
                <li><strong>Data Collection:</strong> Gather relevant, quality data.</li>
                <li><strong>Data Exploration (EDA):</strong> Understand patterns, distributions, relationships.</li>
                <li><strong>Data Preprocessing:</strong> Clean, transform, and prepare data.</li>
                <li><strong>Feature Engineering:</strong> Create meaningful features from raw data.</li>
                <li><strong>Model Selection:</strong> Choose appropriate algorithm(s).</li>
                <li><strong>Training:</strong> Fit model to training data.</li>
                <li><strong>Evaluation:</strong> Assess model performance on test data.</li>
                <li><strong>Tuning:</strong> Optimize hyperparameters for better performance.</li>
                <li><strong>Deployment:</strong> Put model into production for real-world use.</li>
              </ol>
            </Section>

            <Section number="4" title="Introduction to scikit-learn">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Most popular Python library for machine learning.</li>
                <li>Simple and consistent API across all algorithms.</li>
                <li>Built on NumPy, SciPy, and Matplotlib.</li>
                <li>Includes classification, regression, clustering, and preprocessing tools.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Basic scikit-learn workflow
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# 1. Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 2. Create model
model = LinearRegression()

# 3. Train model
model.fit(X_train, y_train)

# 4. Make predictions
y_pred = model.predict(X_test)

# 5. Evaluate
mse = mean_squared_error(y_test, y_pred)
print(f"Mean Squared Error: {mse}")`}</pre>
              </div>
            </Section>

            <Section number="5" title="Train-Test Split">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Never test on data you trained on—leads to overfitting.</li>
                <li>Typical split: 70-80% training, 20-30% testing.</li>
                <li>Training set: Learn patterns.</li>
                <li>Test set: Evaluate performance on unseen data.</li>
                <li>Always set random_state for reproducibility.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, 
    test_size=0.2,      # 20% for testing
    random_state=42,    # Reproducibility
    stratify=y          # Maintain class proportions (classification)
)`}</pre>
              </div>
            </Section>

            <Section number="6" title="Feature Scaling">
              <p className="text-gray-700 ml-4 mb-3">
                Many ML algorithms perform better when features are on similar scales:
              </p>
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Standardization (Z-score normalization):</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Mean = 0, Standard Deviation = 1</li>
                    <li>Formula: (x - mean) / std</li>
                    <li>Best for algorithms assuming normal distribution.</li>
                  </ul>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>from sklearn.preprocessing import StandardScaler</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Min-Max Normalization:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Scale to range [0, 1]</li>
                    <li>Formula: (x - min) / (max - min)</li>
                    <li>Best when you need bounded range.</li>
                  </ul>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>from sklearn.preprocessing import MinMaxScaler</code>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()

# Fit on training data only
scaler.fit(X_train)

# Transform both training and test data
X_train_scaled = scaler.transform(X_train)
X_test_scaled = scaler.transform(X_test)`}</pre>
              </div>
            </Section>

            <Section number="7" title="Encoding Categorical Variables">
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Label Encoding:</h4>
                  <p className="text-gray-700">Convert categories to numbers (0, 1, 2...).</p>
                  <p className="text-gray-700 text-sm italic">Use for ordinal data or target variable.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>from sklearn.preprocessing import LabelEncoder</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">One-Hot Encoding:</h4>
                  <p className="text-gray-700">Create binary column for each category.</p>
                  <p className="text-gray-700 text-sm italic">Use for nominal (unordered) categorical features.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>pd.get_dummies() or OneHotEncoder</code>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`import pandas as pd

# One-hot encoding with pandas
df_encoded = pd.get_dummies(df, columns=['category', 'color'])

# Or using sklearn
from sklearn.preprocessing import OneHotEncoder
encoder = OneHotEncoder(sparse=False)
encoded_features = encoder.fit_transform(df[['category']])`}</pre>
              </div>
            </Section>

            <Section number="8" title="Handling Missing Values in ML">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Most ML algorithms cannot handle missing values.</li>
                <li>Options: Drop rows/columns, fill with statistics, or impute.</li>
                <li>SimpleImputer from scikit-learn automates imputation.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`from sklearn.impute import SimpleImputer

# Impute with mean
imputer = SimpleImputer(strategy='mean')
X_train_imputed = imputer.fit_transform(X_train)
X_test_imputed = imputer.transform(X_test)

# Other strategies: 'median', 'most_frequent', 'constant'`}</pre>
              </div>
            </Section>

            <Section number="9" title="Feature Engineering Basics">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Creating new features from existing ones to improve model performance.</li>
                <li>Domain knowledge is crucial.</li>
                <li>Examples: ratios, combinations, polynomial features, date extractions.</li>
                <li>Often makes bigger impact than algorithm choice.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Examples of feature engineering
df['price_per_sqft'] = df['price'] / df['sqft']
df['age'] = 2024 - df['year_built']
df['total_rooms'] = df['bedrooms'] + df['bathrooms']

# Polynomial features
from sklearn.preprocessing import PolynomialFeatures
poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)`}</pre>
              </div>
            </Section>

            <Section number="10" title="Learning Resources">
              <div className="space-y-2 ml-4">
                <a href="https://scikit-learn.org/stable/tutorial/index.html" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Scikit-learn Official Tutorial</span>
                </a>
                <a href="https://www.kaggle.com/learn/intro-to-machine-learning" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Kaggle - Intro to Machine Learning</span>
                </a>
                <a href="https://www.coursera.org/learn/machine-learning" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Andrew Ng's Machine Learning Course</span>
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
                  Interns will understand ML fundamentals and prepare data for modeling. Proper data preprocessing 
                  and feature engineering are critical—they often determine model success more than algorithm choice. 
                  This foundation prepares you for building your first ML models.
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

export default Day9LearningDoc;
