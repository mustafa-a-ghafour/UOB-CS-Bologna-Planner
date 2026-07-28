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
 * Find all downstream courses in the curriculum that depend on a given course code
 * (directly or through a prerequisite chain).
 */
function getDownstreamDependencies(courseCode) {
    const dependentCodes = new Set();
    
    function findDependents(targetCode) {
        curriculumData.forEach(c => {
            if (c.prereq.includes(targetCode) && !dependentCodes.has(c.code)) {
                dependentCodes.add(c.code);
                findDependents(c.code);
            }
        });
    }
    
    findDependents(courseCode);
    return Array.from(dependentCodes).map(code => curriculumMap[code]);
}

/**
 * Mathematically analyzes whether delaying/skipping an available candidate module in activeSem
 * will force the student into a 6th academic year (Semester 11+ / Year 6)
 * or exceed the maximum 6 years limit (Semester 12+) leading to dismissal (ترقين قيد).
 * Returns: 'none' | 'causes_sixth_year' | 'exceeds_max_years'
 */
function analyzeDelayImpact(candidateCode, activeSem) {
    const simPassed = {};
    for (let code in simulationState.passedModules) {
        simPassed[code] = simulationState.passedModules[code];
    }

    // Pass currently registered active modules in activeSem (excluding candidateCode)
    if (simulationState.activeRegistered) {
        simulationState.activeRegistered.forEach(r => {
            if (r.code !== candidateCode && r.outcome === 'pass') {
                simPassed[r.code] = activeSem;
            }
        });
    }

    // Simulate upcoming semesters step by step starting from activeSem + 1
    let futureSem = activeSem + 1;
    const maxSem = 12; // 6 years = 12 semesters max

    while (futureSem <= maxSem) {
        const unpassed = curriculumData.filter(c => simPassed[c.code] === undefined || simPassed[c.code] === null);
        if (unpassed.length === 0) break;

        const isOddSeason = (futureSem % 2 !== 0);
        let semEcts = 0;

        const eligible = unpassed.filter(c => {
            const isSameSeason = (c.sem % 2 !== 0) === isOddSeason;
            if (!isSameSeason) return false;
            const prereqsMet = c.prereq.every(pCode => {
                const pSem = simPassed[pCode];
                return pSem !== undefined && pSem !== null && pSem < futureSem;
            });
            return prereqsMet;
        });

        // Priority sort: courses that are prerequisites for other unpassed courses first
        eligible.sort((a, b) => {
            const aPrereq = curriculumData.some(c => (simPassed[c.code] === null || simPassed[c.code] === undefined) && c.prereq.includes(a.code));
            const bPrereq = curriculumData.some(c => (simPassed[c.code] === null || simPassed[c.code] === undefined) && c.prereq.includes(b.code));
            if (aPrereq && !bPrereq) return -1;
            if (!aPrereq && bPrereq) return 1;
            return a.sem - b.sem;
        });

        eligible.forEach(c => {
            if (semEcts + c.ects <= 30) {
                simPassed[c.code] = futureSem;
                semEcts += c.ects;
            }
        });

        futureSem++;
    }

    const remainingUnpassed = curriculumData.filter(c => simPassed[c.code] === undefined || simPassed[c.code] === null).length;
    const endSem = futureSem - 1;

    if (remainingUnpassed > 0 || endSem > 12) {
        return 'exceeds_max_years';
    }
    if (endSem > 10) {
        return 'causes_sixth_year';
    }
    return 'none';
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

    const totalCumulativeEcts = getEarnedEcts();

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
    } else if (totalCumulativeEcts >= 240) {
        simulationState.isDismissed = false;
        if (dismissalBanner) dismissalBanner.style.display = 'none';
        if (btnAdvanceText) btnAdvanceText.textContent = `🎓 إنهاء المسار الدراسي (تخرج - 240 وحدة)`;
        if (btnAdvance) {
            btnAdvance.disabled = false;
            btnAdvance.style.background = 'linear-gradient(135deg, #15803d 0%, #059669 100%)';
            btnAdvance.style.cursor = 'pointer';
            btnAdvance.style.opacity = '1';
        }
    } else {
        simulationState.isDismissed = false;
        if (dismissalBanner) dismissalBanner.style.display = 'none';

        if (btnAdvanceText) btnAdvanceText.textContent = `الإنتقال إلى ${nextSemTitle}`;
        if (btnAdvance) {
            btnAdvance.disabled = false;
            btnAdvance.style.background = 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)';
            btnAdvance.style.cursor = 'pointer';
            btnAdvance.style.opacity = '1';
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

function getEarnedEcts() {
    let earnedEcts = 0;
    // Units from completed previous semesters
    for (let code in simulationState.passedModules) {
        if (simulationState.passedModules[code] !== null) {
            earnedEcts += curriculumMap[code].ects;
        }
    }
    // Interactive cumulative units from currently active registered modules (passing)
    if (simulationState.activeRegistered) {
        simulationState.activeRegistered.forEach(r => {
            if (r.outcome === 'pass') {
                if (simulationState.passedModules[r.code] === null) {
                    earnedEcts += curriculumMap[r.code].ects;
                }
            }
        });
    }
    return Math.min(240, earnedEcts);
}

function updateKPIs() {
    const earnedEcts = getEarnedEcts();

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

    simulationState.maxExtraYearsIncurred = computedExtraYears;
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

    const currentSem = simulationState.currentSem;

    simulationState.activeRegistered.forEach(item => {
        const course = curriculumMap[item.code];
        const originText = getFullStageAndCourseName(course.sem);
        const unitsFormatted = formatUnits(course.ects);
        const isFail = item.outcome === 'fail';

        const isYellowCard = item.isRetake || item.isAdded;
        const isForcedRetake = item.isRetake && item.isForced;
        const isForcedDelayed = !item.isRetake && item.isForced;
        const isAnyForced = isForcedRetake || isForcedDelayed;

        const card = document.createElement('div');
        card.className = `reg-mod-card ${isYellowCard ? 'is-retake-module' : ''}`;

        let retakeLabelText = '';
        if (isForcedRetake) {
            retakeLabelText = '(معادة - إجبارية ⛓️)';
        } else if (isForcedDelayed) {
            retakeLabelText = '(متأخرة - إجبارية ⛓️)';
        } else if (item.isAdded) {
            retakeLabelText = '(مضافة)';
        }

        let failImpactHTML = '';
        if (isFail) {
            const deps = getDownstreamDependencies(item.code);
            const immediateBlocked = deps.filter(dep => dep.sem <= course.sem + 1);
            const futureDeps = deps.filter(dep => dep.sem > course.sem + 1);

            if (immediateBlocked.length > 0) {
                const listHTML = immediateBlocked.map(dep => {
                    const stageName = getStageName(Math.ceil(dep.sem / 2));
                    return `<li><strong>${dep.nameAr}</strong> - ${stageName}</li>`;
                }).join('');

                let indirectBtnHTML = '';
                if (futureDeps.length > 0) {
                    const indirectListHTML = futureDeps.map(dep => {
                        const fullSemInfo = getFullStageAndCourseName(dep.sem);
                        return `<li><strong>${dep.nameAr}</strong> - ${fullSemInfo} <span class="indirect-tag">(حرمان غير مباشر)</span></li>`;
                    }).join('');

                    indirectBtnHTML = `
                        <div class="indirect-toggle-wrapper">
                            <button class="btn-toggle-indirect" type="button">
                                <span class="info-circle-icon">ⓘ</span>
                                <span>اطّلع على المواد التي تعتمد على هذه المادة أيضاً</span>
                            </button>
                            <div class="indirect-collapsible-box" style="display: none;">
                                <div class="yellow-box-title">💡 المواد التي تعتمد على هذه المادة أيضاً:</div>
                                <ul class="yellow-box-list">
                                    ${indirectListHTML}
                                </ul>
                                <div class="yellow-box-footer-note">
                                    لكن إذا تم إنجاز هذه المادة، يمكن خوض هذه المواد بشكل طبيعي في أعوامها وفصولها المحددة.
                                </div>
                            </div>
                        </div>
                    `;
                }


                failImpactHTML = `
                    <div class="fail-impact-banner">
                        <div class="fail-impact-title">🚨 سيؤدي الرسوب بمادة (${course.nameAr}) إلى حرمان مباشر من التسجيل على:</div>
                        <ul class="fail-impact-list">
                            ${listHTML}
                        </ul>
                        ${indirectBtnHTML}
                    </div>
                `;
            } else if (futureDeps.length > 0) {
                const listHTML = futureDeps.map(dep => {
                    const fullSemInfo = getFullStageAndCourseName(dep.sem);
                    return `<li><strong>${dep.nameAr}</strong> - ${fullSemInfo} <span class="indirect-tag">(حرمان غير مباشر)</span></li>`;
                }).join('');

                failImpactHTML = `
                    <div class="yellow-pass-box">
                        <div class="yellow-box-title">⚠️ قد تؤدي عدم إنجاز هذه المادة إلى حرمان غير مباشر من:</div>
                        <ul class="yellow-box-list">
                            ${listHTML}
                        </ul>
                        <div class="yellow-box-footer-note">
                            لكن إذا تم إنجاز هذه المادة، يمكن خوض هذه المواد بشكل طبيعي في أعوامها وفصولها المحددة.
                        </div>
                    </div>
                `;
            } else {
                failImpactHTML = `
                    <div class="fail-impact-banner muted">
                        ℹ️ الرسوب بمادة (${course.nameAr}) لا يسبب حرمان مباشر من تسجيل أي مادة في الكورس القادم، لكن تؤدي الى سنة خامسة بسبب حد عدد الوحدات لكل كورس
                    </div>
                `;
            }
        }

        const isResearchMethodologyInSem6 = currentSem === 6 && item.code === 'UOB309';
        let researchMethodologyAdviceHTML = '';
        if (isResearchMethodologyInSem6) {
            const availPanels = computeRegistrationPanels(currentSem);
            const availMods = availPanels.available;

            const activeEcts = simulationState.activeRegistered.reduce((sum, r) => sum + curriculumMap[r.code].ects, 0);
            const remainingEcts = 30 - activeEcts;

            // Only recommend removing Research Methodology if there are available modules
            // that CANNOT fit into the current remaining ECTS capacity
            const needyMods = availMods.filter(m => m.ects > remainingEcts);

            if (needyMods.length >= 2) {
                researchMethodologyAdviceHTML = `<div class="research-methodology-advice">💡 يُنصح بإزالة هذه المادة، وتسجيل (${needyMods[0].nameAr}) أو (${needyMods[1].nameAr})</div>`;
            } else if (needyMods.length === 1) {
                researchMethodologyAdviceHTML = `<div class="research-methodology-advice">💡 يُنصح بإزالة هذه المادة، وتسجيل (${needyMods[0].nameAr})</div>`;
            }
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
            <div class="outcome-selector-group">
                <button class="single-fail-btn ${isFail ? 'active' : ''}">
                    ${isFail ? '🔴 رسوب تكويني (مُفعل)' : '🔴 رسوب تكويني'}
                </button>
            </div>
            ${failImpactHTML}
            ${isAnyForced ? '' : '<button class="btn-remove-module">إزالة 🗑️</button>'}
            ${researchMethodologyAdviceHTML}
        `;

        const btnFail = card.querySelector('.single-fail-btn');
        btnFail.addEventListener('click', () => {
            item.outcome = (item.outcome === 'fail') ? 'pass' : 'fail';
            renderSimulationUI();
        });

        const btnToggleIndirect = card.querySelector('.btn-toggle-indirect');
        if (btnToggleIndirect) {
            btnToggleIndirect.addEventListener('click', () => {
                const box = card.querySelector('.indirect-collapsible-box');
                if (box) {
                    const isHidden = box.style.display === 'none';
                    box.style.display = isHidden ? 'block' : 'none';
                    btnToggleIndirect.querySelector('span:last-child').textContent = isHidden 
                        ? 'إخفاء المواد التي تعتمد على هذه المادة أيضاً' 
                        : 'اطّلع على المواد التي تعتمد على هذه المادة أيضاً';
                }
            });
        }

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


function getModuleWarningWeight(mod, activeSem) {
    const deps = getDownstreamDependencies(mod.code);
    if (deps.length === 0) {
        return 0; // No warning box at all
    }

    const impact = analyzeDelayImpact(mod.code, activeSem);
    if (impact === 'exceeds_max_years') {
        return 3; // Dismissal warning (ترقين قيد) - highest priority
    }
    if (impact === 'causes_sixth_year') {
        return 2; // 6th year warning (سنة سادسة)
    }
    return 1; // General downstream dependency warning
}

function renderRegistrationPanels(panelsData, activeSem) {
    const isOddActiveCourse = activeSem % 2 !== 0;

    // Priority sort available modules: modules with warnings come first
    panelsData.available.sort((a, b) => {
        const weightA = getModuleWarningWeight(a, activeSem);
        const weightB = getModuleWarningWeight(b, activeSem);

        if (weightB !== weightA) {
            return weightB - weightA; // Higher warning priority first
        }
        return a.origSem - b.origSem; // Earlier original semester first
    });

    const availList = document.getElementById('availableModulesList');
    document.getElementById('availableCountTag').textContent = `${panelsData.available.length} مواد`;
    availList.innerHTML = '';

    if (panelsData.available.length === 0) {
        availList.innerHTML = `<div style="font-size:0.8rem;color:var(--text-muted);padding:0.5rem;">لا توجد مواد متاح إضافتها.</div>`;
    } else {
        if (panelsData.available.some(m => m.ects === 7)) {
            const noticeDiv = document.createElement('div');
            noticeDiv.className = 'available-7ects-notice';
            noticeDiv.innerHTML = `💡 تتوفر مواد متاح إضافتها بمقدار 7 وحدات (7 ECTS) لجدولك الدراسي.`;
            availList.appendChild(noticeDiv);
        }

        panelsData.available.forEach(mod => {
            const originText = getFullStageAndCourseName(mod.origSem);
            const unitsFormatted = formatUnits(mod.ects);

            const deps = getDownstreamDependencies(mod.code);
            let delayWarningHTML = '';

            if (deps.length > 0) {
                const depItemsHTML = deps.map(dep => {
                    const isImmediate = dep.sem <= mod.origSem + 1;
                    const tagText = isImmediate ? 'حرمان مباشر' : 'حرمان غير مباشر';
                    const tagClass = isImmediate ? 'tag-direct' : 'tag-indirect';
                    return `<li><strong>${dep.nameAr}</strong> - <span class="${tagClass}">(${tagText})</span></li>`;
                }).join('');

                const currentExtraYears = simulationState.maxExtraYearsIncurred || 0;
                const impact = analyzeDelayImpact(mod.code, activeSem);

                let footerWarningHTML = '';
                if (impact === 'exceeds_max_years') {
                    footerWarningHTML = '<div class="delay-warning-footer" style="background:rgba(220,38,38,0.15);color:#dc2626;border-color:rgba(220,38,38,0.3);">⚠️ عدم اضافة هذه المادة قد يؤدي الى تجاوز حد السنين وترقين القيد</div>';
                } else if (impact === 'causes_sixth_year' && currentExtraYears < 2) {
                    footerWarningHTML = '<div class="delay-warning-footer">⚠️ تنبيه: تأجيل هذه المادة يؤدي إلى سنة سادسة!</div>';
                }

                delayWarningHTML = `
                    <div class="available-delay-warning">
                        <div class="delay-warning-title">🚨 عدم إضافتك هذه المادة سيؤدي إلى حرمانك من التسجيل على المواد:</div>
                        <ul class="delay-warning-list">
                            ${depItemsHTML}
                        </ul>
                        ${footerWarningHTML}
                    </div>
                `;


            }

            const div = document.createElement('div');
            div.className = 'panel-item-card';
            div.innerHTML = `
                <div class="item-info-box">
                    <span class="item-title">${mod.nameAr}</span>
                    <span class="item-sub-code">${unitsFormatted}</span>
                    <span class="origin-tag-badge" style="font-size:0.68rem;padding:0.1rem 0.4rem;">من ${originText}</span>
                </div>
                <button class="btn-add-module">+ إضافة</button>
                ${delayWarningHTML}
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Builds HTML for Stage 2-Column Transcript
 * @param {number} partFilter - 0 for all stages, 1 for Part 1 (Stages 1-2), 2 for Part 2 (Stages 3-4+)
 */
function buildStageTranscriptHTML(partFilter = 0) {
    const completedSemestersCount = Object.keys(simulationState.history).length;
    if (completedSemestersCount === 0 && partFilter === 0) {
        return `<div style="text-align:center;padding:1.8rem;color:var(--text-muted);font-size:0.9rem;">لم يتم إنهاء أي كورس بعد. قم بإكمال الكورس الحالي لعرض الملخص الوصفي هنا.</div>`;
    }

    let html = `<div class="stage-transcript-container">`;

    const maxSemCompleted = Math.max(0, ...Object.keys(simulationState.history).map(Number));
    const maxStageInHistory = Math.ceil(maxSemCompleted / 2);

    let startStage = 1;
    let endStage = Math.max(4, maxStageInHistory);

    if (partFilter === 1) {
        startStage = 1;
        endStage = 2;
    } else if (partFilter === 2) {
        startStage = 3;
        endStage = Math.max(4, maxStageInHistory);
    }

    for (let stage = startStage; stage <= endStage; stage++) {
        const sem1 = (stage * 2) - 1;
        const sem2 = stage * 2;

        const hist1 = simulationState.history[sem1];
        const hist2 = simulationState.history[sem2];

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
        wrapper.innerHTML = buildStageTranscriptHTML(0);
    }
}

/**
 * Opens Full-Page Graduation Academic Transcript Modal
 * Dynamically builds A4 Page Sheets (2 Stages per Page Sheet)
 * Supports 2, 3, 4 or more A4 images automatically based on total stages.
 */
function openFullGraduationTranscriptModal() {
    const modal = document.getElementById('graduationTranscriptModal');
    const container = document.getElementById('gradModalTranscriptContent');
    if (!modal || !container) return;

    // Find highest semester that actually contains modules
    let highestSemWithModules = 0;
    for (let semKey in simulationState.history) {
        const hist = simulationState.history[semKey];
        if (Array.isArray(hist) && hist.length > 0) {
            highestSemWithModules = Math.max(highestSemWithModules, Number(semKey));
        }
    }

    // Standard curriculum is 4 stages (8 semesters). Only expand if higher semesters have modules.
    let totalStages = 4;
    if (highestSemWithModules > 8) {
        totalStages = Math.ceil(highestSemWithModules / 2);
    }

    const extraYears = simulationState.maxExtraYearsIncurred || 0;
    const totalStudyYears = 4 + extraYears;

    const earnedEcts = getEarnedEcts();

    const isGraduated = earnedEcts >= 240;
    const statusText = isGraduated ? "🎓 خريج (مستوفٍ لكافة المتطلبات)" : "⏳ قيد الدراسة";
    const statusClass = isGraduated ? "status-pass-tag" : "status-pending-tag";

    let fullPagesHTML = '';

    for (let stageNum = 1; stageNum <= totalStages; stageNum++) {
        const stageName = getStageName(stageNum);
        const sem1 = (stageNum * 2) - 1;
        const sem2 = stageNum * 2;

        const hist1 = simulationState.history[sem1];
        const hist2 = simulationState.history[sem2];

        // Skip stages above 4 if they have no modules
        const hasModulesInStage = stageNum <= 4 || (hist1 && hist1.length > 0) || (hist2 && hist2.length > 0);
        if (!hasModulesInStage) continue;

        const cleanStageName = stageName.replace(/[⚠️🎓]/g, '').trim();
        const imageTitleName = `السجل الأكاديمي - ${cleanStageName}`;

        fullPagesHTML += `
            <div id="gradModalTranscriptPage${stageNum}" class="exportable-transcript-page" data-stage-name="${imageTitleName}" data-page-index="${stageNum}">
                <div class="official-doc-header">
                    <div class="doc-header-top">
                        <div class="doc-title-block">
                            <h2>السجل الأكاديمي</h2>
                            <h3>علوم الحاسوب • نظام بولونيا الأكاديمي</h3>
                        </div>
                        <span class="page-badge-pill">المرحلة ${stageNum} من ${totalStages}</span>
                    </div>

                    <div class="doc-stats-summary-bar">
                        <div class="doc-stat-item">
                            <span class="stat-lbl">مجموع الوحدات المستوفاة</span>
                            <span class="stat-val doc-earned-ects">${earnedEcts} / 240 وحدة</span>
                        </div>
                        <div class="doc-stat-item">
                            <span class="stat-lbl">سنوات الدراسة الكلية</span>
                            <span class="stat-val doc-total-years">${totalStudyYears} سنوات</span>
                        </div>
                    </div>
                </div>

                <div class="doc-transcript-body">
                    <div class="stage-transcript-container">
                        <div class="stage-transcript-block">
                            <div class="stage-block-header">
                                <h3 class="stage-block-title">🎓 ${stageName}</h3>
                            </div>
                            <div class="stage-courses-columns">
                                ${renderCourseColumnHTML(sem1, hist1, "📘 الكورس الأول")}
                                ${renderCourseColumnHTML(sem2, hist2, "📗 الكورس الثاني")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;


        if (stageNum < totalStages) {
            fullPagesHTML += `
                <div class="page-break-divider">
                    <span>✂️ فاصل بين الصور (المرحلة ${stageNum} / المرحلة ${stageNum + 1})</span>
                </div>
            `;
        }
    }

    container.innerHTML = fullPagesHTML;
    modal.style.display = 'flex';
}




function closeFullGraduationTranscriptModal() {
    const modal = document.getElementById('graduationTranscriptModal');
    if (modal) modal.style.display = 'none';
}

function renderCourseColumnHTML(semNum, semHistory, colTitle) {
    const isPlannedSem = !semHistory;
    const modulesToRender = semHistory || curriculumData.filter(c => c.sem === semNum).map(c => ({
        code: c.code,
        outcome: 'planned',
        isRetake: false,
        isAdded: false
    }));

    const totalRegisteredCount = modulesToRender.length;
    let earnedEctsInSem = 0;
    let passedCount = 0;
    let failedCount = 0;

    modulesToRender.forEach(item => {
        const course = curriculumMap[item.code];
        if (item.outcome === 'pass') {
            earnedEctsInSem += course.ects;
            passedCount++;
        } else if (item.outcome === 'fail') {
            failedCount++;
        } else {
            // Planned semester outcome - do not add to earned ECTS
        }
    });

    const hasFailures = failedCount > 0;

    let statusBadgeHTML = '';
    if (isPlannedSem) {
        statusBadgeHTML = `<span class="sem-card-badge-status status-clean" style="background:#f1f5f9;color:#64748b;border-color:#cbd5e1;">📅 كورس مخطط</span>`;
    } else if (!hasFailures) {
        statusBadgeHTML = `<span class="sem-card-badge-status status-clean">🟢 مستوفٍ</span>`;
    } else {
        statusBadgeHTML = `<span class="sem-card-badge-status status-single-fail">⚠️ رسوب تكويني</span>`;
    }

    let rowsHTML = '';
    modulesToRender.forEach(item => {
        const course = curriculumMap[item.code];
        const isPass = item.outcome === 'pass';
        const isFail = item.outcome === 'fail';
        const isPlanned = item.outcome === 'planned';
        const courseOrigStage = Math.ceil(course.sem / 2);
        const isForeign = course.sem !== semNum;

        let chipClass, statusIcon, originLabel = '';

        if (isForeign) {
            const origStageName = getStageName(courseOrigStage);
            const origCourseName = getCourseName(course.sem);
            originLabel = `(من ${origStageName} - ${origCourseName})`;
        }

        if (isFail) {
            chipClass = 'chip-fail';
            statusIcon = '🔴 رسوب تكويني';
        } else if (isPlanned) {
            chipClass = 'chip-planned';
            statusIcon = '📅 مخطط';
        } else if (isForeign) {
            chipClass = 'chip-pass-foreign';
            statusIcon = '✓ مستوفاة';
        } else {
            chipClass = 'chip-pass';
            statusIcon = '✓ مستوفاة';
        }

        rowsHTML += `
            <div class="transcript-module-row ${chipClass}">
                <div class="mod-row-top">
                    <span class="mod-row-title"><strong>${course.nameAr}</strong></span>
                    <span class="mod-row-ects">${course.ects} وحدة</span>
                </div>
                <div class="mod-row-details">
                    <span class="mod-row-status">${statusIcon}</span>
                    ${originLabel ? `<span class="mod-row-origin">${originLabel}</span>` : ''}
                </div>
            </div>
        `;



    });

    return `
        <div class="course-column-card ${isPlannedSem ? 'is-planned-card' : ''}">
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
                    <span class="sem-metric-label">عدد المواد المسجلة</span>
                    <span class="sem-metric-value">${totalRegisteredCount} مواد</span>
                </div>
            </div>

            <div class="sem-modules-chips-wrapper">
                <div class="sem-modules-list-container">
                    ${rowsHTML}
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
