#!/usr/bin/env python3
"""
Fix PDF Export for days 2, 3, 4 - manual approach
"""
import os
import re

base_path = r"c:\Users\Hassan Ali Mehdi\OneDrive\Documents\Deep Vision AI"

# Files that need manual fixing
files_to_fix = [
    ("day2_learning_doc.tsx", "2", "learning"),
    ("day3_learning_doc.tsx", "3", "learning"),
    ("day4_learning_doc.tsx", "4", "learning"),
    ("day3_task_doc.tsx", "3", "task"),
    ("day4_task_doc.tsx", "4", "task"),
]

def fix_learning_doc(filepath, day_num):
    """Fix learning document structure"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the return statement start
    # Replace:  return (\n    <div className="min-h-screen...
    # With: return (\n    <>\n      <PDFExportButton... />\n      <div className="min-h-screen...
    
    pattern = r'return \(\s*<div className="min-h-screen bg-gradient-to-br from-(blue|indigo)-50 to-(indigo|blue)-100 p-8">\s*<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">'
    
    replacement = f'''return (
    <>
      <PDFExportButton elementId="day{day_num}-card" filename="Day{day_num}_Learning_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day{day_num}-card" style={{{{padding: '10px', backgroundColor: 'transparent'}}}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">'''
    
    content = re.sub(pattern, replacement, content)
    
    # Fix the closing: before the last </div>\n  );\n};
    # Add the wrapper closing tags
    pattern2 = r'(</div>\s*</div>\s*\)\s*;\s*};\s*const Section)'
    replacement2 = '''</div>
        </div>
      </div>
    </>
  );
};

const Section'''
    
    content = re.sub(pattern2, replacement2, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def fix_task_doc(filepath, day_num):
    """Fix task document structure"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the return statement
    pattern = r'return \(\s*<div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">\s*<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">'
    
    replacement = f'''return (
    <>
      <PDFExportButton elementId="day{day_num}-task-card" filename="Day{day_num}_Task_Document.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div id="day{day_num}-task-card" style={{{{padding: '10px', backgroundColor: 'transparent'}}}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">'''
    
    content = re.sub(pattern, replacement, content)
    
    # Fix the closing
    pattern2 = r'(</div>\s*</div>\s*\)\s*;\s*};\s*const Task)'
    replacement2 = '''</div>
        </div>
      </div>
    </>
  );
};

const Task'''
    
    content = re.sub(pattern2, replacement2, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

# Process files
for filename, day_num, doc_type in files_to_fix:
    filepath = os.path.join(base_path, filename)
    if os.path.exists(filepath):
        if doc_type == "learning":
            fix_learning_doc(filepath, day_num)
        else:
            fix_task_doc(filepath, day_num)
        print(f"✅ Fixed {filename}")
    else:
        print(f"❌ File not found: {filename}")

print("\n🎉 All files fixed!")
