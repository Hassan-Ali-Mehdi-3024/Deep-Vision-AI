import React from 'react';
import { SectionProps } from './src/types';
import { BookOpen, Brain } from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day13LearningDoc = () => {
  return (
    <>
      <PDFExportButton elementId="day13-card" filename="Day13_Model_Evaluation.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day13-card" style={{padding: '10px', backgroundColor: 'transparent'}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={32} />
                <h1 className="text-3xl font-bold">Learning Document</h1>
              </div>
              <p className="text-indigo-100 text-lg">Day 13 - Week 3, Day 3</p>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🎯 Model Evaluation & Cross-Validation
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Learn proper techniques to evaluate machine learning models, understand cross-validation strategies, 
                  handle imbalanced datasets, and master hyperparameter tuning for optimal performance.
                </p>
              </div>
              <div className="space-y-8">
                <Section number="1" title="Train-Test Split & Validation Strategies">
                  <p className="text-gray-700 mb-4">
                    <strong>The Problem:</strong> Training and testing on the same data gives falsely high performance (overfitting).
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Holdout Method (Train-Test Split):</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Split data into training (70-80%) and testing (20-30%)</li>
                      <li>Train on training set, evaluate on unseen test set</li>
                      <li>Problem: Performance varies based on random split</li>
                      <li>Use stratify parameter for balanced class distribution</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`from sklearn.model_selection import train_test_split

# Stratified split (maintains class proportions)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

print(f"Training set: {X_train.shape}")
print(f"Test set: {X_test.shape}")
print(f"\\nClass distribution:")
print(f"Train: {np.bincount(y_train)}")
print(f"Test: {np.bincount(y_test)}")`}</pre>
                  </div>
                </Section>

                <Section number="2" title="K-Fold Cross-Validation">
                  <p className="text-gray-700 mb-4">
                    Cross-validation provides more reliable performance estimates by using all data for both training and testing.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">How K-Fold Works:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                      <li>Split data into K equal-sized folds (typically 5 or 10)</li>
                      <li>For each fold k = 1 to K:
                        <ul className="list-disc list-inside ml-6 mt-1">
                          <li>Use fold k as test set</li>
                          <li>Use remaining K-1 folds as training set</li>
                          <li>Train model and calculate score</li>
                        </ul>
                      </li>
                      <li>Return mean and standard deviation of K scores</li>
                    </ol>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`from sklearn.model_selection import cross_val_score, KFold
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(n_estimators=100, random_state=42)

# 5-Fold Cross-Validation
scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')

print(f"Cross-Validation Scores: {scores}")
print(f"Mean Accuracy: {scores.mean():.3f}")
print(f"Std Dev: {scores.std():.3f}")

# Stratified K-Fold (maintains class distribution)
from sklearn.model_selection import StratifiedKFold
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(model, X, y, cv=skf, scoring='accuracy')
print(f"\\nStratified CV Mean: {scores.mean():.3f}")`}</pre>
                  </div>
                  <p className="text-gray-700 mb-3"><strong>Advantages:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>✅ More reliable performance estimate</li>
                    <li>✅ Uses all data for both training and testing</li>
                    <li>✅ Reduces variance in performance estimate</li>
                    <li>❌ K times slower than single train-test split</li>
                  </ul>
                </Section>

                <Section number="3" title="Confusion Matrix & Classification Metrics">
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`from sklearn.metrics import (confusion_matrix, accuracy_score, 
                         precision_score, recall_score, 
                         f1_score, classification_report)
import seaborn as sns

# Train model
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

# Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:\\n", cm)

# Visualize
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
plt.ylabel('Actual')
plt.xlabel('Predicted')
plt.title('Confusion Matrix')
plt.show()

# Metrics
print(f"\\nAccuracy: {accuracy_score(y_test, y_pred):.3f}")
print(f"Precision: {precision_score(y_test, y_pred, average='weighted'):.3f}")
print(f"Recall: {recall_score(y_test, y_pred, average='weighted'):.3f}")
print(f"F1-Score: {f1_score(y_test, y_pred, average='weighted'):.3f}")

# Full Report
print("\\nClassification Report:")
print(classification_report(y_test, y_pred))`}</pre>
                  </div>
                </Section>

                <Section number="4" title="Handling Imbalanced Datasets">
                  <p className="text-gray-700 mb-4">
                    When one class has significantly more samples than others, models become biased toward the majority class.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg mb-4 border-l-4 border-yellow-400">
                    <h4 className="font-bold text-gray-800 mb-2">Techniques to Handle Imbalance:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li><strong>1. Class Weights:</strong> Give higher weight to minority class</li>
                      <li><strong>2. Resampling:</strong> Oversample minority or undersample majority</li>
                      <li><strong>3. SMOTE:</strong> Synthetic Minority Over-sampling Technique</li>
                      <li><strong>4. Different Metrics:</strong> Use F1, precision-recall instead of accuracy</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`from sklearn.ensemble import RandomForestClassifier
from imblearn.over_sampling import SMOTE
from collections import Counter

print("Original class distribution:", Counter(y_train))

# Method 1: Class Weights
rf_weighted = RandomForestClassifier(
    class_weight='balanced',  # Automatically adjust weights
    random_state=42
)

# Method 2: SMOTE (Synthetic Oversampling)
smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)
print("After SMOTE:", Counter(y_resampled))

rf_smote = RandomForestClassifier(random_state=42)
rf_smote.fit(X_resampled, y_resampled)

# Method 3: Undersampling
from imblearn.under_sampling import RandomUnderSampler
rus = RandomUnderSampler(random_state=42)
X_under, y_under = rus.fit_resample(X_train, y_train)
print("After Undersampling:", Counter(y_under))`}</pre>
                  </div>
                </Section>

                <Section number="5" title="Hyperparameter Tuning">
                  <p className="text-gray-700 mb-4">
                    Hyperparameters control model behavior and must be set before training. Finding optimal values improves performance.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Grid Search:</h4>
                    <p className="text-gray-700">Exhaustively tries all combinations of specified parameter values.</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier

# Define parameter grid
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [5, 10, 15, None],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4]
}

# Create GridSearchCV
grid_search = GridSearchCV(
    estimator=RandomForestClassifier(random_state=42),
    param_grid=param_grid,
    cv=5,                    # 5-fold cross-validation
    scoring='f1_weighted',   # Optimization metric
    n_jobs=-1,               # Use all CPU cores
    verbose=2
)

# Fit (this will take time!)
grid_search.fit(X_train, y_train)

# Best parameters
print("Best Parameters:", grid_search.best_params_)
print("Best CV Score:", grid_search.best_score_)

# Test best model
best_model = grid_search.best_estimator_
y_pred = best_model.predict(X_test)
print(f"Test Accuracy: {accuracy_score(y_test, y_pred):.3f}")`}</pre>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">Random Search (Faster Alternative):</h4>
                    <p className="text-gray-700">Randomly samples parameter combinations instead of trying all.</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint, uniform

# Define parameter distributions
param_dist = {
    'n_estimators': randint(50, 300),
    'max_depth': [5, 10, 15, 20, None],
    'min_samples_split': randint(2, 20),
    'min_samples_leaf': randint(1, 10)
}

random_search = RandomizedSearchCV(
    estimator=RandomForestClassifier(random_state=42),
    param_distributions=param_dist,
    n_iter=50,         # Try 50 random combinations
    cv=5,
    scoring='accuracy',
    random_state=42,
    n_jobs=-1
)

random_search.fit(X_train, y_train)
print("Best Parameters:", random_search.best_params_)
print("Best Score:", random_search.best_score_)`}</pre>
                  </div>
                </Section>

                <Section number="6" title="Overfitting vs Underfitting">
                  <div className="bg-red-50 p-4 rounded-lg mb-4 border-l-4 border-red-400">
                    <h4 className="font-bold text-gray-800 mb-2">🔴 Overfitting:</h4>
                    <p className="text-gray-700 mb-2">Model memorizes training data, poor generalization to new data.</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li><strong>Symptom:</strong> High train accuracy, low test accuracy</li>
                      <li><strong>Cause:</strong> Model too complex for data (too many parameters)</li>
                      <li><strong>Solution:</strong> Reduce complexity, add regularization, more data, early stopping</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg mb-4 border-l-4 border-blue-400">
                    <h4 className="font-bold text-gray-800 mb-2">🔵 Underfitting:</h4>
                    <p className="text-gray-700 mb-2">Model too simple to capture patterns in data.</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li><strong>Symptom:</strong> Low train accuracy, low test accuracy</li>
                      <li><strong>Cause:</strong> Model not complex enough</li>
                      <li><strong>Solution:</strong> Increase complexity, add features, reduce regularization</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{`# Learning Curve: Diagnose overfitting/underfitting
from sklearn.model_selection import learning_curve

train_sizes, train_scores, test_scores = learning_curve(
    model, X, y, cv=5, n_jobs=-1, 
    train_sizes=np.linspace(0.1, 1.0, 10)
)

train_mean = np.mean(train_scores, axis=1)
test_mean = np.mean(test_scores, axis=1)

plt.plot(train_sizes, train_mean, label='Training score')
plt.plot(train_sizes, test_mean, label='Cross-validation score')
plt.xlabel('Training Set Size')
plt.ylabel('Score')
plt.legend()
plt.title('Learning Curve')
plt.show()`}</pre>
                  </div>
                </Section>

                <Section number="7" title="Best Practices Summary">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>✅ Always use cross-validation for robust evaluation</li>
                      <li>✅ Use stratified splits for classification tasks</li>
                      <li>✅ Choose metrics appropriate for your problem (F1 for imbalanced data)</li>
                      <li>✅ Check for overfitting: compare train vs test performance</li>
                      <li>✅ Use GridSearch or RandomSearch for hyperparameter tuning</li>
                      <li>✅ Handle imbalanced data with SMOTE or class weights</li>
                      <li>✅ Plot learning curves to diagnose underfitting/overfitting</li>
                      <li>✅ Never tune hyperparameters on test set - use validation set</li>
                    </ul>
                  </div>
                </Section>
              </div>
            </div>
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

export default Day13LearningDoc;
