# 🎓 محاكي مسار بولونيا الأكاديمي | Bologna Process Academic Simulator
> **قسم علوم الحاسوب - كلية العلوم - جامعة بغداد**  
> **Department of Computer Science - College of Science - University of Baghdad**

---

## 📌 نبذة عن الأداة (Overview)

### 🇮🇶 <img src="https://flagcdn.com/24x18/iq.png" width="22" height="16" alt="علم العراق"> اللغة العربية
أداة متقدمة وتفاعلية لمساعدة طلبة **قسم علوم الحاسوب في جامعة بغداد** في تسجيل موادهم الدراسية ومعرفة مسارهم الأكاديمي بدقة في حال حدوث **الرسوب التكويني**، وفهم كيفية تأثيره على المتطلبات المسبقة، وتوزيع الفصول الدراسية، واحتساب السنوات الإضافية وفق لوائح مسار بولونيا المعتمد.

### 🇬🇧 <img src="https://flagcdn.com/24x18/gb.png" width="22" height="16" alt="UK Flag"> English
An advanced interactive academic simulator designed to help **Computer Science students at the University of Baghdad** plan course registration and visualize their academic trajectory under **Formative Assessment Failure**, illustrating its impact on prerequisite chains, semester scheduling, and additional study years under Bologna Process regulations.

---

## 🇮🇶 <img src="https://flagcdn.com/24x18/iq.png" width="22" height="16" alt="Iraq Flag"> آلية عمل النظام والتحديثات الرئيسية (باللغة العربية)

### 1. التحقق من المتطلبات المسبقة والحرمان المباشر والمتسلسل (Prerequisite & Dependency Validation)
- **الحرمان المباشر:** منع تسجيل المواد التي تتطلب النجاح التكويني المباشر في المادة المسبقة.
- **مسارات الحرمان المتسلسل:** تتبع السلاسل الأكاديمية الممتدة والتأثير التراكمي للرسوب عبر المراحل والفصول الدراسية اللاحقة.

### 2. نظام شارات التسجيل بالموعد ودليل الملاحظة التوضيحي (Registration Timing Badges & Legend)
- اعتماد نظام شارات مقتضبة وعالية التباين لتبيان موقف تسجيل المواد اللاحقة عند إعادة المادة المسبقة العام القادم:
  - **`✅ بموعدها`**: إمكانية تسجيل المادة بموعدها الأصلي عند النجاح التكويني في الإعادة.
  - **`❌ تتأجّل`**: تأجيل تسجيل المادة لتزامن موعدها مع كورس الإعادة.
- دليل توضيحي موحد (`💡 توضيح شارات التسجيل بالموعد`) يُعرض بقمة النظرة السريعة والمحاكي لتوضيح معاني الشارات وشروطها.

### 3. خريطة مسارات التأثير والاعتماد الأكاديمي (Interactive Chain Maps Modal)
- نافذة تفاعلية منبثقة تفتح عبر زر (`🗺️ خريطة مسارات التأثير`) لاستكشاف كافة المسارات المباشرة والمتسلسلة المترتبة على الرسوب في أي مادة، مع تتبع كامل عقد المسار والأثر التراكمي.

### 4. معالجة الرسوب التكويني وإعادة المواد (Formative Failure & Retake Rules)
- إلزامية إعادة المادة في نفس فصل الطرح المماثل (الفصول الفردية في الكورس الأول، والزوجية في الكورس الثاني).
- منح المواد المعادة أولوية التسجيل المطلقة قبل إضافة المواد الجديدة.

### 5. سقف الوحدات الأكاديمية (30 ECTS Credit Limit)
- تطبيق الحد الأقصى المسموح به فصلياً وهو **30 وحدة ECTS**.
- ترحيل المواد الزائدة تلقائياً إلى الفصول والسنوات التالية.

### 6. احتساب السنوات الإضافية وترقين القيد (Extra Years & Academic Dismissal)
- احتساب تلقائي ديناميكي للسنوات الإضافية، والتنبيه عند الوصول للسنة الخامسة، وإعلان **ترقين القيد** القانوني عند تجاوز الحد الأقصى (6 سنوات / 12 فصلاً).

### 7. النظرة السريعة المتقدمة والتصميم المتجاوب (Upgraded Quick Look & Responsive UI)
- بطاقات معلومات محسنة ذات هيكلية عمودية ورأسية تضمن الوضوح التام وعدم انكسار النصوص على الهواتف المحمولة.
- تموضع شارات `⛓️ حرمان متسلسل` بأقصى أسفل يسار الكارت لاقتطاع المساحة العمودية وتسهيل التصفح.

### 8. السجل الأكاديمي والتصدير (Transcript & Export)
- إنشاء سجل وصفي شامل لكافة الفصول والمراحل مع إمكانية التصدير كصورة عالية الدقة.

---

## 🇬🇧 <img src="https://flagcdn.com/24x18/gb.png" width="22" height="16" alt="UK Flag"> Key Features & System Mechanisms (English)

### 1. Direct & Sequential Deprivation Validation
- **Direct Blocking:** Immediately locks downstream modules requiring prerequisite formative pass.
- **Sequential Deprivation Paths:** Tracks multi-tier academic impact chains across future semesters and stages.

### 2. Registration Timing Badges & Explanatory Legend
- High-contrast concise badges indicating enrollment timing upon passing the retake course next year:
  - **`✅ بموعدها` (On Time):** Course can be registered on schedule upon formatively passing the retake.
  - **`❌ تتأجّل` (Deferred):** Course is deferred due to schedule clash with the retake semester.
- Standardized explanatory legend box (`💡 توضيح شارات التسجيل بالموعد`) clarifying badge meanings.

### 3. Interactive Impact & Dependency Chain Map Modal
- Dedicated interactive modal opened via `🗺️ Impact Chain Map` button to explore full prerequisite chains, node paths, and cumulative blocking effects.

### 4. Formative Failure & Mandatory Retake Rules
- Enforces retake enrollment in identical seasonal terms (Odd terms for Semester 1, Even terms for Semester 2) with highest registration priority.

### 5. Semester Credit Ceiling (30 ECTS Cap)
- Enforces a regulatory maximum cap of **30 ECTS credits** per semester, rolling over excess credits to future terms.

### 6. Dynamic Extra Years & Dismissal Tracking
- Calculates academic extension years and triggers an **Academic Dismissal** alert if completion exceeds 6 regulatory years (12 semesters).

### 7. Upgraded Quick Look & Optimized Mobile UI
- Enhanced card structures with vertical text protection and compact badge positioning for optimal mobile readability.

### 8. Transcript Generation & Image Export
- Generates descriptive multi-semester academic records exportable as high-resolution images.

---

## 👨‍💻 إعداد وتطوير (Development)

- **إعداد وتطوير:** مصطفى أحمد غفور (Mustafa A. Ghafour)