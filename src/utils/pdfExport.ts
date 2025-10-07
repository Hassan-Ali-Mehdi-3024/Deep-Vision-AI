import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const exportToPDF = async (elementId: string, filename: string) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found');
    return;
  }

  try {
    // Temporarily hide scrollbars and adjust for clean capture
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Capture the element as canvas with optimized settings
    const canvas = await html2canvas(element, {
      scale: 1.5, // Good balance of quality and file size
      useCORS: true,
      logging: false,
      backgroundColor: null, // Transparent background to preserve element's background
      removeContainer: true,
      imageTimeout: 0,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight
    });

    // Restore overflow
    document.body.style.overflow = originalOverflow;

    // Use JPEG with compression for much smaller file size
    const imgData = canvas.toDataURL('image/jpeg', 0.90); // 90% quality for crisp text
    
    // Calculate PDF dimensions to match content exactly
    const imgWidth = canvas.width * 0.264583; // Convert pixels to mm (96 DPI)
    const imgHeight = canvas.height * 0.264583;
    
    // Create PDF with custom size matching the content (one long page)
    const pdf = new jsPDF({
      orientation: imgWidth > imgHeight ? 'landscape' : 'portrait',
      unit: 'mm',
      format: [imgWidth, imgHeight], // Custom size = exact content dimensions
      compress: true // Enable PDF compression
    });

    // Add image with no margins (0, 0 position)
    pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

    // Save the PDF
    pdf.save(filename);
    console.log('PDF generated successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};

export const exportAllDaysToPDF = async () => {
  const days = [
    { num: 1, type: 'learning' },
    { num: 1, type: 'task' },
    { num: 2, type: 'learning' },
    { num: 2, type: 'task' },
    { num: 3, type: 'learning' },
    { num: 3, type: 'task' },
    { num: 4, type: 'learning' },
    { num: 4, type: 'task' },
    { num: 5, type: 'learning' },
    { num: 5, type: 'task' },
    { num: 6, type: 'learning' },
    { num: 6, type: 'task' },
    { num: 7, type: 'learning' },
    { num: 7, type: 'task' },
    { num: 8, type: 'learning' },
    { num: 8, type: 'task' },
    { num: 9, type: 'learning' },
    { num: 9, type: 'task' },
    { num: 10, type: 'learning' },
    { num: 10, type: 'task' },
  ];

  console.log('To export all days, navigate to each day page and click the "Export to PDF" button');
  return days;
};
