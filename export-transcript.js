/**
 * Bologna Process Simulator - Export Academic Transcript Utility
 * Department of Computer Science - University of Baghdad
 */

/**
 * Captures transcript pages (1 Stage per Page Sheet) and downloads them as high-resolution PNG images.
 * Image filenames format: "السجل الأكاديمي - [اسم المرحلة].png"
 * Mobile Portrait format (480px) on 100% Solid White Background.
 */
async function exportTranscriptAsImage() {
    const pages = Array.from(document.querySelectorAll('.exportable-transcript-page'));
    const exportBtn = document.getElementById('btnExportImage');

    if (pages.length === 0) {
        console.error("No transcript pages found to export.");
        return;
    }

    if (exportBtn) {
        exportBtn.disabled = true;
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

        const totalPages = pages.length;

        for (let i = 0; i < totalPages; i++) {
            const pageElem = pages[i];
            const stageTitleAttr = pageElem.getAttribute('data-stage-name');
            const filename = stageTitleAttr ? `${stageTitleAttr}.png` : `السجل_الأكاديمي_المرحلة_${i + 1}.png`;

            if (exportBtn) {
                exportBtn.innerHTML = `⏳ جاري استخراج (${i + 1} من ${totalPages})...`;
            }

            await renderAndDownloadMobilePortraitPage(pageElem, filename);
            await new Promise(r => setTimeout(r, 400));
        }

        if (typeof showAppAlert === 'function') {
            await showAppAlert(`تم استخراج وتحميل السجل الأكاديمي كـ (${totalPages}) صور لمراحل الدراسة بنجاح! 📸📄`, "نجاح الاستخراج", "✅");
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

async function renderAndDownloadMobilePortraitPage(sourceElement, filename) {
    // Mobile Screen Portrait width: 480px
    const EXPORT_WIDTH = 480;

    // Dedicated off-screen container with 100% solid white background
    const renderContainer = document.createElement('div');
    renderContainer.style.position = 'absolute';
    renderContainer.style.left = '-9999px';
    renderContainer.style.top = '0';
    renderContainer.style.width = `${EXPORT_WIDTH}px`;
    renderContainer.style.background = '#ffffff';
    renderContainer.style.boxSizing = 'border-box';
    renderContainer.style.zIndex = '-9999';
    renderContainer.style.overflow = 'visible';

    const clone = sourceElement.cloneNode(true);
    clone.style.width = `${EXPORT_WIDTH}px`;
    clone.style.height = 'auto';
    clone.style.margin = '0';
    clone.style.padding = '24px 20px';
    clone.style.boxShadow = 'none';
    clone.style.borderRadius = '0';
    clone.style.background = '#ffffff';
    clone.style.transform = 'none';
    clone.style.boxSizing = 'border-box';
    clone.style.overflow = 'visible';

    renderContainer.appendChild(clone);
    document.body.appendChild(renderContainer);

    // Wait for layout computation and font rendering
    await new Promise(r => setTimeout(r, 250));

    const fullHeight = renderContainer.offsetHeight;

    const canvas = await html2canvas(renderContainer, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: EXPORT_WIDTH,
        height: fullHeight,
        windowWidth: EXPORT_WIDTH,
        windowHeight: fullHeight
    });

    document.body.removeChild(renderContainer);

    const imageURI = canvas.toDataURL("image/png");
    const downloadLink = document.createElement('a');
    downloadLink.href = imageURI;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
