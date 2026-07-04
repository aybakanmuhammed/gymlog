// Constants and Data Models
const EXERCISES = [
    // Göğüs (Benchmarks: 1.0 = Barbell Bench Press)
    { id: 'c1', name: 'Barbell Bench Press', muscle: 'chest', subMuscle: 'Orta Göğüs', type: 'weight', multiplier: 1.0 },
    { id: 'c2', name: 'Incline Barbell Press', muscle: 'chest', subMuscle: 'Üst Göğüs', type: 'weight', multiplier: 1.2 },
    { id: 'c14', name: 'Incline Dumbbell Press', muscle: 'chest', subMuscle: 'Üst Göğüs', type: 'dumbbell_weight', multiplier: 1.2 },
    { id: 'c12', name: 'Incline Chest Press (Makine)', muscle: 'chest', subMuscle: 'Üst Göğüs', type: 'machine_weight', multiplier: 1.3 },
    { id: 'c15', name: 'Incline Chest Press (Plate Loaded)', muscle: 'chest', subMuscle: 'Üst Göğüs', type: 'weight', multiplier: 1.2 },
    { id: 'c3', name: 'Decline Chest Press (Makine)', muscle: 'chest', subMuscle: 'Alt Göğüs', type: 'machine_weight', multiplier: 1.3 },
    { id: 'c16', name: 'Decline Chest Press (Plate Loaded)', muscle: 'chest', subMuscle: 'Alt Göğüs', type: 'weight', multiplier: 1.2 },
    { id: 'c13', name: 'Chest Press (Makine)', muscle: 'chest', subMuscle: 'Orta Göğüs', type: 'machine_weight', multiplier: 1.2 },
    { id: 'c17', name: 'Chest Press (Plate Loaded)', muscle: 'chest', subMuscle: 'Orta Göğüs', type: 'weight', multiplier: 1.1 },
    { id: 'c4', name: 'Dumbbell Fly', muscle: 'chest', subMuscle: 'Orta Göğüs', type: 'dumbbell_weight', multiplier: 2.5 },
    { id: 'c5', name: 'Incline Dumbbell Fly', muscle: 'chest', subMuscle: 'Üst Göğüs', type: 'dumbbell_weight', multiplier: 2.5 },
    { id: 'c18', name: 'Cable Fly (Low to High)', muscle: 'chest', subMuscle: 'Üst Göğüs', type: 'dumbbell_weight', multiplier: 3.0 },
    { id: 'c19', name: 'Cable Fly (High to Low)', muscle: 'chest', subMuscle: 'Alt Göğüs', type: 'dumbbell_weight', multiplier: 3.0 },
    { id: 'c7', name: 'Pec Deck Fly', muscle: 'chest', subMuscle: 'Orta Göğüs', type: 'weight', multiplier: 2.5 },
    { id: 'c8', name: 'Push-up', muscle: 'chest', subMuscle: 'Genel', type: 'bodyweight_added', multiplier: 1.0, bwMultiplier: 0.65 },
    { id: 'c9', name: 'Dumbbell Pullover', muscle: 'chest', subMuscle: 'Genel', type: 'weight', multiplier: 1.5 },
    { id: 'c10', name: 'Floor Press', muscle: 'chest', subMuscle: 'Orta Göğüs', type: 'weight', multiplier: 1.0 },
    { id: 'c11', name: 'Chest Dips', muscle: 'chest', subMuscle: 'Alt Göğüs', type: 'bodyweight_added', multiplier: 1.0, bwMultiplier: 0.9 },
    // Sırt (Benchmarks: 1.0 = Pull-up / Barbell Row)
    { id: 'b1', name: 'Pull-up', muscle: 'back', subMuscle: 'Kanat', type: 'bodyweight_added', multiplier: 1.0, bwMultiplier: 1.0 },
    { id: 'b2', name: 'Chin Up', muscle: 'back', subMuscle: 'Kanat / Biceps', type: 'bodyweight_added', multiplier: 1.0, bwMultiplier: 1.0 },
    { id: 'b3', name: 'Barbell Row', muscle: 'back', subMuscle: 'Orta Sırt', type: 'weight', multiplier: 1.0 },
    { id: 'b4', name: 'Lat Pulldown', muscle: 'back', subMuscle: 'Kanat', type: 'machine_weight', multiplier: 1.3 },
    { id: 'b5', name: 'T-Bar Row', muscle: 'back', subMuscle: 'Orta Sırt', type: 'weight', multiplier: 1.1 },
    { id: 'b6', name: 'Seated Cable Row', muscle: 'back', subMuscle: 'Orta Sırt', type: 'machine_weight', multiplier: 1.3 },
    { id: 'b7', name: 'Hyperextension', muscle: 'back', subMuscle: 'Alt Sırt', type: 'bodyweight_added', multiplier: 2.5, bwMultiplier: 0.5 },
    { id: 'b8', name: 'Straight Arm Pulldown', muscle: 'back', subMuscle: 'Kanat', type: 'weight', multiplier: 2.5 },
    { id: 'b9', name: 'Single Arm Dumbbell Row', muscle: 'back', subMuscle: 'Kanat', type: 'dumbbell_weight', multiplier: 1.2 },
    { id: 'b10', name: 'Pendlay Row', muscle: 'back', subMuscle: 'Orta Sırt', type: 'weight', multiplier: 1.0 },
    { id: 'b11', name: 'Rack Pull', muscle: 'back', subMuscle: 'Alt Sırt', type: 'weight', multiplier: 0.8 },
    { id: 'b12', name: 'Inverted Row', muscle: 'back', subMuscle: 'Orta Sırt', type: 'bodyweight_added', multiplier: 1.5, bwMultiplier: 0.6 },
    // Bacak (Benchmarks: 1.0 = Squat)
    { id: 'l1', name: 'Squat', muscle: 'legs', subMuscle: 'Ön Bacak', type: 'weight', multiplier: 1.0 },
    { id: 'l2', name: 'Hack Squat', muscle: 'legs', subMuscle: 'Ön Bacak', type: 'machine_weight', multiplier: 1.2 },
    { id: 'l3', name: 'Leg Press', muscle: 'legs', subMuscle: 'Ön Bacak', type: 'machine_weight', multiplier: 0.6 },
    { id: 'l4', name: 'Romanian Deadlift', muscle: 'legs', subMuscle: 'Arka Bacak', type: 'weight', multiplier: 1.0 },
    { id: 'l5', name: 'Calf Raise', muscle: 'legs', subMuscle: 'Kalf', type: 'weight', multiplier: 2.0 },
    { id: 'l6', name: 'Standing Calf Raise', muscle: 'legs', subMuscle: 'Kalf', type: 'weight', multiplier: 2.0 },
    { id: 'l7', name: 'Leg Extension', muscle: 'legs', subMuscle: 'Ön Bacak', type: 'weight', multiplier: 2.5 },
    { id: 'l8', name: 'Bulgarian Split Squat', muscle: 'legs', subMuscle: 'Ön Bacak', type: 'weight', multiplier: 1.5 },
    { id: 'l9', name: 'Front Squat', muscle: 'legs', subMuscle: 'Ön Bacak', type: 'weight', multiplier: 1.1 },
    { id: 'l10', name: 'Hip Thrust', muscle: 'legs', subMuscle: 'Kalça', type: 'weight', multiplier: 1.0 },
    { id: 'l11', name: 'Glute Bridge', muscle: 'legs', subMuscle: 'Kalça', type: 'weight', multiplier: 1.5 },
    { id: 'l12', name: 'Leg Curl', muscle: 'legs', subMuscle: 'Arka Bacak', type: 'weight', multiplier: 2.5 },
    { id: 'l13', name: 'Sumo Deadlift', muscle: 'legs', subMuscle: 'Genel Bacak', type: 'weight', multiplier: 1.0 },
    { id: 'l14', name: 'Lunges', muscle: 'legs', subMuscle: 'Ön Bacak', type: 'weight', multiplier: 1.5 },
    // Omuz (Benchmarks: 1.0 = Overhead Press)
    { id: 's1', name: 'Overhead Press', muscle: 'shoulders', subMuscle: 'Ön Omuz', type: 'weight', multiplier: 1.0 },
    { id: 's2', name: 'Military Press', muscle: 'shoulders', subMuscle: 'Ön Omuz', type: 'weight', multiplier: 1.0 },
    { id: 's11', name: 'Dumbbell Shoulder Press', muscle: 'shoulders', subMuscle: 'Ön/Yan Omuz', type: 'dumbbell_weight', multiplier: 1.2 },
    { id: 's3', name: 'Lateral Raise', muscle: 'shoulders', subMuscle: 'Yan Omuz', type: 'dumbbell_weight', multiplier: 3.5 },
    { id: 's4', name: 'Face Pull', muscle: 'shoulders', subMuscle: 'Arka Omuz', type: 'weight', multiplier: 3.0 },
    { id: 's5', name: 'Dumbbell Shrug', muscle: 'shoulders', subMuscle: 'Trapez', type: 'dumbbell_weight', multiplier: 1.0 },
    { id: 's6', name: 'Arnold Press', muscle: 'shoulders', subMuscle: 'Ön/Yan Omuz', type: 'dumbbell_weight', multiplier: 1.3 },
    { id: 's7', name: 'Upright Row', muscle: 'shoulders', subMuscle: 'Yan Omuz/Trapez', type: 'weight', multiplier: 1.5 },
    { id: 's8', name: 'Front Raise', muscle: 'shoulders', subMuscle: 'Ön Omuz', type: 'dumbbell_weight', multiplier: 3.5 },
    { id: 's9', name: 'Reverse Pec Deck', muscle: 'shoulders', subMuscle: 'Arka Omuz', type: 'machine_weight', multiplier: 3.5 },
    { id: 's10', name: 'Push Press', muscle: 'shoulders', subMuscle: 'Genel', type: 'weight', multiplier: 0.9 },
    // Biceps (Ön Kol)
    { id: 'a1', name: 'Barbell Curl', muscle: 'biceps', subMuscle: 'Biceps', type: 'weight', multiplier: 1.0 },
    { id: 'a2', name: 'Dumbbell Curl', muscle: 'biceps', subMuscle: 'Biceps', type: 'dumbbell_weight', multiplier: 1.0 },
    { id: 'a3', name: 'Hammer Curl', muscle: 'biceps', subMuscle: 'Brachialis', type: 'dumbbell_weight', multiplier: 1.0 },
    { id: 'a4', name: 'Preacher Curl', muscle: 'biceps', subMuscle: 'Biceps', type: 'weight', multiplier: 1.2 },
    { id: 'a5', name: 'Concentration Curl', muscle: 'biceps', subMuscle: 'Biceps', type: 'dumbbell_weight', multiplier: 1.5 },
    { id: 'a6', name: 'Cable Curl', muscle: 'biceps', subMuscle: 'Biceps', type: 'weight', multiplier: 1.3 },
    { id: 'a7', name: 'EZ Bar Curl', muscle: 'biceps', subMuscle: 'Biceps', type: 'weight', multiplier: 1.0 },
    // Triceps (Arka Kol)
    { id: 't1', name: 'Triceps Pushdown', muscle: 'triceps', subMuscle: 'Triceps', type: 'weight', multiplier: 1.5 },
    { id: 't2', name: 'Skull Crusher', muscle: 'triceps', subMuscle: 'Triceps', type: 'weight', multiplier: 1.2 },
    { id: 't3', name: 'Overhead Triceps Extension', muscle: 'triceps', subMuscle: 'Uzun Baş', type: 'weight', multiplier: 1.2 },
    { id: 't4', name: 'Close Grip Bench Press', muscle: 'triceps', subMuscle: 'Triceps', type: 'weight', multiplier: 1.0 },
    { id: 't5', name: 'Dips', muscle: 'triceps', subMuscle: 'Triceps / Alt Göğüs', type: 'bodyweight_added', multiplier: 1.0, bwMultiplier: 0.9 },
    { id: 't6', name: 'Triceps Kickback', muscle: 'triceps', subMuscle: 'Triceps', type: 'dumbbell_weight', multiplier: 2.5 },
    { id: 't7', name: 'Rope Pushdown', muscle: 'triceps', subMuscle: 'Triceps', type: 'weight', multiplier: 1.5 },
    // Karın
    { id: 'abs1', name: 'Cable Crunch', muscle: 'abs', subMuscle: 'Karın', type: 'weight', multiplier: 1.0 },
    { id: 'abs2', name: 'Flutter Kicks', muscle: 'abs', subMuscle: 'Alt Karın', type: 'bodyweight_added', multiplier: 1.0, bwMultiplier: 0.5 },
    { id: 'abs3', name: 'Plank', muscle: 'abs', subMuscle: 'Merkez (Core)', type: 'bodyweight_added', multiplier: 1.0, bwMultiplier: 0.7 },
    { id: 'abs4', name: 'Russian Twist', muscle: 'abs', subMuscle: 'Oblikler', type: 'weight', multiplier: 1.5 },
    { id: 'abs5', name: 'Hanging Leg Raise', muscle: 'abs', subMuscle: 'Alt Karın', type: 'bodyweight_added', multiplier: 1.0, bwMultiplier: 0.5 },
    { id: 'abs6', name: 'Ab Wheel Rollout', muscle: 'abs', subMuscle: 'Merkez (Core)', type: 'bodyweight_added', multiplier: 1.0, bwMultiplier: 0.6 }
];

const MUSCLE_NAMES = {
    'chest': 'Göğüs', 'back': 'Sırt', 'legs': 'Bacaklar', 
    'shoulders': 'Omuzlar', 'biceps': 'Ön Kol (Biceps)', 'triceps': 'Arka Kol (Triceps)', 'abs': 'Karın'
};

// App State
let appState = {
    user: null,
    workouts: [],
    templates: [],
    currentView: 'onboarding'
};

const mainContent = document.getElementById('main-content');

// Init
function init() {
    lucide.createIcons();
    loadState();
    if (!appState.user) renderOnboarding();
    else renderWorkoutMenu();
    setupNavigation();
}

function loadState() {
    const saved = localStorage.getItem('gymlog_state');
    if (saved) {
        appState = JSON.parse(saved);
        if(!appState.workouts) appState.workouts = [];
        if(!appState.templates) appState.templates = [];
        if(appState.workouts) {
            appState.workouts.forEach((w, idx) => {
                if(!w.id) w.id = 'legacy_' + idx + '_' + Date.now();
            });
        }
    }
}

function saveState() {
    localStorage.setItem('gymlog_state', JSON.stringify(appState));
}

function setupNavigation() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = e.currentTarget.dataset.view;
            document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
            e.currentTarget.parentElement.classList.add('active');
            
            if (view === 'workout') renderWorkoutMenu();
            else if (view === 'levels') renderLevels();
            else if (view === 'calendar') renderCalendar();
            else if (view === 'profile') renderProfile();
        });
    });
}

// ----------------- ONBOARDING & PROFILE -----------------
function renderOnboarding() {
    mainContent.innerHTML = `
        <div class="glass-panel card" style="max-width: 500px; margin: 0 auto;">
            <h1>Hoş Geldin!</h1>
            <form id="onboarding-form" style="margin-top: 2rem;">
                <div class="grid-2">
                    <div class="input-group"><label>Yaş</label><input type="number" id="age" required></div>
                    <div class="input-group"><label>Cinsiyet</label><select id="gender" required><option value="male">Erkek</option><option value="female">Kadın</option></select></div>
                </div>
                <div class="grid-2">
                    <div class="input-group"><label>Boy (cm)</label><input type="number" id="height" required></div>
                    <div class="input-group"><label>Kilo (kg)</label><input type="number" step="0.1" id="weight" required></div>
                </div>
                <div class="input-group">
                    <label>Fitness Tecrüben</label>
                    <select id="experience" required>
                        <option value="beginner">Acemi</option>
                        <option value="intermediate">Orta</option>
                        <option value="advanced">İleri</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Kaydet ve Başla</button>
            </form>
        </div>
    `;
    lucide.createIcons();

    document.getElementById('onboarding-form').addEventListener('submit', (e) => {
        e.preventDefault();
        appState.user = {
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            height: document.getElementById('height').value,
            weight: document.getElementById('weight').value,
            experience: document.getElementById('experience').value
        };
        saveState();
        document.querySelector('.nav-links li:first-child').classList.add('active');
        renderWorkoutMenu();
    });
}

function renderProfile() {
    let u = appState.user;
    mainContent.innerHTML = `
        <header>
            <h1>Profilim</h1>
            <p>Bilgilerini güncelleyerek rank standartlarını gerçekçi tut.</p>
        </header>
        <div class="glass-panel card" style="max-width: 500px;">
            <div class="input-group"><label>Boy (cm)</label><input type="number" id="upd-height" value="${u.height}"></div>
            <div class="input-group"><label>Kilo (kg)</label><input type="number" id="upd-weight" value="${u.weight}" step="0.1"></div>
            <div class="input-group"><label>Yaş</label><input type="number" id="upd-age" value="${u.age}"></div>
            <button class="btn btn-primary" onclick="updateProfile()" style="margin-top:1rem;">Bilgilerimi Güncelle</button>
        </div>
    `;
    lucide.createIcons();
}
window.updateProfile = function() {
    appState.user.height = document.getElementById('upd-height').value;
    appState.user.weight = document.getElementById('upd-weight').value;
    appState.user.age = document.getElementById('upd-age').value;
    saveState();
    alert("Profil güncellendi! Yeni değerlerine göre rank hesaplamaların yenilendi.");
}

// ----------------- WORKOUT FLOW -----------------
function renderWorkoutMenu() {
    let tplHtml = '<p class="text-muted">Henüz kayıtlı şablonun yok.</p>';
    if (appState.templates && appState.templates.length > 0) {
        tplHtml = appState.templates.map(t => `
            <button class="btn" style="display:block; width:100%; margin-bottom:10px; background:rgba(255,255,255,0.1); color:white; text-align:left;" onclick="startFromTemplate('${t.id}')">
                <i data-lucide="play" style="width:16px; margin-right:8px; vertical-align:middle;"></i> ${t.name}
            </button>
        `).join('');
    }

    mainContent.innerHTML = `
        <header><h1>Antrenman Merkezi</h1></header>
        <div class="grid-2">
            <div class="glass-panel card" style="text-align:center; padding: 2rem 1rem;">
                <i data-lucide="clipboard-list" style="width:48px; height:48px; color:var(--text-muted); margin-bottom:1rem;"></i>
                <h3>Hazır Şablonlarım</h3>
                <div style="margin-top:1rem; text-align:left; max-height:200px; overflow-y:auto; padding:5px;">
                    ${tplHtml}
                </div>
            </div>
            <div class="glass-panel card" style="cursor:pointer; text-align:center; padding: 2rem 1rem; border-color:var(--primary);" onclick="startCustomWorkout()">
                <i data-lucide="dumbbell" style="width:48px; height:48px; color:var(--primary); margin-bottom:1rem;"></i>
                <h3 style="color:var(--primary);">Kendi Antrenmanımı Gir</h3>
                <p class="text-muted">Serbest hareket seçimi.</p>
            </div>
        </div>
    `;
    lucide.createIcons();
}

window.startFromTemplate = function(tplId) {
    let tpl = appState.templates.find(t => t.id === tplId);
    if(!tpl) return;
    
    let freshExercises = JSON.parse(JSON.stringify(tpl.exercises)).map(ex => {
        ex.sets = [];
        ex.targetSets = ""; 
        ex.targetReps = "";
        return ex;
    });

    window.currentActiveWorkout = { 
        id: Date.now().toString(), 
        name: tpl.name, 
        date: new Date().toISOString().split('T')[0], 
        exercises: freshExercises 
    };
    window.renderCustomWorkoutUI(null);
}

window.startCustomWorkout = function(editWorkoutId = null) {
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    let workoutLink = document.querySelector('.nav-links li:first-child');
    if(workoutLink) workoutLink.classList.add('active');

    let today = new Date().toISOString().split('T')[0];
    
    if (editWorkoutId && typeof editWorkoutId === 'string' && editWorkoutId !== 'undefined' && editWorkoutId !== '[object Event]') {
        window.currentActiveWorkout = appState.workouts.find(w => w.id === editWorkoutId);
    } else {
        window.currentActiveWorkout = { id: Date.now().toString(), name: '', date: today, exercises: [] };
        editWorkoutId = null;
    }
    
    if(!window.currentActiveWorkout) window.currentActiveWorkout = { id: Date.now().toString(), name: '', date: today, exercises: [] };
    
    window.renderCustomWorkoutUI(editWorkoutId);
}

window.renderCustomWorkoutUI = function(editWorkoutId = null) {
    let today = new Date().toISOString().split('T')[0];
    mainContent.innerHTML = `
        <header>
            <h1>${editWorkoutId ? 'Antrenmanı Düzenle' : 'Antrenman Kaydı'}</h1>
        </header>
        <div class="glass-panel card">
            <div class="grid-2">
                <div class="input-group">
                    <label>Antrenman Adı</label>
                    <input type="text" id="workout-name" value="${window.currentActiveWorkout.name || ''}" placeholder="Örn: Push 1">
                </div>
                <div class="input-group">
                    <label>Tarih</label>
                    <input type="date" id="workout-date" value="${window.currentActiveWorkout.date || today}">
                </div>
            </div>
            
            <h3 style="margin-top:2rem;">Hareket Ekle</h3>
            <input type="text" id="ex-search" placeholder="Hareket Ara..." style="width:100%; padding:10px; margin-top:10px; background:rgba(0,0,0,0.3); border:1px solid #333; color:white; border-radius:8px;" onkeyup="searchExercises(this.value)">
            <div id="search-results" style="margin-top:10px; display:flex; gap:10px; flex-wrap:wrap;"></div>
            
            <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
                <!-- Front (Chest, Abs, Shoulders, Biceps, Legs) -->
                <svg viewBox="0 0 200 400" width="120" class="muscle-map">
                   <circle cx="100" cy="40" r="25" fill="#333"/>
                   <path d="M 60 80 L 140 80 L 130 130 L 70 130 Z" class="muscle-group" onclick="selectMuscleEx('chest')" />
                   <path d="M 75 135 L 125 135 L 120 190 L 80 190 Z" class="muscle-group" onclick="selectMuscleEx('abs')" />
                   <circle cx="50" cy="90" r="20" class="muscle-group" onclick="selectMuscleEx('shoulders')" />
                   <circle cx="150" cy="90" r="20" class="muscle-group" onclick="selectMuscleEx('shoulders')" />
                   <!-- Front arms = Biceps -->
                   <rect x="30" y="115" width="25" height="60" rx="10" class="muscle-group" onclick="selectMuscleEx('biceps')" />
                   <rect x="145" y="115" width="25" height="60" rx="10" class="muscle-group" onclick="selectMuscleEx('biceps')" />
                   <rect x="65" y="195" width="30" height="100" rx="10" class="muscle-group" onclick="selectMuscleEx('legs')" />
                   <rect x="105" y="195" width="30" height="100" rx="10" class="muscle-group" onclick="selectMuscleEx('legs')" />
                </svg>
                <!-- Back (Back, Shoulders, Triceps, Legs) -->
                <svg viewBox="0 0 200 400" width="120" class="muscle-map">
                   <circle cx="100" cy="40" r="25" fill="#333"/>
                   <path d="M 55 80 L 145 80 L 120 180 L 80 180 Z" class="muscle-group" onclick="selectMuscleEx('back')" />
                   <circle cx="50" cy="90" r="20" class="muscle-group" onclick="selectMuscleEx('shoulders')" />
                   <circle cx="150" cy="90" r="20" class="muscle-group" onclick="selectMuscleEx('shoulders')" />
                   <!-- Back arms = Triceps -->
                   <rect x="30" y="115" width="25" height="60" rx="10" class="muscle-group" onclick="selectMuscleEx('triceps')" />
                   <rect x="145" y="115" width="25" height="60" rx="10" class="muscle-group" onclick="selectMuscleEx('triceps')" />
                   <rect x="65" y="195" width="30" height="100" rx="10" class="muscle-group" onclick="selectMuscleEx('legs')" />
                   <rect x="105" y="195" width="30" height="100" rx="10" class="muscle-group" onclick="selectMuscleEx('legs')" />
                </svg>
            </div>
            
            <div id="exercise-picker-modal" style="display:none; margin-top:1rem; padding:1rem; background:rgba(0,0,0,0.2); border-radius:8px;"></div>
            
            <div id="ai-assistant-modal" style="display:none; margin-top:1rem; padding: 1.5rem; background: rgba(59, 130, 246, 0.1); border: 1px solid var(--primary); border-radius: 8px;">
                 <h3 style="color: var(--primary); margin-bottom:0.5rem;"><i data-lucide="bot"></i> AI Asistan Hedefi</h3>
                 <p id="ai-message" style="margin-bottom: 1rem; font-size:0.9rem; line-height:1.5;"></p>
                 <div class="grid-2">
                     <div class="input-group"><label>Hedef Set</label><input type="number" id="target-sets" value="3"></div>
                     <div class="input-group"><label>Hedef Tekrar</label><input type="text" id="target-reps" value="8"></div>
                 </div>
                 <button class="btn btn-primary" onclick="confirmExerciseAddition()" style="margin-top:1rem;">Hareketi Ekle</button>
            </div>
            
            <div id="workout-exercises" style="margin-top: 2rem; display:flex; flex-direction: column; gap: 1rem;"></div>
            
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
                <button class="btn btn-primary" style="margin-top: 2rem; flex:1; background: var(--accent);" onclick="finishWorkout()">Antrenmanı Kaydet</button>
                <button class="btn" style="margin-top: 2rem; flex:1; background: #555; color: white;" onclick="saveAsTemplate()">Şablon Kaydet</button>
                ${editWorkoutId ? `<button class="btn" style="margin-top: 2rem; background: var(--danger); color: white;" onclick="deleteWorkout('${editWorkoutId}')"><i data-lucide="trash-2"></i></button>` : ''}
            </div>
        </div>
    `;
    lucide.createIcons();
    updateActiveWorkoutUI();
}

window.searchExercises = function(val) {
    let resDiv = document.getElementById('search-results');
    if(val.length < 2) { resDiv.innerHTML = ''; return; }
    let filtered = EXERCISES.filter(e => e.name.toLowerCase().includes(val.toLowerCase()));
    resDiv.innerHTML = filtered.map(e => `<button class="btn" style="background:rgba(255,255,255,0.1); color:white; padding:5px 10px;" onclick="prepareExercise('${e.id}')">${e.name}</button>`).join('');
}

window.selectMuscleEx = function(muscleId) {
    let modal = document.getElementById('exercise-picker-modal');
    modal.style.display = 'block';
    let filtered = EXERCISES.filter(e => e.muscle === muscleId);
    modal.innerHTML = `<h4>${MUSCLE_NAMES[muscleId]} Hareketleri</h4>` + 
        filtered.map(e => `<button class="btn" style="background:rgba(255,255,255,0.1); color:white; padding:5px 10px; margin:5px;" onclick="prepareExercise('${e.id}')">${e.name}</button>`).join('');
}

window.prepareExercise = function(exId) {
    if (window.supersetLinkTarget !== undefined && window.supersetLinkTarget !== null) {
        let exData = EXERCISES.find(e => e.id === exId);
        window.currentActiveWorkout.exercises[window.supersetLinkTarget].linkedSuperset = {
            id: exId, name: exData.name, type: exData.type
        };
        window.supersetLinkTarget = null;
        document.getElementById('exercise-picker-modal').style.display = 'none';
        document.getElementById('search-results').innerHTML = '';
        updateActiveWorkoutUI();
        return;
    }

    window.pendingExerciseId = exId;
    let exData = EXERCISES.find(e => e.id === exId);
    
    let lastSets = 3, lastReps = 8, message = "İlk defa yapıyorsun. Ağırlığı formunu bozmadan rahat kaldırabileceğin seviyede tut.";
    if (appState.workouts) {
        let bestWeight = 0;
        let avgRepsTracker = 0;
        
        for (let i = appState.workouts.length - 1; i >= 0; i--) {
            let ex = appState.workouts[i].exercises.find(x => x.exerciseId === exId);
            if (ex && ex.sets.length > 0) {
                lastSets = ex.sets.length;
                let validSets = ex.sets.filter(s => parseFloat(s.weight) > 0 && parseInt(s.reps) > 0);
                
                if(validSets.length > 0) {
                    let totalReps = 0;
                    validSets.forEach(s => {
                        totalReps += parseInt(s.reps);
                        if(parseFloat(s.weight) > bestWeight) bestWeight = parseFloat(s.weight);
                    });
                    avgRepsTracker = Math.round(totalReps / validSets.length);
                    lastReps = avgRepsTracker;
                    
                    let targetWeight = bestWeight;
                    // Eğer ortalama tekrar 10 ve üzeriyse ağırlık artışı öner
                    if(avgRepsTracker >= 10 && exData.type !== 'bodyweight_added') {
                        targetWeight += (exData.type === 'dumbbell_weight' ? 2.5 : 5);
                        lastReps = 8; // Ağırlık arttığı için hedef tekrarı düşür
                        message = `Geçen sefer ${bestWeight}kg ile ${avgRepsTracker} tekrar yaptın. Güçlenmişsin! Yapay Zeka Önerisi: Ağırlığı ${targetWeight}kg'a çıkarıp ${lastReps} tekrar denemelisin.`;
                    } else if (exData.type === 'bodyweight_added') {
                        message = `Daha önce bu harekette ortalama ${avgRepsTracker} tekrar başardın. Yapay Zeka Önerisi: Aynı formu koruyarak ${avgRepsTracker + 1} tekrar yapmaya çalış!`;
                    } else {
                        message = `Geçen idmanda en iyi ${bestWeight}kg kaldırdın (Ort. ${avgRepsTracker} tkr). Yapay Zeka Önerisi: Aynı ağırlıkla tekrar sayısını ${avgRepsTracker + 1} yapmaya çalış.`;
                    }
                }
                break;
            }
        }
    }

    document.getElementById('ai-assistant-modal').style.display = 'block';
    document.getElementById('ai-message').innerText = message;
    document.getElementById('target-sets').value = lastSets;
    document.getElementById('target-reps').value = lastReps;
    document.getElementById('ai-assistant-modal').scrollIntoView({behavior: 'smooth'});
}

window.confirmExerciseAddition = function() {
    let exId = window.pendingExerciseId;
    let exData = EXERCISES.find(e => e.id === exId);
    window.currentActiveWorkout.exercises.push({
        exerciseId: exId, name: exData.name, type: exData.type,
        targetSets: document.getElementById('target-sets').value,
        targetReps: document.getElementById('target-reps').value,
        sets: []
    });
    document.getElementById('exercise-picker-modal').style.display = 'none';
    document.getElementById('ai-assistant-modal').style.display = 'none';
    document.getElementById('search-results').innerHTML = '';
    updateActiveWorkoutUI();
}

window.updateActiveWorkoutUI = function() {
    let container = document.getElementById('workout-exercises');
    container.innerHTML = window.currentActiveWorkout.exercises.map((ex, exIndex) => {
        let weightLabel = 'Ağırlık (kg)';
        if (ex.type === 'bodyweight_added') weightLabel = 'Ekstra Ağırlık';
        else if (ex.type === 'machine_weight') weightLabel = 'Makine (kg)';
        else if (ex.type === 'dumbbell_weight') weightLabel = 'Tek Dambıl (kg)';
        return `
        <div class="glass-panel card" style="background: rgba(0,0,0,0.2);">
            <div class="card-header" style="margin-bottom:0.5rem; display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h4 style="margin:0;">${ex.name} ${ex.linkedSuperset ? `<span style="color:var(--primary);">+ ${ex.linkedSuperset.name}</span> <button class="btn" style="padding:2px 5px; background:transparent; color:var(--danger); font-size:0.7rem; vertical-align:middle;" onclick="unlinkSuperset(${exIndex})"><i data-lucide="x" style="width:12px;"></i></button>` : ''}</h4>
                    <span style="font-size:0.8rem; color:var(--text-muted);">Hedef: ${ex.targetSets}x${ex.targetReps}</span>
                </div>
                <div>
                    ${!ex.linkedSuperset ? `<button class="btn" style="padding:5px 10px; background:rgba(255,255,255,0.1); color:var(--primary); font-size:0.8rem;" onclick="linkSuperset(${exIndex})"><i data-lucide="link" style="width:14px; margin-right:4px; vertical-align:middle;"></i>SS Bağla</button>` : ''}
                    <button class="btn" style="background: transparent; color: var(--danger); padding:0; margin-left:10px;" onclick="removeExercise(${exIndex})"><i data-lucide="trash-2"></i></button>
                </div>
            </div>
            <div id="sets-${exIndex}">
                ${ex.sets.map((set, setIndex) => `
                    <div style="display: flex; flex-direction:column; gap:5px; margin-bottom: 10px; font-size:0.9rem;">
                        <div style="display: flex; gap: 10px; align-items: center; flex-wrap:wrap;">
                            <span style="width: 40px; color:var(--text-muted);">S${setIndex + 1}</span>
                            <div style="display:flex; align-items:center; gap:5px;">
                                <input type="number" id="edit-w-${exIndex}-${setIndex}" value="${set.weight}" style="width: 55px; padding:2px; background:transparent; border:1px solid #555; color:white; text-align:center;">kg
                                <input type="number" id="edit-r-${exIndex}-${setIndex}" value="${set.reps}" style="width: 45px; padding:2px; background:transparent; border:1px solid #555; color:white; text-align:center;">tkr
                            </div>
                            ${ex.linkedSuperset ? `
                                <span style="color:var(--primary); margin:0 5px;">|</span>
                                <div style="display:flex; align-items:center; gap:5px;">
                                    <input type="number" id="edit-ssw-${exIndex}-${setIndex}" value="${set.ssWeight||''}" style="width: 55px; padding:2px; background:transparent; border:1px solid var(--primary); color:var(--primary); text-align:center;">kg
                                    <input type="number" id="edit-ssr-${exIndex}-${setIndex}" value="${set.ssReps||''}" style="width: 45px; padding:2px; background:transparent; border:1px solid var(--primary); color:var(--primary); text-align:center;">tkr
                                </div>
                            ` : ''}
                            <button class="btn" style="padding:2px 5px; background:#333; color:white;" onclick="updateSet(${exIndex}, ${setIndex})"><i data-lucide="check" style="width:14px;"></i></button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div style="display: flex; gap: 10px; margin-top: 10px; flex-wrap:wrap; align-items:center;">
                <input type="number" id="weight-${exIndex}" placeholder="${weightLabel}" style="width: 90px; padding: 5px; background: rgba(0,0,0,0.3); border:1px solid #333; color: white; border-radius:4px;">
                <input type="number" id="reps-${exIndex}" placeholder="Tkr" style="width: 60px; padding: 5px; background: rgba(0,0,0,0.3); border:1px solid #333; color: white; border-radius:4px;">
                ${ex.linkedSuperset ? `
                    <span style="color:var(--primary);">+</span>
                    <input type="number" id="ssweight-${exIndex}" placeholder="SS Ağırlık" style="width: 90px; padding: 5px; background: rgba(0,0,0,0.3); border:1px solid var(--primary); color: var(--primary); border-radius:4px;">
                    <input type="number" id="ssreps-${exIndex}" placeholder="SS Tkr" style="width: 60px; padding: 5px; background: rgba(0,0,0,0.3); border:1px solid var(--primary); color: var(--primary); border-radius:4px;">
                ` : ''}
                <button class="btn" style="padding: 5px 10px; background: rgba(255,255,255,0.1); color: white;" onclick="addSet(${exIndex})">Ekle</button>
            </div>
        </div>
    `}).join('');
    lucide.createIcons();
}

window.addSet = function(exIndex) {
    let weight = document.getElementById(`weight-${exIndex}`).value || 0;
    let reps = document.getElementById(`reps-${exIndex}`).value;
    if(!reps) return;
    
    let setData = { weight, reps };
    let ex = window.currentActiveWorkout.exercises[exIndex];
    if(ex.linkedSuperset) {
        let ssw = document.getElementById(`ssweight-${exIndex}`).value || 0;
        let ssr = document.getElementById(`ssreps-${exIndex}`).value || 0;
        setData.ssWeight = ssw;
        setData.ssReps = ssr;
    }
    
    ex.sets.push(setData);
    updateActiveWorkoutUI();
}

window.linkSuperset = function(exIndex) {
    window.supersetLinkTarget = exIndex;
    let searchBox = document.getElementById('ex-search');
    searchBox.focus();
    searchBox.placeholder = "Süperset bağlamak için hareket ara...";
    searchBox.scrollIntoView({behavior: 'smooth'});
}

window.unlinkSuperset = function(exIndex) {
    delete window.currentActiveWorkout.exercises[exIndex].linkedSuperset;
    window.currentActiveWorkout.exercises[exIndex].sets.forEach(s => {
        delete s.ssWeight;
        delete s.ssReps;
    });
    updateActiveWorkoutUI();
}

window.updateSet = function(exIndex, setIndex) {
    let w = document.getElementById(`edit-w-${exIndex}-${setIndex}`).value;
    let r = document.getElementById(`edit-r-${exIndex}-${setIndex}`).value;
    let setData = { weight: w, reps: r };
    
    let ex = window.currentActiveWorkout.exercises[exIndex];
    if(ex.linkedSuperset) {
        let ssw = document.getElementById(`edit-ssw-${exIndex}-${setIndex}`).value;
        let ssr = document.getElementById(`edit-ssr-${exIndex}-${setIndex}`).value;
        setData.ssWeight = ssw;
        setData.ssReps = ssr;
    }
    
    ex.sets[setIndex] = setData;
    alert('Set güncellendi.');
}

window.removeExercise = function(exIndex) {
    window.currentActiveWorkout.exercises.splice(exIndex, 1);
    updateActiveWorkoutUI();
}

window.saveAsTemplate = function() {
    let name = prompt("Şablon adı girin:", window.currentActiveWorkout.name || "Yeni Şablon");
    if(!name) return;
    let tpl = JSON.parse(JSON.stringify(window.currentActiveWorkout));
    tpl.id = 'tpl_' + Date.now();
    tpl.name = name;
    if(!appState.templates) appState.templates = [];
    appState.templates.push(tpl);
    saveState();
    alert(name + " şablonu başarıyla kaydedildi! Artık ana menüdeki Hazır Şablonlar kısmından ulaşabilirsin.");
}

window.finishWorkout = function() {
    window.currentActiveWorkout.name = document.getElementById('workout-name').value || "İsimsiz Antrenman";
    window.currentActiveWorkout.date = document.getElementById('workout-date').value;
    
    if(!appState.workouts) appState.workouts = [];
    
    let existingIndex = appState.workouts.findIndex(w => w.id === window.currentActiveWorkout.id);
    if (existingIndex >= 0) {
        appState.workouts[existingIndex] = window.currentActiveWorkout;
    } else {
        appState.workouts.push(window.currentActiveWorkout);
    }
    saveState();
    
    alert("Antrenman kaydedildi!");
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    document.querySelector('.nav-links li[data-view="calendar"]')?.classList.add('active');
    renderCalendar();
}

window.deleteWorkout = function(id) {
    if(!confirm('Bu antrenmanı silmek istediğine emin misin? Tüm veriler kalıcı olarak yok olacak.')) return;
    appState.workouts = appState.workouts.filter(w => w.id !== id);
    saveState();
    alert('Antrenman silindi.');
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    document.querySelector('.nav-links li[data-view="calendar"]')?.classList.add('active');
    renderCalendar();
}

// ----------------- HEATMAP & LEVELS -----------------
function calculate1RM(weight, reps) {
    if (reps == 1) return weight;
    return weight * (36 / (37 - reps)); 
}

function getRankDataForMuscle(muscleId) {
    if(!appState.workouts || appState.workouts.length === 0 || !appState.user) {
        return { score: 0, levelName: 'Acemi', class: 'fill-beginner', nextTarget: 20 };
    }
    
    let bestRatio = 0;
    let bodyWeight = parseFloat(appState.user.weight);
    let height = parseFloat(appState.user.height); // Optional logic, BMI normalized
    
    // Benchmarks (Novice, Intermediate, Advanced, Elite, Legendary)
    // Values represent target (1RM / BW) ratio multipliers per muscle.
    let benchmarks = {
        'chest': [0.8, 1.1, 1.4, 1.7, 2.0],
        'back': [0.7, 1.0, 1.3, 1.6, 1.9],
        'legs': [1.1, 1.4, 1.8, 2.2, 2.6],
        'shoulders': [0.5, 0.7, 0.9, 1.1, 1.3],
        'biceps': [0.3, 0.45, 0.6, 0.8, 1.0],
        'triceps': [0.4, 0.55, 0.7, 0.9, 1.1],
        'abs': [0.2, 0.4, 0.6, 0.8, 1.0]
    };
    
    appState.workouts.forEach(w => {
        if(!w.exercises) return;
        w.exercises.forEach(ex => {
            const processRecord = (def, wVal, rVal) => {
                if(!def || def.muscle !== muscleId) return;
                let weight = parseFloat(wVal)||0;
                if(def.type === 'bodyweight_added') weight += (bodyWeight * (def.bwMultiplier || 1.0));
                if(def.type === 'machine_weight') weight = weight * 0.75;
                if(def.type === 'dumbbell_weight') weight = weight * 2;
                
                // Bileşik egzersiz eşdeğerliği (normalization) çarpanı
                weight *= (def.multiplier || 1.0);
                
                let reps = parseInt(rVal)||0;
                if(weight > 0 && reps > 0) {
                    let ratio = calculate1RM(weight, reps) / bodyWeight;
                    if(ratio > bestRatio) bestRatio = ratio;
                }
            };

            let exDef = EXERCISES.find(e => e.id === ex.exerciseId);
            
            ex.sets.forEach(set => {
                processRecord(exDef, set.weight, set.reps);
                
                if (ex.linkedSuperset && set.ssWeight && set.ssReps) {
                    let ssDef = EXERCISES.find(e => e.id === ex.linkedSuperset.id);
                    processRecord(ssDef, set.ssWeight, set.ssReps);
                }
            });
        });
    });
    
    if(bestRatio === 0) return { score: 0, levelName: 'Acemi', class: 'fill-beginner', nextTarget: 20 };
    
    // Female adjustment
    if(appState.user.gender === 'female') bestRatio *= 1.35; 
    
    let b = benchmarks[muscleId] || benchmarks['chest'];
    let score = 0;
    
    // Scale bestRatio to 0-100 based on breakpoints (0=0, b[0]=20, b[1]=40, b[2]=60, b[3]=80, b[4]=100)
    if(bestRatio < b[0]) score = (bestRatio/b[0])*20;
    else if(bestRatio < b[1]) score = 20 + ((bestRatio-b[0])/(b[1]-b[0]))*20;
    else if(bestRatio < b[2]) score = 40 + ((bestRatio-b[1])/(b[2]-b[1]))*20;
    else if(bestRatio < b[3]) score = 60 + ((bestRatio-b[2])/(b[3]-b[2]))*20;
    else if(bestRatio < b[4]) score = 80 + ((bestRatio-b[3])/(b[4]-b[3]))*20;
    else score = 100;
    
    score = Math.round(score);
    if(score > 100) score = 100;
    
    if(score >= 80) return { score, levelName: 'Efsanevi', class: 'fill-legendary', nextTarget: 100 };
    if(score >= 60) return { score, levelName: 'Seçkin', class: 'fill-elite', nextTarget: 80 };
    if(score >= 40) return { score, levelName: 'İleri Seviye', class: 'fill-advanced', nextTarget: 60 };
    if(score >= 20) return { score, levelName: 'Orta Seviye', class: 'fill-novice', nextTarget: 40 };
    return { score, levelName: 'Acemi', class: 'fill-beginner', nextTarget: 20 };
}

window.levelsTab = 'map';

function renderLevels() {
    mainContent.innerHTML = `
        <header>
            <h1>Seviyem</h1>
            <p>Sistemdeki tüm idmanların analiz edilip güç rankın belirleniyor.</p>
            <div style="display:flex; gap:10px; margin-top:1rem;">
                <button class="btn" style="flex:1; background:${window.levelsTab === 'map' ? 'var(--primary)' : '#333'}; color:white;" onclick="window.levelsTab='map'; renderLevels();">Kas Haritası</button>
                <button class="btn" style="flex:1; background:${window.levelsTab === 'list' ? 'var(--primary)' : '#333'}; color:white;" onclick="window.levelsTab='list'; renderLevels();">Hareket Sıralamam</button>
            </div>
        </header>
        ${window.levelsTab === 'map' ? renderLevelsMap() : renderLevelsList()}
    `;
}

function renderLevelsMap() {
    return `
        <div class="glass-panel card" style="display:flex; flex-direction:column; align-items:center; margin-top:1rem;">
            <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
                <svg viewBox="0 0 200 400" width="150" class="muscle-map">
                   <circle cx="100" cy="40" r="25" fill="#333"/>
                   <path d="M 60 80 L 140 80 L 130 130 L 70 130 Z" class="muscle-group ${getRankDataForMuscle('chest').class}" onclick="showRankDetail('chest')" />
                   <path d="M 75 135 L 125 135 L 120 190 L 80 190 Z" class="muscle-group ${getRankDataForMuscle('abs').class}" onclick="showRankDetail('abs')" />
                   <circle cx="50" cy="90" r="20" class="muscle-group ${getRankDataForMuscle('shoulders').class}" onclick="showRankDetail('shoulders')" />
                   <circle cx="150" cy="90" r="20" class="muscle-group ${getRankDataForMuscle('shoulders').class}" onclick="showRankDetail('shoulders')" />
                   <rect x="30" y="115" width="25" height="60" rx="10" class="muscle-group ${getRankDataForMuscle('biceps').class}" onclick="showRankDetail('biceps')" />
                   <rect x="145" y="115" width="25" height="60" rx="10" class="muscle-group ${getRankDataForMuscle('biceps').class}" onclick="showRankDetail('biceps')" />
                   <rect x="65" y="195" width="30" height="100" rx="10" class="muscle-group ${getRankDataForMuscle('legs').class}" onclick="showRankDetail('legs')" />
                   <rect x="105" y="195" width="30" height="100" rx="10" class="muscle-group ${getRankDataForMuscle('legs').class}" onclick="showRankDetail('legs')" />
                </svg>
                <svg viewBox="0 0 200 400" width="150" class="muscle-map">
                   <circle cx="100" cy="40" r="25" fill="#333"/>
                   <path d="M 55 80 L 145 80 L 120 180 L 80 180 Z" class="muscle-group ${getRankDataForMuscle('back').class}" onclick="showRankDetail('back')" />
                   <circle cx="50" cy="90" r="20" class="muscle-group ${getRankDataForMuscle('shoulders').class}" onclick="showRankDetail('shoulders')" />
                   <circle cx="150" cy="90" r="20" class="muscle-group ${getRankDataForMuscle('shoulders').class}" onclick="showRankDetail('shoulders')" />
                   <rect x="30" y="115" width="25" height="60" rx="10" class="muscle-group ${getRankDataForMuscle('triceps').class}" onclick="showRankDetail('triceps')" />
                   <rect x="145" y="115" width="25" height="60" rx="10" class="muscle-group ${getRankDataForMuscle('triceps').class}" onclick="showRankDetail('triceps')" />
                   <rect x="65" y="195" width="30" height="100" rx="10" class="muscle-group ${getRankDataForMuscle('legs').class}" onclick="showRankDetail('legs')" />
                   <rect x="105" y="195" width="30" height="100" rx="10" class="muscle-group ${getRankDataForMuscle('legs').class}" onclick="showRankDetail('legs')" />
                </svg>
            </div>
            
            <div style="margin-top:2rem; display:flex; gap:10px; font-size:0.8rem; flex-wrap:wrap; justify-content:center;">
                <span style="padding:5px 10px; background:#94a3b8; color:#fff;">Acemi</span>
                <span style="padding:5px 10px; background:#10b981; color:#fff;">Orta Seviye</span>
                <span style="padding:5px 10px; background:#f97316; color:#fff;">İleri Seviye</span>
                <span style="padding:5px 10px; background:#8b5cf6; color:#fff;">Seçkin</span>
                <span style="padding:5px 10px; background:#eab308; color:#fff;">Efsanevi</span>
            </div>
            
            <div id="rank-detail-modal" style="display:none; width:100%; margin-top:2rem; padding:1.5rem; background:rgba(255,255,255,0.05); border-left: 4px solid var(--primary);">
                <h2 id="rd-title">Göğüs</h2>
                <h3 id="rd-level" style="color:var(--primary);">İleri Seviye</h3>
                <p style="font-size:1.5rem; font-weight:bold;" id="rd-score">Puan: 73 / 100</p>
                <p class="text-muted" id="rd-target">Hedef: 78</p>
            </div>
        </div>
    `;
}

function renderLevelsList() {
    let html = '<div class="glass-panel card" style="margin-top:1rem; padding:1rem;">';
    let userStats = {};
    let bw = parseFloat(appState.user?.weight || 80);
    
    appState.workouts.forEach(w => {
        if(!w.exercises) return;
        w.exercises.forEach(ex => {
            const processRecord = (def, wVal, rVal) => {
                if(!def) return;
                if(!userStats[def.id]) {
                    userStats[def.id] = { name: def.name, best1RM: 0, bestRatio: 0, muscle: def.muscle };
                }
                
                let rawWeight = parseFloat(wVal)||0;
                let weight = rawWeight;
                if(def.type === 'bodyweight_added') weight += (bw * (def.bwMultiplier || 1.0));
                if(def.type === 'machine_weight') weight *= 0.75;
                if(def.type === 'dumbbell_weight') weight *= 2;
                
                let normalizedWeight = weight * (def.multiplier || 1.0);
                
                let reps = parseInt(rVal)||0;
                if(rawWeight > 0 && reps > 0) {
                    let raw1RM = calculate1RM(rawWeight, reps);
                    let normalized1RM = calculate1RM(normalizedWeight, reps);
                    
                    // Arayüzde gerçek raw1RM gösterilsin, ama rank hesabı normalizedRatio üzerinden yapılsın
                    if(normalized1RM > (userStats[def.id].bestNormalized1RM || 0)) {
                        userStats[def.id].best1RM = raw1RM; // Gerçek rakam
                        userStats[def.id].bestNormalized1RM = normalized1RM; // Eşdeğer çarpanlı rakam
                        userStats[def.id].bestRatio = normalized1RM / bw; // Seviyeyi belirleyecek oran
                    }
                }
            };

            let exDef = EXERCISES.find(e => e.id === ex.exerciseId);
            
            ex.sets.forEach(set => {
                processRecord(exDef, set.weight, set.reps);
                
                if (ex.linkedSuperset && set.ssWeight && set.ssReps) {
                    let ssDef = EXERCISES.find(e => e.id === ex.linkedSuperset.id);
                    processRecord(ssDef, set.ssWeight, set.ssReps);
                }
            });
        });
    });
    
    let benchmarks = {
        'chest': [0.8, 1.1, 1.4, 1.7, 2.0],
        'back': [0.7, 1.0, 1.3, 1.6, 1.9],
        'legs': [1.1, 1.4, 1.8, 2.2, 2.6],
        'shoulders': [0.5, 0.7, 0.9, 1.1, 1.3],
        'biceps': [0.3, 0.45, 0.6, 0.8, 1.0],
        'triceps': [0.4, 0.55, 0.7, 0.9, 1.1],
        'abs': [0.2, 0.4, 0.6, 0.8, 1.0]
    };
    
    html += '<table style="width:100%; text-align:left; border-collapse:collapse;">';
    html += '<tr style="border-bottom:1px solid #555;"><th style="padding:10px;">Hareket</th><th style="padding:10px;">En İyi 1RM</th><th style="padding:10px;">Seviye</th></tr>';
    
    Object.values(userStats).sort((a,b) => b.bestRatio - a.bestRatio).forEach(stat => {
        if(stat.best1RM === 0) return;
        let b = benchmarks[stat.muscle] || benchmarks['chest'];
        let lvl = 'Acemi'; let col = '#94a3b8';
        let ratio = stat.bestRatio;
        if(appState.user?.gender === 'female') ratio *= 1.35;
        
        if(ratio >= b[4]) { lvl = 'Efsanevi'; col = '#eab308'; }
        else if(ratio >= b[3]) { lvl = 'Seçkin'; col = '#8b5cf6'; }
        else if(ratio >= b[2]) { lvl = 'İleri Seviye'; col = '#f97316'; }
        else if(ratio >= b[1]) { lvl = 'Orta Seviye'; col = '#10b981'; }
        
        html += `<tr>
            <td style="padding:10px; border-bottom:1px solid #333;">${stat.name}</td>
            <td style="padding:10px; border-bottom:1px solid #333; color:var(--primary); font-weight:bold;">~${Math.round(stat.best1RM)} kg</td>
            <td style="padding:10px; border-bottom:1px solid #333; color:${col};">${lvl}</td>
        </tr>`;
    });
    
    if(Object.keys(userStats).length === 0) {
        html += '<tr><td colspan="3" style="padding:10px; text-align:center;">Henüz hareket verisi yok.</td></tr>';
    }
    
    html += '</table></div>';
    return html;
}

window.showRankDetail = function(muscleId) {
    let data = getRankDataForMuscle(muscleId);
    let modal = document.getElementById('rank-detail-modal');
    modal.style.display = 'block';
    document.getElementById('rd-title').innerText = MUSCLE_NAMES[muscleId];
    document.getElementById('rd-level').innerText = data.levelName;
    document.getElementById('rd-score').innerText = `Puan: ${data.score} / 100`;
    document.getElementById('rd-target').innerText = data.score >= 100 ? 'Maksimum Seviyedesin!' : `Bir sonraki seviye için hedef: ${data.nextTarget}`;
}

window.currentCalYear = new Date().getFullYear();
window.currentCalMonth = new Date().getMonth();

window.changeCalMonth = function(dir) {
    window.currentCalMonth += dir;
    if(window.currentCalMonth < 0) {
        window.currentCalMonth = 11;
        window.currentCalYear--;
    } else if(window.currentCalMonth > 11) {
        window.currentCalMonth = 0;
        window.currentCalYear++;
    }
    renderCalendar();
}

window.renderCalendar = function() {
    let year = window.currentCalYear;
    let month = window.currentCalMonth;
    let firstDay = new Date(year, month, 1).getDay();
    if(firstDay === 0) firstDay = 7; // make monday 1
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Map workouts by date string YYYY-MM-DD
    let wMap = {};
    if(appState.workouts) {
        appState.workouts.forEach(w => {
            if(!w.date) return;
            let dStr = w.date.split('T')[0];
            if(!wMap[dStr]) wMap[dStr] = [];
            wMap[dStr].push(w);
        });
    }

    let cells = [];
    let dNames = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
    
    // Headers
    dNames.forEach(d => cells.push(`<div style="font-weight:bold; text-align:center; padding:10px; color:var(--text-muted); border-bottom:1px solid rgba(255,255,255,0.1);">${d}</div>`));
    
    // Blanks
    for(let i=1; i<firstDay; i++) {
        cells.push(`<div style="padding:20px; opacity:0.1;"></div>`);
    }
    
    // Days
    for(let d=1; d<=daysInMonth; d++) {
        let dateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        let hasWorkout = wMap[dateStr] ? true : false;
        
        let bg = hasWorkout ? 'rgba(59, 130, 246, 0.2)' : 'transparent';
        let border = hasWorkout ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.05)';
        
        cells.push(`
            <div style="padding:15px 5px; text-align:center; background:${bg}; border:${border}; border-radius:4px; cursor:pointer;" onclick="showDayWorkouts('${dateStr}')">
                ${d}
                ${hasWorkout ? '<div style="width:6px; height:6px; background:var(--primary); border-radius:50%; margin:5px auto 0;"></div>' : ''}
            </div>
        `);
    }

    let monthName = new Date(year, month, 1).toLocaleString('tr-TR', { month: 'long' });

    mainContent.innerHTML = `
        <header>
            <h1>Takvim</h1>
        </header>
        <div class="glass-panel card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                <button class="btn" style="background:transparent; color:white; border:1px solid #555;" onclick="changeCalMonth(-1)"><i data-lucide="chevron-left"></i> Önceki</button>
                <h3 style="text-align:center; margin:0;">${monthName} ${year}</h3>
                <button class="btn" style="background:transparent; color:white; border:1px solid #555;" onclick="changeCalMonth(1)">Sonraki <i data-lucide="chevron-right"></i></button>
            </div>
            
            <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:5px;">
                ${cells.join('')}
            </div>
            
            <div id="day-detail" style="margin-top:2rem; display:none; border-top:1px solid rgba(255,255,255,0.1); padding-top:1rem;"></div>
        </div>
    `;
    lucide.createIcons();
    
    window.showDayWorkouts = function(dateStr) {
        let div = document.getElementById('day-detail');
        div.style.display = 'block';
        let wks = wMap[dateStr];
        if(!wks || wks.length === 0) {
            div.innerHTML = `<p class="text-muted">${dateStr} tarihinde antrenman kaydı yok.</p>`;
            return;
        }
        
        div.innerHTML = `<h3>${dateStr} Antrenmanları</h3>` + wks.map(w => `
            <div style="background:rgba(0,0,0,0.2); padding:1rem; margin-top:1rem; border-radius:8px;">
                <div style="display:flex; justify-content:space-between;">
                    <h4 style="color:var(--primary);">${w.name}</h4>
                    <button class="btn" style="padding:5px 10px; background:var(--accent); color:white;" onclick="startCustomWorkout('${w.id}')">Düzenle</button>
                </div>
                <div style="margin-top:1rem;">
                    ${w.exercises.map(ex => `
                        <div style="margin-bottom:10px;">
                            <strong>${ex.name} ${ex.linkedSuperset ? `<span style="color:var(--primary);">+ ${ex.linkedSuperset.name}</span>` : ''}</strong>
                            <div style="font-size:0.8rem; color:#aaa;">${ex.sets.map((s,i) => {
                                let main = `S${i+1}: ${s.weight}kg x ${s.reps}`;
                                if(ex.linkedSuperset && s.ssWeight !== undefined) {
                                    main += ` <span style="color:var(--primary);">(SS: ${s.ssWeight}kg x ${s.ssReps})</span>`;
                                }
                                return main;
                            }).join(' | ')}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    };
}

document.addEventListener('DOMContentLoaded', init);
