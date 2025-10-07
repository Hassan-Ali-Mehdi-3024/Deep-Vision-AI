import React from 'react';
import { Download } from 'lucide-react';
import { exportToPDF } from '../utils/pdfExport';

interface PDFExportButtonProps {
  elementId: string;
  filename: string;
  label?: string;
}

const PDFExportButton: React.FC<PDFExportButtonProps> = ({ 
  elementId, 
  filename, 
  label = 'Export to PDF' 
}) => {
  const handleExport = () => {
    exportToPDF(elementId, filename);
  };

  return (
    <button
      onClick={handleExport}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 z-50"
    >
      <Download size={20} />
      {label}
    </button>
  );
};

export default PDFExportButton;
