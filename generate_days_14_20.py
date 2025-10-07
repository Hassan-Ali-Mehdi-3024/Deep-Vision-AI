#!/usr/bin/env python3
"""
Automated generator for Days 14-20 Learning and Task documents
Generates 14 TSX files following the established pattern
"""

days_content = {
    "day14_learning": {
        "title": "Unsupervised Learning: Clustering & Dimensionality Reduction",
        "week": "Week 3, Day 4",
        "sections": [
            ("Introduction to Unsupervised Learning", "No labels, find patterns in data"),
            ("K-Means Clustering", "Partition data into K clusters"),
            ("Hierarchical Clustering", "Build tree of clusters"),
            ("DBSCAN", "Density-based clustering"),
            ("Principal Component Analysis (PCA)", "Reduce dimensions while preserving variance"),
            ("t-SNE", "Visualization of high-dimensional data"),
            ("Practical Applications", "Customer segmentation, anomaly detection")
        ]
    },
    "day14_task": {
        "title": "Customer Segmentation with K-Means & PCA",
        "week": "Week 3, Day 4",
        "tasks": [
            ("Dataset Loading", "Use Mall Customers dataset or create synthetic data"),
            ("Exploratory Analysis", "Visualize features, check distributions"),
            ("K-Means Clustering", "Find optimal K using elbow method and silhouette score"),
            ("Cluster Visualization", "Plot clusters in 2D"),
            ("PCA Dimensionality Reduction", "Reduce to 2-3 components"),
            ("Hierarchical Clustering", "Create dendrogram"),
            ("Cluster Interpretation", "Analyze characteristics of each segment"),
            ("Business Insights", "Provide marketing recommendations per segment")
        ]
    },
    "day15_learning": {
        "title": "Ensemble Methods & Model Stacking",
        "week": "Week 3, Day 5",
        "sections": [
            ("Introduction to Ensemble Learning", "Combine multiple models for better performance"),
            ("Bagging: Random Forest", "Bootstrap aggregating"),
            ("Boosting: AdaBoost", "Sequential learning from mistakes"),
            ("Gradient Boosting (XGBoost, LightGBM)", "Powerful boosting algorithms"),
            ("Voting Classifiers", "Combine different algorithms"),
            ("Stacking", "Meta-learning from predictions"),
            ("When to Use Which Ensemble", "Comparison and best practices")
        ]
    },
    "day15_task": {
        "title": "Week 3 Capstone: End-to-End ML Pipeline",
        "week": "Week 3, Day 5",
        "tasks": [
            ("Problem Definition", "Choose classification problem (e.g., churn prediction)"),
            ("Data Loading & EDA", "Load real-world dataset, comprehensive analysis"),
            ("Feature Engineering", "Create new features, encode categoricals"),
            ("Train Multiple Models", "Logistic, Decision Tree, Random Forest, XGBoost"),
            ("Cross-Validation", "5-fold stratified CV for all models"),
            ("Hyperparameter Tuning", "GridSearch for top 2 models"),
            ("Ensemble Creation", "Voting classifier combining best models"),
            ("Final Evaluation", "Detailed metrics, confusion matrix, feature importance"),
            ("Deployment Preparation", "Save best model with pickle/joblib")
        ]
    },
    "day16_learning": {
        "title": "Deep Learning Fundamentals: Neural Networks",
        "week": "Week 4, Day 1",
        "sections": [
            ("Introduction to Neural Networks", "Biological inspiration, perceptrons"),
            ("Network Architecture", "Layers, neurons, connections"),
            ("Activation Functions", "ReLU, Sigmoid, Tanh, Softmax"),
            ("Forward Propagation", "Computing predictions"),
            ("Backpropagation", "Learning via gradient descent"),
            ("Loss Functions", "MSE, Cross-Entropy"),
            ("Building NNs with TensorFlow/Keras", "Sequential API, functional API")
        ]
    },
    "day16_task": {
        "title": "Build Your First Neural Network: MNIST Digit Classification",
        "week": "Week 4, Day 1",
        "tasks": [
            ("Load MNIST Dataset", "60k training, 10k test images"),
            ("Data Preprocessing", "Normalize pixel values to [0,1], flatten or reshape"),
            ("Build Simple NN", "Input layer, 2 hidden layers (128, 64 neurons), output layer"),
            ("Compile Model", "Adam optimizer, categorical crossentropy, accuracy metric"),
            ("Train Model", "Fit for 10 epochs, validation split"),
            ("Evaluate Performance", "Test accuracy, confusion matrix"),
            ("Visualize Predictions", "Show sample predictions with confidence"),
            ("Experiment", "Try different architectures, activations, optimizers")
        ]
    },
    "day17_learning": {
        "title": "Convolutional Neural Networks (CNNs) for Computer Vision",
        "week": "Week 4, Day 2",
        "sections": [
            ("Introduction to CNNs", "Why CNNs for images?"),
            ("Convolutional Layers", "Filters, feature maps, receptive fields"),
            ("Pooling Layers", "Max pooling, average pooling, downsampling"),
            ("CNN Architecture Patterns", "Conv-Pool-Conv-Pool-Dense"),
            ("Famous CNN Architectures", "LeNet, AlexNet, VGG, ResNet"),
            ("Data Augmentation", "Rotation, flip, zoom for better generalization"),
            ("Building CNNs in Keras", "Conv2D, MaxPooling2D, Flatten, Dense")
        ]
    },
    "day17_task": {
        "title": "Image Classification: CIFAR-10 with CNN",
        "week": "Week 4, Day 2",
        "tasks": [
            ("Load CIFAR-10 Dataset", "50k training, 10k test (10 classes)"),
            ("Data Preprocessing", "Normalize, one-hot encode labels"),
            ("Build CNN Architecture", "3 Conv blocks (32, 64, 128 filters) + Max Pooling"),
            ("Add Regularization", "Dropout layers, L2 regularization"),
            ("Data Augmentation", "ImageDataGenerator: rotation, flip, zoom"),
            ("Train with Callbacks", "ModelCheckpoint, EarlyStopping, ReduceLROnPlateau"),
            ("Evaluate & Visualize", "Test accuracy, plot training history"),
            ("Analyze Mistakes", "Show misclassified images, confusion matrix"),
            ("Bonus: Grad-CAM", "Visualize what CNN is looking at")
        ]
    },
    "day18_learning": {
        "title": "Transfer Learning & Pretrained Models",
        "week": "Week 4, Day 3",
        "sections": [
            ("What is Transfer Learning?", "Leverage pre-trained models"),
            ("Why Transfer Learning Works", "Features learned on ImageNet generalize"),
            ("Pretrained Models", "VGG16, ResNet50, InceptionV3, MobileNet, EfficientNet"),
            ("Feature Extraction", "Use conv base as feature extractor, train new classifier"),
            ("Fine-Tuning", "Unfreeze top layers, train with low learning rate"),
            ("Transfer Learning Workflow", "Load model, freeze layers, add custom head, train"),
            ("Best Practices", "When to use feature extraction vs fine-tuning")
        ]
    },
    "day18_task": {
        "title": "Custom Image Classification with Transfer Learning",
        "week": "Week 4, Day 3",
        "tasks": [
            ("Dataset Selection", "Use Cats vs Dogs or Flowers dataset"),
            ("Data Preparation", "Split train/val/test, create data generators"),
            ("Feature Extraction Approach", "Load VGG16/ResNet50, freeze conv layers"),
            ("Add Custom Classifier", "GlobalAveragePooling, Dense layers, output layer"),
            ("Train Model", "Compile, fit with data augmentation"),
            ("Evaluate Performance", "Accuracy, confusion matrix, sample predictions"),
            ("Fine-Tuning", "Unfreeze last conv block, train with low LR (1e-5)"),
            ("Compare Results", "Feature extraction vs fine-tuning performance"),
            ("Bonus: Multiple Models", "Try MobileNet, InceptionV3, compare speeds")
        ]
    },
    "day19_learning": {
        "title": "Model Deployment & MLOps Basics",
        "week": "Week 4, Day 4",
        "sections": [
            ("ML in Production", "Challenges of deploying models"),
            ("Saving & Loading Models", "Pickle, Joblib, SavedModel format"),
            ("Model Serving", "REST API with Flask/FastAPI"),
            ("Docker Containers", "Containerize ML applications"),
            ("Model Monitoring", "Track performance drift"),
            ("MLOps Pipeline", "Train, version, deploy, monitor"),
            ("Cloud Deployment", "AWS SageMaker, GCP AI Platform, Azure ML")
        ]
    },
    "day19_task": {
        "title": "Deploy ML Model as REST API",
        "week": "Week 4, Day 4",
        "tasks": [
            ("Train & Save Model", "Train classifier on Iris, save with joblib"),
            ("Create Flask API", "Endpoint /predict accepts JSON features"),
            ("Input Validation", "Check feature count, data types"),
            ("Make Predictions", "Load model, predict, return JSON response"),
            ("Test Locally", "Use Postman or curl to test API"),
            ("Add Error Handling", "Try-except blocks, return error messages"),
            ("Dockerize Application", "Create Dockerfile, build image"),
            ("Bonus: FastAPI", "Rebuild with FastAPI, automatic docs, async"),
            ("Bonus: Cloud Deploy", "Deploy to Heroku or AWS Lambda")
        ]
    },
    "day20_learning": {
        "title": "Final Capstone Project Overview",
        "week": "Week 4, Day 5",
        "sections": [
            ("Project Requirements", "End-to-end computer vision or ML project"),
            ("Project Ideas", "Object detection, facial recognition, medical image classification"),
            ("Project Structure", "Data, notebooks, models, deployment, README"),
            ("Best Practices", "Version control, documentation, testing"),
            ("Presentation Tips", "Problem, approach, results, deployment"),
            ("Career Next Steps", "Portfolio building, interviews, continued learning"),
            ("Resources", "Courses, papers, communities")
        ]
    },
    "day20_task": {
        "title": "Final Capstone Project",
        "week": "Week 4, Day 5",
        "tasks": [
            ("Project Selection", "Choose ambitious CV/ML project aligned with interests"),
            ("Data Collection", "Gather or use existing dataset (min 1000 samples)"),
            ("EDA & Preprocessing", "Comprehensive analysis, cleaning, augmentation"),
            ("Model Development", "Try multiple approaches, deep learning preferred"),
            ("Hyperparameter Optimization", "Systematic tuning for best performance"),
            ("Model Evaluation", "Detailed metrics, visualizations, error analysis"),
            ("Deployment", "Create API or web app demonstrating model"),
            ("Documentation", "README with problem, solution, results, deployment"),
            ("Presentation", "10-min video or slides explaining project"),
            ("GitHub Repository", "Clean, professional repo with all code")
        ]
    }
}

def generate_learning_doc(day_num, content):
    title = content['title']
    week = content['week']
    sections = content['sections']
    
    sections_code = ""
    for idx, (section_title, section_desc) in enumerate(sections, 1):
        sections_code += f'''
                <Section number="{idx}" title="{section_title}">
                  <p className="text-gray-700 mb-4">
                    {section_desc}
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                    <pre>{"{`# Code examples for " + section_title + "\\nimport numpy as np\\nimport pandas as pd\\nfrom sklearn.model_selection import train_test_split\\n\\n# Implementation code here\\nprint('Day " + str(day_num) + " - " + section_title + "')`}"}</pre>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Key concept 1 for {section_title}</li>
                    <li>Key concept 2 for {section_title}</li>
                    <li>Best practices and tips</li>
                  </ul>
                </Section>'''
    
    return f'''import React from 'react';
import {{ ReactNode }} from 'react';
import {{ SectionProps }} from './src/types';
import {{ BookOpen, Brain }} from 'lucide-react';
import PDFExportButton from './src/components/PDFExportButton';

const Day{day_num}LearningDoc = () => {{
  return (
    <>
      <PDFExportButton elementId="day{day_num}-card" filename="Day{day_num}_{title.replace(' ', '_').replace(':', '')}.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day{day_num}-card" style={{{{padding: '10px', backgroundColor: 'transparent'}}}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={{32}} />
                <h1 className="text-3xl font-bold">Learning Document</h1>
              </div>
              <p className="text-indigo-100 text-lg">Day {day_num} - {week}</p>
            </div>
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  🎯 {title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive guide to {title.lower()}, covering fundamental concepts, 
                  practical implementations, and best practices for real-world applications.
                </p>
              </div>
              <div className="space-y-8">
                {sections_code}
              </div>
            </div>
            <div className="bg-gray-100 p-6 text-center text-gray-600">
              <p className="text-sm">DeepVisionAI Internship Program</p>
              <p className="text-xs mt-1">{week.split(',')[0]} - {'Machine Learning' if day_num <= 15 else 'Deep Learning & Deployment'}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}};

const Section: React.FC<SectionProps> = ({{ number, title, children }}) => {{
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Brain className="text-indigo-600" size={{28}} />
        {{number}}. {{title}}
      </h3>
      {{children}}
    </div>
  );
}};

export default Day{day_num}LearningDoc;
'''

def generate_task_doc(day_num, content):
    title = content['title']
    week = content['week']
    tasks = content['tasks']
    
    tasks_code = ""
    for idx, (task_title, task_desc) in enumerate(tasks, 1):
        tasks_code += f'''
              <Task number="{idx}" title="{task_title}">
                <p className="text-gray-700 mb-3">{task_desc}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Implement {task_title.lower()} functionality</li>
                  <li>Validate results and ensure correctness</li>
                  <li>Document findings and insights</li>
                </ul>
              </Task>'''
    
    return f'''import React from 'react';
import {{ TaskProps }} from './src/types';
import {{ Target, CheckSquare, AlertCircle, Award, Send }} from 'lucide-react';

const Day{day_num}TaskDoc = () => {{
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Target size={{32}} />
              <h1 className="text-3xl font-bold">Task File (Assignment)</h1>
            </div>
            <p className="text-purple-100 text-lg">Day {day_num} - {week}</p>
          </div>
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                🎯 {title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Complete hands-on project implementing {title.lower()}. Apply concepts learned 
                in Day {day_num} to solve real-world problems.
              </p>
            </div>
            <div className="space-y-6">
              {tasks_code}
            </div>

            <div className="mt-8 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <div className="flex items-start gap-3">
                <Send className="text-purple-600 mt-1" size={{24}} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">Submission Requirements:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Complete Jupyter Notebook with all tasks</li>
                    <li>✅ All visualizations and metrics included</li>
                    <li>✅ Code well-commented and organized</li>
                    <li>✅ Written analysis and conclusions</li>
                    <li>✅ Professional presentation of results</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-yellow-600" size={{28}} />
                <h3 className="text-xl font-bold text-gray-800">Evaluation Rubric</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <tr>
                      <th className="border border-gray-300 px-6 py-3 text-left">Criteria</th>
                      <th className="border border-gray-300 px-6 py-3 text-center">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Task completion and correctness</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">40</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Code quality and organization</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Analysis and insights</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">20</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4">Visualizations and documentation</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">15</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-6 py-4">Creativity and going beyond requirements</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">5</td>
                    </tr>
                    <tr className="bg-gradient-to-r from-purple-100 to-pink-100 font-bold">
                      <td className="border border-gray-300 px-6 py-4 text-gray-800">Total Points</td>
                      <td className="px-6 py-4 text-gray-800">100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-yellow-600 mt-1" size={{24}} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">💡 Tips for Success:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>📊 Start with data exploration before modeling</li>
                    <li>🧪 Experiment with different approaches</li>
                    <li>📝 Document your thought process and decisions</li>
                    <li>🎯 Focus on understanding, not just completing tasks</li>
                    <li>🤝 Ask questions if stuck - learning is a journey!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-6 text-center text-gray-600">
            <p className="text-sm">DeepVisionAI Internship Program</p>
            <p className="text-xs mt-1">{week.split(',')[0]} - {'Machine Learning' if day_num <= 15 else 'Deep Learning & Deployment'}</p>
          </div>
        </div>
      </div>
    </>
  );
}};

const Task: React.FC<TaskProps> = ({{ number, title, children }}) => {{
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
      <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <CheckSquare className="text-purple-600" size={{24}} />
        Task {{number}}: {{title}}
      </h3>
      {{children}}
    </div>
  );
}};

export default Day{day_num}TaskDoc;
'''

# Generate all files
import os

base_path = r"c:\Users\Hassan Ali Mehdi\OneDrive\Documents\Deep Vision AI"

for day_num in range(14, 21):
    learning_key = f"day{day_num}_learning"
    task_key = f"day{day_num}_task"
    
    # Generate learning doc
    if learning_key in days_content:
        learning_content = generate_learning_doc(day_num, days_content[learning_key])
        learning_path = os.path.join(base_path, f"day{day_num}_learning_doc.tsx")
        with open(learning_path, 'w', encoding='utf-8') as f:
            f.write(learning_content)
        print(f"✅ Created {learning_path}")
    
    # Generate task doc
    if task_key in days_content:
        task_content = generate_task_doc(day_num, days_content[task_key])
        task_path = os.path.join(base_path, f"day{day_num}_task_doc.tsx")
        with open(task_path, 'w', encoding='utf-8') as f:
            f.write(task_content)
        print(f"✅ Created {task_path}")

print("\\n🎉 All Days 14-20 files generated successfully!")
