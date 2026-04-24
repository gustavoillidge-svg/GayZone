// ----------------------- GEAR DATABASE -----------------------
const gearList = [
    { name: "RPC Tactical Carrier", price: 28500, drop: 7.2, loc: "YBL-1 Bunker" },
    { name: "JPC 2.0 Plate Carrier", price: 18400, drop: 14.5, loc: "Tiger Bay Marina" },
    { name: "Ops-Core FAST Helmet", price: 22300, drop: 6.8, loc: "Midnight Sapphire" },
    { name: "M4 SOPMOD Block II", price: 39800, drop: 8.3, loc: "YBL-1 crate" },
    { name: "EOTech EXPS3", price: 8700, drop: 18.2, loc: "Weapon boxes" },
    { name: "AFG Foregrip", price: 4200, drop: 22.0, loc: "Ban Pa caches" }
];
const fullStrategies = ["▶ YBL-1 loop: RPC/M4 7-8%", "▶ Fort Narith boss farm (DDM4 12%)", "▶ Night Ban Pa: AFG + JPC 2.0", "▶ Tiger Bay Marina heli crash: NVGs 3%"];

// ----------------------- WEAPON PARTS (todas las categorías) -----------------------
const weaponCategories = {
    Receiver: [
        { name: "M4 Standard", acc: 4, recoil: 2, price: 4200, rof: 750 },
        { name: "DDM4 Elite", acc: 12, recoil: 9, price: 9800, rof: 800 }
    ],
    Barrel: [
        { name: "14.5\" Carbine", acc: 3, recoil: 4, price: 3100, rof: 0 },
        { name: "20\" Heavy", acc: 10, recoil: 9, price: 5700, rof: -30 }
    ],
    Handguard: [
        { name: "Mlok Rail", acc: 2, recoil: 3, price: 1900, rof: 0 },
        { name: "RIS II Quad", acc: 5, recoil: 7, price: 4200, rof: 0 }
    ],
    Stock: [
        { name: "CAR Stock", acc: 1, recoil: 2, price: 1200, rof: 0 },
        { name: "Magpul CTR", acc: 4, recoil: 6, price: 3400, rof: 0 }
    ],
    Grip: [
        { name: "Vertical Grip", acc: 2, recoil: 5, price: 2100, rof: 0 },
        { name: "Angled Foregrip", acc: 4, recoil: 7, price: 3900, rof: 0 }
    ],
    Optic: [
        { name: "Red Dot (EOTech)", acc: 8, recoil: 1, price: 5400, rof: 0 },
        { name: "ACOG 4x", acc: 15, recoil: 0, price: 8700, rof: 0 }
    ],
    Muzzle: [
        { name: "A2 Flash Hider", acc: 1, recoil: 2, price: 800, rof: 0 },
        { name: "Suppressor SD", acc: 3, recoil: 8, price: 6500, rof: -40 }
    ],
    Magazine: [
        { name: "30rd PMAG", acc: 0, recoil: 0, price: 900, rof: 0 },
        { name: "60rd Drum", acc: -2, recoil: -1, price: 3200, rof: 0 }
    ]
};

// Builds predefinidas
const proMetaBuild = {
    Receiver: "DDM4 Elite", Barrel: "20\" Heavy", Handguard: "RIS II Quad",
    Stock: "Magpul CTR", Grip: "Angled Foregrip", Optic: "ACOG 4x",
    Muzzle: "Suppressor SD", Magazine: "30rd PMAG"
};
const popularBuild = {
    Receiver: "M4 Standard", Barrel: "14.5\" Carbine", Handguard: "Mlok Rail",
    Stock: "CAR Stock", Grip: "Vertical Grip", Optic: "Red Dot (EOTech)",
    Muzzle: "A2 Flash Hider", Magazine: "30rd PMAG"
};

let currentBuildType = "pro";
let customBuild = JSON.parse(localStorage.getItem("gzw_custom_build")) || JSON.parse(JSON.stringify(popularBuild));

function getPart(category, partName) {
    return weaponCategories[category].find(p => p.name === partName);
}

function calcStats(build) {
    let totalAcc = 0, totalRecoil = 0, totalRof = 750, totalPrice = 0;
    for (let [cat, partName] of Object.entries(build)) {
        let part = getPart(cat, partName);
        if (part) {
            totalAcc += part.acc;
            totalRecoil += part.recoil;
            totalRof += part.rof || 0;
            totalPrice += part.price;
        }
    }
    return { acc: Math.min(95, 45 + totalAcc), recoil: Math.min(90, 40 + totalRecoil), rof: totalRof, price: totalPrice };
}

function updateStatsUI(build) {
    let s = calcStats(build);
    document.getElementById("accVal").innerText = s.acc;
    document.getElementById("recVal").innerText = s.recoil;
    document.getElementById("rofVal").innerText = s.rof;
    document.getElementById("priceVal").innerText = s.price;
}

function renderAllParts(selectedBuild) {
    const container = document.getElementById("fullPartsGrid");
    if (!container) return;
    let html = "";
    for (let [cat, parts] of Object.entries(weaponCategories)) {
        html += `<div class="part-category"><div class="category-title">🔧 ${cat}</div><div class="parts-row">`;
        parts.forEach(part => {
            let isSelected = (selectedBuild[cat] === part.name);
            html += `<div class="part-option ${isSelected ? 'selected-part' : ''}" data-category="${cat}" data-partname="${part.name}">
                        ${part.name} <span style="color:#b8da70;">$${part.price}</span>
                    </div>`;
        });
        html += `</div></div>`;
    }
    container.innerHTML = html;
    document.querySelectorAll('.part-option').forEach(el => {
        el.addEventListener('click', () => {
            if (currentBuildType !== "custom") {
                document.getElementById("buildFeedback").innerHTML = "⚠️ Switch to CUSTOM BUILD to modify parts!";
                return;
            }
            let cat = el.dataset.category;
            let pname = el.dataset.partname;
            customBuild[cat] = pname;
            localStorage.setItem("gzw_custom_build", JSON.stringify(customBuild));
            renderAllParts(customBuild);
            updateStatsUI(customBuild);
            document.getElementById("buildFeedback").innerHTML = "✅ Part changed!";
            setTimeout(() => document.getElementById("buildFeedback").innerHTML = "", 1500);
        });
    });
}

function loadBuild(type) {
    currentBuildType = type;
    let active = (type === "pro") ? proMetaBuild : (type === "popular") ? popularBuild : customBuild;
    updateStatsUI(active);
    renderAllParts(active);
    document.querySelectorAll('.build-btn').forEach(btn => btn.classList.remove('active-preset'));
    if (type === 'pro') document.querySelector('.preset-meta')?.classList.add('active-preset');
    else if (type === 'popular') document.querySelector('.preset-popular')?.classList.add('active-preset');
    else document.querySelector('.preset-custom')?.classList.add('active-preset');
}

// ----- Info General -----
function renderGeneralInfo() {
    const gearContainer = document.getElementById("gearTableInfo");
    if (gearContainer) {
        gearContainer.innerHTML = gearList.map(g => `<div class="gear-item"><div class="gear-name">${g.name}<span class="badge">💰${g.price}</span></div><div class="details-row"><span>📊 ${g.drop}%</span><span>📍${g.loc}</span></div></div>`).join('');
    }
    const stratDiv = document.getElementById("strategiesFull");
    if (stratDiv) stratDiv.innerHTML = `<ul class="strat-list">${fullStrategies.map(s => `<li>${s}</li>`).join('')}</ul>`;
}

// ----- MAPA INTERACTIVO -----
const mapZones = [
    { name: "YBL-1 Bunker", faction: "Mithras", lootRarity: "High (M4/RPC)", boss: false, coord: "A1" },
    { name: "Tiger Bay Marina", faction: "Crimson", lootRarity: "Medium-High (JPC)", boss: true, coord: "B2" },
    { name: "Ban Pa Village", faction: "Lamang", lootRarity: "Medium (AFG)", boss: false, coord: "C1" },
    { name: "Fort Narith", faction: "Crimson", lootRarity: "Ultra (DDM4)", boss: true, coord: "B3" },
    { name: "Midnight Sapphire", faction: "Mithras", lootRarity: "Rare NVGs", boss: false, coord: "A3" },
    { name: "FN MSR Peak", faction: "Lamang", lootRarity: "Legendary", boss: true, coord: "C3" }
];

let currentMapFilter = "all";
function renderMap() {
    const mapCanvas = document.getElementById("tacticalMap");
    if (!mapCanvas) return;
    let filtered = mapZones;
    let html = `<div style="grid-column:1/-1; text-align:center; font-size:0.8rem;">LAMANG ISLAND — TACTICAL OVERLAY</div>`;
    mapZones.forEach(zone => {
        let extraClass = "";
        if (currentMapFilter === "faction") extraClass = "highlight-faction";
        else if (currentMapFilter === "loot") extraClass = "highlight-loot";
        else if (currentMapFilter === "boss" && zone.boss) extraClass = "highlight-boss";
        else if (currentMapFilter === "boss" && !zone.boss) extraClass = "";
        else if (currentMapFilter !== "all" && currentMapFilter !== "boss") extraClass = "";
        html += `<div class="map-zone ${extraClass}">
                    <strong>${zone.name}</strong><br>
                    🏴 ${zone.faction}<br>
                    💎 ${zone.lootRarity} ${zone.boss ? '⚠️BOSS' : ''}
                </div>`;
    });
    mapCanvas.innerHTML = html;
    const legendDiv = document.getElementById("mapLegend");
    if (legendDiv) legendDiv.innerHTML = `<span>🔵 Normal Zone</span> <span>🟣 Faction Highlight</span> <span>🟡 High Loot</span> <span>🔴 Boss Area</span>`;
}

// ----- PRO BUILDS LIST -----
function renderProBuilds() {
    const proContainer = document.getElementById("proBuildsList");
    if (proContainer) {
        proContainer.innerHTML = `<div class="card" style="background:#0a1118;"><strong>🏅 PRO META:</strong> DDM4 Elite + 20" Barrel + RIS II + Suppressor. Acc:92% Recoil:88% Price:~44k<br>
        <strong>🔥 POPULAR:</strong> M4 Standard + Angled Grip + ACOG. Budget friendly, high versatility.<br>
        <strong>🎯 CQB BUILD:</strong> Short barrel + Red Dot + Vertical Grip (customizable in CUSTOM tab)</div>`;
    }
}

// Eventos e inicialización
document.addEventListener("DOMContentLoaded", () => {
    renderGeneralInfo();
    renderProBuilds();
    loadBuild("pro");
    renderMap();

    // TABS
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
        });
    });

    // Build selector events
    document.querySelector('.preset-meta')?.addEventListener('click', () => loadBuild("pro"));
    document.querySelector('.preset-popular')?.addEventListener('click', () => loadBuild("popular"));
    document.querySelector('.preset-custom')?.addEventListener('click', () => loadBuild("custom"));
    document.getElementById('saveCustomWeapon')?.addEventListener('click', () => {
        if (currentBuildType === "custom") {
            localStorage.setItem("gzw_custom_build", JSON.stringify(customBuild));
            document.getElementById("buildFeedback").innerHTML = "💾 Custom build saved!";
        } else {
            document.getElementById("buildFeedback").innerHTML = "⛔ Enter CUSTOM BUILD to save.";
        }
        setTimeout(() => document.getElementById("buildFeedback").innerHTML = "", 2000);
    });

    // Map filters
    document.querySelectorAll('.map-filter').forEach(f => {
        f.addEventListener('click', (e) => {
            currentMapFilter = e.target.dataset.filter;
            document.querySelectorAll('.map-filter').forEach(mf => mf.classList.remove('active-map-filter'));
            e.target.classList.add('active-map-filter');
            renderMap();
        });
    });
});
