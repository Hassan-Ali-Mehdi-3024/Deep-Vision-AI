import React from 'react';
import { BookOpen, Target, Lightbulb, ExternalLink } from 'lucide-react';
import { SectionProps } from './src/types';
import PDFExportButton from './src/components/PDFExportButton';

const Day8LearningDoc = () => {
  return (
    <>
      <PDFExportButton 
        elementId="day8-learning-card" 
        filename="Day8_Learning_Statistics.pdf" 
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div id="day8-learning-card" className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden" style={{padding: '10px', backgroundColor: 'transparent'}}>
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={32} />
            <h1 className="text-3xl font-bold">Learning File (Handout)</h1>
          </div>
          <p className="text-blue-100 text-lg">Day 8 - Week 2, Day 3</p>
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
                  Understand fundamental statistical concepts for data analysis. Learn descriptive statistics, 
                  probability distributions, hypothesis testing, and how to draw valid conclusions from data.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section number="1" title="Why Statistics in Data Science?">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Foundation for machine learning algorithms.</li>
                <li>Essential for understanding data distributions and patterns.</li>
                <li>Enables hypothesis testing and decision making.</li>
                <li>Helps quantify uncertainty and confidence in results.</li>
                <li>Critical for experiment design and A/B testing.</li>
              </ul>
            </Section>

            <Section number="2" title="Descriptive Statistics">
              <p className="text-gray-700 ml-4 mb-3">
                Summarize and describe main features of a dataset:
              </p>
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Measures of Central Tendency:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>Mean:</strong> Average value (sum / count)</li>
                    <li><strong>Median:</strong> Middle value when sorted</li>
                    <li><strong>Mode:</strong> Most frequently occurring value</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Measures of Spread:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>Range:</strong> Maximum - Minimum</li>
                    <li><strong>Variance:</strong> Average squared deviation from mean</li>
                    <li><strong>Standard Deviation:</strong> Square root of variance</li>
                    <li><strong>IQR:</strong> Q3 - Q1 (spread of middle 50%)</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`import numpy as np
import pandas as pd

data = [10, 12, 23, 23, 16, 23, 21, 16]

# Central tendency
mean = np.mean(data)
median = np.median(data)
mode = pd.Series(data).mode()[0]

# Spread
variance = np.var(data)
std_dev = np.std(data)
data_range = np.max(data) - np.min(data)

print(f"Mean: {mean}, Median: {median}, Mode: {mode}")
print(f"Std Dev: {std_dev}, Variance: {variance}")`}</pre>
              </div>
            </Section>

            <Section number="3" title="Probability Distributions">
              <p className="text-gray-700 ml-4 mb-3">
                Mathematical functions that describe the likelihood of different outcomes:
              </p>
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Normal Distribution (Gaussian):</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Bell-shaped, symmetric curve.</li>
                    <li>Defined by mean (μ) and standard deviation (σ).</li>
                    <li>68-95-99.7 rule (empirical rule).</li>
                    <li>Many natural phenomena follow normal distribution.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Other Common Distributions:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>Uniform:</strong> All outcomes equally likely.</li>
                    <li><strong>Binomial:</strong> Number of successes in n trials.</li>
                    <li><strong>Poisson:</strong> Number of events in fixed interval.</li>
                    <li><strong>Exponential:</strong> Time between events.</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`from scipy import stats
import matplotlib.pyplot as plt

# Normal distribution
mu, sigma = 0, 1
x = np.linspace(-4, 4, 100)
y = stats.norm.pdf(x, mu, sigma)

plt.plot(x, y)
plt.title('Normal Distribution (μ=0, σ=1)')
plt.xlabel('Value')
plt.ylabel('Probability Density')
plt.grid(True)
plt.show()

# Generate random samples
samples = np.random.normal(mu, sigma, 1000)`}</pre>
              </div>
            </Section>

            <Section number="4" title="Correlation and Covariance">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Covariance:</strong> Measures how two variables change together.</li>
                <li><strong>Correlation:</strong> Standardized covariance (ranges from -1 to +1).</li>
                <li>Positive correlation: variables move in same direction.</li>
                <li>Negative correlation: variables move in opposite directions.</li>
                <li>Zero correlation: no linear relationship.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Pearson correlation coefficient
from scipy.stats import pearsonr

x = [1, 2, 3, 4, 5]
y = [2, 4, 5, 4, 5]

correlation, p_value = pearsonr(x, y)
print(f"Correlation: {correlation:.3f}")
print(f"P-value: {p_value:.3f}")

# Using pandas
df = pd.DataFrame({'x': x, 'y': y})
corr_matrix = df.corr()
print(corr_matrix)`}</pre>
              </div>
            </Section>

            <Section number="5" title="Hypothesis Testing Basics">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Null Hypothesis (H₀):</strong> No effect or no difference.</li>
                <li><strong>Alternative Hypothesis (H₁):</strong> There is an effect or difference.</li>
                <li><strong>P-value:</strong> Probability of observing results if H₀ is true.</li>
                <li><strong>Significance level (α):</strong> Threshold for rejecting H₀ (commonly 0.05).</li>
                <li>If p-value &lt; α, reject null hypothesis.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`from scipy import stats

# Example: Test if sample mean differs from population mean
sample = [23, 25, 27, 24, 26, 28, 22, 25]
population_mean = 20

# One-sample t-test
t_statistic, p_value = stats.ttest_1samp(sample, population_mean)

print(f"T-statistic: {t_statistic:.3f}")
print(f"P-value: {p_value:.3f}")

if p_value < 0.05:
    print("Reject null hypothesis - significant difference")
else:
    print("Fail to reject null hypothesis")`}</pre>
              </div>
            </Section>

            <Section number="6" title="Common Statistical Tests">
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">T-Test:</h4>
                  <p className="text-gray-700">Compare means of two groups.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>stats.ttest_ind(group1, group2)</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">ANOVA (Analysis of Variance):</h4>
                  <p className="text-gray-700">Compare means of three or more groups.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>stats.f_oneway(group1, group2, group3)</code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Chi-Square Test:</h4>
                  <p className="text-gray-700">Test independence between categorical variables.</p>
                  <div className="bg-gray-50 p-3 rounded font-mono text-sm mt-2">
                    <code>stats.chi2_contingency(contingency_table)</code>
                  </div>
                </div>
              </div>
            </Section>

            <Section number="7" title="Confidence Intervals">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Range of values likely to contain the true parameter.</li>
                <li>95% confidence interval is most common.</li>
                <li>Wider interval = less precision but more confidence.</li>
                <li>Helps quantify uncertainty in estimates.</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`from scipy import stats

data = [23, 25, 27, 24, 26, 28, 22, 25, 29, 24]

# Calculate 95% confidence interval
mean = np.mean(data)
sem = stats.sem(data)  # Standard error of the mean
confidence = 0.95

ci = stats.t.interval(confidence, len(data)-1, 
                      loc=mean, scale=sem)

print(f"Mean: {mean:.2f}")
print(f"95% CI: [{ci[0]:.2f}, {ci[1]:.2f}]")`}</pre>
              </div>
            </Section>

            <Section number="8" title="Central Limit Theorem">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Foundation of inferential statistics.</li>
                <li>Sample means tend toward normal distribution as sample size increases.</li>
                <li>True regardless of original population distribution.</li>
                <li>Typically needs n ≥ 30 for reasonable approximation.</li>
                <li>Enables making inferences about populations from samples.</li>
              </ul>
            </Section>

            <Section number="9" title="Learning Resources">
              <div className="space-y-2 ml-4">
                <a href="https://www.khanacademy.org/math/statistics-probability" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Khan Academy - Statistics & Probability</span>
                </a>
                <a href="https://www.scipy-lectures.org/packages/statistics/index.html" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>SciPy Lectures - Statistics in Python</span>
                </a>
                <a href="https://www.kaggle.com/learn/intro-to-machine-learning" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Kaggle - Intro to Machine Learning</span>
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
                  Interns will apply statistical methods to analyze data and draw valid conclusions. Understanding 
                  statistics is crucial for feature engineering, model evaluation, A/B testing, and communicating 
                  data-driven insights with confidence.
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

export default Day8LearningDoc;
