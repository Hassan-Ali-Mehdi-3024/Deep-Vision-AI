import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { BookOpen, FileText } from 'lucide-react'

// Import all day components
import Day1Learning from '../day1_learning_doc.tsx'
import Day1Task from '../day1_task_doc.tsx'
import Day2Learning from '../day2_learning_doc.tsx'
import Day2Task from '../day2_task_doc.tsx'
import Day3Learning from '../day3_learning_doc.tsx'
import Day3Task from '../day3_task_doc.tsx'
import Day4Learning from '../day4_learning_doc'
import Day4Task from '../day4_task_doc'
import Day5Learning from '../day5_learning_doc'
import Day5Task from '../day5_task_doc'
import Day6Learning from '../day6_learning_doc'
import Day6Task from '../day6_task_doc'
import Day7Learning from '../day7_learning_doc'
import Day7Task from '../day7_task_doc'
import Day8Learning from '../day8_learning_doc'
import Day8Task from '../day8_task_doc'
import Day9Learning from '../day9_learning_doc'
import Day9Task from '../day9_task_doc'
import Day10Learning from '../day10_learning_doc'
import Day10Task from '../day10_task_doc'
import Day11Learning from '../day11_learning_doc'
import Day11Task from '../day11_task_doc'
import Day12Learning from '../day12_learning_doc'
import Day12Task from '../day12_task_doc'
import Day13Learning from '../day13_learning_doc'
import Day13Task from '../day13_task_doc'
import Day14Learning from '../day14_learning_doc'
import Day14Task from '../day14_task_doc'
import Day15Learning from '../day15_learning_doc'
import Day15Task from '../day15_task_doc'
import Day16Learning from '../day16_learning_doc'
import Day16Task from '../day16_task_doc'
import Day17Learning from '../day17_learning_doc'
import Day17Task from '../day17_task_doc'
import Day18Learning from '../day18_learning_doc'
import Day18Task from '../day18_task_doc'
import Day19Learning from '../day19_learning_doc'
import Day19Task from '../day19_task_doc'
import Day20Learning from '../day20_learning_doc'
import Day20Task from '../day20_task_doc'

function HomePage() {
  const days = [
    { num: 1, week: 'Week 1, Day 1', learning: 'Introduction to Data Science & Python Setup', task: 'Python Environment Setup & Verification' },
    { num: 2, week: 'Week 1, Day 2', learning: 'Python Data Types & Data Structures', task: 'Data Structures Practice Exercises' },
    { num: 3, week: 'Week 1, Day 3', learning: 'Control Flow, Loops & Functions', task: 'Control Flow Practice Project' },
    { num: 4, week: 'Week 1, Day 4', learning: 'NumPy Arrays & Operations', task: 'NumPy Statistical Analysis Project' },
    { num: 5, week: 'Week 1, Day 5', learning: 'Pandas Data Manipulation', task: 'Pandas Sales Analysis Project' },
    { num: 6, week: 'Week 2, Day 1', learning: 'Data Visualization with Matplotlib & Seaborn', task: 'Visualization Practice Project' },
    { num: 7, week: 'Week 2, Day 2', learning: 'Exploratory Data Analysis (EDA)', task: 'EDA Comprehensive Project' },
    { num: 8, week: 'Week 2, Day 3', learning: 'Statistical Analysis & Hypothesis Testing', task: 'Statistical Analysis Project' },
    { num: 9, week: 'Week 2, Day 4', learning: 'ML Intro & Data Preprocessing', task: 'Data Preprocessing Project' },
    { num: 10, week: 'Week 2, Day 5', learning: 'End-to-End Data Science Workflow', task: 'CAPSTONE: Comprehensive Data Analysis' },
    { num: 11, week: 'Week 3, Day 1', learning: 'Supervised Learning: Regression Algorithms', task: 'Regression Algorithms Comparison Project' },
    { num: 12, week: 'Week 3, Day 2', learning: 'Classification Algorithms', task: 'Iris Species Classification' },
    { num: 13, week: 'Week 3, Day 3', learning: 'Model Evaluation & Cross-Validation', task: 'Credit Card Fraud Detection' },
    { num: 14, week: 'Week 3, Day 4', learning: 'Clustering & Dimensionality Reduction', task: 'Customer Segmentation with K-Means' },
    { num: 15, week: 'Week 3, Day 5', learning: 'Ensemble Methods & Model Stacking', task: 'CAPSTONE: End-to-End ML Pipeline' },
    { num: 16, week: 'Week 4, Day 1', learning: 'Deep Learning Fundamentals', task: 'Build Your First Neural Network (MNIST)' },
    { num: 17, week: 'Week 4, Day 2', learning: 'CNNs for Computer Vision', task: 'Image Classification (CIFAR-10)' },
    { num: 18, week: 'Week 4, Day 3', learning: 'Transfer Learning & Pretrained Models', task: 'Custom Image Classification' },
    { num: 19, week: 'Week 4, Day 4', learning: 'Model Deployment & MLOps Basics', task: 'Deploy ML Model as REST API' },
    { num: 20, week: 'Week 4, Day 5', learning: 'Final Capstone Project Overview', task: 'FINAL CAPSTONE PROJECT' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">🚀 DeepVisionAI Internship Program</h1>
          <p className="text-xl text-white opacity-90">Complete 1-Month Data Science & AI Bootcamp</p>
          <p className="text-sm text-white opacity-75 mt-2">20 Days | 40 Documents | Full ML & Deep Learning Pipeline</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {days.map((day) => (
            <React.Fragment key={day.num}>
              {/* Learning Card */}
              <Link
                to={`/day${day.num}/learning`}
                className="group bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl shadow-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-white" size={28} />
                    <h2 className="text-2xl font-bold text-white">Day {day.num} - Learning</h2>
                  </div>
                  <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {day.week}
                  </span>
                </div>
                <p className="text-white opacity-90">{day.learning}</p>
              </Link>

              {/* Task Card */}
              <Link
                to={`/day${day.num}/task`}
                className={`group rounded-xl shadow-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-200 ${
                  day.num === 10 || day.num === 15 || day.num === 20
                    ? 'bg-gradient-to-br from-orange-500 to-pink-600'
                    : 'bg-gradient-to-br from-purple-600 to-pink-600'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="text-white" size={28} />
                    <h2 className="text-2xl font-bold text-white">
                      Day {day.num} - {day.num === 10 || day.num === 15 || day.num === 20 ? '🏆 CAPSTONE' : 'Task'}
                    </h2>
                  </div>
                  <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {day.week}
                  </span>
                </div>
                <p className="text-white opacity-90">{day.task}</p>
              </Link>
            </React.Fragment>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white opacity-75 text-sm">© 2025 DeepVisionAI Internship Program</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/day1/learning" element={<Day1Learning />} />
        <Route path="/day1/task" element={<Day1Task />} />
        <Route path="/day2/learning" element={<Day2Learning />} />
        <Route path="/day2/task" element={<Day2Task />} />
        <Route path="/day3/learning" element={<Day3Learning />} />
        <Route path="/day3/task" element={<Day3Task />} />
        <Route path="/day4/learning" element={<Day4Learning />} />
        <Route path="/day4/task" element={<Day4Task />} />
        <Route path="/day5/learning" element={<Day5Learning />} />
        <Route path="/day5/task" element={<Day5Task />} />
        <Route path="/day6/learning" element={<Day6Learning />} />
        <Route path="/day6/task" element={<Day6Task />} />
        <Route path="/day7/learning" element={<Day7Learning />} />
        <Route path="/day7/task" element={<Day7Task />} />
        <Route path="/day8/learning" element={<Day8Learning />} />
        <Route path="/day8/task" element={<Day8Task />} />
        <Route path="/day9/learning" element={<Day9Learning />} />
        <Route path="/day9/task" element={<Day9Task />} />
        <Route path="/day10/learning" element={<Day10Learning />} />
        <Route path="/day10/task" element={<Day10Task />} />
        <Route path="/day11/learning" element={<Day11Learning />} />
        <Route path="/day11/task" element={<Day11Task />} />
        <Route path="/day12/learning" element={<Day12Learning />} />
        <Route path="/day12/task" element={<Day12Task />} />
        <Route path="/day13/learning" element={<Day13Learning />} />
        <Route path="/day13/task" element={<Day13Task />} />
        <Route path="/day14/learning" element={<Day14Learning />} />
        <Route path="/day14/task" element={<Day14Task />} />
        <Route path="/day15/learning" element={<Day15Learning />} />
        <Route path="/day15/task" element={<Day15Task />} />
        <Route path="/day16/learning" element={<Day16Learning />} />
        <Route path="/day16/task" element={<Day16Task />} />
        <Route path="/day17/learning" element={<Day17Learning />} />
        <Route path="/day17/task" element={<Day17Task />} />
        <Route path="/day18/learning" element={<Day18Learning />} />
        <Route path="/day18/task" element={<Day18Task />} />
        <Route path="/day19/learning" element={<Day19Learning />} />
        <Route path="/day19/task" element={<Day19Task />} />
        <Route path="/day20/learning" element={<Day20Learning />} />
        <Route path="/day20/task" element={<Day20Task />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
