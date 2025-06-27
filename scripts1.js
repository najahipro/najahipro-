// بيانات الشعب والمواد
const subjectsData = {
    tc: {
        name: "الجذع المشترك",
        branches: {
            scientific: {
                name: "علمي",
                subjects: {
                    "اللغة العربية": 4,
                    "اللغة الفرنسية": 4,
                    "الإنجليزية": 3,
                    "الرياضيات": 4,
                    "الفيزياء والكيمياء": 4,
                    "علوم الحياة والأرض": 4,
                    "التربية الإسلامية": 2,
                    "التاريخ والجغرافيا": 3,
                    "الفلسفة": 2
                }
            },
            literary: {
                name: "أدبي",
                subjects: {
                    "اللغة العربية": 4,
                    "اللغة الفرنسية": 4,
                    "الإنجليزية": 3,
                    "التاريخ والجغرافيا": 4,
                    "الفلسفة": 2,
                    "التربية الإسلامية": 2,
                    "الرياضيات": 2,
                    "علوم الحياة والأرض": 1
                }
            },
            technological: {
                name: "تكنولوجي",
                subjects: {
                    "اللغة العربية": 2,
                    "اللغة الفرنسية": 4,
                    "الإنجليزية": 3,
                    "الرياضيات": 4,
                    "الفيزياء والكيمياء": 4,
                    "علوم المهندس": 3,
                    "التربية الإسلامية": 2,
                    "الفلسفة": 2
                }
            }
        }
    },
    "1bac": {
        name: "السنة الأولى بكالوريا",
        branches: {
            sciences_math: {
                name: "علوم رياضية",
                subjects: {
                    "اللغة العربية": 2,
                    "اللغة الفرنسية": 4,
                    "الإنجليزية": 2,
                    "الرياضيات": 9,
                    "الفيزياء والكيمياء": 7,
                    "علوم الحياة والأرض": 3,
                    "التربية الإسلامية": 2,
                    "التاريخ والجغرافيا": 2,
                    "الفلسفة": 2
                }
            },
            sciences_exp: {
                name: "علوم تجريبية",
                subjects: {
                    "اللغة العربية": 2,
                    "اللغة الفرنسية": 4,
                    "الإنجليزية": 2,
                    "الرياضيات": 7,
                    "الفيزياء والكيمياء": 7,
                    "علوم الحياة والأرض": 7,
                    "التربية الإسلامية": 2,
                    "التاريخ والجغرافيا": 2,
                    "الفلسفة": 2
                }
            },
            literature: {
                name: "آداب وعلوم إنسانية",
                subjects: {
                    "اللغة العربية": 4,
                    "اللغة الفرنسية": 4,
                    "الإنجليزية": 4,
                    "التاريخ والجغرافيا": 4,
                    "الفلسفة": 4,
                    "التربية الإسلامية": 2,
                    "الرياضيات": 1,
                    "علوم الحياة والأرض": 1
                }
            },
            economics: {
                name: "علوم اقتصادية وتدبير",
                subjects: {
                    "اللغة العربية": 2,
                    "اللغة الفرنسية": 3,
                    "الإنجليزية": 2,
                    "الرياضيات": 4,
                    "التاريخ والجغرافيا": 3,
                    "الفلسفة": 2,
                    "التربية الإسلامية": 2,
                    "المحاسبة والرياضيات المالية": 4,
                    "الاقتصاد العام والإحصاء": 6,
                    "اقتصاد وتنظيم إداري للمقاولات": 3,
                    "القانون": 1
                }
            }
        }
    },
    "2bac": {
        name: "السنة الثانية بكالوريا",
        branches: {
            sciences_math_a: {
                name: "علوم رياضية أ",
                subjects: {
                    "اللغة العربية": 2,
                    "اللغة الفرنسية": 4,
                    "الإنجليزية": 2,
                    "الرياضيات": 9,
                    "الفيزياء والكيمياء": 7,
                    "علوم الحياة والأرض": 3,
                    "التربية الإسلامية": 2,
                    "الفلسفة": 2
                }
            },
            sciences_math_b: {
                name: "علوم رياضية ب",
                subjects: {
                    "اللغة العربية": 2,
                    "اللغة الفرنسية": 4,
                    "الإنجليزية": 2,
                    "الرياضيات": 9,
                    "الفيزياء والكيمياء": 7,
                    "علوم المهندس": 3,
                    "التربية الإسلامية": 2,
                    "الفلسفة": 2
                }
            },
            sciences_physics: {
                name: "علوم فيزيائية",
                subjects: {
                    "اللغة العربية": 2,
                    "اللغة الفرنسية": 4,
                    "الإنجليزية": 2,
                    "الرياضيات": 7,
                    "الفيزياء والكيمياء": 7,
                    "علوم الحياة والأرض": 5,
                    "التربية الإسلامية": 2,
                    "الفلسفة": 2
                }
            },
            sciences_life: {
                name: "علوم الحياة والأرض",
                subjects: {
                    "اللغة العربية": 2,
                    "اللغة الفرنسية": 4,
                    "الإنجليزية": 2,
                    "الرياضيات": 7,
                    "الفيزياء والكيمياء": 5,
                    "علوم الحياة والأرض": 7,
                    "التربية الإسلامية": 2,
                    "الفلسفة": 2
                }
            },
            literature: {
                name: "آداب",
                subjects: {
                    "اللغة العربية": 4,
                    "اللغة الفرنسية": 4,
                    "الإنجليزية": 4,
                    "التاريخ والجغرافيا": 3,
                    "الفلسفة": 3,
                    "التربية الإسلامية": 2,
                    "الرياضيات": 1
                }
            },
            human_sciences: {
                name: "علوم إنسانية",
                subjects: {
                    "اللغة العربية": 3,
                    "اللغة الفرنسية": 4,
                    "الإنجليزية": 3,
                    "التاريخ والجغرافيا": 4,
                    "الفلسفة": 4,
                    "التربية الإسلامية": 2,
                    "الرياضيات": 1
                }
            },
            economics: {
                name: "علوم اقتصادية",
                subjects: {
                    "اللغة العربية": 2,
                    "اللغة الفرنسية": 3,
                    "الإنجليزية": 2,
                    "الرياضيات": 4,
                    "التاريخ والجغرافيا": 3,
                    "الفلسفة": 2,
                    "التربية الإسلامية": 2,
                    "المحاسبة والرياضيات المالية": 4,
                    "الاقتصاد العام والإحصاء": 6,
                    "اقتصاد وتنظيم إداري للمقاولات": 3,
                    "القانون": 4
                }
            },
            management: {
                name: "علوم التدبير المحاسباتي",
                subjects: {
                    "اللغة العربية": 2,
                    "اللغة الفرنسية": 3,
                    "الإنجليزية": 2,
                    "الرياضيات": 4,
                    "التاريخ والجغرافيا": 2,
                    "الفلسفة": 2,
                    "التربية الإسلامية": 2,
                    "المحاسبة والرياضيات المالية": 6,
                    "الاقتصاد العام والإحصاء": 3,
                    "اقتصاد وتنظيم إداري للمقاولات": 6,
                    "القانون": 4,
                    "معلوميات التدبير": 4
                }
            }
        }
    }
};

// متغيرات عامة
let currentSubjects = [];
let customSubjects = [];

// === وظائف LocalStorage المحسنة ===
const StorageManager = {
    // حفظ البيانات
    saveData(key, data) {
        try {
            localStorage.setItem(`najahipro_${key}`, JSON.stringify(data));
            console.log(`✅ Data saved: ${key}`);
        } catch (error) {
            console.error('❌ Error saving data:', error);
        }
    },

    // استرجاع البيانات
    loadData(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(`najahipro_${key}`);
            return data ? JSON.parse(data) : defaultValue;
        } catch (error) {
            console.error('❌ Error loading data:', error);
            return defaultValue;
        }
    },

    // حذف البيانات
    removeData(key) {
        try {
            localStorage.removeItem(`najahipro_${key}`);
            console.log(`🗑️ Data removed: ${key}`);
        } catch (error) {
            console.error('❌ Error removing data:', error);
        }
    },

    // حفظ جلسة كاملة
    saveSession() {
        const sessionData = {
            level: document.getElementById('level').value,
            branch: document.getElementById('branch').value,
            customSubjects: customSubjects,
            timestamp: Date.now()
        };

        // حفظ النقاط
        const allSubjects = [...currentSubjects, ...customSubjects];
        const grades = {};
        
        allSubjects.forEach((subject, index) => {
            const row = document.querySelector(`#subjects-tbody tr:nth-child(${index + 1})`);
            if (row) {
                const gradeInputs = row.querySelectorAll('.grade-input');
                const coefficientInput = row.querySelector('.coefficient-input');
                
                grades[subject[0]] = {
                    grade1: gradeInputs[0]?.value || '',
                    grade2: gradeInputs[1]?.value || '',
                    grade3: gradeInputs[2]?.value || '',
                    grade4: gradeInputs[3]?.value || '',
                    activities: gradeInputs[4]?.value || '',
                    coefficient: coefficientInput?.value || subject[1]
                };
            }
        });

        sessionData.grades = grades;
        this.saveData('session', sessionData);
        
        // Track save event
        if (typeof trackEvent === 'function') {
            trackEvent('data_saved_locally');
        }
    },

    // استرجاع جلسة
    loadSession() {
        const sessionData = this.loadData('session');
        if (!sessionData) return false;

        // التحقق من عمر البيانات (30 يوم)
        const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
        if (sessionData.timestamp < thirtyDaysAgo) {
            this.removeData('session');
            return false;
        }

        try {
            // استرجاع المستوى والشعبة
            if (sessionData.level) {
                document.getElementById('level').value = sessionData.level;
                handleLevelChange();
                
                if (sessionData.branch) {
                    setTimeout(() => {
                        document.getElementById('branch').value = sessionData.branch;
                        handleBranchChange();
                        
                        // استرجاع المواد المخصصة
                        if (sessionData.customSubjects) {
                            customSubjects = sessionData.customSubjects;
                            generateSubjectsTable();
                        }
                        
                        // استرجاع النقاط
                        if (sessionData.grades) {
                            setTimeout(() => {
                                this.restoreGrades(sessionData.grades);
                            }, 100);
                        }
                    }, 100);
                }
            }
            
            console.log('✅ Session restored successfully');
            if (typeof trackEvent === 'function') {
                trackEvent('session_restored');
            }
            
            return true;
        } catch (error) {
            console.error('❌ Error restoring session:', error);
            return false;
        }
    },

    // استرجاع النقاط
    restoreGrades(grades) {
        Object.keys(grades).forEach(subjectName => {
            const subjectData = grades[subjectName];
            const allSubjects = [...currentSubjects, ...customSubjects];
            const subjectIndex = allSubjects.findIndex(s => s[0] === subjectName);
            
            if (subjectIndex !== -1) {
                const row = document.querySelector(`#subjects-tbody tr:nth-child(${subjectIndex + 1})`);
                if (row) {
                    const gradeInputs = row.querySelectorAll('.grade-input');
                    const coefficientInput = row.querySelector('.coefficient-input');
                    
                    if (gradeInputs[0]) gradeInputs[0].value = subjectData.grade1;
                    if (gradeInputs[1]) gradeInputs[1].value = subjectData.grade2;
                    if (gradeInputs[2]) gradeInputs[2].value = subjectData.grade3;
                    if (gradeInputs[3]) gradeInputs[3].value = subjectData.grade4;
                    if (gradeInputs[4]) gradeInputs[4].value = subjectData.activities;
                    if (coefficientInput) coefficientInput.value = subjectData.coefficient;
                    
                    // تحديث معدل المادة
                    updateSubjectAverage(subjectIndex);
                }
            }
        });
    }
};

// تحديث الشعب عند اختيار المستوى
function handleLevelChange() {
    const level = document.getElementById('level').value;
    const branchSelect = document.getElementById('branch');
    
    branchSelect.innerHTML = '<option value="">-- اختر الشعبة --</option>';
    
    if (level && subjectsData[level]) {
        branchSelect.disabled = false;
        
        Object.keys(subjectsData[level].branches).forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = subjectsData[level].branches[key].name;
            branchSelect.appendChild(option);
        });
        
        // Track level selection
        if (typeof trackEvent === 'function') {
            trackEvent('level_selected', { level: level });
        }
    } else {
        branchSelect.disabled = true;
    }
    
    hideTable();
    StorageManager.saveSession();
}

// تحديث المواد عند اختيار الشعبة
function handleBranchChange() {
    const level = document.getElementById('level').value;
    const branch = document.getElementById('branch').value;
    
    if (level && branch && subjectsData[level] && subjectsData[level].branches[branch]) {
        currentSubjects = Object.entries(subjectsData[level].branches[branch].subjects);
        showTable();
        generateSubjectsTable();
        
        // Track branch selection
        if (typeof trackEvent === 'function') {
            trackEvent('branch_selected', { 
                level: level, 
                branch: branch,
                subject_count: currentSubjects.length 
            });
        }
    } else {
        hideTable();
    }
    
    StorageManager.saveSession();
}

// إظهار الجدول
function showTable() {
    document.getElementById('subjects-table').style.display = 'table';
    document.getElementById('calculate-btn').disabled = false;
    document.getElementById('stats-row').style.display = 'grid';
}

// إخفاء الجدول
function hideTable() {
    document.getElementById('subjects-table').style.display = 'none';
    document.getElementById('calculate-btn').disabled = true;
    document.getElementById('stats-row').style.display = 'none';
    document.getElementById('result-section').classList.remove('show');
    document.getElementById('result-section').style.display = 'none';
}

// إنشاء جدول المواد
function generateSubjectsTable() {
    const tbody = document.getElementById('subjects-tbody');
    tbody.innerHTML = '';
    
    const allSubjects = [...currentSubjects, ...customSubjects];
    
    allSubjects.forEach((subject, index) => {
        const [name, coefficient] = subject;
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="subject-name">${name}</td>
            <td><input type="number" class="grade-input" min="0" max="20" step="0.25" placeholder="0" data-subject="${index}" data-field="grade1"></td>
            <td><input type="number" class="grade-input" min="0" max="20" step="0.25" placeholder="0" data-subject="${index}" data-field="grade2"></td>
            <td><input type="number" class="grade-input" min="0" max="20" step="0.25" placeholder="0" data-subject="${index}" data-field="grade3"></td>
            <td><input type="number" class="grade-input" min="0" max="20" step="0.25" placeholder="0" data-subject="${index}" data-field="grade4"></td>
            <td><input type="number" class="grade-input" min="0" max="20" step="0.25" placeholder="0" data-subject="${index}" data-field="activities"></td>
            <td><input type="number" class="coefficient-input" min="1" max="10" value="${coefficient}" data-subject="${index}" ${index < currentSubjects.length ? 'readonly' : ''}></td>
            <td><span id="average-${index}" class="subject-average">-</span></td>
            <td>
                ${index >= currentSubjects.length ? `<button class="delete-btn" data-custom-index="${index - currentSubjects.length}"><i class="fas fa-trash"></i></button>` : ''}
            </td>
        `;
        
        tbody.appendChild(row);
        
        // إضافة event listeners للـ inputs
        row.querySelectorAll('.grade-input, .coefficient-input').forEach(input => {
            input.addEventListener('input', function() {
                updateSubjectAverage(parseInt(this.dataset.subject));
                StorageManager.saveSession(); // حفظ تلقائي
            });
        });
        
        row.querySelectorAll('.coefficient-input').forEach(input => {
            input.addEventListener('input', function() {
                updateCoefficient(parseInt(this.dataset.subject), this.value);
            });
        });
        
        // إضافة event listener لزر الحذف
        const deleteBtn = row.querySelector('.delete-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function() {
                deleteCustomSubject(parseInt(this.dataset.customIndex));
            });
        }
    });
    
    updateStats();
}

// تحديث معدل المادة
function updateSubjectAverage(index) {
    const row = document.querySelector(`#subjects-tbody tr:nth-child(${index + 1})`);
    if (!row) return;
    
    const gradeInputs = row.querySelectorAll('.grade-input');
    const grades = Array.from(gradeInputs).map(input => parseFloat(input.value) || 0).filter(g => g > 0);
    const average = grades.length > 0 ? grades.reduce((a, b) => a + b, 0) / grades.length : 0;
    
    document.getElementById(`average-${index}`).textContent = average > 0 ? average.toFixed(2) : '-';
    
    // تغيير لون حقل الإدخال حسب النقطة
    gradeInputs.forEach(input => {
        const value = parseFloat(input.value);
        input.classList.remove('excellent', 'good', 'poor');
        
        if (value >= 16) {
            input.classList.add('excellent');
        } else if (value >= 12) {
            input.classList.add('good');
        } else if (value > 0 && value < 10) {
            input.classList.add('poor');
        }
    });
    
    updateStats();
}

// تحديث المعامل
function updateCoefficient(index, newCoefficient) {
    if (index >= currentSubjects.length) {
        customSubjects[index - currentSubjects.length][1] = parseInt(newCoefficient);
        StorageManager.saveSession();
    }
}

// تحديث الإحصائيات
function updateStats() {
    const allSubjects = [...currentSubjects, ...customSubjects];
    let totalSubjects = allSubjects.length;
    let completedSubjects = 0;
    let highestGrade = 0;
    let lowestGrade = 20;
    let hasValidGrades = false;
    
    allSubjects.forEach((subject, index) => {
        const averageText = document.getElementById(`average-${index}`).textContent;
        if (averageText !== '-') {
            const average = parseFloat(averageText);
            completedSubjects++;
            hasValidGrades = true;
            
            if (average > highestGrade) highestGrade = average;
            if (average < lowestGrade) lowestGrade = average;
        }
    });
    
    document.getElementById('total-subjects').textContent = totalSubjects;
    document.getElementById('completed-subjects').textContent = completedSubjects;
    document.getElementById('highest-grade').textContent = hasValidGrades ? highestGrade.toFixed(2) : '-';
    document.getElementById('lowest-grade').textContent = hasValidGrades ? lowestGrade.toFixed(2) : '-';
}

// حساب المعدل العام
function calculateAverage() {
    const allSubjects = [...currentSubjects, ...customSubjects];
    let totalWeightedGrades = 0;
    let totalCoefficients = 0;
    let subjectDetails = [];
    
    allSubjects.forEach((subject, index) => {
        const [name, coefficient] = subject;
        const actualCoefficient = parseInt(document.querySelector(`#subjects-tbody tr:nth-child(${index + 1}) .coefficient-input`).value);
        const averageText = document.getElementById(`average-${index}`).textContent;
        
        if (averageText !== '-') {
            const average = parseFloat(averageText);
            totalWeightedGrades += average * actualCoefficient;
            totalCoefficients += actualCoefficient;
            
            subjectDetails.push({
                name: name,
                average: average,
                coefficient: actualCoefficient,
                weighted: average * actualCoefficient
            });
        }
    });
    
    if (totalCoefficients === 0) {
        alert('يرجى إدخال النقاط أولاً!');
        return;
    }
    
    const generalAverage = totalWeightedGrades / totalCoefficients;
    
    // Track calculation
    const level = document.getElementById('level').value;
    const branch = document.getElementById('branch').value;
    if (typeof trackCalculation === 'function') {
        trackCalculation(generalAverage, level, branch);
    }
    
    // عرض النتيجة
    showResult(generalAverage, subjectDetails, totalCoefficients);
}

// عرض النتيجة
function showResult(average, subjectDetails, totalCoefficients) {
    const resultSection = document.getElementById('result-section');
    const resultAverage = document.getElementById('result-average');
    const resultStatus = document.getElementById('result-status');
    const resultMessage = document.getElementById('result-message');
    const subjectDetailsDiv = document.getElementById('subject-details');
    
    // تحديد حالة النجاح
    let status, message, className;
    
    if (average >= 16) {
        status = 'ممتاز';
        message = 'تهانينا! نتيجة ممتازة، واصل التفوق!';
        className = '';
    } else if (average >= 14) {
        status = 'جيد جداً';
        message = 'نتيجة جيدة جداً، بإمكانك تحسينها أكثر!';
        className = '';
    } else if (average >= 12) {
        status = 'جيد';
        message = 'نتيجة جيدة، حاول تحسينها في المواد الضعيفة!';
        className = 'warning';
    } else if (average >= 10) {
        status = 'مقبول';
        message = 'نجحت ولكن يجب عليك بذل مجهود أكبر!';
        className = 'warning';
    } else {
        status = 'راسب';
        message = 'للأسف لم تنجح، يجب عليك المراجعة والاستعداد أكثر!';
        className = 'danger';
    }
    
    // تحديث النتيجة
    resultAverage.textContent = average.toFixed(2);
    resultStatus.textContent = status;
    resultMessage.textContent = message;
    
    // تحديث تفاصيل المواد
    subjectDetailsDiv.innerHTML = subjectDetails
        .sort((a, b) => b.average - a.average)
        .map(subject => `
            <p><strong>${subject.name}:</strong> ${subject.average.toFixed(2)} × ${subject.coefficient} = ${subject.weighted.toFixed(2)}</p>
        `).join('');
    
    // إضافة الكلاس المناسب
    resultSection.className = `result-section show ${className}`;
    resultSection.style.display = 'block';
    
    // التمرير إلى النتيجة
    resultSection.scrollIntoView({ behavior: 'smooth' });
    
    // حفظ النتيجة
    StorageManager.saveData('last_result', {
        average: average,
        status: status,
        timestamp: Date.now()
    });
}

// إظهار/إخفاء نموذج إضافة مادة
function toggleAddSubjectForm() {
    const form = document.getElementById('add-subject-form');
    form.classList.toggle('show');
    
    if (form.classList.contains('show')) {
        document.getElementById('new-subject-name').focus();
        
        // Track form open
        if (typeof trackEvent === 'function') {
            trackEvent('add_subject_form_opened');
        }
    }
}

// إضافة مادة جديدة
function addNewSubject() {
    const nameInput = document.getElementById('new-subject-name');
    const coefficientInput = document.getElementById('new-subject-coefficient');
    
    const name = nameInput.value.trim();
    const coefficient = parseInt(coefficientInput.value) || 1;
    
    if (!name) {
        alert('يرجى إدخال اسم المادة!');
        return;
    }
    
    // التأكد من عدم تكرار المادة
    const allSubjects = [...currentSubjects, ...customSubjects];
    if (allSubjects.some(subject => subject[0] === name)) {
        alert('هذه المادة موجودة بالفعل!');
        return;
    }
    
    customSubjects.push([name, coefficient]);
    generateSubjectsTable();
    
    // Track custom subject addition
    if (typeof trackSubjectAdded === 'function') {
        trackSubjectAdded(name);
    }
    
    // إخفاء النموذج وتنظيف الحقول
    toggleAddSubjectForm();
    nameInput.value = '';
    coefficientInput.value = '1';
    
    StorageManager.saveSession();
}

// حذف مادة مخصصة
function deleteCustomSubject(customIndex) {
    if (confirm('هل أنت متأكد من حذف هذه المادة؟')) {
        const deletedSubject = customSubjects[customIndex];
        customSubjects.splice(customIndex, 1);
        generateSubjectsTable();
        StorageManager.saveSession();
        
        // Track deletion
        if (typeof trackEvent === 'function') {
            trackEvent('custom_subject_deleted', {
                subject_name: deletedSubject[0]
            });
        }
    }
}

// مسح جميع البيانات
function clearAll() {
    if (confirm('هل أنت متأكد من مسح جميع البيانات؟')) {
        document.getElementById('level').value = '';
        document.getElementById('branch').innerHTML = '<option value="">-- اختر الشعبة --</option>';
        document.getElementById('branch').disabled = true;
        customSubjects = [];
        hideTable();
        
        // مسح البيانات المحفوظة
        StorageManager.removeData('session');
        StorageManager.removeData('last_result');
        
        // Track clear all
        if (typeof trackEvent === 'function') {
            trackEvent('data_cleared_all');
        }
        
        showNotification('تم مسح جميع البيانات بنجاح!', 'success');
    }
}

// تصدير البيانات
function exportData() {
    const allSubjects = [...currentSubjects, ...customSubjects];
    const level = document.getElementById('level').value;
    const branch = document.getElementById('branch').value;
    
    if (allSubjects.length === 0) {
        alert('لا توجد بيانات للتصدير!');
        return;
    }
    
    // إنشاء البيانات بصيغة CSV
    let csvContent = '\uFEFF'; // UTF-8 BOM للعربية
    csvContent += 'المادة,الفرض 1,الفرض 2,الفرض 3,الفرض 4,الأنشطة المندمجة,المعامل,المعدل\n';
    
    allSubjects.forEach((subject, index) => {
        const name = subject[0];
        const row = document.querySelector(`#subjects-tbody tr:nth-child(${index + 1})`);
        
        if (row) {
            const gradeInputs = row.querySelectorAll('.grade-input');
            const coefficientInput = row.querySelector('.coefficient-input');
            const average = document.getElementById(`average-${index}`).textContent;
            
            const grade1 = gradeInputs[0]?.value || '';
            const grade2 = gradeInputs[1]?.value || '';
            const grade3 = gradeInputs[2]?.value || '';
            const grade4 = gradeInputs[3]?.value || '';
            const activities = gradeInputs[4]?.value || '';
            const coefficient = coefficientInput?.value || '';
            
            csvContent += `"${name}","${grade1}","${grade2}","${grade3}","${grade4}","${activities}","${coefficient}","${average}"\n`;
        }
    });
    
    // إنشاء ملف التصدير
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const link = document.createElement('a');
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `najahipro-${level}-${branch}-${timestamp}.csv`;
    
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Track export
    if (typeof trackDataExport === 'function') {
        trackDataExport();
    }
    
    showNotification('تم تصدير البيانات بنجاح!', 'success');
}

// إشعارات محسنة
function showNotification(message, type = 'info', duration = 3000) {
    // إزالة الإشعارات السابقة
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // إضافة الأنماط
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 9999;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
        font-family: 'Cairo', sans-serif;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .notification-close {
            background: transparent;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0;
            margin-left: auto;
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // إزالة تلقائية
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    return colors[type] || colors.info;
}

// وظائف التحقق من الاتصال
function checkOnlineStatus() {
    if (navigator.onLine) {
        showNotification('تم الاتصال بالإنترنت', 'success', 2000);
    } else {
        showNotification('أنت تعمل دون اتصال - البيانات محفوظة محلياً', 'warning', 4000);
    }
}

// إضافة مستمعات للأحداث
window.addEventListener('online', () => {
    showNotification('تم الاتصال بالإنترنت', 'success', 2000);
});

window.addEventListener('offline', () => {
    showNotification('أنت تعمل دون اتصال الآن', 'warning', 3000);
});

// تحميل البيانات عند بدء التطبيق
window.addEventListener('load', function() {
    console.log('🚀 najahipro loading...');
    
    // استرجاع الجلسة المحفوظة
    const sessionRestored = StorageManager.loadSession();
    if (sessionRestored) {
        showNotification('تم استرجاع البيانات المحفوظة', 'info', 3000);
    }
    
    // إضافة event listeners للأزرار والعناصر
    const elements = {
        calculateBtn: document.getElementById('calculate-btn'),
        addNewSubjectBtn: document.getElementById('add-new-subject-btn'),
        clearAllBtn: document.getElementById('clear-all-btn'),
        exportBtn: document.getElementById('export-btn'),
        addSubjectBtn: document.getElementById('add-subject-btn'),
        cancelAddBtn: document.getElementById('cancel-add-btn'),
        levelSelect: document.getElementById('level'),
        branchSelect: document.getElementById('branch'),
        newSubjectName: document.getElementById('new-subject-name'),
        newSubjectCoefficient: document.getElementById('new-subject-coefficient')
    };
    
    // التحقق من وجود العناصر وإضافة event listeners
    if (elements.calculateBtn) {
        elements.calculateBtn.addEventListener('click', calculateAverage);
    }
    
    if (elements.addNewSubjectBtn) {
        elements.addNewSubjectBtn.addEventListener('click', toggleAddSubjectForm);
    }
    
    if (elements.clearAllBtn) {
        elements.clearAllBtn.addEventListener('click', clearAll);
    }
    
    if (elements.exportBtn) {
        elements.exportBtn.addEventListener('click', exportData);
    }
    
    if (elements.addSubjectBtn) {
        elements.addSubjectBtn.addEventListener('click', addNewSubject);
    }
    
    if (elements.cancelAddBtn) {
        elements.cancelAddBtn.addEventListener('click', toggleAddSubjectForm);
    }
    
    if (elements.levelSelect) {
        elements.levelSelect.addEventListener('change', handleLevelChange);
    }
    
    if (elements.branchSelect) {
        elements.branchSelect.addEventListener('change', handleBranchChange);
    }
    
    // Enter في نموذج إضافة المادة
    if (elements.newSubjectName) {
        elements.newSubjectName.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                addNewSubject();
            }
        });
    }
    
    if (elements.newSubjectCoefficient) {
        elements.newSubjectCoefficient.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                addNewSubject();
            }
        });
    }
    
    // حفظ تلقائي كل 30 ثانية
    setInterval(() => {
        if (currentSubjects.length > 0) {
            StorageManager.saveSession();
        }
    }, 30000);
    
    // تتبع وقت الجلسة
    if (typeof trackEvent === 'function') {
        trackEvent('app_loaded');
        
        // تتبع مدة الجلسة
        const sessionStart = Date.now();
        window.addEventListener('beforeunload', () => {
            const sessionDuration = Math.round((Date.now() - sessionStart) / 1000);
            trackEvent('session_ended', { duration_seconds: sessionDuration });
        });
    }
    
    console.log('✅ najahipro loaded successfully!');
    
    // إشعار الترحيب للمستخدمين الجدد
    const isFirstTime = !StorageManager.loadData('visited_before');
    if (isFirstTime) {
        setTimeout(() => {
            showNotification('مرحباً بك في najahipro! 🎓', 'info', 5000);
            StorageManager.saveData('visited_before', true);
        }, 1000);
    }
});