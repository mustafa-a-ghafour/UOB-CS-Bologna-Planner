/**
 * Bologna Process Simulator - Export Academic Transcript Utility
 * Department of Computer Science - University of Baghdad
 */

/**
 * Captures an HTML element and downloads it as a high-resolution PNG image
 * @param {string} elementId - ID of the container to capture
 * @param {string} filename - Output file name
 */
async function exportTranscriptAsImage(elementId = "gradModalTranscriptContent", filename = "السجل_الأكاديمي.png") {
    const container = document.getElementById(elementId);
    if (!container) {
        console.error("Target container not found:", elementId);
        return;
    }

    const exportBtn = document.getElementById('btnExportImage');
    if (exportBtn) {
        exportBtn.disabled = true;
        exportBtn.innerHTML = `⏳ جاري توليد الصورة...`;
    }

    try {
        if (typeof html2canvas === 'undefined') {
            await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }

        const canvas = await html2canvas(container, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false,
            windowWidth: container.scrollWidth,
            windowHeight: container.scrollHeight
        });

        const imageURI = canvas.toDataURL("image/png");
        const downloadLink = document.createElement('a');
        downloadLink.href = imageURI;
        downloadLink.download = filename;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        if (typeof showAppAlert === 'function') {
            await showAppAlert("تم استخراج وتحميل السجل الأكاديمي كصورة عالية الدقة بنجاح! 📸", "نجاح الاستخراج", "✅");
        }
    } catch (error) {
        console.error("Failed to export transcript image:", error);
        if (typeof showAppAlert === 'function') {
            await showAppAlert("حدث خطأ أثناء استخراج السجل الأكاديمي. يرجى المحاولة مرة أخرى.", "خطأ بالاستخراج", "⚠️");
        }
    } finally {
        if (exportBtn) {
            exportBtn.disabled = false;
            exportBtn.innerHTML = `📸 تحميل السجل كصورة (PNG)`;
        }
    }
}
