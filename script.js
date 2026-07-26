/**
 * Bologna Process Interactive Student Journey Simulator
 * Department of Computer Science - University of Baghdad
 */

// --------------------------------------------------------------------------
// 1. Official Curriculum Data
// --------------------------------------------------------------------------
const curriculumData = [
  // Stage 1 - Course 1 (Semester 1)
  { code: "CSC11001", nameAr: "اساسيات البرمجة 1", nameEn: "Programming Fundamentals I", sem: 1, ects: 8, prereq: [] },
  { code: "CSC11002", nameAr: "تركيب الحاسوب", nameEn: "Computer Organization", sem: 1, ects: 7, prereq: [] },
  { code: "CSC11003", nameAr: "مقدمة الى علم الحاسوب", nameEn: "Introduction to Computer Science", sem: 1, ects: 5, prereq: [] },
  { code: "CSC11004", nameAr: "حساب التفاضل و التكامل", nameEn: "Calculus", sem: 1, ects: 6, prereq: [] },
  { code: "UOB102", nameAr: "اللغة الانكليزية 1", nameEn: "English Language I", sem: 1, ects: 2, prereq: [] },
  { code: "UOB104", nameAr: "الديمقراطية و حقوق الانسان", nameEn: "Democracy and Human Rights", sem: 1, ects: 2, prereq: [] },
  
  // Stage 1 - Course 2 (Semester 2)
  { code: "CSC12105", nameAr: "اساسيات البرمجة 2", nameEn: "Programming Fundamentals II", sem: 2, ects: 8, prereq: ["CSC11001"] },
  { code: "CSC12006", nameAr: "هياكل متقطعة", nameEn: "Discrete Structures", sem: 2, ects: 6, prereq: [] },
  { code: "CSC12007", nameAr: "المنطق الرقمي", nameEn: "Digital Logic", sem: 2, ects: 7, prereq: [] },
  { code: "CSC12008", nameAr: "مهارات الكتابة الاكاديمية", nameEn: "Academic Writing Skills", sem: 2, ects: 5, prereq: [] },
  { code: "CSC12009", nameAr: "الاحتمالية و الاحصاء", nameEn: "Probability and Statistics", sem: 2, ects: 2, prereq: [] },
  { code: "UOB101", nameAr: "اللغة العربية 1", nameEn: "Arabic Language I", sem: 2, ects: 2, prereq: [] },
  
  // Stage 2 - Course 1 (Semester 3) - [English 2: UOB202]
  { code: "CSC23110", nameAr: "هياكل بيانات", nameEn: "Data Structures", sem: 3, ects: 6, prereq: ["CSC12105"] },
  { code: "CSC23111", nameAr: "برمجة كيانية", nameEn: "Object Oriented Programming", sem: 3, ects: 6, prereq: ["CSC12105"] },
  { code: "CSC23112", nameAr: "طرائق عددية", nameEn: "Numerical Methods", sem: 3, ects: 5, prereq: ["CSC11004"] },
  { code: "CSC23113", nameAr: "النظرية الاحتسابية", nameEn: "Computation Theory", sem: 3, ects: 5, prereq: ["CSC12006"] },
  { code: "CSC23114", nameAr: "برمجة مرئية", nameEn: "Visual Programming", sem: 3, ects: 6, prereq: ["CSC12105"] },
  { code: "UOB202", nameAr: "اللغة الانكليزية 2", nameEn: "English Language II", sem: 3, ects: 2, prereq: [] },
  
  // Stage 2 - Course 2 (Semester 4) - [Baath Regime Crimes: UOB105]
  { code: "CSC24115", nameAr: "تصميم و تحليل الخوارزميات", nameEn: "Algorithms Design and Analysis", sem: 4, ects: 7, prereq: ["CSC23110"] },
  { code: "CSC24116", nameAr: "لغة للأغراض العامة", nameEn: "General-Purpose Language", sem: 4, ects: 7, prereq: ["CSC23111"] },
  { code: "CSC24117", nameAr: "مترجمات", nameEn: "Compilers", sem: 4, ects: 6, prereq: ["CSC23113", "CSC12105"] },
  { code: "CSC24018", nameAr: "تصميم و برمجة الويب", nameEn: "Web Design and Programming", sem: 4, ects: 6, prereq: [] },
  { code: "UOB201", nameAr: "اللغة العربية 2", nameEn: "Arabic Language II", sem: 4, ects: 2, prereq: [] },
  { code: "UOB105", nameAr: "جرائم نظام البعث في العراق", nameEn: "Baath Regime Crimes in Iraq", sem: 4, ects: 2, prereq: [] },
  
  // Stage 3 - Course 1 (Semester 5)
  { code: "CSC35119", nameAr: "ذكاء اصطناعي", nameEn: "Artificial Intelligence", sem: 5, ects: 6, prereq: ["CSC12006", "CSC24115", "CSC24116"] },
  { code: "CSC35120", nameAr: "شبكات الحاسوب", nameEn: "Computer Networks", sem: 5, ects: 6, prereq: ["CSC11002", "CSC23110"] },
  { code: "CSC35121", nameAr: "امن الحاسوب", nameEn: "Computer Security", sem: 5, ects: 5, prereq: ["CSC11002"] },
  { code: "CSC35122", nameAr: "تطوير تطبيقات الويب", nameEn: "Web Applications Development", sem: 5, ects: 5, prereq: ["CSC24018"] },
  { code: "CSC35123", nameAr: "هندسة برمجيات", nameEn: "Software Engineering", sem: 5, ects: 4, prereq: ["CSC11003", "CSC23110"] },
  { code: "CSC35124", nameAr: "معمارية الحاسوب", nameEn: "Computer Architecture", sem: 5, ects: 4, prereq: ["CSC11002", "CSC12007", "CSC23110"] },
  
  // Stage 3 - Course 2 (Semester 6)
  { code: "CSC36125", nameAr: "تطوير تطبيقات النقال", nameEn: "Mobile Applications Development", sem: 6, ects: 6, prereq: ["CSC23111"] },
  { code: "CSC36126", nameAr: "رسوم الحاسوب", nameEn: "Computer Graphics", sem: 6, ects: 6, prereq: ["CSC23110"] },
  { code: "CSC36127", nameAr: "تعلم الألة", nameEn: "Machine Learning", sem: 6, ects: 6, prereq: ["CSC12009", "CSC35119"] },
  { code: "CSC36128", nameAr: "أساسيات أنظمة قواعد البيانات", nameEn: "Fundamentals of Database Systems", sem: 6, ects: 6, prereq: ["CSC23110"] },
  { code: "CSC36129", nameAr: "تشفير", nameEn: "Cryptography", sem: 6, ects: 5, prereq: ["CSC12105", "CSC12006"] },
  { code: "UOB309", nameAr: "منهجية البحث العلمي", nameEn: "Scientific Research Methodology", sem: 6, ects: 1, prereq: [] },
  
  // Stage 4 - Course 1 (Semester 7)
  { code: "CSC47130", nameAr: "معالجة الصور الرقمية", nameEn: "Digital Image Processing", sem: 7, ects: 6, prereq: ["CSC11004", "CSC36126"] },
  { code: "CSC47131", nameAr: "أنظمة إدارة قواعد البيانات", nameEn: "Database Management Systems", sem: 7, ects: 6, prereq: ["CSC36128"] },
  { code: "CSC47132", nameAr: "مقدمة الى انترنيت الأشياء", nameEn: "Introduction to IoT", sem: 7, ects: 4, prereq: ["CSC35120"] },
  { code: "CSC47133", nameAr: "نظم تشغيل", nameEn: "Operating Systems", sem: 7, ects: 6, prereq: ["CSC11002", "CSC11003", "CSC23110"] },
  { code: "CSC47134", nameAr: "استرجاع المعلومات", nameEn: "Information Retrieval", sem: 7, ects: 5, prereq: ["CSC24115", "CSC36128"] },
  { code: "CSC47135", nameAr: "مشروع بحث 1", nameEn: "Research Project I", sem: 7, ects: 3, prereq: ["CSC23110", "CSC12008", "UOB309"] },
  
  // Stage 4 - Course 2 (Semester 8)
  { code: "CSC48136", nameAr: "تنقيب بيانات", nameEn: "Data Mining", sem: 8, ects: 6, prereq: ["CSC12009", "CSC24115"] },
  { code: "CSC48137", nameAr: "امن سيبراني", nameEn: "Cybersecurity", sem: 8, ects: 6, prereq: ["CSC36129"] },
  { code: "CSC48138", nameAr: "مقدمة الى الروبوتات", nameEn: "Introduction to Robotics", sem: 8, ects: 5, prereq: ["CSC47132", "CSC35119"] },
  { code: "CSC48139", nameAr: "وسائط متعددة", nameEn: "Multimedia", sem: 8, ects: 6, prereq: ["CSC47130"] },
  { code: "CSC48140", nameAr: "حوسبة متوازية و توزيعية", nameEn: "Parallel and Distributed Computing", sem: 8, ects: 4, prereq: ["CSC47133"] },
  { code: "CSC48141", nameAr: "مشروع بحث 2", nameEn: "Research Project II", sem: 8, ects: 3, prereq: ["CSC47135"] }
];

const curriculumMap = {};
curriculumData.forEach(item => {
    curriculumMap[item.code] = item;
});

/**
 * Check if a given course code is a prerequisite for any course
 * that the student has NOT yet passed.
 * If it IS a prerequisite for unpassed courses → must be forced.
 * If it is NOT → can be safely delayed (optional retake).
 */
function isPrereqForFutureUnpassed(code) {
    return curriculumData.some(c => {
        // Only consider courses the student hasn't passed yet
        if (simulationState.passedModules[c.code] !== null) return false;
        // Check if our code is in this course's prerequisites
        return c.prereq.includes(code);
    });
}

/**
 * Custom In-App Modal Dialog Utilities
 */
function showAppAlert(message, title = "تنبيه أكاديمي", icon = "⚠️") {
    return new Promise((resolve) => {
        const modal = document.getElementById('customAppModal');
        const mIcon = document.getElementById('modalIcon');
        const mTitle = document.getElementById('modalTitle');
        const mMsg = document.getElementById('modalMessage');
        const btnConfirm = document.getElementById('btnModalConfirm');
        const btnCancel = document.getElementById('btnModalCancel');

        mIcon.textContent = icon;
        mTitle.textContent = title;
        mMsg.textContent = message;
        btnCancel.style.display = 'none';
        btnConfirm.textContent = 'حسناً';

        modal.style.display = 'flex';

        const handleConfirm = () => {
            modal.style.display = 'none';
            btnConfirm.removeEventListener('click', handleConfirm);
            resolve();
        };

        btnConfirm.addEventListener('click', handleConfirm);
    });
}

function showAppConfirm(message, title = "تأكيد القرار", icon = "❓") {
    return new Promise((resolve) => {
        const modal = document.getElementById('customAppModal');
        const mIcon = document.getElementById('modalIcon');
        const mTitle = document.getElementById('modalTitle');
        const mMsg = document.getElementById('modalMessage');
        const btnConfirm = document.getElementById('btnModalConfirm');
        const btnCancel = document.getElementById('btnModalCancel');

        mIcon.textContent = icon;
        mTitle.textContent = title;
        mMsg.textContent = message;
        btnCancel.style.display = 'block';
        btnConfirm.textContent = 'تأكيد';
        btnCancel.textContent = 'إلغاء';

        modal.style.display = 'flex';

        const handleConfirm = () => {
            cleanup();
            resolve(true);
        };

        const handleCancel = () => {
            cleanup();
            resolve(false);
        };

        function cleanup() {
            modal.style.display = 'none';
            btnConfirm.removeEventListener('click', handleConfirm);
            btnCancel.removeEventListener('click', handleCancel);
        }

        btnConfirm.addEventListener('click', handleConfirm);
        btnCancel.addEventListener('click', handleCancel);
    });
}

/**
 * Arabic Grammatical Unit Formatter Rule
 */
function formatUnits(num) {
    if (num === 2) {
        return "2 وحدتين";
    } else if (num === 1) {
        return "1 وحدة";
    } else if (num >= 3 && num <= 10) {
        return `${num} وحدات`;
    } else {
        return `${num} وحدة`;
    }
}

function getStageName(stageNum) {
    const names = {
        1: "المرحلة الأولى",
        2: "المرحلة الثانية",
        3: "المرحلة الثالثة",
        4: "المرحلة الرابعة",
        5: "المرحلة الخامسة (تأخير) ⚠️",
        6: "المرحلة السادسة (الحد الأقصى) ⚠️"
    };
    return names[stageNum] || `المرحلة ${stageNum}`;
}

function getCourseName(sem) {
    return (sem % 2 !== 0) ? "الكورس الأول" : "الكورس الثاني";
}

function getFullStageAndCourseName(sem) {
    const stageNum = Math.ceil(sem / 2);
    const courseTitle = getCourseName(sem);
    return `${getStageName(stageNum)} - ${courseTitle}`;
}

// --------------------------------------------------------------------------
// 2. Interactive Process State
// --------------------------------------------------------------------------
const simulationState = {
    currentSem: 1,
    maxReachedSem: 1,
    passedModules: {},
    failedHistory: [],
    history: {},
    activeRegistered: [],
    maxExtraYearsIncurred: 0,
    isDismissed: false,
};

function initSimulation() {
    simulationState.currentSem = 1;
    simulationState.maxReachedSem = 1;
    simulationState.passedModules = {};
    curriculumData.forEach(c => simulationState.passedModules[c.code] = null);
    simulationState.failedHistory = [];
    simulationState.history = {};
    simulationState.maxExtraYearsIncurred = 0;
    simulationState.isDismissed = false;

    setupSemesterRegistration(1);
    renderSimulationUI();
}

function setupSemesterRegistration(sem) {
    // Only these core courses are forced when failed or delayed,
    // because they are foundational prerequisites for many later courses.
    const FORCED_COURSE_CODES = ['CSC11001', 'CSC12105', 'CSC23110'];

    const retakesToRegister = [];
    simulationState.failedHistory.forEach(record => {
        const item = curriculumMap[record.code];
        const isSameSeason = (item.sem % 2 !== 0) === (sem % 2 !== 0);
        const isAlreadyPassed = simulationState.passedModules[record.code] !== null;

        if (isSameSeason && !isAlreadyPassed) {
            if (!retakesToRegister.some(r => r.code === record.code)) {
                const mustForce = FORCED_COURSE_CODES.includes(record.code);
                if (mustForce) {
                    retakesToRegister.push({
                        code: record.code,
                        outcome: 'pass',
                        isRetake: true,
                        isAdded: true,
                        isForced: true
                    });
                }
            }
        }
    });

    // Force-add delayed courses from PREVIOUS semesters that were never taken
    // (not failed, just skipped due to unmet prereqs at the time).
    // Only core courses in the whitelist are forced.
    const delayedForced = [];
    curriculumData.forEach(c => {
        if (c.sem >= sem) return; // only previous semesters
        const isAlreadyPassed = simulationState.passedModules[c.code] !== null;
        if (isAlreadyPassed) return;
        const isSameSeason = (c.sem % 2 !== 0) === (sem % 2 !== 0);
        if (!isSameSeason) return;
        // Skip if already in retakes list
        if (retakesToRegister.some(r => r.code === c.code)) return;
        // Skip special courses
        if ((c.code === 'UOB105' || c.code === 'UOB202') && sem < 3) return;

        const prereqsMet = c.prereq.every(pCode => {
            const pSem = simulationState.passedModules[pCode];
            return pSem !== null && pSem < sem;
        });

        if (prereqsMet && FORCED_COURSE_CODES.includes(c.code)) {
            delayedForced.push({
                code: c.code,
                outcome: 'pass',
                isRetake: false,
                isAdded: true,
                isForced: true
            });
        }
    });

    let currentEcts = retakesToRegister.reduce((sum, r) => sum + curriculumMap[r.code].ects, 0);
    // Add delayed forced within ECTS cap
    const delayedForcedFiltered = [];
    delayedForced.forEach(d => {
        if (currentEcts + curriculumMap[d.code].ects <= 30) {
            delayedForcedFiltered.push(d);
            currentEcts += curriculumMap[d.code].ects;
        }
    });

    const regularToRegister = [];
    const regularCandidates = curriculumData.filter(c => c.sem === sem);

    regularCandidates.forEach(c => {
        if ((c.code === 'UOB105' || c.code === 'UOB202') && sem < 3) return;

        const prereqsMet = c.prereq.every(pCode => {
            const pSem = simulationState.passedModules[pCode];
            return pSem !== null && pSem < sem;
        });

        if (prereqsMet && currentEcts + c.ects <= 30) {
            regularToRegister.push({
                code: c.code,
                outcome: 'pass',
                isRetake: false,
                isAdded: false
            });
            currentEcts += c.ects;
        }
    });

    simulationState.activeRegistered = [...retakesToRegister, ...delayedForcedFiltered, ...regularToRegister];
}

function computeRegistrationPanels(sem) {
    const unpassedUpToCurrentSem = curriculumData.filter(c => {
        const isPassed = simulationState.passedModules[c.code] !== null;
        const isAlreadyInRegistered = simulationState.activeRegistered.some(r => r.code === c.code);
        const isUpToCurrentSem = c.sem <= sem;

        return !isPassed && !isAlreadyInRegistered && isUpToCurrentSem;
    });

    const available = [];
    const blocked = [];

    const isOddActiveSeason = sem % 2 !== 0;

    unpassedUpToCurrentSem.forEach(c => {
        const isSameSeason = (c.sem % 2 !== 0) === isOddActiveSeason;

        if ((c.code === 'UOB105' || c.code === 'UOB202') && sem < 3) {
            blocked.push({
                code: c.code,
                nameAr: c.nameAr,
                ects: c.ects,
                origSem: c.sem,
                lockReason: 'مخصصة للمرحلة الثانية'
            });
            return;
        }

        const missingPrereq = c.prereq.find(pCode => {
            const pSem = simulationState.passedModules[pCode];
            return pSem === null || pSem >= sem;
        });

        if (!missingPrereq && isSameSeason) {
            const isRetake = simulationState.failedHistory.some(f => f.code === c.code);
            available.push({
                code: c.code,
                nameAr: c.nameAr,
                ects: c.ects,
                origSem: c.sem,
                isRetake
            });
        } else {
            const reqModule = missingPrereq ? curriculumMap[missingPrereq] : null;
            const reason = reqModule ? `تتطلب نجاح ${reqModule.nameAr}` : 'كورس غير مطابق';

            blocked.push({
                code: c.code,
                nameAr: c.nameAr,
                ects: c.ects,
                origSem: c.sem,
                lockReason: reason
            });
        }
    });

    return { available, blocked };
}

// --------------------------------------------------------------------------
// 3. UI Rendering Engine
// --------------------------------------------------------------------------

function renderSimulationUI() {
    const sem = simulationState.currentSem;
    const stageNum = Math.ceil(sem / 2);
    const courseTitle = getCourseName(sem);
    const fullSemTitle = getFullStageAndCourseName(sem);
    const nextSemTitle = getFullStageAndCourseName(sem + 1);

    const isDismissed = updateKPIs();

    const activeSemSub = document.getElementById('activeSemesterSub');
    if (activeSemSub) activeSemSub.textContent = `سنة ${stageNum} • ${courseTitle}`;
    
    document.getElementById('builderSemHeading').textContent = fullSemTitle;

    const btnAdvance = document.getElementById('btnAdvanceSemester');
    const btnAdvanceText = document.getElementById('btnAdvanceText');
    const dismissalBanner = document.getElementById('dismissalBanner');

    if (isDismissed) {
        simulationState.isDismissed = true;
        if (dismissalBanner) dismissalBanner.style.display = 'block';
        if (btnAdvanceText) btnAdvanceText.textContent = `🚫 تم ترقين القيد (تجاوز الـ 6 سنوات الدراسية)`;
        if (btnAdvance) {
            btnAdvance.disabled = true;
            btnAdvance.style.background = '#dc2626';
            btnAdvance.style.cursor = 'not-allowed';
            btnAdvance.style.opacity = '0.85';
        }
    } else {
        simulationState.isDismissed = false;
        if (dismissalBanner) dismissalBanner.style.display = 'none';

        // Check if all remaining unpassed courses are registered and set to pass
        const unpassedCodes = curriculumData
            .filter(c => simulationState.passedModules[c.code] === null)
            .map(c => c.code);
        const registeredPassCodes = simulationState.activeRegistered
            .filter(r => r.outcome === 'pass')
            .map(r => r.code);
        const willCompleteAll = unpassedCodes.length > 0 &&
            unpassedCodes.every(code => registeredPassCodes.includes(code));

        if (willCompleteAll) {
            if (btnAdvanceText) btnAdvanceText.textContent = `🎓 إنهاء المسار الدراسي`;
            if (btnAdvance) {
                btnAdvance.disabled = false;
                btnAdvance.style.background = 'linear-gradient(135deg, #15803d 0%, #059669 100%)';
                btnAdvance.style.cursor = 'pointer';
                btnAdvance.style.opacity = '1';
            }
        } else {
            if (btnAdvanceText) btnAdvanceText.textContent = `الإنتقال إلى ${nextSemTitle}`;
            if (btnAdvance) {
                btnAdvance.disabled = false;
                btnAdvance.style.background = 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)';
                btnAdvance.style.cursor = 'pointer';
                btnAdvance.style.opacity = '1';
            }
        }
    }

    const activeEcts = simulationState.activeRegistered.reduce((sum, r) => sum + curriculumMap[r.code].ects, 0);
    const gaugeBadge = document.getElementById('registeredEctsBadge');
    if (gaugeBadge) gaugeBadge.textContent = `${activeEcts} / 30 وحدة`;

    const barCourseEcts = document.getElementById('barCourseEcts');
    if (barCourseEcts) {
        const fillPct = Math.min(100, (activeEcts / 30) * 100);
        barCourseEcts.style.width = `${fillPct}%`;
        if (activeEcts > 30) {
            barCourseEcts.style.background = 'linear-gradient(90deg, #ef4444 0%, #be123c 100%)';
        } else {
            barCourseEcts.style.background = 'linear-gradient(90deg, var(--brand-sky) 0%, var(--brand-indigo) 100%)';
        }
    }

    document.getElementById('registeredCountTag').textContent = `${simulationState.activeRegistered.length} مواد`;

    renderRegisteredGrid();

    const panelsData = computeRegistrationPanels(sem);
    renderRegistrationPanels(panelsData, sem);

    renderTranscriptTable();
}

function updateKPIs() {
    let earnedEcts = 0;
    for (let code in simulationState.passedModules) {
        if (simulationState.passedModules[code] !== null) {
            earnedEcts += curriculumMap[code].ects;
        }
    }

    document.getElementById('valEarnedEcts').textContent = earnedEcts;
    document.getElementById('barEarnedEcts').style.width = `${Math.min(100, (earnedEcts / 240) * 100)}%`;

    const pastFailures = simulationState.failedHistory;
    const currentActiveFailures = simulationState.activeRegistered.filter(r => r.outcome === 'fail');
    const totalFailuresCount = pastFailures.length + currentActiveFailures.length;
    document.getElementById('valFailedHistory').textContent = `${totalFailuresCount} رسوب`;

    const pastRepeatCount = pastFailures.filter(f => f.isRepeat).length;
    const currentActiveRepeatCount = currentActiveFailures.filter(r => r.isRetake).length;
    const totalRepeatCount = pastRepeatCount + currentActiveRepeatCount;

    let computedExtraYears = 0;

    if (simulationState.currentSem > 8) {
        computedExtraYears = Math.ceil((simulationState.currentSem - 8) / 2);
    }

    if (totalFailuresCount > 0 && computedExtraYears === 0) {
        computedExtraYears = 1;
    }

    if (totalRepeatCount > 0) {
        computedExtraYears = Math.max(computedExtraYears, 1 + totalRepeatCount);
    }

    simulationState.maxExtraYearsIncurred = Math.max(simulationState.maxExtraYearsIncurred || 0, computedExtraYears);
    const extraYears = simulationState.maxExtraYearsIncurred;

    const valExtraYears = document.getElementById('valExtraYears');

    const isDismissed = extraYears > 2 || simulationState.currentSem > 12 || totalRepeatCount >= 2;

    if (isDismissed) {
        valExtraYears.textContent = `🚫 ترقين القيد (تجاوز الـ 6 سنوات)`;
        valExtraYears.style.color = "#dc2626";
    } else if (extraYears === 0) {
        valExtraYears.textContent = "0 سنة (منتظم)";
        valExtraYears.style.color = "var(--status-pass-text)";
    } else if (extraYears === 1) {
        valExtraYears.textContent = "+1 سنة (سنة 5) ⚠️";
        valExtraYears.style.color = "var(--status-fail-text)";
    } else if (extraYears === 2) {
        valExtraYears.textContent = "+2 سنة (سنة 6 - الحد الأقصى) ⚠️";
        valExtraYears.style.color = "var(--status-fail-text)";
    }

    return isDismissed;
}

function renderRegisteredGrid() {
    const grid = document.getElementById('registeredModulesGrid');
    grid.innerHTML = '';

    if (simulationState.activeRegistered.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:1.5rem;color:var(--text-muted);">لا توجد مواد مسجلة حالياً.</div>`;
        return;
    }

    simulationState.activeRegistered.forEach(item => {
        const course = curriculumMap[item.code];
        const originText = getFullStageAndCourseName(course.sem);
        const unitsFormatted = formatUnits(course.ects);
        const isFail = item.outcome === 'fail';

        const isYellowCard = item.isRetake || item.isAdded;
        // Forced: either a retake prereq or a delayed prereq course
        const isForcedRetake = item.isRetake && item.isForced;
        const isForcedDelayed = !item.isRetake && item.isForced;
        const isOptionalRetake = item.isRetake && !item.isForced;
        const isAnyForced = isForcedRetake || isForcedDelayed;

        const card = document.createElement('div');
        card.className = `reg-mod-card ${isYellowCard ? 'is-retake-module' : ''}`;

        let retakeLabelText = '';
        if (isForcedRetake) {
            retakeLabelText = '(معادة - إجبارية ⛓️)';
        } else if (isForcedDelayed) {
            retakeLabelText = '(متأخرة - إجبارية ⛓️)';
        } else if (isOptionalRetake) {
            retakeLabelText = '(معادة - اختيارية)';
        } else if (item.isAdded) {
            retakeLabelText = '(مضافة)';
        }

        card.innerHTML = `
            <div class="reg-top">
                <span class="reg-ects">${unitsFormatted} ${retakeLabelText}</span>
                <span class="pass-default-badge ${isFail ? 'hidden' : ''}">✓ مستوفاة</span>
            </div>
            <div>
                <div class="reg-title-ar">${course.nameAr}</div>
            </div>
            <div class="origin-tag-badge">من ${originText}</div>
            ${isForcedRetake ? '<div class="repeat-warning-pill">⚠️ مادة معادة إجبارية: تعتمد عليها مواد لاحقة. الرسوب بها يضيف سنة إضافية ثانية</div>' : ''}
            ${isForcedDelayed ? '<div class="repeat-warning-pill" style="background:rgba(217,119,6,0.1);color:#92400e;border-color:rgba(217,119,6,0.25);">⛓️ مادة متأخرة إجبارية: تعتمد عليها مواد لاحقة ويجب تسجيلها</div>' : ''}
            ${isOptionalRetake ? '<div class="repeat-warning-pill" style="background:rgba(59,130,246,0.12);color:#2563eb;border-color:rgba(59,130,246,0.25);">ℹ️ مادة معادة اختيارية: لا تعتمد عليها مواد لاحقة، يمكنك إزالتها وتأجيلها</div>' : ''}
            <div class="outcome-selector-group">
                <button class="single-fail-btn ${isFail ? 'active' : ''}">
                    ${isFail ? '🔴 رسوب تكويني (مُفعل)' : '🔴 رسوب تكويني'}
                </button>
            </div>
            ${isAnyForced ? '' : '<button class="btn-remove-module">إزالة 🗑️</button>'}
        `;

        const btnFail = card.querySelector('.single-fail-btn');

        btnFail.addEventListener('click', () => {
            item.outcome = (item.outcome === 'fail') ? 'pass' : 'fail';
            renderSimulationUI();
        });

        const btnRemove = card.querySelector('.btn-remove-module');
        if (btnRemove) {
            btnRemove.addEventListener('click', () => {
                simulationState.activeRegistered = simulationState.activeRegistered.filter(r => r.code !== item.code);
                renderSimulationUI();
            });
        }

        grid.appendChild(card);
    });
}

function renderRegistrationPanels(panelsData, activeSem) {
    const isOddActiveCourse = activeSem % 2 !== 0;

    const availList = document.getElementById('availableModulesList');
    document.getElementById('availableCountTag').textContent = `${panelsData.available.length} مواد`;
    availList.innerHTML = '';

    if (panelsData.available.length === 0) {
        availList.innerHTML = `<div style="font-size:0.8rem;color:var(--text-muted);padding:0.5rem;">لا توجد مواد متاح إضافتها.</div>`;
    } else {
        panelsData.available.forEach(mod => {
            const originText = getFullStageAndCourseName(mod.origSem);
            const unitsFormatted = formatUnits(mod.ects);
            const div = document.createElement('div');
            div.className = 'panel-item-card';
            div.innerHTML = `
                <div class="item-info-box">
                    <span class="item-title">${mod.nameAr} ${mod.isRetake ? '(معادة)' : ''}</span>
                    <span class="item-sub-code">${unitsFormatted}</span>
                    <span class="origin-tag-badge" style="font-size:0.68rem;padding:0.1rem 0.4rem;">من ${originText}</span>
                </div>
                <button class="btn-add-module">+ إضافة</button>
            `;

            div.querySelector('.btn-add-module').addEventListener('click', async () => {
                if (simulationState.isDismissed) {
                    await showAppAlert("تم ترقين القيد! لا يمكن إضافة مواد جديدة.", "ترقين القيد", "🚫");
                    return;
                }
                const currentEcts = simulationState.activeRegistered.reduce((sum, r) => sum + curriculumMap[r.code].ects, 0);
                if (currentEcts + mod.ects > 30) {
                    await showAppAlert(`يتجاوز سقف 30 وحدة كورس (${formatUnits(currentEcts + mod.ects)}).`, "تجاوز سقف الوحدات", "⚠️");
                    return;
                }
                simulationState.activeRegistered.push({
                    code: mod.code,
                    outcome: 'pass',
                    isRetake: mod.isRetake,
                    isAdded: true
                });
                renderSimulationUI();
            });

            availList.appendChild(div);
        });
    }

    const blockedCourse1 = panelsData.blocked.filter(b => b.origSem % 2 !== 0);
    const blockedCourse2 = panelsData.blocked.filter(b => b.origSem % 2 === 0);

    document.getElementById('blockedCountTag').textContent = `${panelsData.blocked.length} مواد`;

    const sg1 = document.getElementById('subgroupCourse1');
    sg1.className = isOddActiveCourse ? 'blocked-column-card active-group' : 'blocked-column-card inactive-group';

    const sg2 = document.getElementById('subgroupCourse2');
    sg2.className = !isOddActiveCourse ? 'blocked-column-card active-group' : 'blocked-column-card inactive-group';

    const list1 = document.getElementById('blockedListCourse1');
    list1.innerHTML = '';
    if (blockedCourse1.length === 0) {
        list1.innerHTML = `<div style="font-size:0.78rem;color:var(--text-muted);padding:0.3rem;">لا توجد مواد كورس أول مغلقة.</div>`;
    } else {
        blockedCourse1.forEach(mod => {
            const originText = getFullStageAndCourseName(mod.origSem);
            const unitsFormatted = formatUnits(mod.ects);
            const div = document.createElement('div');
            div.className = 'panel-item-card';
            div.innerHTML = `
                <div class="item-info-box">
                    <span class="item-title">${mod.nameAr}</span>
                    <span class="item-sub-code">${unitsFormatted}</span>
                    <span class="origin-tag-badge" style="font-size:0.68rem;padding:0.1rem 0.4rem;">من ${originText}</span>
                </div>
                <span class="lock-reason-badge">🔒 ${mod.lockReason}</span>
            `;
            list1.appendChild(div);
        });
    }

    const list2 = document.getElementById('blockedListCourse2');
    list2.innerHTML = '';
    if (blockedCourse2.length === 0) {
        list2.innerHTML = `<div style="font-size:0.78rem;color:var(--text-muted);padding:0.3rem;">لا توجد مواد كورس ثاني مغلقة.</div>`;
    } else {
        blockedCourse2.forEach(mod => {
            const originText = getFullStageAndCourseName(mod.origSem);
            const unitsFormatted = formatUnits(mod.ects);
            const div = document.createElement('div');
            div.className = 'panel-item-card';
            div.innerHTML = `
                <div class="item-info-box">
                    <span class="item-title">${mod.nameAr}</span>
                    <span class="item-sub-code">${unitsFormatted}</span>
                    <span class="origin-tag-badge" style="font-size:0.68rem;padding:0.1rem 0.4rem;">من ${originText}</span>
                </div>
                <span class="lock-reason-badge">🔒 ${mod.lockReason}</span>
            `;
            list2.appendChild(div);
        });
    }
}

async function advanceToNextSemester() {
    if (simulationState.isDismissed) {
        await showAppAlert("تم ترقين القيد! لا يمكن الانتقال لكورس جديد.", "ترقين القيد", "🚫");
        return;
    }

    const sem = simulationState.currentSem;

    simulationState.history[sem] = simulationState.activeRegistered.map(item => ({ ...item }));

    for (const item of simulationState.activeRegistered) {
        if (item.outcome === 'pass') {
            simulationState.passedModules[item.code] = sem;
        } else if (item.outcome === 'fail') {
            const isRepeatFailure = simulationState.failedHistory.some(f => f.code === item.code);
            simulationState.failedHistory.push({
                code: item.code,
                semFailed: sem,
                isRepeat: isRepeatFailure
            });

            if (isRepeatFailure) {
                await showAppAlert(`تكرر الرسوب التكويني بمادة معادة (${curriculumMap[item.code].nameAr})! تُضاف سنة إضافية ثانية.`, "تكرار رسوب", "⚠️");
            }
        }
    }

    let allCompleted = true;
    for (let code in simulationState.passedModules) {
        if (simulationState.passedModules[code] === null) {
            allCompleted = false;
            break;
        }
    }

    if (allCompleted) {
        renderSimulationUI();
        openFullGraduationTranscriptModal();
        await showAppAlert("🎉 مبروك التخرج! أتممت جميع المواد وجمعت 240 وحدة بنجاح. تم فتح السجل الأكاديمي الشامل مع إمكانية التحميل كصورة.", "مبروك التخرج 🎉", "🎓");
        return;
    }

    simulationState.currentSem++;
    if (simulationState.currentSem > simulationState.maxReachedSem) {
        simulationState.maxReachedSem = simulationState.currentSem;
    }

    setupSemesterRegistration(simulationState.currentSem);
    renderSimulationUI();
}

/**
 * Builds HTML for Stage 2-Column Transcript
 */
function buildStageTranscriptHTML() {
    const completedSemestersCount = Object.keys(simulationState.history).length;
    if (completedSemestersCount === 0) {
        return `<div style="text-align:center;padding:1.8rem;color:var(--text-muted);font-size:0.9rem;">لم يتم إنهاء أي كورس بعد. قم بإكمال الكورس الحالي لعرض الملخص الوصفي هنا.</div>`;
    }

    let html = `<div class="stage-transcript-container">`;

    const maxSemCompleted = Math.max(...Object.keys(simulationState.history).map(Number));
    const totalStages = Math.ceil(maxSemCompleted / 2);

    for (let stage = 1; stage <= totalStages; stage++) {
        const sem1 = (stage * 2) - 1;
        const sem2 = stage * 2;

        const hist1 = simulationState.history[sem1];
        const hist2 = simulationState.history[sem2];

        if (!hist1 && !hist2) continue;

        const stageTitleName = getStageName(stage);

        html += `
            <div class="stage-transcript-block">
                <div class="stage-block-header">
                    <h3 class="stage-block-title">🎓 ${stageTitleName}</h3>
                </div>

                <div class="stage-courses-columns">
                    ${renderCourseColumnHTML(sem1, hist1, "📘 الكورس الأول")}
                    ${renderCourseColumnHTML(sem2, hist2, "📗 الكورس الثاني")}
                </div>
            </div>
        `;
    }

    html += `</div>`;
    return html;
}

function renderTranscriptTable() {
    const wrapper = document.getElementById('transcriptTableWrapper');
    if (wrapper) {
        wrapper.innerHTML = buildStageTranscriptHTML();
    }
}

/**
 * Opens Full-Page Graduation Academic Transcript Modal
 */
function openFullGraduationTranscriptModal() {
    const modal = document.getElementById('graduationTranscriptModal');
    const docBody = document.getElementById('gradDocBody');
    const txtEarned = document.getElementById('gradDocEarnedEcts');
    const txtExtra = document.getElementById('gradDocExtraYears');
    const txtStatus = document.getElementById('gradDocStatusTag');

    let earnedEcts = 0;
    for (let code in simulationState.passedModules) {
        if (simulationState.passedModules[code] !== null) {
            earnedEcts += curriculumMap[code].ects;
        }
    }

    txtEarned.textContent = `${earnedEcts} / 240 ECTS`;
    const extraYears = simulationState.maxExtraYearsIncurred || 0;

    if (extraYears === 0) {
        txtExtra.textContent = "0 سنة (مسار منتظم)";
    } else {
        txtExtra.textContent = `+${extraYears} سنة إضافية`;
    }

    if (earnedEcts >= 240) {
        txtStatus.textContent = "🎓 خريج (مستوفٍ لكافة المتطلبات)";
        txtStatus.className = "stat-val status-pass-tag";
    } else {
        txtStatus.textContent = "⏳ قيد الدراسة";
        txtStatus.className = "stat-val status-pending-tag";
    }

    docBody.innerHTML = buildStageTranscriptHTML();
    modal.style.display = 'flex';
}

function closeFullGraduationTranscriptModal() {
    const modal = document.getElementById('graduationTranscriptModal');
    if (modal) modal.style.display = 'none';
}

function renderCourseColumnHTML(semNum, semHistory, colTitle) {
    if (!semHistory) {
        return `
            <div class="course-column-card is-empty">
                <div class="course-col-header">
                    <span class="course-col-title">${colTitle}</span>
                </div>
                <div class="empty-sem-msg">لم يتم التوصل أو إنهاء هذا الكورس بعد.</div>
            </div>
        `;
    }

    const totalRegisteredCount = semHistory.length;
    let earnedEctsInSem = 0;
    let passedCount = 0;
    let failedCount = 0;

    const failedModuleNames = [];
    const repeatFailedModuleNames = [];

    semHistory.forEach(item => {
        const course = curriculumMap[item.code];
        if (item.outcome === 'pass') {
            earnedEctsInSem += course.ects;
            passedCount++;
        } else {
            failedCount++;
            failedModuleNames.push(course.nameAr);
            if (item.isRepeat) {
                repeatFailedModuleNames.push(course.nameAr);
            }
        }
    });

    const hasFailures = failedCount > 0;
    const hasRepeatFailures = repeatFailedModuleNames.length > 0;

    let statusBadgeHTML = '';
    let descriptionText = '';

    if (!hasFailures) {
        statusBadgeHTML = `<span class="sem-card-badge-status status-clean">🟢 مستوفٍ بنجاح</span>`;
        descriptionText = `اجتاز جميع مواد الكورس بنجاح تام، واستوفى (${formatUnits(earnedEctsInSem)}) بدون أي تأخير.`;
    } else if (hasRepeatFailures) {
        statusBadgeHTML = `<span class="sem-card-badge-status status-repeat-fail">🚨 تكرار رسوب (+1 سنة أخرى)</span>`;
        descriptionText = `تكرر الرسوب في مادة معادة: (${repeatFailedModuleNames.join('، ')}). استوفى ${formatUnits(earnedEctsInSem)}، ورُتبت سنة إضافية ثانية.`;
    } else {
        statusBadgeHTML = `<span class="sem-card-badge-status status-single-fail">⚠️ رسوب تكويني (+1 سنة)</span>`;
        descriptionText = `أكمل الكورس واستوفى ${formatUnits(earnedEctsInSem)}، وحصل رسوب في: (${failedModuleNames.join('، ')}). ورُتبت سنة إضافية.`;
    }

    const currentStage = Math.ceil(semNum / 2);
    const stageLabels = { 1: 'م1', 2: 'م2', 3: 'م3', 4: 'م4' };

    let chipsHTML = '';
    semHistory.forEach(item => {
        const course = curriculumMap[item.code];
        const isPass = item.outcome === 'pass';
        const courseOrigStage = Math.ceil(course.sem / 2);
        const isForeign = courseOrigStage !== currentStage;

        let chipClass, statusIcon, originTag;

        if (!isPass) {
            chipClass = 'chip-fail';
            statusIcon = '🔴 رسوب';
            originTag = isForeign ? `<span class="chip-origin-tag">${stageLabels[courseOrigStage] || 'م' + courseOrigStage}</span>` : '';
        } else if (isForeign) {
            chipClass = 'chip-pass-foreign';
            statusIcon = '✓';
            originTag = `<span class="chip-origin-tag">${stageLabels[courseOrigStage] || 'م' + courseOrigStage}</span>`;
        } else {
            chipClass = 'chip-pass';
            statusIcon = '✓';
            originTag = '';
        }

        chipsHTML += `
            <span class="module-chip ${chipClass}">
                ${statusIcon} ${course.nameAr} (${course.ects}) ${item.isRetake ? '[معادة]' : ''} ${originTag}
            </span>
        `;
    });

    return `
        <div class="course-column-card">
            <div class="course-col-header">
                <span class="course-col-title">${colTitle}</span>
                ${statusBadgeHTML}
            </div>

            <div class="sem-card-metrics">
                <div class="sem-metric-item">
                    <span class="sem-metric-label">الوحدات</span>
                    <span class="sem-metric-value">${formatUnits(earnedEctsInSem)}</span>
                </div>
                <div class="sem-metric-item">
                    <span class="sem-metric-label">الحالة</span>
                    <span class="sem-metric-value" style="color: ${hasFailures ? '#be123c' : '#15803d'};">
                        ${passedCount} نجاح ${hasFailures ? `• ${failedCount} رسوب` : ''}
                    </span>
                </div>
            </div>

            <div class="sem-descriptive-text ${hasFailures ? 'has-failure' : ''}">
                ${descriptionText}
            </div>

            <div class="sem-modules-chips-wrapper">
                <span class="chips-label">المواد:</span>
                <div class="sem-modules-chips">
                    ${chipsHTML}
                </div>
            </div>
        </div>
    `;
}

// --------------------------------------------------------------------------
// 4. Welcome Screen & Main Workspace Controls
// --------------------------------------------------------------------------
function startSimulation() {
    const welcome = document.getElementById('welcomeScreen');
    const welcomeTopHeader = document.getElementById('welcomeTopHeader');
    const mainWS = document.getElementById('mainWorkspace');
    const appHeader = document.getElementById('appHeader');
    const topSlimStrip = document.getElementById('topSlimStrip');

    if (welcome && mainWS) {
        welcome.style.animation = 'fadeOut 0.3s forwards';
        if (welcomeTopHeader) welcomeTopHeader.style.animation = 'fadeOut 0.3s forwards';
        setTimeout(() => {
            welcome.style.display = 'none';
            if (welcomeTopHeader) welcomeTopHeader.style.display = 'none';
            mainWS.style.display = 'flex';
            if (appHeader) appHeader.style.display = 'block';
            if (topSlimStrip) topSlimStrip.style.display = 'block';
            mainWS.scrollIntoView({ behavior: 'smooth' });
        }, 280);
    }
}

function showWelcomeScreen() {
    const welcome = document.getElementById('welcomeScreen');
    const welcomeTopHeader = document.getElementById('welcomeTopHeader');
    const mainWS = document.getElementById('mainWorkspace');
    const appHeader = document.getElementById('appHeader');
    const topSlimStrip = document.getElementById('topSlimStrip');

    if (welcome && mainWS) {
        welcome.style.display = 'flex';
        welcome.style.animation = 'fadeIn 0.35s ease-out';
        if (welcomeTopHeader) {
            welcomeTopHeader.style.display = 'flex';
            welcomeTopHeader.style.animation = 'fadeIn 0.35s ease-out';
        }
        mainWS.style.display = 'none';
        if (appHeader) appHeader.style.display = 'none';
        if (topSlimStrip) topSlimStrip.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// --------------------------------------------------------------------------
// 5. Initializers & Events
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const btnStart = document.getElementById('btnStartSimulation');
    if (btnStart) {
        btnStart.addEventListener('click', startSimulation);
    }

    const btnHelp = document.getElementById('btnShowHelp');
    if (btnHelp) {
        btnHelp.addEventListener('click', showWelcomeScreen);
    }

    document.getElementById('btnRestartProcess').addEventListener('click', async () => {
        const confirmed = await showAppConfirm("هل أنت تأكد من بدء مسار دراسي جديد من المرحلة الأولى؟", "إعادة المحاكاة", "🔄");
        if (confirmed) {
            initSimulation();
        }
    });

    document.getElementById('btnAdvanceSemester').addEventListener('click', async () => {
        await advanceToNextSemester();
    });

    const btnOpenModal = document.getElementById('btnOpenFullTranscriptModal');
    if (btnOpenModal) {
        btnOpenModal.addEventListener('click', () => {
            openFullGraduationTranscriptModal();
        });
    }

    const btnCloseModal = document.getElementById('btnCloseGradModal');
    if (btnCloseModal) {
        btnCloseModal.addEventListener('click', () => {
            closeFullGraduationTranscriptModal();
        });
    }

    initSimulation();
});
