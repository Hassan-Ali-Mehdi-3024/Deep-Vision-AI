import React from 'react';
import { BookOpen, Target, Lightbulb, ExternalLink } from 'lucide-react';
import { SectionProps } from './src/types';
import PDFExportButton from './src/components/PDFExportButton';

const Day10LearningDoc = () => {
  return (
    <>
      <PDFExportButton 
        elementId="day10-learning-card" 
        filename="Day10_Learning_Capstone.pdf" 
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div id="day10-learning-card" className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden" style={{padding: '10px', backgroundColor: 'transparent'}}>
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen size={32} />
            <h1 className="text-3xl font-bold">Learning File (Handout)</h1>
          </div>
          <p className="text-blue-100 text-lg">Day 10 - Week 2, Day 5</p>
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
                  Consolidate all Week 2 learning through a comprehensive capstone project. Apply data exploration, 
                  visualization, statistical analysis, and preprocessing in an end-to-end data science workflow.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            <Section number="1" title="Week 2 Recap - What We've Learned">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Day 6:</strong> Data visualization with Matplotlib and Seaborn</li>
                <li><strong>Day 7:</strong> Exploratory Data Analysis (EDA) and data cleaning</li>
                <li><strong>Day 8:</strong> Statistical analysis and hypothesis testing</li>
                <li><strong>Day 9:</strong> Data preprocessing and feature engineering</li>
                <li><strong>Today:</strong> Integrate everything into a complete project</li>
              </ul>
            </Section>

            <Section number="2" title="The End-to-End Data Science Workflow">
              <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
                <li>
                  <strong>Business Understanding:</strong>
                  <p className="ml-6 mt-1">Define the problem, objectives, and success metrics.</p>
                </li>
                <li>
                  <strong>Data Collection:</strong>
                  <p className="ml-6 mt-1">Gather relevant data from various sources.</p>
                </li>
                <li>
                  <strong>Data Exploration (EDA):</strong>
                  <p className="ml-6 mt-1">Understand structure, distributions, relationships, and quality.</p>
                </li>
                <li>
                  <strong>Data Cleaning:</strong>
                  <p className="ml-6 mt-1">Handle missing values, outliers, duplicates, and errors.</p>
                </li>
                <li>
                  <strong>Data Visualization:</strong>
                  <p className="ml-6 mt-1">Create compelling visuals to communicate insights.</p>
                </li>
                <li>
                  <strong>Statistical Analysis:</strong>
                  <p className="ml-6 mt-1">Test hypotheses, measure correlations, quantify uncertainty.</p>
                </li>
                <li>
                  <strong>Feature Engineering:</strong>
                  <p className="ml-6 mt-1">Create and select features that improve model performance.</p>
                </li>
                <li>
                  <strong>Data Preprocessing:</strong>
                  <p className="ml-6 mt-1">Scale, encode, and transform data for modeling.</p>
                </li>
                <li>
                  <strong>Model Building:</strong>
                  <p className="ml-6 mt-1">Train machine learning models (Week 3 focus).</p>
                </li>
                <li>
                  <strong>Evaluation & Deployment:</strong>
                  <p className="ml-6 mt-1">Validate performance and deploy to production (Week 3-4 focus).</p>
                </li>
              </ol>
            </Section>

            <Section number="3" title="Project Management Best Practices">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Organize Your Notebook:</strong> Use clear sections with markdown headers.</li>
                <li><strong>Document Everything:</strong> Explain WHY, not just WHAT you're doing.</li>
                <li><strong>Version Control:</strong> Save checkpoints, name files meaningfully.</li>
                <li><strong>Reproducibility:</strong> Set random seeds, document dependencies.</li>
                <li><strong>Code Quality:</strong> Write clean, commented, reusable code.</li>
              </ul>
            </Section>

            <Section number="4" title="Storytelling with Data">
              <p className="text-gray-700 ml-4 mb-3">
                A great data science project tells a story:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Introduction:</strong> What question are you answering? Why does it matter?</li>
                <li><strong>Data Overview:</strong> What data do you have? Where did it come from?</li>
                <li><strong>Exploration:</strong> What patterns did you discover? Show, don't just tell.</li>
                <li><strong>Analysis:</strong> What statistical evidence supports your findings?</li>
                <li><strong>Insights:</strong> What do the numbers actually mean in context?</li>
                <li><strong>Recommendations:</strong> What actions should be taken based on findings?</li>
                <li><strong>Limitations:</strong> What are the caveats? What could be improved?</li>
              </ul>
            </Section>

            <Section number="5" title="Effective Visualization Guidelines">
              <div className="space-y-3 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Choose the Right Chart:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Trends over time → Line plot</li>
                    <li>Comparisons → Bar chart</li>
                    <li>Distributions → Histogram, Box plot, Violin plot</li>
                    <li>Relationships → Scatter plot</li>
                    <li>Composition → Pie chart, Stacked bar</li>
                    <li>Correlations → Heatmap</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Design Principles:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Clear titles and labels—never assume viewer knows context.</li>
                    <li>Appropriate color schemes—consider colorblind accessibility.</li>
                    <li>Remove chartjunk—every element should have a purpose.</li>
                    <li>Consistent styling across all visualizations.</li>
                    <li>Annotations to highlight key findings.</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section number="6" title="Common Pitfalls to Avoid">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Data Leakage:</strong> Never let test data information leak into training.</li>
                <li><strong>Overfitting Preprocessing:</strong> Fit scalers/imputers only on training data.</li>
                <li><strong>Ignoring Missing Data:</strong> Always investigate why data is missing.</li>
                <li><strong>Correlation ≠ Causation:</strong> Don't assume correlation implies cause.</li>
                <li><strong>Cherry-picking Results:</strong> Report all findings, not just favorable ones.</li>
                <li><strong>Ignoring Outliers:</strong> Investigate before removing—they may be important.</li>
                <li><strong>Poor Documentation:</strong> Future you (or teammates) won't remember your logic.</li>
              </ul>
            </Section>

            <Section number="7" title="Presenting Your Findings">
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Know Your Audience:</strong> Technical vs non-technical stakeholders.</li>
                <li><strong>Start with the Conclusion:</strong> Lead with key insights, then explain.</li>
                <li><strong>Use Visuals Effectively:</strong> A good chart beats a table of numbers.</li>
                <li><strong>Quantify Uncertainty:</strong> Use confidence intervals, p-values appropriately.</li>
                <li><strong>Be Honest:</strong> Acknowledge limitations and assumptions.</li>
                <li><strong>Recommend Actions:</strong> Don't just describe—prescribe next steps.</li>
              </ul>
            </Section>

            <Section number="8" title="Example Project Structure">
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
                <pre className="text-gray-800">{`# Week 2 Capstone Project Template

## 1. Introduction
- Business question
- Dataset description
- Project objectives

## 2. Data Loading & Overview
- Import libraries
- Load dataset
- Initial inspection (shape, dtypes, head/tail)

## 3. Exploratory Data Analysis
- Missing values analysis
- Univariate analysis (distributions)
- Bivariate analysis (relationships)
- Correlation analysis

## 4. Data Cleaning
- Handle missing values
- Remove/handle outliers
- Fix data types
- Remove duplicates

## 5. Statistical Analysis
- Hypothesis tests
- Confidence intervals
- Key statistical findings

## 6. Feature Engineering
- Create new features
- Transform existing features
- Feature selection

## 7. Data Preprocessing
- Encode categorical variables
- Scale numeric features
- Train-test split

## 8. Key Insights & Visualizations
- Top 5-7 findings
- Supporting visualizations
- Statistical evidence

## 9. Recommendations
- Actionable insights
- Next steps
- Limitations

## 10. Conclusion
- Summary of project
- Learning outcomes`}</pre>
              </div>
            </Section>

            <Section number="9" title="Learning Resources for Continued Growth">
              <div className="space-y-2 ml-4">
                <a href="https://www.kaggle.com/datasets" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>Kaggle Datasets - Practice Projects</span>
                </a>
                <a href="https://github.com/topics/data-science" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>GitHub Data Science Projects</span>
                </a>
                <a href="https://www.datacamp.com/community/tutorials" 
                   className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
                   target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  <span>DataCamp Tutorials</span>
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
                  Interns will complete a comprehensive data science project demonstrating mastery of Week 2 
                  skills. This capstone solidifies your ability to work independently on real-world data problems, 
                  from raw data to actionable insights. You're now ready to move into machine learning modeling 
                  in Week 3!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center text-gray-600">
          <p className="text-sm">DeepVisionAI Internship Program</p>
          <p className="text-xs mt-1">Week 2 - Data Exploration & Analysis (Capstone)</p>
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

export default Day10LearningDoc;
