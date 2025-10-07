#!/usr/bin/env python3
"""
Add PDF Export functionality to all missing day files
"""
import os
import re

base_path = r"c:\Users\Hassan Ali Mehdi\OneDrive\Documents\Deep Vision AI"

# Files that need PDF export added
files_to_update = [
    "day2_learning_doc.tsx", "day3_learning_doc.tsx", "day4_learning_doc.tsx",
    "day5_learning_doc.tsx", "day6_learning_doc.tsx", "day7_learning_doc.tsx",
    "day8_learning_doc.tsx", "day9_learning_doc.tsx", "day10_learning_doc.tsx",
    "day1_task_doc.tsx", "day2_task_doc.tsx", "day3_task_doc.tsx",
    "day4_task_doc.tsx", "day5_task_doc.tsx", "day6_task_doc.tsx",
    "day7_task_doc.tsx", "day8_task_doc.tsx", "day9_task_doc.tsx",
    "day10_task_doc.tsx", "day11_task_doc.tsx", "day12_task_doc.tsx",
    "day13_task_doc.tsx", "day14_task_doc.tsx", "day15_task_doc.tsx",
    "day16_task_doc.tsx", "day17_task_doc.tsx", "day18_task_doc.tsx",
    "day19_task_doc.tsx", "day20_task_doc.tsx"
]

def add_pdf_export_to_file(filepath):
    """Add PDF export button and structure to a file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract day number and type from filename
    filename = os.path.basename(filepath)
    match = re.match(r'day(\d+)_(learning|task)_doc\.tsx', filename)
    if not match:
        print(f"❌ Skipping {filename} - invalid format")
        return False
    
    day_num = match.group(1)
    doc_type = match.group(2)
    
    # Check if already has PDFExportButton
    if 'PDFExportButton' in content:
        print(f"⏭️  Skipping {filename} - already has PDF export")
        return False
    
    # Determine title based on file type
    if doc_type == 'learning':
        title_placeholder = "Learning_Document"
    else:
        title_placeholder = "Task_Document"
    
    # Step 1: Add import for PDFExportButton (after other imports)
    if "import PDFExportButton" not in content:
        # Find the last import statement
        import_pattern = r"(import .+ from .+;)\n"
        imports = list(re.finditer(import_pattern, content))
        if imports:
            last_import_pos = imports[-1].end()
            content = (content[:last_import_pos] + 
                      "import PDFExportButton from './src/components/PDFExportButton';\n" +
                      content[last_import_pos:])
    
    # Step 2: Add PDFExportButton and wrapper structure
    # Find the return statement and first div
    return_pattern = r'(return\s*\(\s*)'
    
    if doc_type == 'learning':
        # For learning docs, wrap with PDF export structure
        new_structure = f'''return (
    <>
      <PDFExportButton elementId="day{day_num}-card" filename="Day{day_num}_{title_placeholder}.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
        <div id="day{day_num}-card" style={{{{padding: '10px', backgroundColor: 'transparent'}}}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">'''
        
        # Find and replace the return and opening divs
        content = re.sub(
            r'return\s*\(\s*<div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">\s*<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">',
            new_structure,
            content
        )
        
        # Add closing tags before the final closing parenthesis of return
        content = re.sub(
            r'(\s*</div>\s*</div>\s*\)\s*;?\s*};\s*const Section)',
            r'\n        </div>\n      </div>\n    </>\n  );\n};\n\nconst Section',
            content
        )
        
    else:
        # For task docs, just add PDFExportButton at the beginning
        new_structure = f'''return (
    <>
      <PDFExportButton elementId="day{day_num}-task-card" filename="Day{day_num}_{title_placeholder}.pdf" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <div id="day{day_num}-task-card" style={{{{padding: '10px', backgroundColor: 'transparent'}}}}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">'''
        
        # Find and replace the return and opening divs
        content = re.sub(
            r'return\s*\(\s*<div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">\s*<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">',
            new_structure,
            content
        )
        
        # Add closing tags before the final closing parenthesis of return
        content = re.sub(
            r'(\s*</div>\s*</div>\s*\)\s*;?\s*};\s*const Task)',
            r'\n        </div>\n      </div>\n    </>\n  );\n};\n\nconst Task',
            content
        )
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Added PDF export to {filename}")
    return True

# Process all files
updated_count = 0
for filename in files_to_update:
    filepath = os.path.join(base_path, filename)
    if os.path.exists(filepath):
        if add_pdf_export_to_file(filepath):
            updated_count += 1
    else:
        print(f"❌ File not found: {filename}")

print(f"\n🎉 Updated {updated_count} files with PDF export functionality!")
