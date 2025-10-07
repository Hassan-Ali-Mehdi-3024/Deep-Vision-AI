import React from 'react';
import { BookOpen, Target, Lightbulb, ExternalLink } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';
import { SectionProps } from './src/types';

const Day11LearningDoc = () => {
  return (
    <>
      <PDFExportButton 
        elementId="day11-learning-card" 
        filename="Day11_Learning_Supervised_Regression.pdf" 
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div id="day11-learning-card" className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden" style={{padding: '10px', backgroundColor: 'transparent'}}>
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={32} />
            <h1 className="text-3xl font-bold">Learning File (Handout)</h1>
          </div>
          <p className="text-blue-100 text-lg">Day 11 - Week 3, Day 1</p>
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
                  Master supervised learning regression algorithms including Linear Regression, Polynomial Regression, 
                  Ridge, and Lasso. Understand when to use each algorithm, regularization techniques, and model evaluation metrics.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Section number="1" title="Introduction to Supervised Learning">
              <p className="text-gray-700 mb-4">
                Supervised learning uses labeled training data to learn a mapping function from inputs to outputs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Regression:</strong> Predicts continuous numerical values (price, temperature, stock value)</li>
                <li><strong>Classification:</strong> Predicts discrete categories (spam/not spam, disease diagnosis)</li>
                <li><strong>Training Data:</strong> Features (X) and corresponding labels (y)</li>
                <li><strong>Goal:</strong> Minimize the difference between predictions and actual values</li>
              </ul>
            </Section>

            <Section number="2" title="Linear Regression">
              <p className="text-gray-700 mb-4">
                The simplest regression algorithm that models the relationship between variables using a straight line.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <p className="font-semibold text-gray-800 mb-2">Equation:</p>
                <code className="text-sm">y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ</code>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>β₀ = intercept (bias term)</li>
                <li>β₁, β₂, ..., βₙ = coefficients (weights)</li>
                <li>Uses Ordinary Least Squares (OLS) to minimize error</li>
                <li>Assumptions: linearity, independence, homoscedasticity, normality</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg my-4 font-mono text-sm">
<pre>{`from sklearn.linear_model import LinearRegression

# Create and train model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)

# Get coefficients
print(f"Intercept: {model.intercept_}")
print(f"Coefficients: {model.coef_}")`}</pre>
              </div>
            </Section>

            <Section number="3" title="Polynomial Regression">
              <p className="text-gray-700 mb-4">
                Extends linear regression by adding polynomial features to capture non-linear relationships.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <p className="font-semibold text-gray-800 mb-2">Equation (degree 2):</p>
                <code className="text-sm">y = β₀ + β₁x + β₂x²</code>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Degree: highest power of the polynomial (2, 3, 4, etc.)</li>
                <li>Higher degrees can fit complex patterns but risk overfitting</li>
                <li>Use cross-validation to select optimal degree</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg my-4 font-mono text-sm">
<pre>{`from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# Create polynomial features
poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

# Train model
model = LinearRegression()
model.fit(X_poly, y)

# Predict
X_test_poly = poly.transform(X_test)
predictions = model.predict(X_test_poly)`}</pre>
              </div>
            </Section>

            <Section number="4" title="Regularization: Ridge Regression (L2)">
              <p className="text-gray-700 mb-4">
                Adds L2 penalty to prevent overfitting by shrinking coefficients toward zero.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <p className="font-semibold text-gray-800 mb-2">Cost Function:</p>
                <code className="text-sm">Cost = MSE + α × Σ(βᵢ²)</code>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>α (alpha): regularization strength (higher = more penalty)</li>
                <li>All features retained but coefficients are shrunk</li>
                <li>Good when all features are potentially relevant</li>
                <li>Handles multicollinearity better than plain linear regression</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg my-4 font-mono text-sm">
<pre>{`from sklearn.linear_model import Ridge

# Create Ridge model
model = Ridge(alpha=1.0)  # Try 0.1, 1, 10, 100
model.fit(X_train, y_train)

# Predictions
predictions = model.predict(X_test)`}</pre>
              </div>
            </Section>

            <Section number="5" title="Regularization: Lasso Regression (L1)">
              <p className="text-gray-700 mb-4">
                Adds L1 penalty that can shrink some coefficients to exactly zero, performing feature selection.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <p className="font-semibold text-gray-800 mb-2">Cost Function:</p>
                <code className="text-sm">Cost = MSE + α × Σ|βᵢ|</code>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Automatic feature selection by zeroing out coefficients</li>
                <li>Produces sparse models (many zero coefficients)</li>
                <li>Good when you have many features but only some are important</li>
                <li>Easier to interpret than Ridge</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg my-4 font-mono text-sm">
<pre>{`from sklearn.linear_model import Lasso

# Create Lasso model
model = Lasso(alpha=1.0)
model.fit(X_train, y_train)

# Check which features were selected
print("Non-zero coefficients:", np.sum(model.coef_ != 0))
print("Coefficients:", model.coef_)`}</pre>
              </div>
            </Section>

            <Section number="6" title="Model Evaluation Metrics">
              <p className="text-gray-700 mb-4">
                Metrics to assess regression model performance:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>MAE (Mean Absolute Error):</strong> Average absolute difference. Easy to interpret, in same units as target.</li>
                <li><strong>MSE (Mean Squared Error):</strong> Average squared difference. Penalizes large errors more.</li>
                <li><strong>RMSE (Root Mean Squared Error):</strong> Square root of MSE. Same units as target.</li>
                <li><strong>R² Score:</strong> Proportion of variance explained (0 to 1). Higher is better.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg my-4 font-mono text-sm">
<pre>{`from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

# Calculate metrics
mae = mean_absolute_error(y_test, predictions)
mse = mean_squared_error(y_test, predictions)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, predictions)

print(f"MAE: {mae:.2f}")
print(f"MSE: {mse:.2f}")
print(f"RMSE: {rmse:.2f}")
print(f"R² Score: {r2:.3f}")`}</pre>
              </div>
            </Section>

            <Section number="7" title="Choosing the Right Algorithm">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <p className="font-semibold text-gray-800 mb-2">Decision Guide:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Linear Regression:</strong> Linear relationship, few features, interpretability important</li>
                  <li><strong>Polynomial Regression:</strong> Non-linear patterns, known degree of relationship</li>
                  <li><strong>Ridge:</strong> Many correlated features, prevent overfitting, keep all features</li>
                  <li><strong>Lasso:</strong> Many features, want automatic feature selection, sparse model</li>
                  <li><strong>ElasticNet:</strong> Combination of Ridge and Lasso (not covered today)</li>
                </ul>
              </div>
            </Section>
          </div>

          {/* Key Takeaways */}
          <div className="mt-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <Lightbulb className="text-green-600 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Key Takeaways:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Linear regression is the foundation of supervised learning</li>
                  <li>Polynomial features capture non-linear relationships</li>
                  <li>Regularization (Ridge/Lasso) prevents overfitting</li>
                  <li>Lasso performs automatic feature selection</li>
                  <li>Always validate models using appropriate metrics</li>
                  <li>Choose algorithm based on data characteristics and goals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <ExternalLink size={20} className="text-blue-600" />
              Next Steps & Resources
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>📚 Read: Scikit-learn Regression documentation</li>
              <li>🎯 Practice: Today's task - Multiple regression algorithms comparison</li>
              <li>🔗 Explore: Cross-validation techniques for model selection</li>
              <li>💡 Challenge: Implement regression from scratch using NumPy</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center text-gray-600">
          <p className="text-sm">DeepVisionAI Internship Program</p>
          <p className="text-xs mt-1">Week 3 - Machine Learning Foundations</p>
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

export default Day11LearningDoc;
