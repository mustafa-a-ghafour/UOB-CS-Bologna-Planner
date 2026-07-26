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

        // Force a consistent desktop-width render for the exported image
        const EXPORT_WIDTH = 1100;
        const origStyles = {
            width: container.style.width,
            maxWidth: container.style.maxWidth,
            minWidth: container.style.minWidth,
            position: container.style.position
        };
        container.style.width = `${EXPORT_WIDTH}px`;
        container.style.maxWidth = `${EXPORT_WIDTH}px`;
        container.style.minWidth = `${EXPORT_WIDTH}px`;

        // Allow layout to recalculate
        await new Promise(r => setTimeout(r, 100));

        const canvas = await html2canvas(container, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false,
            windowWidth: EXPORT_WIDTH,
            windowHeight: container.scrollHeight
        });

        // Restore original styles
        container.style.width = origStyles.width;
        container.style.maxWidth = origStyles.maxWidth;
        container.style.minWidth = origStyles.minWidth;
        container.style.position = origStyles.position;

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
