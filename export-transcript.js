/**
 * Bologna Process Simulator - Export Student Path Transcript Utility
 * Department of Computer Science - University of Baghdad
 */

/**
 * Loads html2canvas from multiple CDN fallbacks if not already loaded.
 */
async function ensureHtml2CanvasLoaded() {
    if (typeof html2canvas !== 'undefined') return true;

    const cdnUrls = [
        'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
        'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js',
        'https://unpkg.com/html2canvas@1.4.1/dist/html2canvas.js'
    ];

    for (const url of cdnUrls) {
        try {
            await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = url;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
            if (typeof html2canvas !== 'undefined') return true;
        } catch (e) {
            console.warn(`Failed to load html2canvas from ${url}, trying fallback...`);
        }
    }

    throw new Error("Unable to load html2canvas library from any CDN.");
}

/**
 * Captures transcript pages (1 Stage per Page Sheet) and downloads them as high-resolution PNG images.
 * Image filenames format: "مسار الطالب - [اسم المرحلة].png"
 * Mobile Portrait format (480px) on 100% Solid White Background.
 */
async function exportTranscriptAsImage() {
    const pages = Array.from(document.querySelectorAll('.exportable-transcript-page'));
    const exportBtn = document.getElementById('btnExportImage');

    if (pages.length === 0) {
        console.error("No transcript pages found to export.");
        if (typeof showAppAlert === 'function') {
            await showAppAlert("لم يتم العثور على صفحات لاستخراجها. يرجى فتح مسار الطالب أولاً.", "تنبيه", "ℹ️");
        }
        return;
    }

    if (exportBtn) {
        exportBtn.disabled = true;
    }

    try {
        await ensureHtml2CanvasLoaded();

        const totalPages = pages.length;

        for (let i = 0; i < totalPages; i++) {
            const pageElem = pages[i];
            const stageTitleAttr = pageElem.getAttribute('data-stage-name');
            const filename = stageTitleAttr ? `${stageTitleAttr}.png` : `مسار_الطالب_المرحلة_${i + 1}.png`;

            if (exportBtn) {
                exportBtn.innerHTML = `⏳ جاري استخراج (${i + 1} من ${totalPages})...`;
            }

            await renderAndDownloadMobilePortraitPage(pageElem, filename);
            await new Promise(r => setTimeout(r, 350));
        }

        if (typeof showAppAlert === 'function') {
            await showAppAlert(`تم استخراج وتحميل مسار الطالب كـ (${totalPages}) صور لمراحل الدراسة بنجاح! 📸📄`, "نجاح الاستخراج", "✅");
        }
    } catch (error) {
        console.error("Failed to export transcript image:", error);
        if (typeof showAppAlert === 'function') {
            await showAppAlert("حدث خطأ أثناء استخراج مسار الطالب. يرجى التأكد من اتصال الإنترنت وإعادة المحاولة.", "خطأ بالاستخراج", "⚠️");
        }
    } finally {
        if (exportBtn) {
            exportBtn.disabled = false;
            exportBtn.innerHTML = `📸 تحميل مسار الطالب كصورة (PNG)`;
        }
    }
}

async function renderAndDownloadMobilePortraitPage(sourceElement, filename) {
    // Mobile Screen Portrait width: 480px
    const EXPORT_WIDTH = 480;

    // Dedicated fixed container visible in DOM viewport rendering hierarchy but below normal content
    const renderContainer = document.createElement('div');
    renderContainer.style.position = 'fixed';
    renderContainer.style.left = '0';
    renderContainer.style.top = '0';
    renderContainer.style.width = `${EXPORT_WIDTH}px`;
    renderContainer.style.background = '#ffffff';
    renderContainer.style.boxSizing = 'border-box';
    renderContainer.style.zIndex = '-99999';
    renderContainer.style.opacity = '1';
    renderContainer.style.pointerEvents = 'none';
    renderContainer.style.overflow = 'visible';

    const clone = sourceElement.cloneNode(true);
    clone.style.width = `${EXPORT_WIDTH}px`;
    clone.style.height = 'auto';
    clone.style.margin = '0';
    clone.style.padding = '24px 20px';
    clone.style.boxShadow = 'none';
    clone.style.borderRadius = '0';
    clone.style.webkitFontSmoothing = 'antialiased';
    clone.style.mozOsxFontSmoothing = 'grayscale';
    clone.style.textRendering = 'optimizeLegibility';

    renderContainer.appendChild(clone);
    document.body.appendChild(renderContainer);

    // Wait for layout computation, fonts, and reflow
    await new Promise(r => setTimeout(r, 200));

    try {
        const renderHeight = Math.max(renderContainer.scrollHeight, renderContainer.offsetHeight, 400);

        const canvas = await html2canvas(renderContainer, {
            scale: 4,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
            scrollX: 0,
            scrollY: 0,
            x: 0,
            y: 0,
            width: EXPORT_WIDTH,
            height: renderHeight,
            windowWidth: EXPORT_WIDTH,
            windowHeight: renderHeight,
            imageTimeout: 0
        });

        const imageURI = canvas.toDataURL("image/png");
        const downloadLink = document.createElement('a');
        downloadLink.href = imageURI;
        downloadLink.download = filename;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    } finally {
        if (renderContainer.parentNode) {
            renderContainer.parentNode.removeChild(renderContainer);
        }
    }
}
