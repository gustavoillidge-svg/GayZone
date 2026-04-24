// ---------- GEAR DATABASE ----------
const gearDatabase = [
    { name: "RPC Tactical Carrier", price: 28500, dropChance: 7.2, locations: "YBL-1, Fort Narith", category: "Armor" },
    { name: "JPC 2.0 Carrier", price: 18400, dropChance: 14.5, locations: "Tiger Bay, Ban Pa", category: "Armor" },
    { name: "Ops-Core FAST Helmet", price: 22300, dropChance: 6.8, locations: "Midnight Sapphire", category: "Helmet" },
    { name: "M4 SOPMOD", price: 39800, dropChance: 8.3, locations: "YBL-1 crate", category: "AR" },
    { name: "EOTech EXPS3", price: 8700, dropChance: 18.2, locations: "Weapon boxes", category: "Optic" },
    { name: "AFG Foregrip", price: 4200, dropChance: 22, locations: "Ban Pa", category: "Grip" },
    { name: "Raptor Suppressor", price: 14300, dropChance: 4.2, locations: "Midnight", category: "Muzzle" }
];

const strategiesArray = ["RUN YBL-1 LOOP → RPC/M4", "BOSS FARM Fort Narith", "NIGHT BAN PA for AFG"];
const bestCombos = [{ title: "META RAID", loadout: "RPC + OpsCore + M4 + Suppressor", cost: "~84k", efficiency: "S-Tier" }];

// ---------- WEAPON PART DATABASE (todas las partes para construir desde cero) ----------
const weaponPartsDB = {
    receiver: [
        { name: "M4 Standard Upper", statAcc: 5, recoilCtrl: 2, price: 4200, rof: 750, img: "🔧" },
        { name: "DDM4 Receiver (Elite)", statAcc: 12, recoilCtrl: 8, price: 9800, rof: 800, img: "⚙️" }
    ],
    barrel: [
        { name: "14.5\" Carbine", statAcc: 3, recoilCtrl: 4, price: 3100, rof: 750, img: "🔫" },
        { name: "20\" Heavy Barrel", statAcc: 10, recoilCtrl: 9, price: 5700, rof: 700, img: "🎯" }
    ],
    handguard: [
        { name: "Mlok Rail", statAcc: 2, recoilCtrl: 3, price: 1900, rof: 0, img: "🛡️" },
        { name: "RIS II Quad", statAcc: 5, recoilCtrl: 7, price: 4200, rof: 0, img: "🔲" }
    ],
    stock: [
        { name: "Standard CAR Stock", statAcc: 1, recoilCtrl: 2, price: 1200, rof: 0, img: "📌" },
        { name: "Magpul CTR", statAcc: 4, recoilCtrl: 6, price: 3400, rof: 0, img: "🎯" }
    ],
    grip: [
        { name: "Vertical Grip", statAcc: 2, recoilCtrl: 5, price: 2100, rof: 0, img: "✋" },
        { name: "Angled Foregrip", statAcc: 4, recoilCtrl: 7, price: 3900, rof: 0, img: "🔻" }
    ],
    optic: [
        { name: "Red Dot (EOTech)", statAcc: 8, recoilCtrl: 1, price: 5400, rof: 0, img: "🔭" },
        { name: "ACOG 4x Scope", statAcc: 15, recoilCtrl: 0, price: 8700, rof: 0, img: "👁️" }
    ],
    muzzle: [
        { name: "A2 Flash Hider", statAcc: 1, recoilCtrl: 2, price: 800, rof: 0, img: "💨" },
        { name: "Suppressor SD", statAcc: 3, recoilCtrl: 8, price: 6500, rof: -50, img: "🤫" }
    ],
    magazine: [
        { name: "30rd PMAG", statAcc: 0, recoilCtrl: 0, price: 900, rof: 0, img: "📀" },
        { name: "60rd Drum", statAcc: -2, recoilCtrl: -1, price: 3200, rof: 0, img: "⚡" }
    ]
};

// Builds Predefinidas: META, POPULAR, CUSTOM (custom se guarda localmente)
const metaBuild = {
    receiver: "DDM4 Receiver (Elite)", barrel: "20\" Heavy Barrel", handguard: "RIS II Quad",
    stock: "Magpul CTR", grip: "Angled Foregrip", optic: "ACOG 4x Scope",
    muzzle: "Suppressor SD", magazine: "30rd PMAG"
};
const popularBuild = {
    receiver: "M4 Standard Upper", barrel: "14.5\" Carbine", handguard: "Mlok Rail",
    stock: "Standard CAR Stock", grip: "Vertical Grip", optic: "Red Dot (EOTech)",
    muzzle: "A2 Flash Hider", magazine: "30rd PMAG"
};

let currentBuildType = "meta";
let customBuild = JSON.parse(localStorage.getItem("gzw_custom_build")) || { ...popularBuild };

// Helper para obtener objeto por nombre
function getPartObj(category, partName) {
    return weaponPartsDB[category].find(p => p.name === partName) || weaponPartsDB[category][0];
}

// Calcular estadísticas totales de un build
function calculateStats(buildObj) {
    let totalAcc = 0, totalRecoil = 0, totalRof = 750, totalPrice = 0;
    for (let [cat, partName] of Object.entries(buildObj)) {
        let part = getPartObj(cat, partName);
        if (part) {
            totalAcc += part.statAcc;
            totalRecoil += part.recoilCtrl;
            totalRof += part.rof || 0;
            totalPrice += part.price;
        }
    }
    return { accuracy: Math.min(95, 50 + totalAcc), recoil: Math.min(90, 40 + totalRecoil), rof: totalRof, price: totalPrice };
}

// Renderizar todas las partes clickeables
function renderPartsGrid(selectedBuildObj) {
    const grid = document.getElementById("partsGrid");
    if (!grid) return;
    let html = "";
    for (let [category, parts] of Object.entries(weaponPartsDB)) {
        html += `<div style="grid-column: 1/-1; margin-top:6px;"><strong>📌 ${category.toUpperCase()}</strong></div>`;
        parts.forEach(part => {
            const isSelected = (selectedBuildObj[category] === part.name);
            html += `<div class="part-card ${isSelected ? 'selected-part' : ''}" data-category="${category}" data-partname="${part.name}">
                        <span>${part.img} ${part.name}</span>
                        <span style="font-size:0.7rem;">💰${part.price} | 🎯+${part.statAcc} | ⚡+${part.recoilCtrl}</span>
                    </div>`;
        });
    }
    grid.innerHTML = html;

    // Eventos para personalización (solo si estamos en custom build)
    document.querySelectorAll('.part-card').forEach(card => {
        card.addEventListener('click', () => {
            if (currentBuildType !== "custom") {
                document.getElementById("customFeedback").innerHTML = "⚠️ Switch to CUSTOM BUILD to modify parts!";
                return;
            }
            const category = card.dataset.category;
            const partName = card.dataset.partname;
            customBuild[category] = partName;
            localStorage.setItem("gzw_custom_build", JSON.stringify(customBuild));
            updateWeaponDisplay(customBuild, "CUSTOM WEAPON");
            renderPartsGrid(customBuild);
            document.getElementById("customFeedback").innerHTML = "✅ Custom part changed!";
            setTimeout(() => document.getElementById("customFeedback").innerHTML = "", 1500);
        });
    });
}

// Actualizar preview y stats
function updateWeaponDisplay(buildObj, weaponTitle) {
    document.getElementById("weaponNameDisplay").innerText = weaponTitle;
    const stats = calculateStats(buildObj);
    document.getElementById("accuracyStat").innerText = stats.accuracy;
    document.getElementById("recoilStat").innerText = stats.recoil;
    document.getElementById("rofStat").innerText = stats.rof;
    document.getElementById("priceStat").innerText = stats.price;
}

// Cargar build (meta, popular o custom)
function loadBuild(type) {
    currentBuildType = type;
    let activeBuild, weaponName;
    if (type === "meta") {
        activeBuild = metaBuild;
        weaponName = "🏅 META BUILD | DDM4 ELITE";
    } else if (type === "popular") {
        activeBuild = popularBuild;
        weaponName = "🔥 POPULAR BUILD | RELIABLE M4";
    } else {
        activeBuild = customBuild;
        weaponName = "🎨 CUSTOM BUILD | YOUR CONFIG";
    }
    updateWeaponDisplay(activeBuild, weaponName);
    renderPartsGrid(activeBuild);
    // resaltar botón
    document.querySelectorAll('.build-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.build-btn[data-build="${type}"]`).classList.add('active');
}

// Guardar custom (ya se guarda automáticamente, pero forzamos)
document.addEventListener("DOMContentLoaded", () => {
    // Render gear, combos, strats
    const gearContainer = document.getElementById("gearListContainer");
    if (gearContainer) {
        gearContainer.innerHTML = gearDatabase.map(g => `<div class="gear-item"><div class="gear-name">${g.name}<span class="badge">${g.category}</span></div><div class="details-row"><span class="price">💰$${g.price}</span><span class="drop-rate">📊${g.dropChance}%</span><span class="location">📍${g.locations}</span></div></div>`).join('');
    }
    document.getElementById("bestCombosDisplay").innerHTML = bestCombos.map(c => `<div><strong>${c.title}</strong><br>${c.loadout} - ${c.cost} - ${c.efficiency}</div>`).join('');
    document.getElementById("strategiesList").innerHTML = strategiesArray.map(s => `<li>${s}</li>`).join('');
    document.getElementById("lootTips").innerHTML = `<p>🔹 YBL-1: M4 12% / RPC 8%<br>🔹 Tiger Bay marina: OpsCore helmet 6%<br>🔹 Ban Pa: AFG 22% </p>`;

    // Weapon builder init
    loadBuild("meta");
    const saveBtn = document.getElementById("saveCustomBtn");
    if (saveBtn) {
        saveBtn.addEventListener("click", () => {
            if (currentBuildType === "custom") {
                localStorage.setItem("gzw_custom_build", JSON.stringify(customBuild));
                document.getElementById("customFeedback").innerHTML = "💾 Custom build saved permanently!";
            } else {
                document.getElementById("customFeedback").innerHTML = "⛔ Switch to CUSTOM mode to save.";
            }
            setTimeout(() => document.getElementById("customFeedback").innerHTML = "", 2000);
        });
    }
    // Build selector events
    document.querySelectorAll('.build-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = btn.dataset.build;
            loadBuild(type);
        });
    });
});
