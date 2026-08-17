# محاكي مسار بولونيا الأكاديمي | Bologna Process Academic Simulator
> **قسم علوم الحاسوب - كلية العلوم - جامعة بغداد**  
> **Department of Computer Science - College of Science - University of Baghdad**

---

## 📌 نبذة عن الأداة (Overview)

### 🇮🇶 العربية
أداة متقدمة لمساعدة طلبة **قسم علوم الحاسوب في جامعة بغداد** في تسجيل موادهم الدراسية ومعرفة مسارهم الأكاديمي بدقة في حال حدوث **الرسوب التكويني**، وفهم كيفية تأثيره على المتطلبات المسبقة، وتوزيع الفصول الدراسية، واحتساب السنوات الإضافية وفق لوائح مسار بولونيا المعتمد.

### 🇬🇧 English
A specialized academic tool designed to help **Computer Science students at the University of Baghdad** plan their course registration and track their academic trajectory in cases of **Formative Assessment Failure**, illustrating its impact on prerequisite chains, semester scheduling, and additional study years under the Bologna Process.

---

## ⚙️ آلية عمل النظام (System Mechanisms)

### 1. التحقق من المتطلبات المسبقة (Prerequisite Validation)
- فحص ترابط المواد الأكاديمية تسلسلياً بحيث يشترط اجتياز المادة المسبقة بنجاح قبل السماح بتسجيل المادة المعتمدة عليها في الفصول اللاحقة.
- حجب المواد المتقدمة تلقائياً في حال عدم استيفاء متطلباتها وتوضيح سبب الحجب للطالب.

### 2. معالجة الرسوب التكويني وإعادة المواد (Formative Failure & Retake Rules)
- في حال الرسوب التكويني في مادة معينة، يلزم النظام الطالب بإعادة دراستها في نفس فصل الطرح المماثل (الفصول الفردية في الكورس الأول، والزوجية في الكورس الثاني).
- منح المواد المعادة أولوية التسجيل الإلزامية قبل إضافة المواد الجديدة.

### 3. سقف الوحدات الأكاديمية (ECTS Credit Limit)
- تطبيق الحد الأقصى المسموح به فصلياً وهو **30 وحدة ECTS**.
- ترحيل المواد التي لا تتسع لها خطة الفصل إلى فصول وسنوات لاحقة، مما قد يترتب عليه إضافة سنة دراسية إضافية.

### 4. احتساب السنوات الإضافية وترقين القيد (Extra Years & Academic Dismissal)
- احتساب تلقائي للسنوات الإضافية الناتجة عن تأخير المواد وسلاسل الارتباط الممتدة.
- تنبيه الطالب عند الوصول إلى السنة الخامسة، ورصد الوصول إلى الحد الأقصى القانوني للدراسة (6 سنوات / 12 فصلاً) وإعلان حالة **ترقين القيد** في حال تعذر التخرج ضمن هذه المدة.

### 5. التنقل الزمني وتعديل المسار (Timeline Navigation)
- إمكانية العودة لأي فصل دراسي سابق وتعديل حالات النجاح أو الرسوب مع إعادة بناء المسار الأكاديمي للفصول اللاحقة تلقائياً.

### 6. مستكشف الارتباطات وسلاسل الحرمان (Dependency Inspector)
- أداة لاستكشاف متطلبات أي مادة والمواد المستقبلية التي تعتمد عليها، لمعرفة أثر الرسوب فيها مسبقاً قبل اتخاذ القرارات الأكاديمية.

### 7. توليد وتصدير السجل الأكاديمي (Transcript Generation & Export)
- بناء سجل وصفي شامل يوثق مسار الطالب عبر جميع الفصول والمراحل وحالة كل مادة، مع إمكانية تصديره كملف صوري عالي الدقة.

---

## 🛠️ Operational Mechanisms (English)

### 1. Prerequisite Chain Validation
- Sequentially validates course dependencies, preventing students from registering for advanced courses until their prerequisite requirements are fulfilled.
- Automatically locks inaccessible courses and highlights the unmet prerequisite requirements.

### 2. Formative Failure Handling & Retake Scheduling
- Enforces retake registration for failed courses during their corresponding semester season (Odd terms in Semester 1 / Even terms in Semester 2).
- Prioritizes mandatory retake modules during enrollment before new curriculum modules can be added.

### 3. Semester Credit Ceiling (30 ECTS Cap)
- Enforces a strict regulatory ceiling of **30 ECTS credits** per semester.
- Deferred modules that exceed this cap are automatically rolled over to upcoming applicable semesters, determining potential academic delays.

### 4. Additional Academic Years & Dismissal Tracking
- Dynamically computes required extension years caused by prerequisite chains and credit bottlenecks.
- Alerts the student when entering a 5th year and automatically triggers an **Academic Dismissal** status if degree completion exceeds the 6-year (12-semester) regulatory maximum.

### 5. Flexible State Traversal & Rewind
- Allows seamless backward navigation to earlier semesters to modify outcomes, with real-time recalculation of all downstream semester plans.

### 6. Course Dependency & Impact Inspection
- Enables instant lookup for any course to evaluate its prerequisites, downstream dependent modules, and the chain of academic blocking if formative failure occurs.

### 7. Multi-Semester Transcript & Export
- Generates a full descriptive transcript mapping every semester's enrolled courses and academic standings, with support for high-resolution image export.

---

## 👨‍💻 إعداد وتطوير (Development)

- **إعداد وتطوير:** مصطفى أحمد غفور (Mustafa A. Ghafour)
- **الجهة:** قسم علوم الحاسوب - كلية العلوم - جامعة بغداد
