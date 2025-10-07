import React from 'react';
import { SectionProps } from './src/types';
import { BookOpen, Brain } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day12LearningDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day12-card" filename="Day12_Classification_Algorithms.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day12-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={32} />
                <h1 className="text-3xl font-bold">Learning Document</h1>
              </div>
              <p className="text-indigo-100 text-lg">Day 12 - Week 3, Day 2</p>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Overview */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🎯 Supervised Learning: Classification Algorithms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Classification predicts discrete categories or classes. Unlike regression (continuous values), classification assigns 
                  data points to specific groups. Today we'll explore Logistic Regression, Decision Trees, and Random Forest - three 
                  fundamental classification algorithms used extensively in machine learning.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-8">
                <Section number="1" title="Introduction to Classification">
                  <p className="text-gray-700 mb-4">
                    <strong>What is Classification?</strong><br />
                    Classification is a supervised learning task where the goal is to predict the categorical class label of new observations 
                    based on past observations.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Types of Classification:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>Binary Classification:</strong> Two classes (Yes/No, Spam/Not Spam, Disease/Healthy)</li>
                      <li><strong>Multiclass Classification:</strong> More than two classes (Low/Medium/High, Species A/B/C)</li>
                      <li><strong>Multilabel Classification:</strong> Multiple labels per instance (Movie genres: Action + Comedy + Drama)</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-3"><strong>Real-World Applications:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Email spam detection (spam vs not spam)</li>
                    <li>Medical diagnosis (disease presence/absence)</li>
                    <li>Credit risk assessment (approved/rejected)</li>
                    <li>Image recognition (cat, dog, bird, etc.)</li>
                    <li>Customer churn prediction (will leave/will stay)</li>
                    <li>Sentiment analysis (positive/negative/neutral)</li>
                  </ul>
                </Section>

                <Section number="2" title="Logistic Regression">
                  <p className="text-gray-700 mb-4">
                    Despite its name, Logistic Regression is a <strong>classification</strong> algorithm, not regression. It predicts 
                    the probability that an instance belongs to a particular class using the logistic (sigmoid) function.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Mathematical Foundation:</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Sigmoid Function:</strong> σ(z) = 1 / (1 + e^(-z))
                    </p>
                    <p className="text-gray-700 mb-2">
                      Where z = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ
                    </p>
                    <p className="text-gray-700">
                      Output range: 0 to 1 (interpreted as probability)
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Load dataset
iris = load_iris()
X, y = iris.data, iris.target

# Binary classification (setosa vs not setosa)
y_binary = (y == 0).astype(int)

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y_binary, test_size=0.2, random_state=42
)

# Create and train model
log_reg = LogisticRegression(random_state=42)
log_reg.fit(X_train, y_train)

# Make predictions
y_pred = log_reg.predict(X_test)
y_proba = log_reg.predict_proba(X_test)[:, 1]  # Probabilities

# Evaluate
print(f"Accuracy: {accuracy_score(y_test, y_pred):.3f}")
print("\\nClassification Report:")
print(classification_report(y_test, y_pred))`}</pre>
                  </div>
                  <p className="text-gray-700 mb-3"><strong>Key Characteristics:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>✅ Simple and interpretable coefficients</li>
                    <li>✅ Fast to train, efficient for large datasets</li>
                    <li>✅ Provides probability estimates</li>
                    <li>❌ Assumes linear decision boundary</li>
                    <li>❌ Struggles with complex non-linear relationships</li>
                  </ul>
                </Section>

                <Section number="3" title="Decision Trees">
                  <p className="text-gray-700 mb-4">
                    Decision Trees split data into branches based on feature values, creating a tree-like structure of decisions. 
                    They work by recursively partitioning the data to maximize information gain or minimize impurity.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">How Decision Trees Work:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                      <li>Start with all data at the root node</li>
                      <li>Find the best feature and threshold to split (using Gini or Entropy)</li>
                      <li>Create child nodes with the split data</li>
                      <li>Repeat recursively for each child node</li>
                      <li>Stop when: max depth reached, min samples met, or pure leaf node</li>
                    </ol>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Splitting Criteria:</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Gini Impurity:</strong> Measures probability of misclassification<br />
                      Gini = 1 - Σ(pᵢ²) where pᵢ is the probability of class i
                    </p>
                    <p className="text-gray-700">
                      <strong>Entropy (Information Gain):</strong> Measures disorder/randomness<br />
                      Entropy = -Σ(pᵢ × log₂(pᵢ))
                    </p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix
import matplotlib.pyplot as plt
from sklearn import tree

# Load dataset
cancer = load_breast_cancer()
X, y = cancer.data, cancer.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create Decision Tree with constraints
dt_clf = DecisionTreeClassifier(
    max_depth=5,           # Limit tree depth
    min_samples_split=20,  # Minimum samples to split
    min_samples_leaf=10,   # Minimum samples in leaf
    criterion='gini',      # Splitting criterion
    random_state=42
)

# Train model
dt_clf.fit(X_train, y_train)

# Predictions
y_pred = dt_clf.predict(X_test)

# Evaluate
print(f"Accuracy: {accuracy_score(y_test, y_pred):.3f}")
print(f"\\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))

# Visualize tree (first few levels)
plt.figure(figsize=(20, 10))
tree.plot_tree(dt_clf, 
               feature_names=cancer.feature_names, 
               class_names=cancer.target_names,
               filled=True, 
               max_depth=3)
plt.show()

# Feature importance
importances = dt_clf.feature_importances_
for name, importance in zip(cancer.feature_names, importances):
    if importance > 0.05:  # Show important features only
        print(f"{name}: {importance:.3f}")`}</pre>
                  </div>
                  <p className="text-gray-700 mb-3"><strong>Advantages & Limitations:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>✅ Easy to understand and interpret (visual tree)</li>
                    <li>✅ Handles both numerical and categorical data</li>
                    <li>✅ No feature scaling required</li>
                    <li>✅ Can capture non-linear relationships</li>
                    <li>❌ Prone to overfitting (especially deep trees)</li>
                    <li>❌ Small changes in data can cause large tree changes (unstable)</li>
                    <li>❌ Biased toward features with more levels</li>
                  </ul>
                </Section>

                <Section number="4" title="Random Forest Classifier">
                  <p className="text-gray-700 mb-4">
                    Random Forest is an <strong>ensemble method</strong> that combines multiple decision trees to create a more robust 
                    and accurate model. It uses bagging (bootstrap aggregating) and random feature selection to reduce overfitting.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">How Random Forest Works:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>Bootstrap Sampling:</strong> Create N random subsets of training data (with replacement)</li>
                      <li><strong>Tree Building:</strong> Train a decision tree on each subset</li>
                      <li><strong>Random Feature Selection:</strong> At each split, consider only a random subset of features</li>
                      <li><strong>Aggregation:</strong> For classification, use majority voting from all trees</li>
                      <li><strong>Prediction:</strong> Final prediction = most common class across all trees</li>
                    </ol>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, classification_report
import numpy as np

# Load dataset
wine = load_wine()
X, y = wine.data, wine.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create Random Forest
rf_clf = RandomForestClassifier(
    n_estimators=100,      # Number of trees
    max_depth=10,          # Max depth of each tree
    min_samples_split=5,   # Min samples to split
    min_samples_leaf=2,    # Min samples in leaf
    max_features='sqrt',   # Features to consider per split
    random_state=42,
    n_jobs=-1              # Use all CPU cores
)

# Train model
rf_clf.fit(X_train, y_train)

# Predictions
y_pred = rf_clf.predict(X_test)

# Evaluate
print(f"Accuracy: {accuracy_score(y_test, y_pred):.3f}")
print(f"\\nClassification Report:")
print(classification_report(y_test, y_pred, 
                            target_names=wine.target_names))

# Cross-validation
cv_scores = cross_val_score(rf_clf, X, y, cv=5)
print(f"\\nCross-Validation Scores: {cv_scores}")
print(f"Mean CV Accuracy: {cv_scores.mean():.3f} (+/- {cv_scores.std():.3f})")

# Feature Importance
importances = rf_clf.feature_importances_
indices = np.argsort(importances)[::-1]

print("\\nFeature Ranking:")
for i, idx in enumerate(indices[:5]):
    print(f"{i+1}. {wine.feature_names[idx]}: {importances[idx]:.3f}")

# Out-of-Bag Score (if oob_score=True)
rf_oob = RandomForestClassifier(n_estimators=100, oob_score=True, 
                                 random_state=42)
rf_oob.fit(X_train, y_train)
print(f"\\nOut-of-Bag Score: {rf_oob.oob_score_:.3f}")`}</pre>
                  </div>
                  <p className="text-gray-700 mb-3"><strong>Key Hyperparameters:</strong></p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>n_estimators:</strong> Number of trees (more trees = better performance, slower training)</li>
                    <li><strong>max_depth:</strong> Maximum tree depth (controls overfitting)</li>
                    <li><strong>max_features:</strong> Features to consider at each split ('sqrt', 'log2', or number)</li>
                    <li><strong>min_samples_split:</strong> Minimum samples required to split a node</li>
                    <li><strong>min_samples_leaf:</strong> Minimum samples required in a leaf node</li>
                  </ul>
                  <p className="text-gray-700 mt-4 mb-3"><strong>Advantages:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>✅ Highly accurate and robust (reduces overfitting)</li>
                    <li>✅ Handles large datasets with high dimensionality</li>
                    <li>✅ Provides feature importance scores</li>
                    <li>✅ Works well with default parameters</li>
                    <li>✅ Can handle missing values</li>
                    <li>❌ Slower to train and predict than single trees</li>
                    <li>❌ Less interpretable than single decision tree</li>
                    <li>❌ Larger memory footprint</li>
                  </ul>
                </Section>

                <Section number="5" title="Classification Metrics">
                  <p className="text-gray-700 mb-4">
                    Choosing the right metric is crucial for evaluating classification models. Different metrics highlight different 
                    aspects of model performance.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Confusion Matrix:</h4>
                    <table className="min-w-full bg-white border border-gray-300 mt-2">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border px-4 py-2"></th>
                          <th className="border px-4 py-2">Predicted Positive</th>
                          <th className="border px-4 py-2">Predicted Negative</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2 font-bold">Actual Positive</td>
                          <td className="border px-4 py-2 bg-green-100">True Positive (TP)</td>
                          <td className="border px-4 py-2 bg-red-100">False Negative (FN)</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-bold">Actual Negative</td>
                          <td className="border px-4 py-2 bg-red-100">False Positive (FP)</td>
                          <td className="border px-4 py-2 bg-green-100">True Negative (TN)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Key Metrics:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>Accuracy:</strong> (TP + TN) / (TP + TN + FP + FN) - Overall correctness</li>
                      <li><strong>Precision:</strong> TP / (TP + FP) - How many predicted positives are correct?</li>
                      <li><strong>Recall (Sensitivity):</strong> TP / (TP + FN) - How many actual positives did we catch?</li>
                      <li><strong>F1-Score:</strong> 2 × (Precision × Recall) / (Precision + Recall) - Harmonic mean</li>
                      <li><strong>Specificity:</strong> TN / (TN + FP) - True negative rate</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`from sklearn.metrics import (accuracy_score, precision_score, 
                         recall_score, f1_score, confusion_matrix,
                         classification_report, roc_auc_score, roc_curve)
import matplotlib.pyplot as plt

# Calculate metrics
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred, average='weighted')
recall = recall_score(y_test, y_pred, average='weighted')
f1 = f1_score(y_test, y_pred, average='weighted')

print(f"Accuracy:  {accuracy:.3f}")
print(f"Precision: {precision:.3f}")
print(f"Recall:    {recall:.3f}")
print(f"F1-Score:  {f1:.3f}")

# Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
print(f"\\nConfusion Matrix:\\n{cm}")

# Classification Report (all metrics)
print(f"\\n{classification_report(y_test, y_pred)}")

# ROC-AUC for binary classification
if len(np.unique(y)) == 2:
    y_proba = log_reg.predict_proba(X_test)[:, 1]
    auc = roc_auc_score(y_test, y_proba)
    fpr, tpr, thresholds = roc_curve(y_test, y_proba)
    
    plt.figure()
    plt.plot(fpr, tpr, label=f'ROC Curve (AUC = {auc:.2f})')
    plt.plot([0, 1], [0, 1], 'k--', label='Random Classifier')
    plt.xlabel('False Positive Rate')
    plt.ylabel('True Positive Rate')
    plt.title('ROC Curve')
    plt.legend()
    plt.show()`}</pre>
                  </div>
                  <p className="text-gray-700 mb-3"><strong>When to Use Which Metric:</strong></p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Accuracy:</strong> Balanced datasets with equal class importance</li>
                    <li><strong>Precision:</strong> Cost of false positives is high (e.g., spam detection)</li>
                    <li><strong>Recall:</strong> Cost of false negatives is high (e.g., disease detection)</li>
                    <li><strong>F1-Score:</strong> Imbalanced datasets, balance precision and recall</li>
                    <li><strong>ROC-AUC:</strong> Evaluating probability predictions, comparing models</li>
                  </ul>
                </Section>

                <Section number="6" title="Model Comparison: Which to Choose?">
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border-collapse border border-gray-300">
                      <thead className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">Aspect</th>
                          <th className="border border-gray-300 px-4 py-2">Logistic Regression</th>
                          <th className="border border-gray-300 px-4 py-2">Decision Tree</th>
                          <th className="border border-gray-300 px-4 py-2">Random Forest</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border px-4 py-2 font-bold">Interpretability</td>
                          <td className="border px-4 py-2">⭐⭐⭐⭐⭐ Excellent</td>
                          <td className="border px-4 py-2">⭐⭐⭐⭐ Very Good</td>
                          <td className="border px-4 py-2">⭐⭐ Limited</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2 font-bold">Training Speed</td>
                          <td className="border px-4 py-2">⭐⭐⭐⭐⭐ Very Fast</td>
                          <td className="border px-4 py-2">⭐⭐⭐⭐ Fast</td>
                          <td className="border px-4 py-2">⭐⭐ Slower</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border px-4 py-2 font-bold">Prediction Speed</td>
                          <td className="border px-4 py-2">⭐⭐⭐⭐⭐ Very Fast</td>
                          <td className="border px-4 py-2">⭐⭐⭐⭐ Fast</td>
                          <td className="border px-4 py-2">⭐⭐⭐ Moderate</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2 font-bold">Accuracy</td>
                          <td className="border px-4 py-2">⭐⭐⭐ Good (linear)</td>
                          <td className="border px-4 py-2">⭐⭐⭐ Good (overfits)</td>
                          <td className="border px-4 py-2">⭐⭐⭐⭐⭐ Excellent</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border px-4 py-2 font-bold">Overfitting Risk</td>
                          <td className="border px-4 py-2">⭐⭐ Low</td>
                          <td className="border px-4 py-2">⭐⭐⭐⭐⭐ Very High</td>
                          <td className="border px-4 py-2">⭐⭐ Low</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2 font-bold">Feature Scaling</td>
                          <td className="border px-4 py-2">Required</td>
                          <td className="border px-4 py-2">Not Required</td>
                          <td className="border px-4 py-2">Not Required</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border px-4 py-2 font-bold">Handles Non-linearity</td>
                          <td className="border px-4 py-2">❌ No</td>
                          <td className="border px-4 py-2">✅ Yes</td>
                          <td className="border px-4 py-2">✅ Yes</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2 font-bold">Best Use Case</td>
                          <td className="border px-4 py-2">Linear relationships, interpretability needed</td>
                          <td className="border px-4 py-2">Exploratory analysis, rule extraction</td>
                          <td className="border px-4 py-2">High accuracy needed, complex patterns</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Section>

                <Section number="7" title="Practical Tips & Best Practices">
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 mb-4">
                    <h4 className="font-bold text-gray-800 mb-3">💡 Model Selection Guidelines:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>Start Simple:</strong> Begin with Logistic Regression as baseline</li>
                      <li><strong>Check for Non-linearity:</strong> If baseline poor, try Decision Tree</li>
                      <li><strong>Boost Performance:</strong> Use Random Forest for production models</li>
                      <li><strong>Interpretability Matters:</strong> Use Logistic Regression or single Decision Tree</li>
                      <li><strong>Large Dataset:</strong> Random Forest scales well with data</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-bold text-gray-800 mb-3">✅ Implementation Checklist:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>✓ Handle class imbalance (SMOTE, class weights, resampling)</li>
                      <li>✓ Feature scaling for Logistic Regression</li>
                      <li>✓ Set max_depth for Decision Trees to prevent overfitting</li>
                      <li>✓ Use cross-validation for hyperparameter tuning</li>
                      <li>✓ Monitor training vs testing performance</li>
                      <li>✓ Use appropriate metrics (don't rely solely on accuracy)</li>
                      <li>✓ Visualize confusion matrix and ROC curves</li>
                      <li>✓ Check feature importance (trees provide this)</li>
                    </ul>
                  </div>
                </Section>
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
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Brain className="text-indigo-600" size={28} />
        {number}. {title}
      </h3>
      {children}
    </div>
  );
};

export default Day12LearningDoc;
