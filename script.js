
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
  
  // Stage 2 - Course 1 (Semester 3) - [Baath Regime Crimes: UOB105]
  { code: "CSC23110", nameAr: "هياكل بيانات", nameEn: "Data Structures", sem: 3, ects: 6, prereq: ["CSC12105"] },
  { code: "CSC23111", nameAr: "برمجة كيانية", nameEn: "Object Oriented Programming", sem: 3, ects: 6, prereq: ["CSC12105"] },
  { code: "CSC23112", nameAr: "طرائق عددية", nameEn: "Numerical Methods", sem: 3, ects: 5, prereq: ["CSC11004"] },
  { code: "CSC23113", nameAr: "النظرية الاحتسابية", nameEn: "Computation Theory", sem: 3, ects: 5, prereq: ["CSC12006"] },
  { code: "CSC23114", nameAr: "برمجة مرئية", nameEn: "Visual Programming", sem: 3, ects: 6, prereq: ["CSC12105"] },
  { code: "UOB105", nameAr: "جرائم نظام البعث في العراق", nameEn: "Baath Regime Crimes in Iraq", sem: 3, ects: 2, prereq: [] },
  
  // Stage 2 - Course 2 (Semester 4) - [English 2: UOB202]
  { code: "CSC24115", nameAr: "تصميم و تحليل الخوارزميات", nameEn: "Algorithms Design and Analysis", sem: 4, ects: 7, prereq: ["CSC23110"] },
  { code: "CSC24116", nameAr: "لغة للأغراض العامة", nameEn: "General-Purpose Language", sem: 4, ects: 7, prereq: ["CSC23111"] },
  { code: "CSC24117", nameAr: "مترجمات", nameEn: "Compilers", sem: 4, ects: 6, prereq: ["CSC23113", "CSC12105"] },
  { code: "CSC24018", nameAr: "تصميم و برمجة الويب", nameEn: "Web Design and Programming", sem: 4, ects: 6, prereq: [] },
  { code: "UOB201", nameAr: "اللغة العربية 2", nameEn: "Arabic Language II", sem: 4, ects: 2, prereq: [] },
  { code: "UOB202", nameAr: "اللغة الانكليزية 2", nameEn: "English Language II", sem: 4, ects: 2, prereq: [] },
  
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

function getDirectDependents(courseCode) {
    return curriculumData.filter(c => Array.isArray(c.prereq) && c.prereq.includes(courseCode));
}

/**
 * Dynamically determines whether a dependent course (depCode) can be registered
 * on its original curriculum schedule (dep.sem) when targetCode is failed / unpassed.
 * Uses the exact simulation rules of the Bologna Process engine.
 */
function checkModuleRegistrationOnTime(targetCode, depCode, customBaseSem = null, isSimulation = false) {
    const target = curriculumMap[targetCode];
    const dep = curriculumMap[depCode];
    if (!target || !dep) return { canRegisterOnTime: false, blockingModule: null, affectedModule: null };

    const targetSem = customBaseSem || target.sem;
    const depSem = dep.sem;

    if (depSem <= targetSem + 1) return { canRegisterOnTime: false, blockingModule: null, affectedModule: null };

    const simPassed = {};
    const unpassedFormativeModules = [];

    if (isSimulation && typeof simulationState !== 'undefined' && simulationState.passedModules) {
        for (let code in simulationState.passedModules) {
            if (simulationState.passedModules[code] !== null && simulationState.passedModules[code] !== undefined) {
                simPassed[code] = simulationState.passedModules[code];
            }
        }
        curriculumData.forEach(c => {
            if (c.sem <= targetSem && c.code !== targetCode) {
                if (simPassed[c.code] === undefined || simPassed[c.code] === null) {
                    unpassedFormativeModules.push(c);
                }
            }
        });
    }

    // Identify all downstream dependents of targetCode
    const downstreamSet = new Set(getDownstreamDependencies(targetCode).map(c => c.code));

    curriculumData.forEach(c => {
        if (c.code !== targetCode && !downstreamSet.has(c.code) && !unpassedFormativeModules.some(u => u.code === c.code)) {
            if (simPassed[c.code] === undefined) {
                simPassed[c.code] = c.sem;
            }
        }
    });

    delete simPassed[targetCode];

    const retakeSem = targetSem + 2;

    for (let s = targetSem; s <= depSem; s++) {
        if (s === retakeSem) {
            simPassed[targetCode] = s;
        }

        if (isSimulation) {
            unpassedFormativeModules.forEach(u => {
                const uRetakeSem = u.sem + 2;
                if (s >= uRetakeSem && s % 2 === u.sem % 2) {
                    const prereqsMet = u.prereq.every(pCode => {
                        const passSem = simPassed[pCode];
                        return passSem !== undefined && passSem !== null && passSem < s;
                    });
                    if (prereqsMet && simPassed[u.code] === undefined) {
                        simPassed[u.code] = s;
                    }
                }
            });
        }

        let changed = true;
        while (changed) {
            changed = false;
            curriculumData.forEach(m => {
                if (m.code !== targetCode) {
                    if (s >= m.sem && m.sem % 2 === s % 2) {
                        const prereqsSatisfied = m.prereq.every(pCode => {
                            const passSem = simPassed[pCode];
                            return passSem !== undefined && passSem !== null && passSem < s;
                        });

                        if (prereqsSatisfied) {
                            if (simPassed[m.code] === undefined || simPassed[m.code] > s) {
                                simPassed[m.code] = s;
                                changed = true;
                            }
                        }
                    }
                }
            });
        }
    }

    const canRegisterOnTime = (simPassed[depCode] === depSem);

    if (canRegisterOnTime || !isSimulation) {
        return { canRegisterOnTime: canRegisterOnTime, blockingModule: null, affectedModule: null };
    }

    function findUnsatisfiedPrereq(modCode) {
        const mod = curriculumMap[modCode];
        if (!mod) return null;
        for (let pCode of mod.prereq) {
            const passSem = simPassed[pCode];
            if (passSem === undefined || passSem === null || passSem >= mod.sem) {
                const isFormativeFail = unpassedFormativeModules.some(u => u.code === pCode);
                if (isFormativeFail) {
                    return {
                        blockingModule: curriculumMap[pCode],
                        affectedModule: mod
                    };
                }
                const upstreamBlocker = findUnsatisfiedPrereq(pCode);
                if (upstreamBlocker) return upstreamBlocker;
            }
        }
        return null;
    }

    const blockerInfo = findUnsatisfiedPrereq(depCode);

    return {
        canRegisterOnTime: false,
        blockingModule: blockerInfo ? blockerInfo.blockingModule : null,
        affectedModule: blockerInfo ? blockerInfo.affectedModule : null
    };
}

function canModuleBeRegisteredOnTime(targetCode, depCode, customBaseSem = null) {
    return checkModuleRegistrationOnTime(targetCode, depCode, customBaseSem, false).canRegisterOnTime;
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
        if (btnAdvanceText) btnAdvanceText.textContent = `🚫 تم ترقين القيد (تجاوز 6 سنوات دراسية)`;
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

    const btnPrev = document.getElementById('btnPreviousSemester');
    if (btnPrev) {
        if (simulationState.currentSem <= 1) {
            btnPrev.disabled = true;
            btnPrev.style.opacity = '0.45';
            btnPrev.style.cursor = 'not-allowed';
        } else {
            btnPrev.disabled = false;
            btnPrev.style.opacity = '1';
            btnPrev.style.cursor = 'pointer';
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
        valExtraYears.textContent = `🚫 ترقين القيد (تجاوز 6 سنوات)`;
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
            const directDependents = curriculumData.filter(c => c.prereq.includes(item.code));
            const allDownstream = getDownstreamDependencies(item.code);
            const indirectDependents = allDownstream.filter(c => !directDependents.some(d => d.code === c.code));

            const immediateNextSemDirect = directDependents.filter(dep => dep.sem <= course.sem + 1);
            const laterSemDirect = directDependents.filter(dep => dep.sem > course.sem + 1);

            if (directDependents.length > 0) {
                let directSubgroupsHTML = '';

                if (immediateNextSemDirect.length > 0) {
                    const listHTML = immediateNextSemDirect.map(dep => {
                        const stageName = getStageName(Math.ceil(dep.sem / 2));
                        const courseName = getCourseName(dep.sem);
                        return `
                            <li>
                                <div class="sim-dep-item-info">
                                    <strong class="sim-dep-name">${dep.nameAr}</strong>
                                    <span class="sim-dep-stage">${stageName} • ${courseName}</span>
                                </div>
                                <span class="sim-dep-badge badge-ontime-no">❌ تتأجّل</span>
                            </li>
                        `;
                    }).join('');

                    directSubgroupsHTML += `
                        <div class="sim-direct-subgroup">
                            <div class="sim-subgroup-title">⚡ حرمان مباشر من الكورس القادم (${immediateNextSemDirect.length} مواد):</div>
                            <ul class="fail-impact-list">
                                ${listHTML}
                            </ul>
                        </div>
                    `;
                }

                if (laterSemDirect.length > 0) {
                    const listHTML = laterSemDirect.map(dep => {
                        const stageName = getStageName(Math.ceil(dep.sem / 2));
                        const courseName = getCourseName(dep.sem);
                        const canRegisterOnTime = canModuleBeRegisteredOnTime(course.code, dep.code);
                        const statusBadge = canRegisterOnTime
                            ? `<span class="sim-dep-badge badge-ontime-yes">✅ بموعدها</span>`
                            : `<span class="sim-dep-badge badge-ontime-no">❌ تتأجّل</span>`;

                        return `
                            <li>
                                <div class="sim-dep-item-info">
                                    <strong class="sim-dep-name">${dep.nameAr}</strong>
                                    <span class="sim-dep-stage">${stageName} • ${courseName}</span>
                                </div>
                                ${statusBadge}
                            </li>
                        `;
                    }).join('');

                    directSubgroupsHTML += `
                        <div class="sim-direct-subgroup" style="${immediateNextSemDirect.length > 0 ? 'margin-top:0.5rem;' : ''}">
                            <div class="sim-subgroup-title">📅 حرمان مباشر من كورس لاحق (${laterSemDirect.length} مواد):</div>
                            <ul class="fail-impact-list">
                                ${listHTML}
                            </ul>
                        </div>
                    `;
                }

                let indirectBtnHTML = '';
                const totalDependentsCount = directDependents.length + indirectDependents.length;
                if (totalDependentsCount > 0) {
                    indirectBtnHTML = `
                        <div class="sim-chains-btn-wrapper">
                            <button class="btn-open-sim-chains" type="button" data-subject-code="${course.code}" onclick="openSimChainsModal('${course.code}')">
                                <span>🗺️ خريطة مسارات التأثير (${totalDependentsCount} مساراً)</span>
                            </button>
                        </div>
                    `;
                }

                let yellowNoteHTML = '';
                if (laterSemDirect.length > 0 || indirectDependents.length > 0) {
                    yellowNoteHTML = `
                        <div class="sim-subgroup-note-yellow">
                            <div class="subgroup-note-title-row">
                                <span class="subgroup-note-icon">💡</span>
                                <span class="subgroup-note-title">توضيح شارات التسجيل بالموعد:</span>
                            </div>
                            <div class="subgroup-note-legend">
                                <div class="legend-item">
                                    <span class="tag-yes">✅ بموعدها</span>
                                    <span class="legend-text">يُمكن تسجيل المادة بموعدها الأصلي عند النجاح التكويني بإعادة (${course.nameAr}) العام القادم.</span>
                                </div>
                                <div class="legend-item">
                                    <span class="tag-no">❌ تتأجّل</span>
                                    <span class="legend-text">تتأجل المادة لتزامن موعدها مع كورس الإعادة العام القادم.</span>
                                </div>
                            </div>
                        </div>
                    `;
                }

                failImpactHTML = `
                    <div class="fail-impact-banner">
                        <div class="fail-impact-title">🚨 سيؤدي الرسوب بمادة (${course.nameAr}) إلى:</div>
                        ${yellowNoteHTML}
                        ${directSubgroupsHTML}
                        ${indirectBtnHTML}
                    </div>
                `;
            } else if (indirectDependents.length > 0) {
                const listHTML = indirectDependents.map(dep => {
                    const fullSemInfo = getFullStageAndCourseName(dep.sem);
                    const canRegisterOnTime = dep.sem > course.sem + 2;
                    const statusBadge = canRegisterOnTime
                        ? `<span class="sim-dep-badge badge-ontime-yes">✅ بموعدها</span>`
                        : `<span class="sim-dep-badge badge-ontime-no">❌ تتأجّل</span>`;

                    return `
                        <li>
                            <div class="sim-dep-item-info">
                                <strong class="sim-dep-name">${dep.nameAr}</strong>
                                <span class="sim-dep-stage">${fullSemInfo}</span>
                            </div>
                            ${statusBadge}
                        </li>
                    `;
                }).join('');

                failImpactHTML = `
                    <div class="yellow-pass-box">
                        <div class="yellow-box-title">⚠️ قد يؤدي عدم إنجاز هذه المادة إلى حرمان متسلسل من:</div>
                        <ul class="yellow-box-list">
                            ${listHTML}
                        </ul>
                        <div class="yellow-box-footer-note">
                            لكن إذا تم إنجاز هذه المادة، والمواد الأخرى المرتبطة متسلسلاً بها، يمكن خوض هذه المواد بشكل طبيعي في أعوامها وفصولها المحددة.
                        </div>
                    </div>
                `;
            } else {
                failImpactHTML = `
                    <div class="fail-impact-banner muted">
                        ℹ️ الرسوب بمادة (${course.nameAr}) لا يسبب حرمان مباشر أو متسلسل من تسجيل أي مادة في الكورسات القادمة، لكن تؤدي الى سنة خامسة بسبب حد عدد الوحدات لكل كورس
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

        const btnOpenChains = card.querySelector('.btn-open-sim-chains');
        if (btnOpenChains) {
            btnOpenChains.addEventListener('click', () => {
                openSimChainsModal(item.code);
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
            noticeDiv.innerHTML = `💡 تتوفر مواد متاح إضافتها بمقدار 7 وحدات لجدولك الدراسي.`;
            availList.appendChild(noticeDiv);
        }

        panelsData.available.forEach(mod => {
            const originText = getFullStageAndCourseName(mod.origSem);
            const unitsFormatted = formatUnits(mod.ects);

            const directDependents = curriculumData.filter(c => c.prereq.includes(mod.code));
            const allDownstream = getDownstreamDependencies(mod.code);
            const indirectDependents = allDownstream.filter(c => !directDependents.some(d => d.code === c.code));

            const immediateNextSemDirect = directDependents.filter(dep => dep.sem <= mod.origSem + 1);
            const laterSemDirect = directDependents.filter(dep => dep.sem > mod.origSem + 1);

            let delayWarningHTML = '';

            if (allDownstream.length > 0) {
                let subgroupsHTML = '';

                if (immediateNextSemDirect.length > 0) {
                    const listHTML = immediateNextSemDirect.map(dep => {
                        const stageName = getStageName(Math.ceil(dep.sem / 2));
                        const courseName = getCourseName(dep.sem);
                        return `
                            <li>
                                <div class="sim-dep-item-info">
                                    <strong class="sim-dep-name">${dep.nameAr}</strong>
                                    <span class="sim-dep-stage">${stageName} • ${courseName}</span>
                                </div>
                                <span class="sim-dep-badge badge-ontime-no">❌ تتأجّل</span>
                            </li>
                        `;
                    }).join('');

                    subgroupsHTML += `
                        <div class="sim-direct-subgroup">
                            <div class="sim-subgroup-title">⚡ حرمان مباشر من الكورس القادم (${immediateNextSemDirect.length} مواد):</div>
                            <ul class="fail-impact-list">
                                ${listHTML}
                            </ul>
                        </div>
                    `;
                }

                if (laterSemDirect.length > 0) {
                    const listHTML = laterSemDirect.map(dep => {
                        const stageName = getStageName(Math.ceil(dep.sem / 2));
                        const courseName = getCourseName(dep.sem);
                        const canRegisterOnTime = canModuleBeRegisteredOnTime(mod.code, dep.code, mod.origSem);
                        const statusBadge = canRegisterOnTime
                            ? `<span class="sim-dep-badge badge-ontime-yes">✅ بموعدها</span>`
                            : `<span class="sim-dep-badge badge-ontime-no">❌ تتأجّل</span>`;

                        return `
                            <li>
                                <div class="sim-dep-item-info">
                                    <strong class="sim-dep-name">${dep.nameAr}</strong>
                                    <span class="sim-dep-stage">${stageName} • ${courseName}</span>
                                </div>
                                ${statusBadge}
                            </li>
                        `;
                    }).join('');

                    subgroupsHTML += `
                        <div class="sim-direct-subgroup" style="${immediateNextSemDirect.length > 0 ? 'margin-top:0.4rem;' : ''}">
                            <div class="sim-subgroup-title">📅 حرمان مباشر من كورس لاحق (${laterSemDirect.length} مواد):</div>
                            <ul class="fail-impact-list">
                                ${listHTML}
                            </ul>
                        </div>
                    `;
                }

                if (indirectDependents.length > 0) {
                    const listHTML = indirectDependents.map(dep => {
                        const fullSemInfo = getFullStageAndCourseName(dep.sem);
                        const canRegisterOnTime = canModuleBeRegisteredOnTime(mod.code, dep.code, mod.origSem);
                        const statusBadge = canRegisterOnTime
                            ? `<span class="sim-dep-badge badge-ontime-yes">✅ بموعدها</span>`
                            : `<span class="sim-dep-badge badge-ontime-no">❌ تتأجّل</span>`;

                        return `
                            <li>
                                <div class="sim-dep-item-info">
                                    <strong class="sim-dep-name">${dep.nameAr}</strong>
                                    <span class="sim-dep-stage">${fullSemInfo}</span>
                                </div>
                                ${statusBadge}
                            </li>
                        `;
                    }).join('');

                    subgroupsHTML += `
                        <div class="sim-direct-subgroup" style="${(immediateNextSemDirect.length > 0 || laterSemDirect.length > 0) ? 'margin-top:0.4rem;' : ''}">
                            <div class="sim-subgroup-title">⛓️ حرمان متسلسل (${indirectDependents.length} مواد):</div>
                            <ul class="fail-impact-list">
                                ${listHTML}
                            </ul>
                        </div>
                    `;
                }

                const currentExtraYears = simulationState.maxExtraYearsIncurred || 0;
                const impact = analyzeDelayImpact(mod.code, activeSem);

                let footerWarningHTML = '';
                if (impact === 'exceeds_max_years') {
                    footerWarningHTML = '<div class="delay-warning-footer" style="background:rgba(220,38,38,0.15);color:#dc2626;border-color:rgba(220,38,38,0.3);">⚠️ عدم إضافة هذه المادة يؤدي إلى تجاوز حد السنين الجامعة وترقين القيد!</div>';
                } else if (impact === 'causes_sixth_year' && currentExtraYears < 2) {
                    footerWarningHTML = '<div class="delay-warning-footer">⚠️ تنبيه: تأجيل هذه المادة يؤدي إلى سنة سادسة!</div>';
                }

                let yellowNoteHTML = '';
                if (laterSemDirect.length > 0 || indirectDependents.length > 0) {
                    yellowNoteHTML = `
                        <div class="sim-subgroup-note-yellow">
                            <div class="subgroup-note-title-row">
                                <span class="subgroup-note-icon">💡</span>
                                <span class="subgroup-note-title">توضيح شارات التسجيل بالموعد:</span>
                            </div>
                            <div class="subgroup-note-legend">
                                <div class="legend-item">
                                    <span class="tag-yes">✅ بموعدها</span>
                                    <span class="legend-text">يُمكن تسجيل المادة بموعدها الأصلي عند النجاح التكويني بإعادة (${mod.nameAr}) العام القادم.</span>
                                </div>
                                <div class="legend-item">
                                    <span class="tag-no">❌ تتأجّل</span>
                                    <span class="legend-text">تتأجل المادة لتزامن موعدها مع كورس الإعادة العام القادم.</span>
                                </div>
                            </div>
                        </div>
                    `;
                }

                delayWarningHTML = `
                    <div class="available-delay-warning">
                        <div class="delay-warning-title">🚨 عدم إضافتك لمادة (${mod.nameAr}) سيتسبب في تأثر المواد التالية:</div>
                        ${yellowNoteHTML}
                        ${subgroupsHTML}
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
 * Reverts to the previous semester allowing natural corrections
 * without resetting the entire simulation.
 */
function revertToPreviousSemester() {
    if (simulationState.currentSem <= 1) return;
    const prevSem = simulationState.currentSem - 1;

    // 1. Rebuild passedModules & failedHistory strictly from history[1 .. prevSem - 1]
    const newPassed = {};
    curriculumData.forEach(c => newPassed[c.code] = null);
    const newFailedHistory = [];

    for (let s = 1; s < prevSem; s++) {
        const hist = simulationState.history[s];
        if (hist && Array.isArray(hist)) {
            hist.forEach(item => {
                if (item.outcome === 'pass') {
                    newPassed[item.code] = s;
                } else if (item.outcome === 'fail') {
                    const isRepeat = newFailedHistory.some(f => f.code === item.code);
                    newFailedHistory.push({
                        code: item.code,
                        semFailed: s,
                        isRepeat: isRepeat
                    });
                }
            });
        }
    }

    simulationState.passedModules = newPassed;
    simulationState.failedHistory = newFailedHistory;

    // 2. Restore activeRegistered for prevSem from history[prevSem]
    if (simulationState.history[prevSem]) {
        simulationState.activeRegistered = simulationState.history[prevSem].map(item => ({ ...item }));
        delete simulationState.history[prevSem];
    } else {
        setupSemesterRegistration(prevSem);
    }

    // Clear any future recorded history
    for (let s = prevSem; s <= 24; s++) {
        if (simulationState.history[s]) {
            delete simulationState.history[s];
        }
    }

    simulationState.currentSem = prevSem;
    simulationState.isDismissed = false;

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
 * Dynamically builds A4 Page Sheets (1 Stage per Page Sheet)
 * Includes modern graduation celebration dashboard at the top
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
    const pastFailures = simulationState.failedHistory;
    const totalFailuresCount = pastFailures.length;

    let summaryDashboardHTML = `
        <div class="grad-summary-dashboard-card">
            <div class="grad-celebration-hero">
                <span class="grad-hero-icon">🎓</span>
                <h2 class="grad-hero-title">${isGraduated ? '🎉 مبروك التخرج من الجامعة!' : '📊 ملخص المسار الأكاديمي'}</h2>
                <p class="grad-hero-desc">${isGraduated ? 'أتممت متطلبات التخرج بنظام مسار بولونيا الأكاديمي لقسم علوم الحاسوب في جامعة بغداد بنجاح.' : 'ملخص تفصيلي للوحدات المنجزة والسنوات الدراسية المستغرقة حتى اللحظة.'}</p>
            </div>

            <div class="grad-stats-grid">
                <div class="grad-stat-box">
                    <span class="grad-stat-lbl">الحالة الأكاديمية:</span>
                    <span class="grad-stat-val" style="color: #15803d;">${isGraduated ? '🎓 خريج مستوفٍ' : '⏳ قيد الدراسة'}</span>
                </div>
                <div class="grad-stat-box">
                    <span class="grad-stat-lbl">مجموع الوحدات:</span>
                    <span class="grad-stat-val" style="color: #0284c7;">${earnedEcts} / 240 وحدة</span>
                </div>
                <div class="grad-stat-box">
                    <span class="grad-stat-lbl">سنوات الدراسة:</span>
                    <span class="grad-stat-val">${totalStudyYears} سنوات ${extraYears > 0 ? `(+${extraYears} إضافية)` : '(منتظم)'}</span>
                </div>
                <div class="grad-stat-box">
                    <span class="grad-stat-lbl">سجل الرسوب التكويني:</span>
                    <span class="grad-stat-val" style="${totalFailuresCount > 0 ? 'color:#be123c;' : 'color:#15803d;'}">${totalFailuresCount === 0 ? '✨ مسار طبيعي (0)' : `${totalFailuresCount} مواد`}</span>
                </div>
            </div>
        </div>
    `;

    let fullPagesHTML = summaryDashboardHTML;

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
        const imageTitleName = `مسار الطالب - ${cleanStageName}`;

        const isRegularTrack = (totalStages <= 4 && extraYears === 0);
        const badgePillClass = isRegularTrack ? 'page-badge-pill pill-green' : 'page-badge-pill pill-red';

        fullPagesHTML += `
            <div id="gradModalTranscriptPage${stageNum}" class="exportable-transcript-page" data-stage-name="${imageTitleName}" data-page-index="${stageNum}">
                <div class="official-doc-header">
                    <div class="doc-header-top">
                        <div class="doc-title-block">
                            <h2>مسار الطالب</h2>
                            <h3>علوم الحاسوب - جامعة بغداد</h3>
                        </div>
                        <span class="${badgePillClass}">المرحلة ${stageNum} من ${totalStages}</span>
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
            statusIcon = '';
        } else {
            chipClass = 'chip-pass';
            statusIcon = '';
        }

        const hasDetails = statusIcon || originLabel;

        rowsHTML += `
            <div class="transcript-module-row ${chipClass}">
                <div class="mod-row-top">
                    <span class="mod-row-title"><strong>${course.nameAr}</strong></span>
                    <span class="mod-row-ects">${course.ects} وحدة</span>
                </div>
                ${hasDetails ? `
                <div class="mod-row-details">
                    ${statusIcon ? `<span class="mod-row-status">${statusIcon}</span>` : ''}
                    ${originLabel ? `<span class="mod-row-origin">${originLabel}</span>` : ''}
                </div>` : ''}
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
                    <span class="sem-metric-label">الوحدات:</span>
                    <span class="sem-metric-value">${formatUnits(earnedEctsInSem)}</span>
                </div>
                <div class="sem-metric-divider"></div>
                <div class="sem-metric-item">
                    <span class="sem-metric-label">المواد المسجلة:</span>
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
// Helper to generate clean, server-safe SPA URLs without 404 Cannot GET errors
function getAppPath(screen, subjectCode = '', studyType = '', mode = '', extraParams = {}) {
    if (screen === 'workspace' || screen === 'simulation') {
        return '?simulation';
    }
    if (screen === 'quick-look') {
        return subjectCode ? `?quick-look&subject=${subjectCode}` : '?quick-look';
    }
    if (screen === 'fees-calc') {
        let p = '?fees-calc';
        if (studyType) p += `&type=${studyType}`;
        if (subjectCode) p += `&subject=${subjectCode}`;
        return p;
    }
    if (screen === 'tuition-calc') {
        let p = '?tuition-calc';
        if (mode) p += `&mode=${mode}`;
        if (studyType) p += `&type=${studyType}`;
        if (subjectCode) p += `&subject=${subjectCode}`;
        if (extraParams && typeof extraParams === 'object') {
            for (const [key, val] of Object.entries(extraParams)) {
                if (val !== undefined && val !== null && val !== '') {
                    p += `&${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
                }
            }
        }
        return p;
    }
    const isHttp = window.location.protocol.startsWith('http');
    if (isHttp && window.location.pathname.endsWith('/index.html')) {
        return window.location.pathname.replace(/\/index\.html$/, '/') || './';
    }
    return './';
}

function startSimulation(pushState = true) {
    const shouldPush = typeof pushState === 'boolean' ? pushState : true;
    const welcome = document.getElementById('welcomeScreen');
    const welcomeTopHeader = document.getElementById('welcomeTopHeader');
    const qlScreen = document.getElementById('quickLookScreen');
    const mainWS = document.getElementById('mainWorkspace');
    const appHeader = document.getElementById('appHeader');
    const topSlimStrip = document.getElementById('topSlimStrip');
    const feesScreen = document.getElementById('feesCalculatorScreen');
    const tuitionScreen = document.getElementById('tuitionCalculatorScreen');

    if (welcome && mainWS) {
        // Reset simulation to zero (clean fresh start)
        initSimulation();

        if (qlScreen) qlScreen.style.display = 'none';
        if (feesScreen) feesScreen.style.display = 'none';
        if (tuitionScreen) tuitionScreen.style.display = 'none';
        welcome.style.display = 'none';
        if (welcomeTopHeader) welcomeTopHeader.style.display = 'none';
        mainWS.style.display = 'flex';
        if (appHeader) appHeader.style.display = 'block';
        if (topSlimStrip) topSlimStrip.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (shouldPush) {
            history.pushState({ screen: 'workspace' }, '', getAppPath('simulation'));
        }
    }
}

function showWelcomeScreen(pushState = true) {
    const shouldPush = typeof pushState === 'boolean' ? pushState : true;
    const welcome = document.getElementById('welcomeScreen');
    const welcomeTopHeader = document.getElementById('welcomeTopHeader');
    const qlScreen = document.getElementById('quickLookScreen');
    const feesScreen = document.getElementById('feesCalculatorScreen');
    const tuitionScreen = document.getElementById('tuitionCalculatorScreen');
    const mainWS = document.getElementById('mainWorkspace');
    const appHeader = document.getElementById('appHeader');
    const topSlimStrip = document.getElementById('topSlimStrip');

    if (welcome) {
        // Reset simulation state whenever returning to welcome screen
        initSimulation();
        resetFeesCalculator();
        if (typeof resetTuitionCalculator === 'function') resetTuitionCalculator();

        if (qlScreen) qlScreen.style.display = 'none';
        if (feesScreen) feesScreen.style.display = 'none';
        if (tuitionScreen) tuitionScreen.style.display = 'none';
        welcome.style.display = 'flex';
        welcome.style.opacity = '1';
        welcome.style.transform = 'translateY(0)';
        welcome.style.animation = 'fadeIn 0.35s ease-out';
        if (welcomeTopHeader) {
            welcomeTopHeader.style.display = 'flex';
            welcomeTopHeader.style.opacity = '1';
            welcomeTopHeader.style.animation = 'fadeIn 0.35s ease-out';
        }
        if (mainWS) mainWS.style.display = 'none';
        if (appHeader) appHeader.style.display = 'none';
        if (topSlimStrip) topSlimStrip.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (shouldPush) {
            history.pushState({ screen: 'welcome' }, '', getAppPath('welcome'));
        }
    }
}

// --------------------------------------------------------------------------
// 4.5 Quick Look (نظرة سريعة على ارتباطات المواد) Feature Engine
// --------------------------------------------------------------------------
function loadQuickLookSubjectByCode(code) {
    const subject = curriculumMap[code];
    if (!subject) return;

    const stageSelect = document.getElementById('qlStageSelect');
    const courseSelect = document.getElementById('qlCourseSelect');
    const subjectSelect = document.getElementById('qlSubjectSelect');

    if (stageSelect && courseSelect && subjectSelect) {
        const stageNum = Math.ceil(subject.sem / 2);
        const courseNum = (subject.sem % 2 !== 0) ? 1 : 2;

        stageSelect.value = stageNum.toString();
        courseSelect.value = courseNum.toString();

        populateQuickLookSubjects();

        subjectSelect.value = subject.code;
        renderQuickLookResults();
    }
}

function openQuickLookScreen(pushState = true) {
    const shouldPush = typeof pushState === 'boolean' ? pushState : true;
    const welcome = document.getElementById('welcomeScreen');
    const welcomeTopHeader = document.getElementById('welcomeTopHeader');
    const qlScreen = document.getElementById('quickLookScreen');
    const feesScreen = document.getElementById('feesCalculatorScreen');
    const tuitionScreen = document.getElementById('tuitionCalculatorScreen');
    const mainWS = document.getElementById('mainWorkspace');
    const appHeader = document.getElementById('appHeader');
    const topSlimStrip = document.getElementById('topSlimStrip');

    if (welcome && qlScreen) {
        welcome.style.display = 'none';
        if (feesScreen) feesScreen.style.display = 'none';
        if (tuitionScreen) tuitionScreen.style.display = 'none';
        if (welcomeTopHeader) welcomeTopHeader.style.display = 'none';
        if (mainWS) mainWS.style.display = 'none';
        if (appHeader) appHeader.style.display = 'none';
        if (topSlimStrip) topSlimStrip.style.display = 'none';

        qlScreen.style.display = 'flex';
        qlScreen.style.animation = 'fadeIn 0.35s ease-out';

        window.scrollTo({ top: 0, behavior: 'smooth' });

        const urlStr = window.location.href;
        const match = urlStr.match(/[?&#]subject=([A-Za-z0-9]+)/) || urlStr.match(/[?&#]code=([A-Za-z0-9]+)/);
        if (match && match[1] && curriculumMap[match[1]]) {
            loadQuickLookSubjectByCode(match[1]);
        } else {
            const stageSelect = document.getElementById('qlStageSelect');
            const courseSelect = document.getElementById('qlCourseSelect');
            const subjectSelect = document.getElementById('qlSubjectSelect');
            if (stageSelect) stageSelect.value = '';
            if (courseSelect) courseSelect.value = '';
            if (subjectSelect) subjectSelect.innerHTML = '<option value="" disabled selected>اختر المادة</option>';
            populateQuickLookSubjects();
        }

        if (shouldPush) {
            const subMatch = urlStr.match(/[?&#]subject=([A-Za-z0-9]+)/) || urlStr.match(/[?&#]code=([A-Za-z0-9]+)/);
            const subCode = (subMatch && subMatch[1]) ? subMatch[1] : '';
            history.pushState({ screen: 'quick-look' }, '', getAppPath('quick-look', subCode));
        }
    }
}

function closeQuickLookScreen(pushState = true) {
    showWelcomeScreen(pushState);
}

function populateQuickLookSubjects() {
    const stageSelect = document.getElementById('qlStageSelect');
    const courseSelect = document.getElementById('qlCourseSelect');
    const subjectSelect = document.getElementById('qlSubjectSelect');
    const container = document.getElementById('quickLookResultsArea');
    if (!stageSelect || !courseSelect || !subjectSelect) return;

    const stageVal = stageSelect.value;
    const courseVal = courseSelect.value;

    if (!stageVal || !courseVal) {
        subjectSelect.innerHTML = '<option value="" disabled selected>اختر المادة</option>';
        if (container) {
            container.innerHTML = `
                <div class="ql-empty-state-box">
                    <span class="ql-empty-icon">🔍</span>
                    <p class="ql-empty-text">يرجى اختيار المرحلة والكورس ثم المادة لمعاينة شجرة الارتباطات والحرمان.</p>
                </div>
            `;
        }
        return;
    }

    const stageNum = parseInt(stageVal, 10);
    const courseNum = parseInt(courseVal, 10);
    const targetSem = (stageNum - 1) * 2 + courseNum;

    const subjectsInSem = curriculumData.filter(c => c.sem === targetSem);
    subjectSelect.innerHTML = '<option value="" disabled selected>اختر المادة</option>';

    subjectsInSem.forEach((sub) => {
        const opt = document.createElement('option');
        opt.value = sub.code;
        opt.textContent = sub.nameAr;
        subjectSelect.appendChild(opt);
    });

    if (container) {
        container.innerHTML = `
            <div class="ql-empty-state-box">
                <span class="ql-empty-icon">📚</span>
                <p class="ql-empty-text">اختر الآن إحدى مواد الكورس من القائمة أعلاه لمعاينة ارتباطاتها وشجرة الحرمان.</p>
            </div>
        `;
    }
}

function renderQuickLookResults() {
    const subjectSelect = document.getElementById('qlSubjectSelect');
    const container = document.getElementById('quickLookResultsArea');
    if (!subjectSelect || !container) return;

    const selectedCode = subjectSelect.value;
    const subject = curriculumMap[selectedCode];
    if (!subject) return;

    const stageNum = Math.ceil(subject.sem / 2);
    const stageName = getStageName(stageNum);
    const courseTitle = getCourseName(subject.sem);
    const fullOriginName = `${stageName} - ${courseTitle}`;

    // Prerequisites of this target subject
    let prereqInfoHTML = '';
    if (subject.prereq && subject.prereq.length > 0) {
        const tagsHTML = subject.prereq.map(pCode => {
            const pMod = curriculumMap[pCode];
            const pName = pMod ? pMod.nameAr : pCode;
            let pStageCourse = '';
            if (pMod) {
                const pStage = Math.ceil(pMod.sem / 2);
                const pCourse = getCourseName(pMod.sem);
                const pStageName = getStageName(pStage);
                pStageCourse = `${pStageName} • ${pCourse}`;
            }
            return `
                <span class="ql-prereq-tag">
                    <span class="ql-prereq-name">${pName}</span>
                    ${pStageCourse ? `<span class="ql-prereq-meta">(${pStageCourse})</span>` : ''}
                </span>
            `;
        }).join('');
        prereqInfoHTML = `
            <div class="ql-target-prereqs-box">
                <span class="ql-prereqs-label">🔑 المادة التمهيدية/ يتطلب النجاح التكويني بهذه المواد لتسجيل هذه المادة:</span>
                <div class="ql-prereqs-tags-list">
                    ${tagsHTML}
                </div>
            </div>
        `;
    } else {
        prereqInfoHTML = `
            <div class="ql-target-prereqs-box">
                <span class="ql-prereqs-label">🔑 المادة التمهيدية:</span>
                <span class="ql-prereq-none-text">لا توجد مواد تمهيدية سابقة (مادة تأسيسية أولية)</span>
            </div>
        `;
    }

    // Direct dependents (subjects where subject.code is in prereq)
    const directDependents = curriculumData.filter(c => c.prereq.includes(selectedCode));

    // All downstream dependents (recursive)
    const allDownstream = getDownstreamDependencies(selectedCode);

    // Indirect dependents = all downstream that are not direct
    const indirectDependents = allDownstream.filter(c => !directDependents.some(d => d.code === c.code));

    let impactContentHTML = '';

    if (directDependents.length === 0 && indirectDependents.length === 0) {
        impactContentHTML = `
            <div class="ql-impact-grid">
                <div class="ql-impact-card ql-safe-box">
                    <div class="ql-impact-header">
                        <span class="ql-impact-icon">✅</span>
                        <h3 class="ql-impact-title">مادة طرفية مستقلة (لا تسبب حرمان لمواد أخرى)</h3>
                    </div>
                    <div class="ql-safe-desc">
                        لا توجد أي مادة دراسية أخرى في الخطة تعتمد على هذه المادة كمتطلب سابق.<br>
                        <strong>تأثير الرسوب التكويني:</strong> لن يحرم الطالب من تسجيل أي مادة دراسية في الفصول اللاحقة، لكنه سيحتاج لإعادة المادة لاحقاً لإكمال متطلبات 240 وحدة، <span style="color: #dc2626; font-weight: 900;">وسيؤدي إلى سنة دراسية خامسة بكل الأحوال بسبب سقف 30 وحدة المحدود للكورس الواحد.</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Direct dependents: Split into Next Semester vs Other Semesters
        const immediateNextSemDirect = directDependents.filter(dep => dep.sem === subject.sem + 1);
        const laterSemDirect = directDependents.filter(dep => dep.sem > subject.sem + 1);

        let directSubgroupsHTML = '';

        if (immediateNextSemDirect.length > 0) {
            const listHTML = immediateNextSemDirect.map(dep => {
                const depStage = Math.ceil(dep.sem / 2);
                const depStageName = getStageName(depStage);
                const depCourse = getCourseName(dep.sem);
                return `
                    <div class="ql-dep-item-card">
                        <div class="ql-dep-item-top">
                            <span class="ql-dep-item-title">${dep.nameAr}</span>
                            <span class="ql-dep-ects-badge">${formatUnits(dep.ects)}</span>
                        </div>
                        <div class="ql-dep-item-bottom">
                            <span class="ql-dep-item-stage">${depStageName} • ${depCourse}</span>
                            <div class="ql-dep-tags-group">
                                <span class="ql-dep-tag tag-direct-block">🚫 حرمان فوري مباشر</span>
                                <span class="ql-dep-tag tag-ontime-no">❌ تتأجّل</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            directSubgroupsHTML += `
                <div class="ql-direct-subgroup">
                    <div class="ql-subgroup-title">
                        <span>⚡ حرمان مباشر من الكورس القادم (${immediateNextSemDirect.length} مواد):</span>
                    </div>
                    <div class="ql-deps-list">
                        ${listHTML}
                    </div>
                </div>
            `;
        }

        if (laterSemDirect.length > 0) {
            const listHTML = laterSemDirect.map(dep => {
                const depStage = Math.ceil(dep.sem / 2);
                const depStageName = getStageName(depStage);
                const depCourse = getCourseName(dep.sem);
                const canRegisterOnTime = canModuleBeRegisteredOnTime(subject.code, dep.code);
                return `
                    <div class="ql-dep-item-card">
                        <div class="ql-dep-item-top">
                            <span class="ql-dep-item-title">${dep.nameAr}</span>
                            <span class="ql-dep-ects-badge">${formatUnits(dep.ects)}</span>
                        </div>
                        <div class="ql-dep-item-bottom">
                            <span class="ql-dep-item-stage">${depStageName} • ${depCourse}</span>
                            <div class="ql-dep-tags-group">
                                <span class="ql-dep-tag tag-direct-block">🔒 حرمان مباشر من كورسات لاحقة</span>
                                ${canRegisterOnTime ? `
                                    <span class="ql-dep-tag tag-ontime-yes">✅ بموعدها</span>
                                ` : `
                                    <span class="ql-dep-tag tag-ontime-no">❌ تتأجّل</span>
                                `}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            directSubgroupsHTML += `
                <div class="ql-direct-subgroup">
                    <div class="ql-subgroup-title">
                        <span>📅 حرمان مباشر من الكورسات الأخرى اللاحقة (${laterSemDirect.length} مواد):</span>
                    </div>
                    <div class="ql-deps-list">
                        ${listHTML}
                    </div>
                </div>
            `;
        }

        // Indirect dependents cards
        let indirectListHTML = '';
            indirectListHTML = indirectDependents.map(dep => {
                const depStage = Math.ceil(dep.sem / 2);
                const depStageName = getStageName(depStage);
                const depCourse = getCourseName(dep.sem);
                const canRegisterOnTime = canModuleBeRegisteredOnTime(subject.code, dep.code);
                return `
                    <div class="ql-dep-item-card">
                        <div class="ql-dep-item-top">
                            <span class="ql-dep-item-title">${dep.nameAr}</span>
                            <span class="ql-dep-ects-badge">${formatUnits(dep.ects)}</span>
                        </div>
                        <div class="ql-dep-item-bottom">
                            <span class="ql-dep-item-stage">${depStageName} • ${depCourse}</span>
                            <div class="ql-dep-tags-group">
                                <span class="ql-dep-tag tag-indirect-block">⛓️ حرمان متسلسل</span>
                                ${canRegisterOnTime ? `
                                    <span class="ql-dep-tag tag-ontime-yes">✅ بموعدها</span>
                                ` : `
                                    <span class="ql-dep-tag tag-ontime-no">❌ تتأجّل</span>
                                `}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

        // Build direct & indirect chain paths in a dedicated standalone card box
        let chainBoxHTML = '';
        const allPaths = [];
        function buildChain(currCode, currentPath) {
            const nexts = curriculumData.filter(c => c.prereq.includes(currCode));
            if (nexts.length === 0) {
                if (currentPath.length > 1) {
                    allPaths.push([...currentPath]);
                }
                return;
            }
            nexts.forEach(n => {
                buildChain(n.code, [...currentPath, n]);
            });
        }
        buildChain(selectedCode, [subject]);

        // Direct deprivation paths (1-to-1 direct block)
        const directPathsHTML = directDependents.map((dep, pIdx) => {
            const depStage = Math.ceil(dep.sem / 2);
            const depStageName = getStageName(depStage);
            const depCourse = getCourseName(dep.sem);
            const isImmediateNext = (dep.sem === subject.sem + 1);
            const canRegisterOnTime = dep.sem > subject.sem + 2;

            const timingBadge = isImmediateNext
                ? `<span class="ql-chain-timing-badge badge-timing-next">⚡ حرمان فوري</span> <span class="ql-chain-timing-badge badge-ontime-no">❌ تتأجّل</span>`
                : canRegisterOnTime
                ? `<span class="ql-chain-timing-badge badge-timing-later">📅 حرمان من كورس لاحق</span> <span class="ql-chain-timing-badge badge-ontime-yes">✅ بموعدها</span>`
                : `<span class="ql-chain-timing-badge badge-timing-later">📅 حرمان من كورس لاحق</span> <span class="ql-chain-timing-badge badge-ontime-no">❌ تتأجّل</span>`;

            const noteFooter = isImmediateNext
                ? `<div class="ql-chain-note-footer note-danger"><div class="ql-chain-note-title">🚨 تأثير مباشر:</div><div class="ql-chain-note-text">يتطلب تسجيل (${dep.nameAr}) النجاح في (${subject.nameAr}) أولاً، وبسبب الرسوب لن يُسمح بتسجيلها في الكورس القادم.</div></div>`
                : canRegisterOnTime
                ? `<div class="ql-chain-note-footer note-success"><div class="ql-chain-note-title">✅ إمكانية التسجيل:</div><div class="ql-chain-note-text">إعادة (${subject.nameAr}) والنجاح التكويني فيها العام القادم تضمن تسجيل (${dep.nameAr}) بموعدها دون تأخير.</div></div>`
                : `<div class="ql-chain-note-footer note-warning"><div class="ql-chain-note-title">⚠️ تزامن الإعادة:</div><div class="ql-chain-note-text">موعد (${dep.nameAr}) يتزامن مع إعادة (${subject.nameAr}) العام القادم، مما يمنع تسجيلها بموعدها.</div></div>`;

            return `
                <div class="ql-chain-flow-item">
                    <div class="ql-chain-flow-header">
                        <span class="ql-chain-stage-meta">🎓 ${depStageName} • ${depCourse}</span>
                        <div class="ql-chain-badges-group">
                            ${timingBadge}
                        </div>
                    </div>
                    <div class="ql-chain-flow-body">
                        <div class="ql-chain-flow">
                            <span class="ql-chain-node node-root">${subject.nameAr}</span>
                            <span class="ql-chain-arrow">←</span>
                            <span class="ql-chain-node node-direct">${dep.nameAr}</span>
                        </div>
                        ${noteFooter}
                    </div>
                </div>
            `;
        }).join('');

        // Indirect deprivation paths (multi-step cascading chains)
        const indirectPaths = allPaths.filter(p => p.length > 2);
        let indirectPathsHTML = '';
        if (indirectPaths.length > 0) {
            indirectPathsHTML = indirectPaths.map((path, pIdx) => {
                const firstDep = path[1];
                const lastDep = path[path.length - 1];
                const lastStage = Math.ceil(lastDep.sem / 2);
                const lastStageName = getStageName(lastStage);
                const lastCourse = getCourseName(lastDep.sem);
                const isImmediateNext = (firstDep.sem === subject.sem + 1);
                const checkRes = checkModuleRegistrationOnTime(subject.code, lastDep.code);
                const targetCanRegisterOnTime = checkRes.canRegisterOnTime;
                const blockingModule = checkRes.blockingModule;
                const affectedModule = checkRes.affectedModule;

                const timingBadge = isImmediateNext
                    ? `<span class="ql-chain-timing-badge badge-timing-next">⚡ يبدأ بحرمان فوري</span> ${targetCanRegisterOnTime ? '<span class="ql-chain-timing-badge badge-ontime-yes">✅ بموعدها</span>' : '<span class="ql-chain-timing-badge badge-ontime-no">❌ تتأجّل</span>'}`
                    : `<span class="ql-chain-timing-badge badge-timing-later">📅 يبدأ بحرمان من كورس لاحق</span> ${targetCanRegisterOnTime ? '<span class="ql-chain-timing-badge badge-ontime-yes">✅ بموعدها</span>' : '<span class="ql-chain-timing-badge badge-ontime-no">❌ تتأجّل</span>'}`;

                const blockingReasonText = (blockingModule && affectedModule && affectedModule.code !== lastDep.code)
                    ? `وجود رسوب تكويني بمادة أخرى وهي (${blockingModule.nameAr}) المرتبطة بمادة (${affectedModule.nameAr}) سيمنع تسجيل مادة (${lastDep.nameAr}) في موعدها.`
                    : blockingModule
                    ? `وجود رسوب تكويني بمادة أخرى وهي (${blockingModule.nameAr}) سيمنع تسجيل مادة (${lastDep.nameAr}) في موعدها.`
                    : `تبدأ بحرمان من (${firstDep.nameAr}) وتسبب تأخيراً متسلسلاً يمتد ويؤدي لتأجيل تسجيل مادة (${lastDep.nameAr}) عن موعدها الأصلي.`;

                const noteFooter = targetCanRegisterOnTime
                    ? `<div class="ql-chain-note-footer note-success"><div class="ql-chain-note-title">✅ مسار آمن:</div><div class="ql-chain-note-text">${isImmediateNext ? `تبدأ بتأجيل المادة المباشرة (${firstDep.nameAr}) في الكورس القادم، ولكن ` : ''}إعادة (${subject.nameAr}) والنجاح فيها تضمن استكمال المسار وتسجيل مادة (${lastDep.nameAr}) بموعدها الأصلي.</div></div>`
                    : `<div class="ql-chain-note-footer note-danger"><div class="ql-chain-note-title">${blockingModule ? '🚨 تأخير بسبب مادة أخرى:' : '🚨 سلسلة حرمان حرجة:'}</div><div class="ql-chain-note-text">${blockingReasonText}</div></div>`;

                const nodesHTML = path.map((item, idx) => {
                    const nodeName = item.nameAr;
                    if (idx === 0) {
                        return `<span class="ql-chain-node node-root">${nodeName}</span>`;
                    } else if (idx === 1) {
                        return `<span class="ql-chain-node node-direct">${nodeName}</span>`;
                    } else {
                        return `<span class="ql-chain-node node-indirect">${nodeName}</span>`;
                    }
                }).join('<span class="ql-chain-arrow">←</span>');

                return `
                    <div class="ql-chain-flow-item">
                        <div class="ql-chain-flow-header">
                            <span class="ql-chain-stage-meta">⛓️ مسار يمتد إلى (${lastStageName} • ${lastCourse})</span>
                            <div class="ql-chain-badges-group">
                                ${timingBadge}
                            </div>
                        </div>
                        <div class="ql-chain-flow-body">
                            <div class="ql-chain-flow">${nodesHTML}</div>
                            ${noteFooter}
                        </div>
                    </div>
                `;
            }).join('');
        }

        const totalPathsCount = directDependents.length + indirectPaths.length;

        if (totalPathsCount > 0) {
            chainBoxHTML = `
                <div class="ql-impact-card ql-chains-box" id="qlChainsBox">
                    <div class="ql-impact-header">
                        <span class="ql-impact-icon">⛓️</span>
                        <h3 class="ql-impact-title">مسار سلسلة الاعتماد الأكاديمي المتسلسل</h3>
                    </div>
                    <p class="ql-impact-desc">
                        تتبع مسارات الاعتماد الأكاديمي مقسمة إلى حرمان مباشر وحرمان متسلسل:
                    </p>
                    <button type="button" class="btn-toggle-ql-chain" id="btnToggleQlChain">
                        <span>🗺️ استكشاف وتتبع مسارات السلسلة</span>
                        <span class="chain-toggle-hint" id="qlChainHintText">اضغط لعرض المسارات (${totalPathsCount} مسار) ▾</span>
                    </button>
                    <div id="qlChainContent" class="ql-chain-collapsible-box" style="display: none;">
                        <!-- قسم مسارات الحرمان المباشر -->
                        <div class="ql-chain-category-card">
                            <div class="ql-chain-category-header">
                                <span class="ql-chain-category-badge badge-direct">🚨 مسارات الحرمان المباشر (${directDependents.length} مسار)</span>
                                <span class="ql-chain-category-subtitle">الارتباطات المباشرة (حرمان فوري من الكورس القادم أو من كورسات لاحقة):</span>
                            </div>
                            <div class="ql-chain-paths-container">
                                ${directPathsHTML}
                            </div>
                        </div>

                        <!-- قسم مسارات الحرمان المتسلسل -->
                        ${indirectPathsHTML ? `
                        <div class="ql-chain-category-card">
                            <div class="ql-chain-category-header">
                                <span class="ql-chain-category-badge badge-indirect">⛓️ مسارات الحرمان المتسلسل (${indirectPaths.length} مسار)</span>
                                <span class="ql-chain-category-subtitle">السلاسل الممتدة والتأثير التراكمي عبر الفصول والمراحل:</span>
                            </div>
                            <div class="ql-chain-paths-container">
                                ${indirectPathsHTML}
                            </div>
                        </div>
                        ` : `
                        <div class="ql-chain-category-card ql-chain-empty-card">
                            <div class="ql-chain-empty-notice">
                                <span>✨ لا توجد مسارات حرمان متسلسل أو سلاسل تراكمية لاحقة تتفرع من هذه المادة.</span>
                            </div>
                        </div>
                        `}
                    </div>
                </div>
            `;
        }

        let yellowNoteHTML = '';
        if (laterSemDirect.length > 0 || indirectDependents.length > 0) {
            yellowNoteHTML = `
                <div class="sim-subgroup-note-yellow" style="margin-bottom:0.75rem;">
                    <div class="subgroup-note-title-row">
                        <span class="subgroup-note-icon">💡</span>
                        <span class="subgroup-note-title">توضيح شارات التسجيل بالموعد:</span>
                    </div>
                    <div class="subgroup-note-legend">
                        <div class="legend-item">
                            <span class="tag-yes">✅ بموعدها</span>
                            <span class="legend-text">يُمكن تسجيل المادة بموعدها الأصلي عند النجاح التكويني بإعادة (${subject.nameAr}) العام القادم.</span>
                        </div>
                        <div class="legend-item">
                            <span class="tag-no">❌ تتأجّل</span>
                            <span class="legend-text">تتأجل المادة لتزامن موعدها مع كورس الإعادة العام القادم.</span>
                        </div>
                    </div>
                </div>
            `;
        }

        impactContentHTML = `
            ${yellowNoteHTML}
            <div class="ql-impact-grid">
                ${directDependents.length > 0 ? `
                    <div class="ql-impact-card ql-direct-box">
                        <div class="ql-impact-header">
                            <span class="ql-impact-icon">🚨</span>
                            <h3 class="ql-impact-title">الحرمان المباشر (${directDependents.length} مواد)</h3>
                        </div>
                        <p class="ql-impact-desc">
                            الرسوب التكويني في (${subject.nameAr}) يؤدي إلى حرمان الطالب ومنعه من تسجيل المواد التالية:
                        </p>
                        <div class="ql-direct-subgroups-wrapper">
                            ${directSubgroupsHTML}
                        </div>
                    </div>
                ` : ''}

                ${indirectDependents.length > 0 ? `
                    <div class="ql-impact-card ql-indirect-box">
                        <div class="ql-impact-header">
                            <span class="ql-impact-icon">⛓️</span>
                            <h3 class="ql-impact-title">الحرمان المتسلسل (${indirectDependents.length} مواد)</h3>
                        </div>
                        <p class="ql-impact-desc">
                            تتأثر هذه المواد تسلسلياً بالرسوب في (${subject.nameAr})؛ حيث يتأجل بعضها لتزامنه مع الإعادة، أو تُسجّل بموعدها عند النجاح التكويني. التفاصيل عبر <a href="#qlChainsBox" id="linkJumpToChains" class="ql-chain-hyperlink">خريطة مسارات الاعتماد الأكاديمي</a>.
                        </p>
                        <div class="ql-deps-list">
                            ${indirectListHTML}
                        </div>
                    </div>
                ` : ''}

                ${chainBoxHTML}
            </div>
        `;
    }

    try {
        history.replaceState({ screen: 'quick-look', subject: selectedCode }, '', getAppPath('quick-look', selectedCode));
    } catch (e) {}

    container.innerHTML = `
        <div class="ql-target-card">
            <div class="ql-target-header">
                <div class="ql-target-title-block">
                    <h3 class="ql-target-name-ar">${subject.nameAr}</h3>
                    <span class="ql-target-name-en">${subject.nameEn}</span>
                </div>
                <div class="ql-target-action-block">
                    <button type="button" class="btn-share-ql-icon" id="btnShareQlSubject" title="نسخ رابط المادة المباشر">
                        <span>🔗</span>
                    </button>
                </div>
            </div>
            <div class="ql-target-meta-badges">
                <span class="ql-pill-ects">${formatUnits(subject.ects)}</span>
                <span class="ql-pill-stage">${fullOriginName}</span>
            </div>
            ${prereqInfoHTML}
        </div>

        ${impactContentHTML}
    `;

    const btnShare = document.getElementById('btnShareQlSubject');
    if (btnShare) {
        btnShare.addEventListener('click', async () => {
            const originBase = `${window.location.origin}${window.location.pathname.replace(/\/index\.html$/, '')}`;
            const cleanBase = originBase.endsWith('/') ? originBase.slice(0, -1) : originBase;
            const shareUrl = window.location.protocol.startsWith('http')
                ? `${cleanBase}/?quick-look&subject=${subject.code}`
                : `${window.location.href.split('?')[0].split('#')[0]}?quick-look&subject=${subject.code}`;
            try {
                await navigator.clipboard.writeText(shareUrl);
            } catch (err) {
                const tempInput = document.createElement('input');
                tempInput.value = shareUrl;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            }

            showAppToast('تم نسخ الرابط');
        });
    }

    const btnToggleChain = document.getElementById('btnToggleQlChain');
    if (btnToggleChain) {
        btnToggleChain.addEventListener('click', () => {
            const chainBox = document.getElementById('qlChainContent');
            const hintText = document.getElementById('qlChainHintText');
            if (chainBox) {
                const isHidden = chainBox.style.display === 'none';
                chainBox.style.display = isHidden ? 'flex' : 'none';
                if (hintText) {
                    hintText.textContent = isHidden ? 'اضغط لإخفاء المسارات ▴' : 'اضغط لعرض المسارات ▾';
                }
            }
        });
    }

    const linkJump = document.getElementById('linkJumpToChains');
    if (linkJump) {
        linkJump.addEventListener('click', (e) => {
            e.preventDefault();
            const chainBox = document.getElementById('qlChainContent');
            const hintText = document.getElementById('qlChainHintText');
            const chainsCard = document.getElementById('qlChainsBox');
            if (chainBox) {
                chainBox.style.display = 'flex';
                if (hintText) {
                    hintText.textContent = 'اضغط لإخفاء المسارات ▴';
                }
            }
            if (chainsCard) {
                chainsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}

// --------------------------------------------------------------------------
// 4.6 Fees Calculator (أداة احتساب أجور المحاولتين الإضافيتين) Feature Engine
// --------------------------------------------------------------------------
function resetFeesCalculator() {
    const studySelect = document.getElementById('feesStudyTypeSelect');
    const stageSelect = document.getElementById('feesStageSelect');
    const courseSelect = document.getElementById('feesCourseSelect');
    const subjectSelect = document.getElementById('feesSubjectSelect');
    const resultsArea = document.getElementById('feesResultsArea');

    if (studySelect) studySelect.value = '';
    if (stageSelect) stageSelect.value = '';
    if (courseSelect) courseSelect.value = '';
    if (subjectSelect) subjectSelect.innerHTML = '<option value="" disabled selected>اختر المادة</option>';
    if (resultsArea) {
        resultsArea.innerHTML = `
            <div class="ql-empty-state-box">
                <span class="ql-empty-icon">💡</span>
                <p class="ql-empty-text">يرجى اختيار نوع الدراسة، والمرحلة والكورس، ثم المادة لاحتساب الأجور بدقة.</p>
            </div>
        `;
    }
}

function loadFeesSubjectByCode(code, studyType = '') {
    const subject = curriculumMap[code];
    if (!subject) return;

    if (studyType === 'morning_free') studyType = 'morning';

    const studySelect = document.getElementById('feesStudyTypeSelect');
    const stageSelect = document.getElementById('feesStageSelect');
    const courseSelect = document.getElementById('feesCourseSelect');
    const subjectSelect = document.getElementById('feesSubjectSelect');

    if (stageSelect && courseSelect && subjectSelect) {
        if (studySelect) {
            studySelect.value = studyType || '';
        }

        const stageNum = Math.ceil(subject.sem / 2);
        const courseNum = (subject.sem % 2 !== 0) ? 1 : 2;

        stageSelect.value = stageNum.toString();
        courseSelect.value = courseNum.toString();

        populateFeesSubjects();

        subjectSelect.value = subject.code;
        calculateAndRenderFees();
    }
}

function openFeesCalculatorScreen(pushState = true) {
    const shouldPush = typeof pushState === 'boolean' ? pushState : true;
    const welcome = document.getElementById('welcomeScreen');
    const welcomeTopHeader = document.getElementById('welcomeTopHeader');
    const qlScreen = document.getElementById('quickLookScreen');
    const feesScreen = document.getElementById('feesCalculatorScreen');
    const tuitionScreen = document.getElementById('tuitionCalculatorScreen');
    const mainWS = document.getElementById('mainWorkspace');
    const appHeader = document.getElementById('appHeader');
    const topSlimStrip = document.getElementById('topSlimStrip');

    if (feesScreen) {
        if (welcome) welcome.style.display = 'none';
        if (welcomeTopHeader) welcomeTopHeader.style.display = 'none';
        if (qlScreen) qlScreen.style.display = 'none';
        if (tuitionScreen) tuitionScreen.style.display = 'none';
        if (mainWS) mainWS.style.display = 'none';
        if (appHeader) appHeader.style.display = 'none';
        if (topSlimStrip) topSlimStrip.style.display = 'none';

        feesScreen.style.display = 'flex';
        feesScreen.style.animation = 'fadeIn 0.35s ease-out';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const urlStr = window.location.href;
        const match = urlStr.match(/[?&#]subject=([A-Za-z0-9]+)/) || urlStr.match(/[?&#]code=([A-Za-z0-9]+)/);
        const typeMatch = urlStr.match(/[?&#]type=([A-Za-z0-9_]+)/);

        if (match && match[1] && curriculumMap[match[1]] && (urlStr.includes('fees-calc') || urlStr.includes('screen=fees-calc'))) {
            let sType = typeMatch ? typeMatch[1] : '';
            if (sType === 'morning_free') sType = 'morning';
            loadFeesSubjectByCode(match[1], sType);
        } else {
            resetFeesCalculator();
        }

        if (shouldPush) {
            const subjectSelect = document.getElementById('feesSubjectSelect');
            const subCode = subjectSelect ? subjectSelect.value : '';
            const studySelect = document.getElementById('feesStudyTypeSelect');
            const sType = studySelect ? studySelect.value : '';
            history.pushState({ screen: 'fees-calc', subject: subCode, type: sType }, '', getAppPath('fees-calc', subCode, sType));
        }
    }
}

function closeFeesCalculatorScreen(pushState = true) {
    resetFeesCalculator();
    showWelcomeScreen(pushState);
}

function populateFeesSubjects() {
    const stageSelect = document.getElementById('feesStageSelect');
    const courseSelect = document.getElementById('feesCourseSelect');
    const subjectSelect = document.getElementById('feesSubjectSelect');
    const resultsArea = document.getElementById('feesResultsArea');
    if (!stageSelect || !courseSelect || !subjectSelect) return;

    const stageVal = stageSelect.value;
    const courseVal = courseSelect.value;

    if (!stageVal || !courseVal) {
        subjectSelect.innerHTML = '<option value="" disabled selected>اختر المادة</option>';
        if (resultsArea) {
            resultsArea.innerHTML = `
                <div class="ql-empty-state-box">
                    <span class="ql-empty-icon">💡</span>
                    <p class="ql-empty-text">يرجى اختيار نوع الدراسة، والمرحلة والكورس، ثم المادة لاحتساب الأجور بدقة.</p>
                </div>
            `;
        }
        return;
    }

    const stageNum = parseInt(stageVal, 10);
    const courseNum = parseInt(courseVal, 10);
    const targetSem = (stageNum - 1) * 2 + courseNum;

    const subjectsInSem = curriculumData.filter(c => c.sem === targetSem);
    subjectSelect.innerHTML = '<option value="" disabled selected>اختر المادة</option>';

    subjectsInSem.forEach((sub) => {
        const opt = document.createElement('option');
        opt.value = sub.code;
        opt.textContent = sub.nameAr;
        subjectSelect.appendChild(opt);
    });

    if (resultsArea) {
        resultsArea.innerHTML = `
            <div class="ql-empty-state-box">
                <span class="ql-empty-icon">📚</span>
                <p class="ql-empty-text">اختر الآن إحدى مواد الكورس من القائمة أعلاه لاحتساب أجورها.</p>
            </div>
        `;
    }
}

function formatNumberIQD(num) {
    return Number(num).toLocaleString('en-US');
}

function convertNumberToArabicWords(n) {
    if (n === 0) return '';
    const onesMap = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
    const tensSpecial = ['عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
    const tensMap = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
    const hundredsMap = ['', 'مائة', 'مائتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];

    let h = Math.floor(n / 100);
    let rem = n % 100;
    let parts = [];

    if (h > 0) parts.push(hundredsMap[h]);

    if (rem >= 10 && rem < 20) {
        parts.push(tensSpecial[rem - 10]);
    } else {
        let o = rem % 10;
        let t = Math.floor(rem / 10);
        if (o > 0 && t > 0) {
            parts.push(`${onesMap[o]} و ${tensMap[t]}`);
        } else if (o > 0) {
            parts.push(onesMap[o]);
        } else if (t > 0) {
            parts.push(tensMap[t]);
        }
    }
    return parts.join(' و ');
}

function tafqeetIQD(num) {
    num = Math.round(Number(num));
    if (num <= 0) return 'صفر دينار عراقي';

    const map = {
        25000: 'خمسة وعشرون ألف دينار عراقي',
        31250: 'واحد وثلاثون ألفاً ومائتان وخمسون دينار عراقي',
        50000: 'خمسون ألف دينار عراقي',
        62500: 'اثنان وستون ألفاً وخمسمائة دينار عراقي',
        75000: 'خمسة وسبعون ألف دينار عراقي',
        93750: 'ثلاثة وتسعون ألفاً وسبعمائة وخمسون دينار عراقي',
        100000: 'مائة ألف دينار عراقي',
        125000: 'مائة وخمسة وعشرون ألف دينار عراقي',
        150000: 'مائة وخمسون ألف دينار عراقي',
        156250: 'مائة وستة وخمسون ألفاً ومائتان وخمسون دينار عراقي',
        175000: 'مائة وخمسة وسبعون ألف دينار عراقي',
        187500: 'مائة وسبعة وثمانون ألفاً وخمسمائة دينار عراقي',
        200000: 'مائتان ألف دينار عراقي',
        218750: 'مائتان وثمانية عشر ألفاً وسبعمائة وخمسون دينار عراقي',
        250000: 'مائتان وخمسون ألف دينار عراقي',
        300000: 'ثلاثمائة ألف دينار عراقي',
        375000: 'ثلاثمائة وخمسة وسبعون ألف دينار عراقي',
        400000: 'أربعمائة ألف دينار عراقي',
        500000: 'خمسمائة ألف دينار عراقي',
        600000: 'ستمائة ألف دينار عراقي',
        675000: 'ستمائة وخمسة وسبعون ألف دينار عراقي',
        700000: 'سبعمائة ألف دينار عراقي',
        750000: 'سبعمائة وخمسون ألف دينار عراقي',
        800000: 'ثمانمائة ألف دينار عراقي',
        900000: 'تسعمائة ألف دينار عراقي',
        1000000: 'مليون دينار عراقي',
        1125000: 'مليون ومائة وخمسة وعشرون ألف دينار عراقي',
        1200000: 'مليون ومئتا ألف دينار عراقي',
        1350000: 'مليون وثلاثمائة وخمسون ألف دينار عراقي',
        1400000: 'مليون وأربعمائة ألف دينار عراقي',
        1500000: 'مليون وخمسمائة ألف دينار عراقي'
    };
    if (map[num]) return map[num];

    const millions = Math.floor(num / 1000000);
    const remainder = num % 1000000;
    const thousands = Math.floor(remainder / 1000);
    const ones = remainder % 1000;

    let parts = [];
    if (millions === 1) parts.push('مليون');
    else if (millions === 2) parts.push('مليونان');
    else if (millions > 2) {
        parts.push(`${convertNumberToArabicWords(millions)} ملايين`);
    }

    if (thousands > 0) {
        if (thousands === 1) parts.push('ألف');
        else if (thousands === 2) parts.push('ألفان');
        else if (thousands >= 3 && thousands <= 10) {
            parts.push(`${convertNumberToArabicWords(thousands)} آلاف`);
        } else {
            parts.push(`${convertNumberToArabicWords(thousands)} ألف`);
        }
    }

    if (ones > 0) {
        parts.push(convertNumberToArabicWords(ones));
    }

    const text = parts.join(' و ');
    return text ? `${text} دينار عراقي` : `${formatNumberIQD(num)} دينار عراقي`;
}

function calculateAndRenderFees() {
    const subjectSelect = document.getElementById('feesSubjectSelect');
    const resultsArea = document.getElementById('feesResultsArea');
    if (!subjectSelect || !resultsArea) return;

    const selectedCode = subjectSelect.value;
    const subject = curriculumMap[selectedCode];
    if (!subject) return;

    const studySelect = document.getElementById('feesStudyTypeSelect');
    let studyType = studySelect ? studySelect.value : '';
    if (studyType === 'morning_free') studyType = 'morning';

    if (!studyType) {
        if (resultsArea) {
            resultsArea.innerHTML = `
                <div class="ql-empty-state-box">
                    <span class="ql-empty-icon">🏛️</span>
                    <p class="ql-empty-text">يرجى اختيار نوع الدراسة لاحتساب أجور المادة بدقة.</p>
                </div>
            `;
        }
        return;
    }

    let studyTypeName = 'صباحي (عام)';
    let isSpecial = false;

    if (studyType === 'morning_parallel') {
        studyTypeName = 'صباحي (خاص / موازي)';
        isSpecial = true;
    } else if (studyType === 'evening') {
        studyTypeName = 'مسائي';
        isSpecial = true;
    }

    const stageNum = Math.ceil(subject.sem / 2);
    const stageName = getStageName(stageNum);
    const courseTitle = getCourseName(subject.sem);
    const fullOriginName = `${stageName} - ${courseTitle}`;

    const ects = subject.ects;
    // Formula for Morning Free: (ects / 60) * 1,500,000
    const baseFee = Math.round((ects / 60) * 1500000);
    // Extra 25% for Parallel and Evening:
    const extra25 = isSpecial ? Math.round(baseFee * 0.25) : 0;
    const totalFee = baseFee + extra25;

    try {
        history.replaceState({ screen: 'fees-calc', subject: selectedCode, type: studyType }, '', getAppPath('fees-calc', selectedCode, studyType));
    } catch (e) {}

    resultsArea.innerHTML = `
        <div class="ql-target-card fees-target-card">
            <div class="ql-target-header">
                <div class="ql-target-title-block">
                    <h3 class="ql-target-name-ar">${subject.nameAr}</h3>
                    <span class="ql-target-name-en">${subject.nameEn}</span>
                </div>
                <div class="ql-target-action-block">
                    <button type="button" class="btn-share-ql-icon" id="btnShareFeesSubject" title="نسخ رابط أجور المادة المباشر">
                        <span>🔗</span>
                    </button>
                </div>
            </div>
            <div class="ql-target-meta-badges">
                <span class="ql-pill-ects">${formatUnits(subject.ects)}</span>
                <span class="ql-pill-stage">${fullOriginName}</span>
                <span class="fees-pill-study">🏛️ ${studyTypeName}</span>
            </div>
        </div>

        <div class="fees-grand-total-box">
            <span class="fees-total-badge">💰 المبلغ الإجمالي المطلوب للمحاولتين الامتحانيتين الإضافيتين</span>
            <div class="fees-total-number-row">
                <span class="fees-total-number">${formatNumberIQD(totalFee)}</span>
                <span class="fees-currency-symbol">دينار عراقي</span>
            </div>
            <div class="fees-tafqeet-text">
                <span>(فقط ${tafqeetIQD(totalFee)} لا غير)</span>
            </div>

            <!-- Formula Box displaying only study type name and neat formula -->
            <div class="fees-formula-card">
                <div class="fees-formula-header">
                    <span class="fees-formula-type-badge">${studyTypeName}</span>
                </div>
                <div class="fees-formula-body">
                    <div class="fees-formula-row">
                        <span class="fees-formula-label">المعادلة:</span>
                        <div class="fees-formula-text" dir="rtl">
                            ${isSpecial ? `
                                <span class="fees-math-token">(عدد وحدات المادة / 60)</span>
                                <span class="fees-math-op">×</span>
                                <span class="fees-math-token">مليون ونصف</span>
                                <span class="fees-math-op">=</span>
                                <span class="fees-math-token">الناتج + 25%</span>
                            ` : `
                                <span class="fees-math-token">(عدد وحدات المادة / 60)</span>
                                <span class="fees-math-op">×</span>
                                <span class="fees-math-token">مليون ونصف</span>
                            `}
                        </div>
                    </div>
                    <div class="fees-formula-eval-box">
                        <div class="fees-eval-top-row">
                            <span class="fees-formula-label">التطبيق:</span>
                            <span class="fees-eval-units-statement" dir="rtl">
                                عدد وحدات المادة = <strong class="fees-units-val"><bdi>${ects}</bdi></strong>
                            </span>
                        </div>
                        <div class="fees-eval-math-row">
                            <div class="fees-formula-eval" dir="ltr">
                                <span class="fees-eval-token">(${ects} / 60)</span>
                                <span class="fees-math-op">×</span>
                                <span class="fees-eval-token">1,500,000</span>
                                ${isSpecial ? `
                                    <span class="fees-math-op">=</span>
                                    <span class="fees-eval-token">${formatNumberIQD(baseFee)}</span>
                                    <span class="fees-math-op">+</span>
                                    <span class="fees-eval-badge">25%</span>
                                ` : ''}
                                <span class="fees-math-op">=</span>
                                <strong class="fees-calc-res-tag">
                                    <span class="fees-res-num">${formatNumberIQD(totalFee)}</span>
                                    <span class="fees-res-currency">د.ع</span>
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const btnShare = document.getElementById('btnShareFeesSubject');
    if (btnShare) {
        btnShare.addEventListener('click', async () => {
            const originBase = `${window.location.origin}${window.location.pathname.replace(/\/index\.html$/, '')}`;
            const cleanBase = originBase.endsWith('/') ? originBase.slice(0, -1) : originBase;
            const shareUrl = window.location.protocol.startsWith('http')
                ? `${cleanBase}/?fees-calc&type=${studyType}&subject=${subject.code}`
                : `${window.location.href.split('?')[0].split('#')[0]}?fees-calc&type=${studyType}&subject=${subject.code}`;
            try {
                await navigator.clipboard.writeText(shareUrl);
            } catch (err) {
                const tempInput = document.createElement('input');
                tempInput.value = shareUrl;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            }

            showAppToast('تم نسخ الرابط المباشر لأجور المادة');
        });
    }
}

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// 4.7 Tuition Fees Calculator (حاسبة أقساط المسائي والصباحي الموازي) Feature Engine
// --------------------------------------------------------------------------
const TUITION_ANNUAL_FEE = 1500000;
let currentTuitionMode = 'units'; // 'units' or 'subject'

const TUITION_DISCOUNTS = {
    evening: [
        {
            group: '👥 الحالات الاجتماعية والخاصة',
            options: [
                { value: '25_staff', percent: 25, label: 'خصم ابناء الهيئة التدريسية (25%)' },
                { value: '50_care', percent: 50, label: 'خصم المشمولين بالرعاية الأجتماعية (50%)' }
            ]
        },
        {
            group: '🏆 الطلبة الأوائل (حسب الترتيب في الدفعة)',
            options: [
                { value: '50_top1', percent: 50, label: 'خصم الطالب الأول (50%)' },
                { value: '30_top2', percent: 30, label: 'خصم الطالب الثاني (30%)' },
                { value: '20_top3', percent: 20, label: 'خصم الطالب الثالث (20%)' }
            ]
        },
        { value: 'custom', percent: null, label: 'خصم آخر' }
    ],
    morning_parallel: [
        {
            group: '📅 حسب سنة القبول',
            options: [
                { value: '50_cont', percent: 50, label: 'الطلبة المستمرون (قبول 2024-2025 وما قبلها) (50%)' },
                { value: '30_new', percent: 30, label: 'الطلبة الجدد (قبول 2025-2026 وصعوداً) (30%)' }
            ]
        },
        {
            group: '👥 الحالات الاجتماعية والخاصة',
            options: [
                { value: '50_welfare', percent: 50, label: 'مستفيدو الرعاية الاجتماعية (50%)' },
                { value: '50_distinguished', percent: 50, label: 'خريجو مدارس المتميزين وكلية بغداد (50%)' },
                { value: '10_siblings', percent: 10, label: 'الطلبة الإخوة في نفس القناة (10%)' }
            ]
        },
        {
            group: '🏆 الطلبة المتفوقون والأوائل',
            options: [
                { value: '100_top1', percent: 100, label: 'المرتبة الأولى بتقدير لا يقل عن جيد جداً (إعفاء 100%)' },
                { value: '50_tier1', percent: 50, label: 'أعلى 10% من الطلبة - الشريحة الأولى (50%)' },
                { value: '40_tier2', percent: 40, label: 'الـ 10% الثانية - الشريحة الثانية (40%)' },
                { value: '30_tier3', percent: 30, label: 'الـ 10% الثالثة - الشريحة الثالثة (30%)' }
            ]
        },
        { value: 'custom', percent: null, label: 'خصم آخر' }
    ]
};

function populateTuitionDiscounts(studyType = 'evening') {
    const discountTypeSelect = document.getElementById('tuitionUnitsDiscountType');
    const discount2TypeSelect = document.getElementById('tuitionUnitsDiscount2Type');
    if (!discountTypeSelect && !discount2TypeSelect) return;

    const list = TUITION_DISCOUNTS[studyType] || TUITION_DISCOUNTS.evening;
    let optionsHtml = '';

    list.forEach(item => {
        if (item.group) {
            optionsHtml += `<optgroup label="${item.group}">`;
            item.options.forEach(opt => {
                optionsHtml += `<option value="${opt.value}" data-percent="${opt.percent}">${opt.label}</option>`;
            });
            optionsHtml += `</optgroup>`;
        } else {
            const pAttr = item.percent !== null ? `data-percent="${item.percent}"` : '';
            optionsHtml += `<option value="${item.value}" ${pAttr}>${item.label}</option>`;
        }
    });

    if (discountTypeSelect) {
        const curVal = discountTypeSelect.value;
        discountTypeSelect.innerHTML = `<option value="" disabled selected>اختر الخصم</option>` + optionsHtml;
        if (curVal && curVal !== '') {
            discountTypeSelect.value = curVal;
        } else {
            discountTypeSelect.value = '';
        }
        const customWrapper = document.getElementById('tuitionUnitsCustomDiscountWrapper');
        if (customWrapper) {
            customWrapper.style.display = discountTypeSelect.value === 'custom' ? 'flex' : 'none';
        }
    }

    if (discount2TypeSelect) {
        const cur2Val = discount2TypeSelect.value;
        discount2TypeSelect.innerHTML = `<option value="" disabled selected>اختر الخصم الثاني</option>` + optionsHtml;
        if (cur2Val && cur2Val !== '') {
            discount2TypeSelect.value = cur2Val;
        } else {
            discount2TypeSelect.value = '';
        }
        const customWrapper2 = document.getElementById('tuitionUnitsCustomDiscount2Wrapper');
        if (customWrapper2) {
            customWrapper2.style.display = discount2TypeSelect.value === 'custom' ? 'flex' : 'none';
        }
    }
}

function resetTuitionCalculator() {
    currentTuitionMode = 'units';
    const btnModeUnits = document.getElementById('btnTuitionModeUnits');
    const btnModeSubject = document.getElementById('btnTuitionModeSubject');
    const unitsView = document.getElementById('tuitionUnitsView');
    const subjectView = document.getElementById('tuitionSubjectView');

    if (btnModeUnits) {
        btnModeUnits.classList.add('active');
        btnModeUnits.setAttribute('aria-selected', 'true');
    }
    if (btnModeSubject) {
        btnModeSubject.classList.remove('active');
        btnModeSubject.setAttribute('aria-selected', 'false');
    }
    if (unitsView) unitsView.style.display = 'block';
    if (subjectView) subjectView.style.display = 'none';

    // Reset Units View Inputs
    const unitsStudyType = document.getElementById('tuitionUnitsStudyType');
    if (unitsStudyType) {
        unitsStudyType.value = 'evening';
        populateTuitionDiscounts('evening');
    }
    const c1Units = document.getElementById('tuitionCourse1Units');
    const c2Units = document.getElementById('tuitionCourse2Units');
    const unitsDiscountToggle = document.getElementById('tuitionUnitsDiscountToggle');
    const unitsDiscountBox = document.getElementById('tuitionUnitsDiscountBox');
    const unitsDiscountPercent = document.getElementById('tuitionUnitsDiscountPercent');

    const unitsDiscount2Toggle = document.getElementById('tuitionUnitsDiscount2Toggle');
    const unitsDiscount2Box = document.getElementById('tuitionUnitsDiscount2Box');
    const unitsDiscount2Percent = document.getElementById('tuitionUnitsDiscount2Percent');

    if (unitsStudyType) unitsStudyType.value = 'evening';
    if (c1Units) c1Units.value = '30';
    if (c2Units) c2Units.value = '30';
    if (unitsDiscountToggle) {
        unitsDiscountToggle.checked = false;
        const card = unitsDiscountToggle.closest('.tuition-discount-card');
        if (card) card.classList.remove('active-discount');
    }
    const unitsDiscountType = document.getElementById('tuitionUnitsDiscountType');
    const customDiscountWrapper = document.getElementById('tuitionUnitsCustomDiscountWrapper');
    if (unitsDiscountBox) unitsDiscountBox.style.display = 'none';
    if (unitsDiscountType) unitsDiscountType.value = '';
    if (customDiscountWrapper) customDiscountWrapper.style.display = 'none';
    if (unitsDiscountPercent) unitsDiscountPercent.value = '10';

    if (unitsDiscount2Toggle) unitsDiscount2Toggle.checked = false;
    const unitsDiscount2Type = document.getElementById('tuitionUnitsDiscount2Type');
    const customDiscount2Wrapper = document.getElementById('tuitionUnitsCustomDiscount2Wrapper');
    if (unitsDiscount2Box) unitsDiscount2Box.style.display = 'none';
    if (unitsDiscount2Type) unitsDiscount2Type.value = '';
    if (customDiscount2Wrapper) customDiscount2Wrapper.style.display = 'none';
    if (unitsDiscount2Percent) unitsDiscount2Percent.value = '10';

    const hostingToggle = document.getElementById('tuitionHostingToggle');
    const hostingCard = document.getElementById('tuitionHostingCard');
    if (hostingToggle) {
        hostingToggle.checked = false;
    }
    if (hostingCard) {
        hostingCard.classList.remove('active-hosting');
        hostingCard.style.display = 'block';
    }

    const postponeToggle = document.getElementById('tuitionPostponeToggle');
    if (postponeToggle) {
        postponeToggle.checked = false;
        const postponeCard = postponeToggle.closest('.tuition-postpone-card');
        if (postponeCard) postponeCard.classList.remove('active-postpone');
    }

    // Reset Subject View Inputs
    const subStudyType = document.getElementById('tuitionSubStudyType');
    const subStageSelect = document.getElementById('tuitionSubStageSelect');
    const subCourseSelect = document.getElementById('tuitionSubCourseSelect');
    const subSubjectSelect = document.getElementById('tuitionSubSubjectSelect');

    if (subStudyType) subStudyType.value = 'evening';
    if (subStageSelect) subStageSelect.value = '';
    if (subCourseSelect) subCourseSelect.value = '';
    if (subSubjectSelect) subSubjectSelect.innerHTML = '<option value="" disabled selected>اختر المادة</option>';

    calculateAndRenderTuitionUnits();
    calculateAndRenderTuitionSubject();
}

function switchTuitionMode(mode, triggerRender = true) {
    currentTuitionMode = mode;
    const btnModeUnits = document.getElementById('btnTuitionModeUnits');
    const btnModeSubject = document.getElementById('btnTuitionModeSubject');
    const unitsView = document.getElementById('tuitionUnitsView');
    const subjectView = document.getElementById('tuitionSubjectView');

    if (mode === 'units') {
        if (btnModeUnits) {
            btnModeUnits.classList.add('active');
            btnModeUnits.setAttribute('aria-selected', 'true');
        }
        if (btnModeSubject) {
            btnModeSubject.classList.remove('active');
            btnModeSubject.setAttribute('aria-selected', 'false');
        }
        if (unitsView) unitsView.style.display = 'block';
        if (subjectView) subjectView.style.display = 'none';
        if (triggerRender) {
            calculateAndRenderTuitionUnits();
        }
    } else {
        if (btnModeUnits) {
            btnModeUnits.classList.remove('active');
            btnModeUnits.setAttribute('aria-selected', 'false');
        }
        if (btnModeSubject) {
            btnModeSubject.classList.add('active');
            btnModeSubject.setAttribute('aria-selected', 'true');
        }
        if (unitsView) unitsView.style.display = 'none';
        if (subjectView) subjectView.style.display = 'block';
        if (triggerRender) {
            calculateAndRenderTuitionSubject();
        }
    }
}

function openTuitionCalculatorScreen(pushState = true) {
    const shouldPush = typeof pushState === 'boolean' ? pushState : true;
    const welcome = document.getElementById('welcomeScreen');
    const welcomeTopHeader = document.getElementById('welcomeTopHeader');
    const qlScreen = document.getElementById('quickLookScreen');
    const feesScreen = document.getElementById('feesCalculatorScreen');
    const tuitionScreen = document.getElementById('tuitionCalculatorScreen');
    const mainWS = document.getElementById('mainWorkspace');
    const appHeader = document.getElementById('appHeader');
    const topSlimStrip = document.getElementById('topSlimStrip');

    if (tuitionScreen) {
        if (welcome) welcome.style.display = 'none';
        if (welcomeTopHeader) welcomeTopHeader.style.display = 'none';
        if (qlScreen) qlScreen.style.display = 'none';
        if (feesScreen) feesScreen.style.display = 'none';
        if (mainWS) mainWS.style.display = 'none';
        if (appHeader) appHeader.style.display = 'none';
        if (topSlimStrip) topSlimStrip.style.display = 'none';

        tuitionScreen.style.display = 'flex';
        tuitionScreen.style.animation = 'fadeIn 0.35s ease-out';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Capture URL parameters FIRST before any state changes or renders
        const urlStr = window.location.href;
        const searchStr = window.location.search || (window.location.hash.includes('?') ? '?' + window.location.hash.split('?')[1] : '');
        const urlParams = new URLSearchParams(searchStr);

        const match = urlStr.match(/[?&#]subject=([A-Za-z0-9]+)/) || urlStr.match(/[?&#]code=([A-Za-z0-9]+)/);
        const typeMatch = urlStr.match(/[?&#]type=([A-Za-z0-9_]+)/);
        const modeMatch = urlStr.match(/[?&#]mode=([A-Za-z0-9_]+)/);

        const targetMode = (modeMatch && modeMatch[1] === 'subject') ? 'subject' : 'units';

        if (shouldPush) {
            history.pushState({ screen: 'tuition-calc', mode: targetMode }, '', getAppPath('tuition-calc', '', '', targetMode));
        }

        if (targetMode === 'subject') {
            switchTuitionMode('subject', false);
            if (typeMatch && typeMatch[1]) {
                const subStudy = document.getElementById('tuitionSubStudyType');
                if (subStudy) subStudy.value = typeMatch[1];
            }
            if (match && match[1] && curriculumMap[match[1]]) {
                loadTuitionSubjectByCode(match[1], typeMatch ? typeMatch[1] : '');
            } else {
                calculateAndRenderTuitionSubject();
            }
        } else {
            switchTuitionMode('units', false);
            const unitsStudy = document.getElementById('tuitionUnitsStudyType');
            const studyTypeVal = (typeMatch && typeMatch[1]) ? typeMatch[1] : (urlParams.get('type') || 'evening');
            if (unitsStudy) {
                unitsStudy.value = studyTypeVal;
            }
            populateTuitionDiscounts(studyTypeVal);

            // Units for Course 1 and Course 2
            const c1Input = document.getElementById('tuitionCourse1Units');
            const c2Input = document.getElementById('tuitionCourse2Units');
            if (urlParams.has('c1') && c1Input) {
                const v = parseFloat(urlParams.get('c1'));
                if (!isNaN(v)) c1Input.value = Math.min(30, Math.max(0, v)).toString();
            }
            if (urlParams.has('c2') && c2Input) {
                const v = parseFloat(urlParams.get('c2'));
                if (!isNaN(v)) c2Input.value = Math.min(30, Math.max(0, v)).toString();
            }

            // Discounts - only activate if present in URL
            const d1Val = urlParams.get('d1') || urlParams.get('discount');
            const p1Val = urlParams.get('p1') || urlParams.get('percent1');
            const d2Val = urlParams.get('d2') || urlParams.get('discount2');
            const p2Val = urlParams.get('p2') || urlParams.get('percent2');
            const postponeVal = urlParams.get('postpone');
            const hostingVal = urlParams.get('hosting');

            const discountToggle = document.getElementById('tuitionUnitsDiscountToggle');
            const discountBox = document.getElementById('tuitionUnitsDiscountBox');
            const discountTypeSelect = document.getElementById('tuitionUnitsDiscountType');
            const customWrapper = document.getElementById('tuitionUnitsCustomDiscountWrapper');
            const customPercentInput = document.getElementById('tuitionUnitsDiscountPercent');

            if (d1Val && discountToggle && discountTypeSelect) {
                discountToggle.checked = true;
                const card = discountToggle.closest('.tuition-discount-card');
                if (card) card.classList.add('active-discount');
                if (discountBox) discountBox.style.display = 'flex';
                discountTypeSelect.value = d1Val;
                if (d1Val === 'custom') {
                    if (customWrapper) customWrapper.style.display = 'flex';
                    if (p1Val && customPercentInput) {
                        const pv = parseFloat(p1Val);
                        if (!isNaN(pv)) customPercentInput.value = Math.min(100, Math.max(0, pv)).toString();
                    }
                } else {
                    if (customWrapper) customWrapper.style.display = 'none';
                }

                // Second discount option
                const discount2Toggle = document.getElementById('tuitionUnitsDiscount2Toggle');
                const discount2Box = document.getElementById('tuitionUnitsDiscount2Box');
                const discount2TypeSelect = document.getElementById('tuitionUnitsDiscount2Type');
                const custom2Wrapper = document.getElementById('tuitionUnitsCustomDiscount2Wrapper');
                const custom2PercentInput = document.getElementById('tuitionUnitsDiscount2Percent');

                if (d2Val && discount2Toggle && discount2TypeSelect) {
                    discount2Toggle.checked = true;
                    if (discount2Box) discount2Box.style.display = 'flex';
                    discount2TypeSelect.value = d2Val;
                    if (d2Val === 'custom') {
                        if (custom2Wrapper) custom2Wrapper.style.display = 'flex';
                        if (p2Val && custom2PercentInput) {
                            const pv2 = parseFloat(p2Val);
                            if (!isNaN(pv2)) custom2PercentInput.value = Math.min(100, Math.max(0, pv2)).toString();
                        }
                    } else {
                        if (custom2Wrapper) custom2Wrapper.style.display = 'none';
                    }
                }
            }

            // Hosting - only available for evening study
            const hostingToggle = document.getElementById('tuitionHostingToggle');
            const hostingCard = document.getElementById('tuitionHostingCard');
            const isEvening = (studyTypeVal === 'evening');
            if (hostingCard) {
                hostingCard.style.display = isEvening ? 'block' : 'none';
            }
            if (hostingToggle) {
                const isHosted = isEvening && (hostingVal === '1' || hostingVal === 'true');
                hostingToggle.checked = isHosted;
                if (hostingCard) {
                    if (isHosted) hostingCard.classList.add('active-hosting');
                    else hostingCard.classList.remove('active-hosting');
                }
            }

            // Postponement - only activate if present in URL
            const postponeToggle = document.getElementById('tuitionPostponeToggle');
            if (postponeToggle) {
                const isPostponed = (postponeVal === '1' || postponeVal === 'true');
                postponeToggle.checked = isPostponed;
                const postponeCard = postponeToggle.closest('.tuition-postpone-card');
                if (postponeCard) {
                    if (isPostponed) postponeCard.classList.add('active-postpone');
                    else postponeCard.classList.remove('active-postpone');
                }
            }

            calculateAndRenderTuitionUnits();
        }
    }
}

function closeTuitionCalculatorScreen(pushState = true) {
    resetTuitionCalculator();
    showWelcomeScreen(pushState);
}

function calculateAndRenderTuitionUnits() {
    const resultsArea = document.getElementById('tuitionUnitsResultsArea');
    if (!resultsArea) return;

    const studySelect = document.getElementById('tuitionUnitsStudyType');
    const studyType = studySelect ? studySelect.value : 'evening';
    const studyTypeName = (studyType === 'morning_parallel') ? 'صباحي (خاص / موازي)' : 'مسائي';
    const baseFee = TUITION_ANNUAL_FEE;

    const c1Input = document.getElementById('tuitionCourse1Units');
    const c2Input = document.getElementById('tuitionCourse2Units');
    const c1Val = c1Input ? parseFloat(c1Input.value.replace(/[^0-9.]/g, '')) : 0;
    const c2Val = c2Input ? parseFloat(c2Input.value.replace(/[^0-9.]/g, '')) : 0;
    const c1 = isNaN(c1Val) ? 0 : Math.min(30, Math.max(0, c1Val));
    const c2 = isNaN(c2Val) ? 0 : Math.min(30, Math.max(0, c2Val));
    const totalUnits = c1 + c2;

    const discountToggle = document.getElementById('tuitionUnitsDiscountToggle');
    const hasDiscount = discountToggle ? discountToggle.checked : false;

    const discountTypeSelect = document.getElementById('tuitionUnitsDiscountType');
    const selectedOption = discountTypeSelect?.options[discountTypeSelect.selectedIndex];
    const selectedDiscountVal = discountTypeSelect ? discountTypeSelect.value : '';
    const selectedDiscountOptionText = selectedOption ? selectedOption.text : '';

    let discountPercent = 0;
    let discountLabel = '';

    if (hasDiscount && selectedDiscountVal && selectedDiscountVal !== '') {
        if (selectedDiscountVal === 'custom') {
            const discountPercentInput = document.getElementById('tuitionUnitsDiscountPercent');
            const dpVal = discountPercentInput ? parseFloat(discountPercentInput.value.replace(/[^0-9.]/g, '')) : 0;
            discountPercent = !isNaN(dpVal) ? Math.min(100, Math.max(0, dpVal)) : 0;
            discountLabel = 'خصم مخصص';
        } else if (selectedOption && selectedOption.dataset && selectedOption.dataset.percent !== undefined) {
            discountPercent = Math.min(100, Math.max(0, parseFloat(selectedOption.dataset.percent) || 0));
            discountLabel = selectedDiscountOptionText;
        } else {
            discountLabel = selectedDiscountOptionText;
        }
    }

    // Second Discount Option
    const discount2Toggle = document.getElementById('tuitionUnitsDiscount2Toggle');
    const hasDiscount2 = hasDiscount && discount2Toggle && discount2Toggle.checked;

    const discount2TypeSelect = document.getElementById('tuitionUnitsDiscount2Type');
    const selected2Option = discount2TypeSelect?.options[discount2TypeSelect.selectedIndex];
    const selected2DiscountVal = discount2TypeSelect ? discount2TypeSelect.value : '';
    const selected2DiscountOptionText = selected2Option ? selected2Option.text : '';

    let discount2Percent = 0;
    let discount2Label = '';

    if (hasDiscount2 && selected2DiscountVal && selected2DiscountVal !== '') {
        if (selected2DiscountVal === 'custom') {
            const discount2PercentInput = document.getElementById('tuitionUnitsDiscount2Percent');
            const dp2Val = discount2PercentInput ? parseFloat(discount2PercentInput.value.replace(/[^0-9.]/g, '')) : 0;
            discount2Percent = !isNaN(dp2Val) ? Math.min(100, Math.max(0, dp2Val)) : 0;
            discount2Label = 'خصم ثانٍ مخصص';
        } else if (selected2Option && selected2Option.dataset && selected2Option.dataset.percent !== undefined) {
            discount2Percent = Math.min(100, Math.max(0, parseFloat(selected2Option.dataset.percent) || 0));
            discount2Label = selected2DiscountOptionText;
        } else {
            discount2Label = selected2DiscountOptionText;
        }
    }

    const hostingToggle = document.getElementById('tuitionHostingToggle');
    const hasHosting = (studyType === 'evening') && hostingToggle && hostingToggle.checked;
    const hostingFee = hasHosting ? Math.round(baseFee * 0.25) : 0;

    const postponeToggle = document.getElementById('tuitionPostponeToggle');
    const hasPostpone = postponeToggle ? postponeToggle.checked : false;
    const postponeFee = hasPostpone ? Math.round(baseFee * 0.10) : 0;

    const baseCalculated = Math.round((totalUnits / 60) * baseFee);
    const discount1Amount = (hasDiscount && discountPercent > 0) ? Math.round(baseCalculated * (discountPercent / 100)) : 0;
    const afterDiscount1 = Math.max(0, baseCalculated - discount1Amount);

    const discount2Amount = (hasDiscount2 && discount2Percent > 0) ? Math.round(afterDiscount1 * (discount2Percent / 100)) : 0;
    const finalFeeUnits = Math.max(0, afterDiscount1 - discount2Amount);
    const totalDiscountAmount = discount1Amount + discount2Amount;
    const anyDiscountActive = (hasDiscount && discountPercent > 0);
    const bothDiscountsActive = anyDiscountActive && (hasDiscount2 && discount2Percent > 0);
    const finalGrandTotal = finalFeeUnits + postponeFee + hostingFee;

    const extraParams = {
        c1: c1,
        c2: c2
    };
    if (hasDiscount && selectedDiscountVal) {
        extraParams.d1 = selectedDiscountVal;
        if (selectedDiscountVal === 'custom') {
            extraParams.p1 = discountPercent;
        }
    }
    if (hasDiscount2 && selected2DiscountVal) {
        extraParams.d2 = selected2DiscountVal;
        if (selected2DiscountVal === 'custom') {
            extraParams.p2 = discount2Percent;
        }
    }
    if (hasHosting) {
        extraParams.hosting = '1';
    }
    if (hasPostpone) {
        extraParams.postpone = '1';
    }

    try {
        if (currentTuitionMode === 'units') {
            history.replaceState({ screen: 'tuition-calc', mode: 'units', type: studyType, ...extraParams }, '', getAppPath('tuition-calc', '', studyType, 'units', extraParams));
        }
    } catch (e) {}

    const hasSingleExtra = (hasHosting && !hasPostpone) || (!hasHosting && hasPostpone);

    resultsArea.innerHTML = `
        <div class="ql-target-card tuition-target-card">
            <div class="ql-target-header">
                <div class="ql-target-title-block">
                    <h3 class="ql-target-name-ar">إجمالي الوحدات المسجلة: ${totalUnits} وحدة</h3>
                    <span class="ql-target-name-en">الكورس الأول: ${c1} وحدة • الكورس الثاني: ${c2} وحدة</span>
                </div>
                <div class="ql-target-action-block">
                    <button type="button" class="btn-share-ql-icon" id="btnShareTuitionUnits" title="نسخ رابط تفاصيل القسط والمشاركة">
                        <span>🔗</span>
                    </button>
                </div>
            </div>
            <div class="ql-target-meta-badges">
                <span class="ql-pill-ects">مجموع ${totalUnits} وحدة</span>
                <span class="tuition-pill-study">🏛️ ${studyTypeName}</span>
                <span class="ql-pill-stage">💵 القسط السنوي: ${formatNumberIQD(baseFee)} د.ع</span>
                ${hasHosting ? `
                    <span class="tuition-pill-hosting">🏫 استضافة للصباحي (+${formatNumberIQD(hostingFee)} د.ع)</span>
                ` : ''}
                ${hasPostpone ? `
                    <span class="tuition-pill-postpone">⏸️ تأجيل عام (+${formatNumberIQD(postponeFee)} د.ع)</span>
                ` : ''}
            </div>
        </div>

        <div class="fees-grand-total-box">
            ${bothDiscountsActive ? `
                <div class="tuition-discount-banner">
                    <span>🎉 تم تطبيق الخصم الأول (${discountPercent}%) والخصم الثاني (${discount2Percent}%) - ${finalFeeUnits === 0 ? 'إعفاء تام من أجور الوحدات' : `إجمالي المخصوم: ${formatNumberIQD(totalDiscountAmount)} دينار`}${hasHosting ? ' • مع رسوم استضافة' : ''}${hasPostpone ? ' • مع رسوم تأجيل' : ''}</span>
                </div>
            ` : (anyDiscountActive ? `
                <div class="tuition-discount-banner">
                    <span>🎉 تم تطبيق ${discountLabel || 'الخصم'} (${discountPercent}%) - ${finalFeeUnits === 0 ? 'إعفاء تام من أجور الوحدات' : `المبلغ المخصوم: ${formatNumberIQD(discount1Amount)} دينار`}${hasHosting ? ' • مع رسوم استضافة' : ''}${hasPostpone ? ' • مع رسوم تأجيل' : ''}</span>
                </div>
            ` : (hasHosting && hasPostpone ? `
                <div class="tuition-discount-banner" style="background: #f0fdf4; color: #166534; border-color: #86efac;">
                    <span>🏫 تم احتساب رسوم الاستضافة للصباحي: ${formatNumberIQD(hostingFee)} د.ع ورسوم التأجيل: ${formatNumberIQD(postponeFee)} د.ع</span>
                </div>
            ` : (hasHosting ? `
                <div class="tuition-discount-banner" style="background: #f0fdf4; color: #166534; border-color: #86efac;">
                    <span>🏫 تم احتساب رسوم الاستضافة إلى الدراسة الصباحية: ${formatNumberIQD(hostingFee)} دينار (+25% من القسط الكلي)</span>
                </div>
            ` : (hasPostpone ? `
                <div class="tuition-discount-banner" style="background: #fef3c7; color: #92400e; border-color: #fcd34d;">
                    <span>⏸️ تم احتساب رسوم تأجيل العام الدراسي: ${formatNumberIQD(postponeFee)} دينار (10% من القسط)</span>
                </div>
            ` : (hasDiscount && !selectedDiscountVal ? `
                <div class="tuition-discount-banner" style="background: #fef9c3; color: #854d0e; border-color: #fde047;">
                    <span>🏷️ يرجى اختيار نوع الخصم لتطبيقه على القسط</span>
                </div>
            ` : '')))))}

            <span class="fees-total-badge">💰 المبلغ الإجمالي المطلوب للقسط الدراسي</span>
            <div class="fees-total-number-row">
                ${anyDiscountActive ? `
                    <span class="tuition-strike-price">${formatNumberIQD(baseCalculated + postponeFee + hostingFee)} د.ع</span>
                ` : ''}
                <span class="fees-total-number">${formatNumberIQD(finalGrandTotal)}</span>
                <span class="fees-currency-symbol">دينار عراقي</span>
            </div>
            <div class="fees-tafqeet-text">
                <span>(فقط ${tafqeetIQD(finalGrandTotal)} لا غير)</span>
            </div>

            ${(anyDiscountActive || hasPostpone || hasHosting) ? `
                <div class="tuition-discount-breakdown-card">
                    <!-- تصنيف: الأجور الأساسية -->
                    <div class="breakdown-category-header">
                        <span>🏛️ الأجور الدراسية الأساسية</span>
                    </div>
                    <div class="breakdown-item breakdown-item-center">
                        <span class="breakdown-label">أجور الوحدات (${totalUnits} وحدة):</span>
                        <span class="breakdown-val">${formatNumberIQD(baseCalculated)} د.ع</span>
                    </div>

                    <!-- تصنيف: الخصومات والتخفيضات المستقطعة -->
                    ${anyDiscountActive ? `
                        <div class="breakdown-category-header category-discounts">
                            <span>🏷️ الخصومات والتخفيضات المستقطعة</span>
                        </div>
                        ${bothDiscountsActive ? `
                            <div class="breakdown-item">
                                <span class="breakdown-label">قيمة الخصم الأول (${discountPercent}%):</span>
                                <span class="breakdown-val breakdown-discount-val">-${formatNumberIQD(discount1Amount)} د.ع</span>
                            </div>
                            <div class="breakdown-item">
                                <span class="breakdown-label">المتبقي بعد الخصم الأول:</span>
                                <span class="breakdown-val">${formatNumberIQD(afterDiscount1)} د.ع</span>
                            </div>
                            <div class="breakdown-item">
                                <span class="breakdown-label">قيمة الخصم الثاني (${discount2Percent}% من المتبقي):</span>
                                <span class="breakdown-val breakdown-discount-val">-${formatNumberIQD(discount2Amount)} د.ع</span>
                            </div>
                            <div class="breakdown-item">
                                <span class="breakdown-label">المتبقي بعد الخصم الثاني:</span>
                                <span class="breakdown-val" style="color: #0d9488;">${formatNumberIQD(finalFeeUnits)} د.ع</span>
                            </div>
                        ` : ''}
                        <div class="breakdown-item breakdown-item-center">
                            <span class="breakdown-label">إجمالي المخصوم${!bothDiscountsActive ? ` (${discountPercent}%)` : ''}:</span>
                            <span class="breakdown-val breakdown-discount-val">-${formatNumberIQD(totalDiscountAmount)} د.ع</span>
                        </div>
                    ` : ''}

                    <!-- تصنيف: الأجور والرسوم الإضافية -->
                    ${(hasHosting || hasPostpone) ? `
                        <div class="breakdown-category-header category-extras">
                            <span>➕ الأجور والرسوم الإضافية</span>
                        </div>
                        ${hasHosting ? `
                            <div class="breakdown-item ${hasSingleExtra ? 'breakdown-item-center' : ''}">
                                <span class="breakdown-label">رسوم الاستضافة إلى الصباحي (25% من القسط الكلي):</span>
                                <span class="breakdown-val" style="color: #15803d;">+${formatNumberIQD(hostingFee)} د.ع</span>
                            </div>
                        ` : ''}
                        ${hasPostpone ? `
                            <div class="breakdown-item ${hasSingleExtra ? 'breakdown-item-center' : ''}">
                                <span class="breakdown-label">رسوم تأجيل العام الدراسي (10% من القسط):</span>
                                <span class="breakdown-val" style="color: #d97706;">+${formatNumberIQD(postponeFee)} د.ع</span>
                            </div>
                        ` : ''}
                    ` : ''}

                    <!-- سطر المجموع الصافي النهائي -->
                    <div class="breakdown-grand-final-box">
                        <span class="grand-final-label">💰 المبلغ الصافي النهائي المطلوب:</span>
                        <div class="grand-final-val-row">
                            <span class="grand-final-number">${formatNumberIQD(finalGrandTotal)}</span>
                            <span class="grand-final-curr">دينار عراقي</span>
                        </div>
                    </div>
                </div>
            ` : ''}

            <!-- Formula Box -->
            <div class="fees-formula-card">
                <div class="fees-formula-header">
                    <span class="fees-formula-type-badge">${studyTypeName} • بالاعتماد على عدد الوحدات</span>
                </div>
                <div class="fees-formula-body">
                    <div class="fees-formula-row">
                        <span class="fees-formula-label">المعادلة:</span>
                        <div class="fees-formula-text" dir="rtl">
                            <span class="fees-math-token">(عدد الوحدات الكلي / 60)</span>
                            <span class="fees-math-op">×</span>
                            <span class="fees-math-token">قيمة القسط</span>
                            ${anyDiscountActive && !bothDiscountsActive ? `
                                <span class="fees-math-op">-</span>
                                <span class="fees-math-token">الخصم <bdi>(${discountPercent}%)</bdi></span>
                            ` : ''}
                            ${bothDiscountsActive ? `
                                <span class="fees-math-op">-</span>
                                <span class="fees-math-token">الخصم الأول <bdi>(${discountPercent}%)</bdi></span>
                                <span class="fees-math-op">-</span>
                                <span class="fees-math-token">الخصم الثاني <bdi>(${discount2Percent}% من المتبقي)</bdi></span>
                            ` : ''}
                            ${hasHosting ? `
                                <span class="fees-math-op">+</span>
                                <span class="fees-math-token">رسوم الاستضافة <bdi>(25%)</bdi></span>
                            ` : ''}
                            ${hasPostpone ? `
                                <span class="fees-math-op">+</span>
                                <span class="fees-math-token">رسوم التأجيل <bdi>(10%)</bdi></span>
                            ` : ''}
                        </div>
                    </div>
                    <div class="fees-formula-eval-box">
                        <div class="fees-eval-top-row">
                            <span class="fees-formula-label">التطبيق:</span>
                            <div class="tuition-eval-units-chips">
                                <span class="tuition-unit-chip">📘 كورس 1: <strong>${c1}</strong></span>
                                <span class="tuition-unit-chip">📗 كورس 2: <strong>${c2}</strong></span>
                                <span class="tuition-unit-chip chip-total">📊 المجموع: <strong>${totalUnits} وحدة</strong></span>
                            </div>
                        </div>
                        <div class="fees-eval-math-row">
                            <div class="tuition-math-steps-card">
                                <div class="tuition-math-step-row">
                                    <span class="math-step-calc">(${totalUnits} / 60) × ${formatNumberIQD(baseFee)} د.ع</span>
                                    <span class="math-step-eq">=</span>
                                    <span class="math-step-val ${(!anyDiscountActive && !hasHosting && !hasPostpone) ? 'final-val' : ''}">${formatNumberIQD(baseCalculated)} د.ع</span>
                                </div>
                                ${anyDiscountActive && !bothDiscountsActive ? `
                                    <div class="tuition-math-step-row discount-row">
                                        <span class="math-step-calc">${formatNumberIQD(baseCalculated)} - ${formatNumberIQD(discount1Amount)} <span class="math-step-tag" dir="rtl">[خصم: ${discountPercent}%]</span></span>
                                        <span class="math-step-eq">=</span>
                                        <span class="math-step-val ${(!hasHosting && !hasPostpone) ? 'final-val' : ''}">${formatNumberIQD(finalFeeUnits)} د.ع</span>
                                    </div>
                                ` : ''}
                                ${bothDiscountsActive ? `
                                    <div class="tuition-math-step-row discount-row">
                                        <span class="math-step-calc">${formatNumberIQD(baseCalculated)} - ${formatNumberIQD(discount1Amount)} <span class="math-step-tag" dir="rtl">[خصم أول: ${discountPercent}%]</span></span>
                                        <span class="math-step-eq">=</span>
                                        <span class="math-step-val">${formatNumberIQD(afterDiscount1)} د.ع</span>
                                    </div>
                                    <div class="tuition-math-step-row discount-row">
                                        <span class="math-step-calc">${formatNumberIQD(afterDiscount1)} - ${formatNumberIQD(discount2Amount)} <span class="math-step-tag tag-second" dir="rtl">[خصم ثانٍ: ${discount2Percent}%]</span></span>
                                        <span class="math-step-eq">=</span>
                                        <span class="math-step-val ${(!hasHosting && !hasPostpone) ? 'final-val' : ''}">${formatNumberIQD(finalFeeUnits)} د.ع</span>
                                    </div>
                                ` : ''}
                                ${hasHosting ? `
                                    <div class="tuition-math-step-row hosting-row">
                                        <span class="math-step-calc">${formatNumberIQD(finalFeeUnits)} + ${formatNumberIQD(hostingFee)} <span class="math-step-tag tag-hosting" dir="rtl">[رسوم استضافة: 25%]</span></span>
                                        <span class="math-step-eq">=</span>
                                        <span class="math-step-val ${hasPostpone ? '' : 'final-val'}">${formatNumberIQD(finalFeeUnits + hostingFee)} د.ع</span>
                                    </div>
                                ` : ''}
                                ${hasPostpone ? `
                                    <div class="tuition-math-step-row postpone-row">
                                        <span class="math-step-calc">${formatNumberIQD(finalFeeUnits + hostingFee)} + ${formatNumberIQD(postponeFee)} <span class="math-step-tag tag-postpone" dir="rtl">[رسوم تأجيل: 10%]</span></span>
                                        <span class="math-step-eq">=</span>
                                        <span class="math-step-val final-val">${formatNumberIQD(finalGrandTotal)} د.ع</span>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const btnShareUnits = document.getElementById('btnShareTuitionUnits');
    if (btnShareUnits) {
        btnShareUnits.addEventListener('click', async () => {
            const baseUrl = window.location.href.split('?')[0].split('#')[0];
            const pathWithQuery = getAppPath('tuition-calc', '', studyType, 'units', extraParams);
            const shareUrl = `${baseUrl}${pathWithQuery}`;
            try {
                await navigator.clipboard.writeText(shareUrl);
            } catch (err) {
                const tempInput = document.createElement('input');
                tempInput.value = shareUrl;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            }

            showAppToast('تم نسخ رابط تفاصيل القسط والمشاركة بنجاح');
        });
    }
}

function populateTuitionSubjects() {
    const stageSelect = document.getElementById('tuitionSubStageSelect');
    const courseSelect = document.getElementById('tuitionSubCourseSelect');
    const subjectSelect = document.getElementById('tuitionSubSubjectSelect');
    const resultsArea = document.getElementById('tuitionSubResultsArea');
    if (!stageSelect || !courseSelect || !subjectSelect) return;

    const stageVal = stageSelect.value;
    const courseVal = courseSelect.value;

    if (!stageVal || !courseVal) {
        subjectSelect.innerHTML = '<option value="" disabled selected>اختر المادة</option>';
        if (resultsArea) {
            resultsArea.innerHTML = `
                <div class="ql-empty-state-box">
                    <span class="ql-empty-icon">💡</span>
                    <p class="ql-empty-text">يرجى اختيار نوع الدراسة، والمرحلة والكورس، ثم المادة لاحتساب أجورها بدقة.</p>
                </div>
            `;
        }
        return;
    }

    const stageNum = parseInt(stageVal, 10);
    const courseNum = parseInt(courseVal, 10);
    const targetSem = (stageNum - 1) * 2 + courseNum;

    const subjectsInSem = curriculumData.filter(c => c.sem === targetSem);
    subjectSelect.innerHTML = '<option value="" disabled selected>اختر المادة</option>';

    subjectsInSem.forEach((sub) => {
        const opt = document.createElement('option');
        opt.value = sub.code;
        opt.textContent = sub.nameAr;
        subjectSelect.appendChild(opt);
    });

    if (resultsArea) {
        resultsArea.innerHTML = `
            <div class="ql-empty-state-box">
                <span class="ql-empty-icon">📚</span>
                <p class="ql-empty-text">اختر الآن إحدى مواد الكورس من القائمة أعلاه لاحتساب أجورها.</p>
            </div>
        `;
    }
}

function loadTuitionSubjectByCode(code, studyType = '') {
    const subject = curriculumMap[code];
    if (!subject) return;

    const studySelect = document.getElementById('tuitionSubStudyType');
    const stageSelect = document.getElementById('tuitionSubStageSelect');
    const courseSelect = document.getElementById('tuitionSubCourseSelect');
    const subjectSelect = document.getElementById('tuitionSubSubjectSelect');

    if (stageSelect && courseSelect && subjectSelect) {
        if (studySelect && studyType) {
            studySelect.value = studyType;
        }

        const stageNum = Math.ceil(subject.sem / 2);
        const courseNum = (subject.sem % 2 !== 0) ? 1 : 2;

        stageSelect.value = stageNum.toString();
        courseSelect.value = courseNum.toString();

        populateTuitionSubjects();

        subjectSelect.value = subject.code;
        calculateAndRenderTuitionSubject();
    }
}

function calculateAndRenderTuitionSubject() {
    const subjectSelect = document.getElementById('tuitionSubSubjectSelect');
    const resultsArea = document.getElementById('tuitionSubResultsArea');
    if (!resultsArea) return;

    if (!subjectSelect || !subjectSelect.value) {
        resultsArea.innerHTML = `
            <div class="ql-empty-state-box">
                <span class="ql-empty-icon">💡</span>
                <p class="ql-empty-text">يرجى اختيار المرحلة والكورس ثم المادة لحساب أجورها المقررة.</p>
            </div>
        `;
        return;
    }

    const selectedCode = subjectSelect.value;
    const subject = curriculumMap[selectedCode];
    if (!subject) return;

    const studySelect = document.getElementById('tuitionSubStudyType');
    const studyType = studySelect ? studySelect.value : 'evening';
    const studyTypeName = (studyType === 'morning_parallel') ? 'صباحي (خاص / موازي)' : 'مسائي';
    const baseFee = TUITION_ANNUAL_FEE;

    const stageNum = Math.ceil(subject.sem / 2);
    const stageName = getStageName(stageNum);
    const courseTitle = getCourseName(subject.sem);
    const fullOriginName = `${stageName} - ${courseTitle}`;

    const ects = subject.ects;
    const totalFee = Math.round((ects / 60) * baseFee);

    try {
        if (currentTuitionMode === 'subject') {
            history.replaceState({ screen: 'tuition-calc', mode: 'subject', subject: selectedCode, type: studyType }, '', getAppPath('tuition-calc', selectedCode, studyType, 'subject'));
        }
    } catch (e) {}

    resultsArea.innerHTML = `
        <div class="ql-target-card tuition-target-card">
            <div class="ql-target-header">
                <div class="ql-target-title-block">
                    <h3 class="ql-target-name-ar">${subject.nameAr}</h3>
                    <span class="ql-target-name-en">${subject.nameEn}</span>
                </div>
                <div class="ql-target-action-block">
                    <button type="button" class="btn-share-ql-icon" id="btnShareTuitionSubject" title="نسخ رابط أجور المادة المباشر">
                        <span>🔗</span>
                    </button>
                </div>
            </div>
            <div class="ql-target-meta-badges">
                <span class="ql-pill-ects">${formatUnits(subject.ects)}</span>
                <span class="ql-pill-stage">${fullOriginName}</span>
                <span class="tuition-pill-study">🏛️ ${studyTypeName}</span>
                <span class="ql-pill-stage">💵 القسط السنوي: ${formatNumberIQD(baseFee)} د.ع</span>
            </div>
        </div>

        <div class="fees-grand-total-box">
            <span class="fees-total-badge">💰 المبلغ المطلوب لأجور مادة (${subject.nameAr})</span>
            <div class="fees-total-number-row">
                <span class="fees-total-number">${formatNumberIQD(totalFee)}</span>
                <span class="fees-currency-symbol">دينار عراقي</span>
            </div>
            <div class="fees-tafqeet-text">
                <span>(فقط ${tafqeetIQD(totalFee)} لا غير)</span>
            </div>

            <!-- Formula Box -->
            <div class="fees-formula-card">
                <div class="fees-formula-header">
                    <span class="fees-formula-type-badge">${studyTypeName} • احتساب أجور مادة</span>
                </div>
                <div class="fees-formula-body">
                    <div class="fees-formula-row">
                        <span class="fees-formula-label">المعادلة:</span>
                        <div class="fees-formula-text" dir="rtl">
                            <span class="fees-math-token">(عدد وحدات المادة / 60)</span>
                            <span class="fees-math-op">×</span>
                            <span class="fees-math-token">قيمة القسط السنوي</span>
                        </div>
                    </div>
                    <div class="fees-formula-eval-box">
                        <div class="fees-eval-top-row">
                            <span class="fees-formula-label">التطبيق:</span>
                            <div class="tuition-eval-units-chips">
                                <span class="tuition-unit-chip chip-total">📚 وحدات المادة: <strong>${ects} وحدة</strong></span>
                            </div>
                        </div>
                        <div class="fees-eval-math-row">
                            <div class="tuition-math-steps-card">
                                <div class="tuition-math-step-row">
                                    <span class="math-step-calc">(${ects} / 60) × ${formatNumberIQD(baseFee)} د.ع</span>
                                    <span class="math-step-eq">=</span>
                                    <span class="math-step-val final-val">${formatNumberIQD(totalFee)} د.ع</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const btnShare = document.getElementById('btnShareTuitionSubject');
    if (btnShare) {
        btnShare.addEventListener('click', async () => {
            const baseUrl = window.location.href.split('?')[0].split('#')[0];
            const pathWithQuery = getAppPath('tuition-calc', subject.code, studyType, 'subject');
            const shareUrl = `${baseUrl}${pathWithQuery}`;
            try {
                await navigator.clipboard.writeText(shareUrl);
            } catch (err) {
                const tempInput = document.createElement('input');
                tempInput.value = shareUrl;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
            }

            showAppToast('تم نسخ الرابط المباشر لأجور المادة');
        });
    }
}

// --------------------------------------------------------------------------
// 5. Initializers & Events
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const btnStart = document.getElementById('btnStartSimulation');
    if (btnStart) {
        btnStart.addEventListener('click', () => startSimulation(true));
    }

    const btnOpenQuickLook = document.getElementById('btnOpenQuickLook');
    if (btnOpenQuickLook) {
        btnOpenQuickLook.addEventListener('click', () => openQuickLookScreen(true));
    }

    const btnBackFromQuickLook = document.getElementById('btnBackFromQuickLook');
    if (btnBackFromQuickLook) {
        btnBackFromQuickLook.addEventListener('click', () => closeQuickLookScreen(true));
    }

    const btnOpenFees = document.getElementById('btnOpenFeesCalc');
    if (btnOpenFees) {
        btnOpenFees.addEventListener('click', openFeesCalculatorScreen);
    }

    const btnBackFees = document.getElementById('btnBackFromFeesCalc');
    if (btnBackFees) {
        btnBackFees.addEventListener('click', closeFeesCalculatorScreen);
    }

    // Tuition Calculator Listeners
    const btnOpenTuition = document.getElementById('btnOpenTuitionCalc');
    if (btnOpenTuition) {
        btnOpenTuition.addEventListener('click', openTuitionCalculatorScreen);
    }

    const btnBackTuition = document.getElementById('btnBackFromTuitionCalc');
    if (btnBackTuition) {
        btnBackTuition.addEventListener('click', closeTuitionCalculatorScreen);
    }

    const btnModeUnits = document.getElementById('btnTuitionModeUnits');
    if (btnModeUnits) {
        btnModeUnits.addEventListener('click', () => switchTuitionMode('units'));
    }

    const btnModeSubject = document.getElementById('btnTuitionModeSubject');
    if (btnModeSubject) {
        btnModeSubject.addEventListener('click', () => switchTuitionMode('subject'));
    }

    // Units Mode Inputs (Reactive Text Inputs)
    const tuitionUnitsStudyType = document.getElementById('tuitionUnitsStudyType');
    if (tuitionUnitsStudyType) {
        const initialStudy = tuitionUnitsStudyType.value || 'evening';
        populateTuitionDiscounts(initialStudy);
        const hostingCardInit = document.getElementById('tuitionHostingCard');
        if (hostingCardInit) {
            hostingCardInit.style.display = (initialStudy === 'evening') ? 'block' : 'none';
        }
        tuitionUnitsStudyType.addEventListener('change', () => {
            const currentStudy = tuitionUnitsStudyType.value;
            populateTuitionDiscounts(currentStudy);
            const hostingCard = document.getElementById('tuitionHostingCard');
            const hostingToggle = document.getElementById('tuitionHostingToggle');
            if (currentStudy === 'evening') {
                if (hostingCard) hostingCard.style.display = 'block';
            } else {
                if (hostingCard) {
                    hostingCard.style.display = 'none';
                    hostingCard.classList.remove('active-hosting');
                }
                if (hostingToggle) {
                    hostingToggle.checked = false;
                }
            }
            calculateAndRenderTuitionUnits();
        });
    }

    const tuitionCourse1Units = document.getElementById('tuitionCourse1Units');
    if (tuitionCourse1Units) {
        tuitionCourse1Units.addEventListener('input', () => {
            const clean = tuitionCourse1Units.value.replace(/[^0-9.]/g, '');
            const val = parseFloat(clean);
            if (!isNaN(val) && val > 30) {
                tuitionCourse1Units.value = '30';
            }
            calculateAndRenderTuitionUnits();
        });
    }

    const tuitionCourse2Units = document.getElementById('tuitionCourse2Units');
    if (tuitionCourse2Units) {
        tuitionCourse2Units.addEventListener('input', () => {
            const clean = tuitionCourse2Units.value.replace(/[^0-9.]/g, '');
            const val = parseFloat(clean);
            if (!isNaN(val) && val > 30) {
                tuitionCourse2Units.value = '30';
            }
            calculateAndRenderTuitionUnits();
        });
    }

    const tuitionUnitsDiscountToggle = document.getElementById('tuitionUnitsDiscountToggle');
    if (tuitionUnitsDiscountToggle) {
        tuitionUnitsDiscountToggle.addEventListener('change', () => {
            const box = document.getElementById('tuitionUnitsDiscountBox');
            const card = tuitionUnitsDiscountToggle.closest('.tuition-discount-card');
            const discountTypeSelect = document.getElementById('tuitionUnitsDiscountType');
            const customWrapper = document.getElementById('tuitionUnitsCustomDiscountWrapper');
            const discount2Toggle = document.getElementById('tuitionUnitsDiscount2Toggle');
            const discount2Box = document.getElementById('tuitionUnitsDiscount2Box');

            if (box) box.style.display = tuitionUnitsDiscountToggle.checked ? 'flex' : 'none';
            if (card) {
                if (tuitionUnitsDiscountToggle.checked) card.classList.add('active-discount');
                else card.classList.remove('active-discount');
            }
            if (customWrapper && discountTypeSelect) {
                customWrapper.style.display = (tuitionUnitsDiscountToggle.checked && discountTypeSelect.value === 'custom') ? 'flex' : 'none';
            }
            if (!tuitionUnitsDiscountToggle.checked) {
                if (discount2Toggle) discount2Toggle.checked = false;
                if (discount2Box) discount2Box.style.display = 'none';
            }
            calculateAndRenderTuitionUnits();
        });
    }

    const tuitionUnitsDiscountType = document.getElementById('tuitionUnitsDiscountType');
    if (tuitionUnitsDiscountType) {
        tuitionUnitsDiscountType.addEventListener('change', () => {
            const customWrapper = document.getElementById('tuitionUnitsCustomDiscountWrapper');
            if (customWrapper) {
                const isCustom = tuitionUnitsDiscountType.value === 'custom';
                customWrapper.style.display = isCustom ? 'flex' : 'none';
                if (isCustom) {
                    const customInput = document.getElementById('tuitionUnitsDiscountPercent');
                    if (customInput) customInput.focus();
                }
            }
            calculateAndRenderTuitionUnits();
        });
    }

    const tuitionUnitsDiscountPercent = document.getElementById('tuitionUnitsDiscountPercent');
    if (tuitionUnitsDiscountPercent) {
        tuitionUnitsDiscountPercent.addEventListener('input', () => {
            const clean = tuitionUnitsDiscountPercent.value.replace(/[^0-9.]/g, '');
            const val = parseFloat(clean);
            if (!isNaN(val) && val > 100) {
                tuitionUnitsDiscountPercent.value = '100';
            }
            calculateAndRenderTuitionUnits();
        });
    }

    // Second Discount Event Listeners
    const tuitionUnitsDiscount2Toggle = document.getElementById('tuitionUnitsDiscount2Toggle');
    if (tuitionUnitsDiscount2Toggle) {
        tuitionUnitsDiscount2Toggle.addEventListener('change', () => {
            const box2 = document.getElementById('tuitionUnitsDiscount2Box');
            const discount2TypeSelect = document.getElementById('tuitionUnitsDiscount2Type');
            const customWrapper2 = document.getElementById('tuitionUnitsCustomDiscount2Wrapper');
            if (box2) box2.style.display = tuitionUnitsDiscount2Toggle.checked ? 'flex' : 'none';
            if (customWrapper2 && discount2TypeSelect) {
                customWrapper2.style.display = (tuitionUnitsDiscount2Toggle.checked && discount2TypeSelect.value === 'custom') ? 'flex' : 'none';
            }
            calculateAndRenderTuitionUnits();
        });
    }

    const tuitionUnitsDiscount2Type = document.getElementById('tuitionUnitsDiscount2Type');
    if (tuitionUnitsDiscount2Type) {
        tuitionUnitsDiscount2Type.addEventListener('change', () => {
            const customWrapper2 = document.getElementById('tuitionUnitsCustomDiscount2Wrapper');
            if (customWrapper2) {
                const isCustom = tuitionUnitsDiscount2Type.value === 'custom';
                customWrapper2.style.display = isCustom ? 'flex' : 'none';
                if (isCustom) {
                    const customInput2 = document.getElementById('tuitionUnitsDiscount2Percent');
                    if (customInput2) customInput2.focus();
                }
            }
            calculateAndRenderTuitionUnits();
        });
    }

    const tuitionUnitsDiscount2Percent = document.getElementById('tuitionUnitsDiscount2Percent');
    if (tuitionUnitsDiscount2Percent) {
        tuitionUnitsDiscount2Percent.addEventListener('input', () => {
            const clean = tuitionUnitsDiscount2Percent.value.replace(/[^0-9.]/g, '');
            const val = parseFloat(clean);
            if (!isNaN(val) && val > 100) {
                tuitionUnitsDiscount2Percent.value = '100';
            }
            calculateAndRenderTuitionUnits();
        });
    }

    // Hosting Toggle Listener (استضافة من المسائي إلى الصباحي)
    const tuitionHostingToggle = document.getElementById('tuitionHostingToggle');
    if (tuitionHostingToggle) {
        tuitionHostingToggle.addEventListener('change', () => {
            const card = tuitionHostingToggle.closest('.tuition-hosting-card');
            if (card) {
                if (tuitionHostingToggle.checked) card.classList.add('active-hosting');
                else card.classList.remove('active-hosting');
            }
            calculateAndRenderTuitionUnits();
        });
    }

    // Postponement Toggle Listener
    const tuitionPostponeToggle = document.getElementById('tuitionPostponeToggle');
    if (tuitionPostponeToggle) {
        tuitionPostponeToggle.addEventListener('change', () => {
            const card = tuitionPostponeToggle.closest('.tuition-postpone-card');
            if (card) {
                if (tuitionPostponeToggle.checked) card.classList.add('active-postpone');
                else card.classList.remove('active-postpone');
            }
            calculateAndRenderTuitionUnits();
        });
    }

    // Subject Mode Inputs
    const tuitionSubStudyType = document.getElementById('tuitionSubStudyType');
    if (tuitionSubStudyType) {
        tuitionSubStudyType.addEventListener('change', calculateAndRenderTuitionSubject);
    }

    const tuitionSubStageSelect = document.getElementById('tuitionSubStageSelect');
    if (tuitionSubStageSelect) {
        tuitionSubStageSelect.addEventListener('change', populateTuitionSubjects);
    }

    const tuitionSubCourseSelect = document.getElementById('tuitionSubCourseSelect');
    if (tuitionSubCourseSelect) {
        tuitionSubCourseSelect.addEventListener('change', populateTuitionSubjects);
    }

    const tuitionSubSubjectSelect = document.getElementById('tuitionSubSubjectSelect');
    if (tuitionSubSubjectSelect) {
        tuitionSubSubjectSelect.addEventListener('change', calculateAndRenderTuitionSubject);
    }

    const btnReturnHome = document.getElementById('btnReturnToHome');
    if (btnReturnHome) {
        btnReturnHome.addEventListener('click', () => showWelcomeScreen(true));
    }

    const qlStageSelect = document.getElementById('qlStageSelect');
    if (qlStageSelect) {
        qlStageSelect.addEventListener('change', populateQuickLookSubjects);
    }

    const qlCourseSelect = document.getElementById('qlCourseSelect');
    if (qlCourseSelect) {
        qlCourseSelect.addEventListener('change', populateQuickLookSubjects);
    }

    const qlSubjectSelect = document.getElementById('qlSubjectSelect');
    if (qlSubjectSelect) {
        qlSubjectSelect.addEventListener('change', renderQuickLookResults);
    }

    const feesStudyTypeSelect = document.getElementById('feesStudyTypeSelect');
    if (feesStudyTypeSelect) {
        feesStudyTypeSelect.addEventListener('change', () => {
            const subjectSelect = document.getElementById('feesSubjectSelect');
            if (subjectSelect && subjectSelect.value) {
                calculateAndRenderFees();
            } else {
                let sType = feesStudyTypeSelect.value || '';
                if (sType === 'morning_free') sType = 'morning';
                try {
                    history.replaceState({ screen: 'fees-calc', subject: '', type: sType }, '', getAppPath('fees-calc', '', sType));
                } catch (e) {}
            }
        });
    }

    const feesStageSelect = document.getElementById('feesStageSelect');
    if (feesStageSelect) {
        feesStageSelect.addEventListener('change', populateFeesSubjects);
    }

    const feesCourseSelect = document.getElementById('feesCourseSelect');
    if (feesCourseSelect) {
        feesCourseSelect.addEventListener('change', populateFeesSubjects);
    }

    const feesSubjectSelect = document.getElementById('feesSubjectSelect');
    if (feesSubjectSelect) {
        feesSubjectSelect.addEventListener('change', calculateAndRenderFees);
    }

    const btnPrev = document.getElementById('btnPreviousSemester');
    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            revertToPreviousSemester();
        });
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

    // Simulator Chains Modal Listeners
    const btnCloseSimChains = document.getElementById('btnCloseSimChainsModal');
    if (btnCloseSimChains) {
        btnCloseSimChains.addEventListener('click', closeSimChainsModal);
    }
    const simChainsModal = document.getElementById('simChainsModal');
    if (simChainsModal) {
        simChainsModal.addEventListener('click', (e) => {
            if (e.target === simChainsModal) {
                closeSimChainsModal();
            }
        });
    }

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-open-sim-chains');
        if (btn) {
            e.preventDefault();
            e.stopPropagation();
            const code = btn.getAttribute('data-subject-code');
            if (code) {
                openSimChainsModal(code);
            }
        }
    });

    // Browser Back / Forward Button Navigation Support
    function handleHistoryNavigation(e) {
        const stateScreen = e?.state?.screen;
        const urlStr = window.location.href;

        const match = urlStr.match(/[?&#]subject=([A-Za-z0-9]+)/) || urlStr.match(/[?&#]code=([A-Za-z0-9]+)/);
        const typeMatch = urlStr.match(/[?&#]type=([A-Za-z0-9_]+)/);

        if (stateScreen === 'fees-calc' || urlStr.includes('fees-calc') || urlStr.includes('screen=fees-calc')) {
            openFeesCalculatorScreen(false);
            let sType = typeMatch ? typeMatch[1] : '';
            if (sType === 'morning_free') sType = 'morning';
            if (match && match[1] && curriculumMap[match[1]]) {
                loadFeesSubjectByCode(match[1], sType);
            } else if (typeMatch && typeMatch[1]) {
                const studySelect = document.getElementById('feesStudyTypeSelect');
                if (studySelect) studySelect.value = sType;
            }
        } else if (stateScreen === 'tuition-calc' || urlStr.includes('tuition-calc') || urlStr.includes('screen=tuition-calc')) {
            openTuitionCalculatorScreen(false);
        } else if (match && match[1] && curriculumMap[match[1]]) {
            openQuickLookScreen(false);
            loadQuickLookSubjectByCode(match[1]);
        } else if (stateScreen === 'quick-look' || urlStr.includes('quick-look') || urlStr.includes('screen=quick-look')) {
            openQuickLookScreen(false);
        } else if (stateScreen === 'workspace' || urlStr.includes('simulation') || urlStr.includes('screen=simulation')) {
            startSimulation(false);
        } else {
            showWelcomeScreen(false);
        }
    }

    try {
        const initialUrl = window.location.href;
        const match = initialUrl.match(/[?&#]subject=([A-Za-z0-9]+)/) || initialUrl.match(/[?&#]code=([A-Za-z0-9]+)/);

        if (match || initialUrl.includes('fees-calc') || initialUrl.includes('screen=fees-calc') || initialUrl.includes('tuition-calc') || initialUrl.includes('screen=tuition-calc') || initialUrl.includes('quick-look') || initialUrl.includes('screen=quick-look') || initialUrl.includes('simulation') || initialUrl.includes('screen=simulation')) {
            handleHistoryNavigation();
        } else {
            history.replaceState({ screen: 'welcome' }, '', getAppPath('welcome'));
        }
    } catch (err) {
        // Fallback
    }
    window.addEventListener('popstate', handleHistoryNavigation);
    window.addEventListener('hashchange', handleHistoryNavigation);

    initSimulation();
});

function showAppToast(message, duration = 2500) {
    let toast = document.getElementById('globalAppToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'globalAppToast';
        toast.className = 'global-app-toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="toast-icon">✓</span><span class="toast-text">${message}</span>`;

    toast.classList.remove('show');
    void toast.offsetWidth;
    toast.classList.add('show');

    if (window.globalAppToastTimer) {
        clearTimeout(window.globalAppToastTimer);
    }
    window.globalAppToastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// ----------------------------------------------------
// Simulator Interactive Chains Modal Functions
// ----------------------------------------------------
function openSimChainsModal(subjectCode) {
    const subject = curriculumMap[subjectCode];
    if (!subject) return;

    const modal = document.getElementById('simChainsModal');
    const titleEl = document.getElementById('simChainsModalTitle');
    const subtitleEl = document.getElementById('simChainsModalSubtitle');
    const bodyEl = document.getElementById('simChainsModalBody');

    if (!modal || !bodyEl) return;

    const subjectStage = Math.ceil(subject.sem / 2);
    const subjectStageName = getStageName(subjectStage);
    const subjectCourseName = getCourseName(subject.sem);

    if (titleEl) {
        titleEl.textContent = `خريطة ومسارات الاعتماد والتأثير للمادة: ${subject.nameAr}`;
    }
    if (subtitleEl) {
        subtitleEl.textContent = `🎓 ${subjectStageName} • ${subjectCourseName}`;
    }

    const directDependents = getDirectDependents(subjectCode);
    
    // Build all chain paths recursively with cycle safety
    const allPaths = [];
    function buildChain(code, currentPath) {
        const nexts = getDirectDependents(code);
        if (nexts.length === 0) {
            if (currentPath.length > 1) {
                allPaths.push([...currentPath]);
            }
            return;
        }
        nexts.forEach(n => {
            if (currentPath.some(x => x.code === n.code)) return;
            buildChain(n.code, [...currentPath, n]);
        });
    }
    buildChain(subjectCode, [subject]);

    const indirectPaths = allPaths.filter(p => p.length > 2);

    // Direct Paths HTML
    const directPathsHTML = directDependents.map((dep) => {
        const depStage = Math.ceil(dep.sem / 2);
        const depStageName = getStageName(depStage);
        const depCourse = getCourseName(dep.sem);
        const isImmediateNext = (dep.sem === subject.sem + 1);
        const checkResDirect = checkModuleRegistrationOnTime(subjectCode, dep.code);
        const canRegisterOnTime = checkResDirect.canRegisterOnTime;
        const blockingModuleDirect = checkResDirect.blockingModule;
        const affectedModuleDirect = checkResDirect.affectedModule;

        const timingBadge = isImmediateNext
            ? `<span class="ql-chain-timing-badge badge-timing-next">⚡ حرمان فوري</span> <span class="ql-chain-timing-badge badge-ontime-no">❌ تتأجّل</span>`
            : canRegisterOnTime
            ? `<span class="ql-chain-timing-badge badge-timing-later">📅 حرمان من كورس لاحق</span> <span class="ql-chain-timing-badge badge-ontime-yes">✅ بموعدها</span>`
            : `<span class="ql-chain-timing-badge badge-timing-later">📅 حرمان من كورس لاحق</span> <span class="ql-chain-timing-badge badge-ontime-no">❌ تتأجّل</span>`;

        const directBlockingReasonText = (blockingModuleDirect && affectedModuleDirect && affectedModuleDirect.code !== dep.code)
            ? `وجود رسوب تكويني بمادة أخرى وهي (${blockingModuleDirect.nameAr}) المرتبطة بمادة (${affectedModuleDirect.nameAr}) سيمنع تسجيل مادة (${dep.nameAr}) في موعدها.`
            : blockingModuleDirect
            ? `وجود رسوب تكويني بمادة أخرى وهي (${blockingModuleDirect.nameAr}) سيمنع تسجيل مادة (${dep.nameAr}) في موعدها.`
            : `موعد (${dep.nameAr}) يتزامن مع إعادة (${subject.nameAr}) العام القادم، مما يمنع تسجيلها بموعدها.`;

        const noteFooter = isImmediateNext
            ? `<div class="ql-chain-note-footer note-danger"><div class="ql-chain-note-title">🚨 تأثير مباشر:</div><div class="ql-chain-note-text">يتطلب تسجيل (${dep.nameAr}) النجاح في (${subject.nameAr}) أولاً، وبسبب الرسوب لن يُسمح بتسجيلها في الكورس القادم.</div></div>`
            : canRegisterOnTime
            ? `<div class="ql-chain-note-footer note-success"><div class="ql-chain-note-title">✅ إمكانية التسجيل:</div><div class="ql-chain-note-text">إعادة (${subject.nameAr}) والنجاح التكويني فيها العام القادم تضمن تسجيل (${dep.nameAr}) بموعدها دون تأخير.</div></div>`
            : `<div class="ql-chain-note-footer note-danger"><div class="ql-chain-note-title">${blockingModuleDirect ? '🚨 تأخير بسبب مادة أخرى:' : '⚠️ تزامن الإعادة:'}</div><div class="ql-chain-note-text">${directBlockingReasonText}</div></div>`;

        return `
            <div class="ql-chain-flow-item">
                <div class="ql-chain-flow-header">
                    <span class="ql-chain-stage-meta">🎓 ${depStageName} • ${depCourse}</span>
                    <div class="ql-chain-badges-group">
                        ${timingBadge}
                    </div>
                </div>
                <div class="ql-chain-flow-body">
                    <div class="ql-chain-flow">
                        <span class="ql-chain-node node-root">📌 ${subject.nameAr}</span>
                        <span class="ql-chain-arrow">←</span>
                        <span class="ql-chain-node node-direct">🔗 ${dep.nameAr}</span>
                    </div>
                    ${noteFooter}
                </div>
            </div>
        `;
    }).join('');

    // Indirect Paths HTML
    let indirectPathsHTML = '';
    if (indirectPaths.length > 0) {
        indirectPathsHTML = indirectPaths.map((path) => {
            const firstDep = path[1];
            const lastDep = path[path.length - 1];
            const lastStage = Math.ceil(lastDep.sem / 2);
            const lastStageName = getStageName(lastStage);
            const lastCourse = getCourseName(lastDep.sem);
            const isImmediateNext = (firstDep.sem === subject.sem + 1);
            const checkRes = checkModuleRegistrationOnTime(subjectCode, lastDep.code);
            const targetCanRegisterOnTime = checkRes.canRegisterOnTime;
            const blockingModule = checkRes.blockingModule;
            const affectedModule = checkRes.affectedModule;

            const timingBadge = isImmediateNext
                ? `<span class="ql-chain-timing-badge badge-timing-next">⚡ يبدأ بحرمان فوري</span> ${targetCanRegisterOnTime ? '<span class="ql-chain-timing-badge badge-ontime-yes">✅ بموعدها</span>' : '<span class="ql-chain-timing-badge badge-ontime-no">❌ تتأجّل</span>'}`
                : `<span class="ql-chain-timing-badge badge-timing-later">📅 يبدأ بحرمان من كورس لاحق</span> ${targetCanRegisterOnTime ? '<span class="ql-chain-timing-badge badge-ontime-yes">✅ بموعدها</span>' : '<span class="ql-chain-timing-badge badge-ontime-no">❌ تتأجّل</span>'}`;

            const blockingReasonText = (blockingModule && affectedModule && affectedModule.code !== lastDep.code)
                ? `وجود رسوب تكويني بمادة أخرى وهي (${blockingModule.nameAr}) المرتبطة بمادة (${affectedModule.nameAr}) سيمنع تسجيل مادة (${lastDep.nameAr}) في موعدها.`
                : blockingModule
                ? `وجود رسوب تكويني بمادة أخرى وهي (${blockingModule.nameAr}) سيمنع تسجيل مادة (${lastDep.nameAr}) في موعدها.`
                : `تبدأ بحرمان من (${firstDep.nameAr}) وتسبب تأخيراً متسلسلاً يمتد ويؤدي لتأجيل تسجيل مادة (${lastDep.nameAr}) عن موعدها الأصلي.`;

            const noteFooter = targetCanRegisterOnTime
                ? `<div class="ql-chain-note-footer note-success"><div class="ql-chain-note-title">✅ مسار آمن:</div><div class="ql-chain-note-text">${isImmediateNext ? `تبدأ بتأجيل المادة المباشرة (${firstDep.nameAr}) في الكورس القادم، ولكن ` : ''}إعادة (${subject.nameAr}) والنجاح فيها تضمن استكمال المسار وتسجيل مادة (${lastDep.nameAr}) بموعدها الأصلي.</div></div>`
                : `<div class="ql-chain-note-footer note-danger"><div class="ql-chain-note-title">${blockingModule ? '🚨 تأخير بسبب مادة أخرى:' : '🚨 سلسلة حرمان حرجة:'}</div><div class="ql-chain-note-text">${blockingReasonText}</div></div>`;

            const nodesHTML = path.map((item, idx) => {
                const nodeName = item.nameAr;
                const nodeClass = idx === 0 ? 'node-root' : idx === 1 ? 'node-direct' : 'node-indirect';
                const nodeIcon = idx === 0 ? '📌' : idx === 1 ? '🔗' : '⛓️';
                return `<span class="ql-chain-node ${nodeClass}">${nodeIcon} ${nodeName}</span>`;
            }).join('<span class="ql-chain-arrow">←</span>');

            return `
                <div class="ql-chain-flow-item">
                    <div class="ql-chain-flow-header">
                        <span class="ql-chain-stage-meta">⛓️ مسار يمتد إلى (${lastStageName} • ${lastCourse})</span>
                        <div class="ql-chain-badges-group">
                            ${timingBadge}
                        </div>
                    </div>
                    <div class="ql-chain-flow-body">
                        <div class="ql-chain-flow">${nodesHTML}</div>
                        ${noteFooter}
                    </div>
                </div>
            `;
        }).join('');
    }

    bodyEl.innerHTML = `
        <!-- قسم مسارات الحرمان المباشر -->
        <div class="sim-modal-section-card">
            <div class="sim-modal-section-divider divider-direct">
                <div class="sim-divider-header">
                    <span class="sim-divider-icon">🚨</span>
                    <h4 class="sim-divider-title">مسارات الحرمان المباشر (${directDependents.length} مسارات)</h4>
                </div>
                <span class="sim-divider-subtitle">الارتباطات المباشرة والتأثير الفوري عند عدم اجتياز المادة:</span>
            </div>
            <div class="ql-chain-paths-container">
                ${directPathsHTML || '<p class="sim-no-paths-text">لا توجد مسارات حرمان مباشر لهذه المادة.</p>'}
            </div>
        </div>

        <!-- قسم مسارات الحرمان المتسلسل -->
        ${indirectPathsHTML ? `
        <div class="sim-modal-section-card">
            <div class="sim-modal-section-divider divider-indirect">
                <div class="sim-divider-header">
                    <span class="sim-divider-icon">⛓️</span>
                    <h4 class="sim-divider-title">مسارات الحرمان المتسلسل (${indirectPaths.length} مساراً)</h4>
                </div>
                <span class="sim-divider-subtitle">السلاسل الممتدة والتأثير التراكمي عبر الفصول والمراحل:</span>
            </div>
            <div class="ql-chain-paths-container">
                ${indirectPathsHTML}
            </div>
        </div>
        ` : ''}
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (bodyEl) bodyEl.scrollTop = 0;
}

function closeSimChainsModal() {
    const modal = document.getElementById('simChainsModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}
