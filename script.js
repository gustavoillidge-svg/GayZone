// ========== COMPLETE WEAPONS DATABASE (12 WEAPONS - ALL GUNS) ==========
const weapons = [
    { id: "m4", name: "M4 SOPMOD Block II", price: 39800, drop: 8.3, dmg: 42, recoil: 68, ergo: 72, caliber: "5.56x45" },
    { id: "ak12", name: "AK-12", price: 17900, drop: 22.0, dmg: 48, recoil: 74, ergo: 61, caliber: "7.62x39" },
    { id: "ddm4", name: "DDM4 (Rare)", price: 51200, drop: 3.5, dmg: 46, recoil: 65, ergo: 78, caliber: "5.56x45" },
    { id: "mpx", name: "MPX SMG", price: 26400, drop: 11.2, dmg: 34, recoil: 45, ergo: 85, caliber: "9x19" },
    { id: "scar", name: "SCAR-H", price: 45200, drop: 5.1, dmg: 58, recoil: 82, ergo: 58, caliber: "7.62x51" },
    { id: "hk416", name: "HK416 A5", price: 47500, drop: 4.2, dmg: 44, recoil: 64, ergo: 75, caliber: "5.56x45" },
    { id: "mdr", name: "MDR", price: 48900, drop: 3.9, dmg: 52, recoil: 70, ergo: 68, caliber: "7.62x51" },
    { id: "aug", name: "Steyr AUG", price: 31200, drop: 9.5, dmg: 43, recoil: 66, ergo: 74, caliber: "5.56x45" },
    { id: "vector", name: "KRISS Vector", price: 39800, drop: 6.7, dmg: 36, recoil: 42, ergo: 82, caliber: ".45 ACP" },
    { id: "famas", name: "FAMAS F1", price: 43500, drop: 4.8, dmg: 45, recoil: 69, ergo: 70, caliber: "5.56x45" },
    { id: "g36", name: "H&K G36C", price: 36700, drop: 7.2, dmg: 41, recoil: 67, ergo: 73, caliber: "5.56x45" },
    { id: "asval", name: "AS VAL", price: 48900, drop: 2.8, dmg: 52, recoil: 58, ergo: 66, caliber: "9x39" }
];

// ========== COMPLETE ATTACHMENTS DATABASE (ALL PARTS FOR EVERY WEAPON) ==========
const attachments = {
    optic: [
        { name: "EOTech EXPS3", price: 8700, drop: 18.2, recoil: -2, ergo: 3, tier: "pro", desc: "Holographic sight, best for CQB" },
        { name: "Vortex Razor HD Gen III", price: 14200, drop: 7.4, recoil: -5, ergo: 2, tier: "pro", desc: "1-10x LPVO, maximum versatility" },
        { name: "Trijicon ACOG TA31", price: 9900, drop: 9.1, recoil: -2, ergo: 1, tier: "popular", desc: "4x ACOG, battle proven" },
        { name: "Aimpoint T2", price: 7800, drop: 12.5, recoil: -1, ergo: 2, tier: "pro", desc: "Micro red dot, lightweight" },
        { name: "Kobra Red Dot", price: 3100, drop: 25, recoil: -1, ergo: 1, tier: "popular", desc: "Budget Russian optic" },
        { name: "Holosun HS510C", price: 5200, drop: 15.3, recoil: -1, ergo: 2, tier: "custom", desc: "Solar failsafe, shake awake" },
        { name: "Leupold HAMR", price: 12300, drop: 5.2, recoil: -3, ergo: 1, tier: "pro", desc: "Hybrid sight with backup red dot" }
    ],
    muzzle: [
        { name: "Raptor 556 SD Suppressor", price: 14300, drop: 4.2, recoil: -12, ergo: -2, tier: "pro", desc: "Best sound suppression" },
        { name: "SureFire WarComp", price: 5200, drop: 12.8, recoil: -6, ergo: 0, tier: "popular", desc: "Compensator + flash hider" },
        { name: "ASR Brake", price: 3800, drop: 15, recoil: -4, ergo: 0, tier: "popular", desc: "Effective muzzle brake" },
        { name: "SRVV Jet Brake", price: 6800, drop: 8.5, recoil: -8, ergo: -1, tier: "pro", desc: "Maximum recoil reduction" },
        { name: "PBS-1 Suppressor", price: 9800, drop: 3.5, recoil: -10, ergo: -3, tier: "pro", desc: "Eastern bloc suppressor" },
        { name: "Flash Hider", price: 1200, drop: 35, recoil: -2, ergo: 0, tier: "custom", desc: "Standard flash hider" },
        { name: "Bipod Muzzle Brake", price: 4200, drop: 10.2, recoil: -7, ergo: -2, tier: "custom", desc: "Integrated bipod mount" }
    ],
    grip: [
        { name: "AFG Angled Grip", price: 4200, drop: 22, recoil: -5, ergo: 4, tier: "pro", desc: "Natural wrist angle" },
        { name: "RVG Vertical Grip", price: 2800, drop: 28, recoil: -4, ergo: 2, tier: "popular", desc: "Traditional vertical grip" },
        { name: "EMOD Grip", price: 3900, drop: 11, recoil: -5, ergo: 3, tier: "pro", desc: "Storage compartment" },
        { name: "BCM Gunfighter", price: 2300, drop: 19, recoil: -3, ergo: 0, tier: "custom", desc: "Skeletonized, lightweight" },
        { name: "Magpul MIAD", price: 1850, drop: 31, recoil: 0, ergo: 2, tier: "popular", desc: "Customizable grip" },
        { name: "RK-3 Tactical", price: 3500, drop: 14, recoil: -4, ergo: 3, tier: "pro", desc: "Zenitco, best for AK" },
        { name: "Fortis Shift", price: 3100, drop: 16, recoil: -3, ergo: 2, tier: "custom", desc: "Angled vertical hybrid" }
    ],
    stock: [
        { name: "Magpul CTR", price: 5600, drop: 12, recoil: -3, ergo: 6, tier: "pro", desc: "Friction lock, battery storage" },
        { name: "UBR Gen2", price: 7200, drop: 6.5, recoil: -5, ergo: 4, tier: "pro", desc: "Ultra stable, A5 buffer" },
        { name: "Skeleton Stock", price: 3400, drop: 14, recoil: -2, ergo: 5, tier: "custom", desc: "Very lightweight" },
        { name: "Standard Stock", price: 0, drop: 85, recoil: 0, ergo: 0, tier: "popular", desc: "Factory standard" },
        { name: "PRS Gen3", price: 8900, drop: 4.2, recoil: -6, ergo: 3, tier: "pro", desc: "Precision adjustable stock" },
        { name: "MOE SL", price: 4200, drop: 18, recoil: -2, ergo: 4, tier: "popular", desc: "Slim line, reduced snag" },
        { name: "Zhukov-S", price: 5100, drop: 9.8, recoil: -4, ergo: 5, tier: "pro", desc: "Folding AK stock" }
    ],
    magazine: [
        { name: "PMAG 30", price: 1200, drop: 38, recoil: 0, ergo: 1, tier: "popular", desc: "Standard 30-round polymer" },
        { name: "Drum Mag 60", price: 3400, drop: 7.8, recoil: 0, ergo: -3, tier: "custom", desc: "60-round drum, heavy" },
        { name: "Lancer L5", price: 1800, drop: 22, recoil: 0, ergo: 0, tier: "pro", desc: "Translucent, steel feed lips" },
        { name: "SureFeed E2", price: 1500, drop: 25, recoil: 0, ergo: 1, tier: "popular", desc: "Anti-tilt follower" },
        { name: "40-Round PMAG", price: 1900, drop: 15, recoil: 0, ergo: -1, tier: "custom", desc: "Extended capacity" },
        { name: "HK Steel 30", price: 2200, drop: 12, recoil: 0, ergo: 0, tier: "pro", desc: "German steel, very durable" }
    ]
};

// ========== COMPLETE LOOT DATABASE (40+ items) ==========
const lootDatabase = [
    // YBL-1
    { name: "M4 SOPMOD Block II", zone: "ybl", category: "Weapon", dropRate: 8.3, price: 39800, loc: "YBL-1 Bunker" },
    { name: "RPC Carrier", zone: "ybl", category: "Armor", dropRate: 7.2, price: 28500, loc: "YBL-1 Bunker" },
    { name: "M855A1 Ammo", zone: "ybl", category: "Ammo", dropRate: 27.5, price: 3400, loc: "YBL-1 Bunker" },
    { name: "RVG Vertical Grip", zone: "ybl", category: "Grip", dropRate: 28.0, price: 2800, loc: "YBL-1" },
    // Tiger Bay
    { name: "Ops-Core FAST Helmet", zone: "tiger", category: "Helmet", dropRate: 6.8, price: 22300, loc: "Tiger Bay Marina" },
    { name: "EOTech EXPS3", zone: "tiger", category: "Optic", dropRate: 18.2, price: 8700, loc: "Tiger Bay Marina" },
    { name: "JPC 2.0", zone: "tiger", category: "Armor", dropRate: 10.0, price: 18400, loc: "Tiger Bay Marina" },
    { name: "MPX SMG", zone: "tiger", category: "Weapon", dropRate: 11.2, price: 26400, loc: "Tiger Bay Marina" },
    // Ban Pa
    { name: "AFG Angled Grip", zone: "banpa", category: "Grip", dropRate: 22.0, price: 4200, loc: "Ban Pa" },
    { name: "AK-12", zone: "banpa", category: "Weapon", dropRate: 22.0, price: 17900, loc: "Ban Pa" },
    { name: "6B23 Armor", zone: "banpa", category: "Armor", dropRate: 12.0, price: 12000, loc: "Ban Pa" },
    { name: "Kobra Red Dot", zone: "banpa", category: "Optic", dropRate: 25.0, price: 3100, loc: "Ban Pa" },
    // Fort Narith
    { name: "DDM4 (Rare)", zone: "fort", category: "Weapon", dropRate: 3.5, price: 51200, loc: "Fort Narith" },
    { name: "SRVV Jet Brake", zone: "fort", category: "Muzzle", dropRate: 8.5, price: 6800, loc: "Fort Narith" },
    { name: "SCAR-H", zone: "fort", category: "Weapon", dropRate: 5.1, price: 45200, loc: "Fort Narith" },
    { name: "Drum Mag 60", zone: "fort", category: "Magazine", dropRate: 7.8, price: 3400, loc: "Fort Narith" },
    { name: "UBR Gen2 Stock", zone: "fort", category: "Stock", dropRate: 6.5, price: 7200, loc: "Fort Narith" },
    // Midnight Sapphire
    { name: "PVS-31 NVGs", zone: "midnight", category: "NVG", dropRate: 2.9, price: 32200, loc: "Midnight Sapphire" },
    { name: "Raptor 556 SD", zone: "midnight", category: "Muzzle", dropRate: 4.2, price: 14300, loc: "Midnight Sapphire" },
    { name: "GPNVG-18 Quad", zone: "midnight", category: "NVG", dropRate: 1.2, price: 54600, loc: "Midnight Sapphire" },
    { name: "Holosun HS510C", zone: "midnight", category: "Optic", dropRate: 15.3, price: 5200, loc: "Midnight Sapphire" },
    // Additional
    { name: "FAMAS F1", zone: "midnight", category: "Weapon", dropRate: 4.8, price: 43500, loc: "Midnight Sapphire" },
    { name: "H&K G36C", zone: "tiger", category: "Weapon", dropRate: 7.2, price: 36700, loc: "Tiger Bay" },
    { name: "AS VAL", zone: "fort", category: "Weapon", dropRate: 2.8, price: 48900, loc: "Fort Narith" },
    { name: "Trijicon ACOG", zone: "fort", category: "Optic", dropRate: 9.1, price: 9900, loc: "Fort Narith" },
    { name: "Aimpoint T2", zone: "tiger", category: "Optic", dropRate: 12.5, price: 7800, loc: "Tiger Bay" },
    { name: "Magpul CTR", zone: "banpa", category: "Stock", dropRate: 12.0, price: 5600, loc: "Ban Pa" },
    { name: "PBS-1 Suppressor", zone: "midnight", category: "Muzzle", dropRate: 3.5, price: 9800, loc: "Midnight Sapphire" },
    { name: "PMAG 30", zone: "ybl", category: "Magazine", dropRate: 38.0, price: 1200, loc: "YBL-1" },
    { name: "Lancer L5", zone: "tiger", category: "Magazine", dropRate: 22.0, price: 1800, loc: "Tiger Bay" },
    { name: "EMOD Grip", zone: "fort", category: "Grip", dropRate: 11.0, price: 3900, loc: "Fort Narith" },
    { name: "BCM Gunfighter", zone: "banpa", category: "Grip", dropRate: 19.0, price: 2300, loc: "Ban Pa" },
    { name: "Flash Hider", zone: "ybl", category: "Muzzle", dropRate: 35.0, price: 1200, loc: "YBL-1" }
];

// ========== ZONES ==========
const zones = {
    ybl: { name: "YBL-1 Bunker", faction: "Crimson/Mithras", coords: { x: 18, y: 22, w: 22, h: 12 } },
    tiger: { name: "Tiger Bay Marina", faction: "Lamang", coords: { x: 48, y: 38, w: 19, h: 10 } },
    banpa: { name: "Ban Pa Village", faction: "Mithras", coords: { x: 72, y: 52, w: 17, h: 10 } },
    fort: { name: "Fort Narith", faction: "Crimson", coords: { x: 12, y: 68, w: 20, h: 11 } },
    midnight: { name: "Midnight Sapphire", faction: "Elite Guard", coords: { x: 62, y: 78, w: 20, h: 10 } }
};

// ========== GEAR DATABASE ==========
const gear = [
    { name: "RPC Carrier", price: 28500, drop: 7.2, loc: "YBL-1 Bunker" },
    { name: "JPC 2.0", price: 18400, drop: 14.5, loc: "Ban Pa / Tiger Bay" },
    { name: "Ops-Core FAST", price: 22300, drop: 6.8, loc: "Midnight Sapphire" },
    { name: "PVS-31 NVGs", price: 32200, drop: 2.9, loc: "Night Boss" },
    { name: "GPNVG-18 Quad", price: 54600, drop: 1.2, loc: "Secret Bunker" },
    { name: "Raptor Suppressor", price: 14300, drop: 4.2, loc: "Midnight Sapphire" },
    { name: "AFG Angled Grip", price: 4200, drop: 22, loc: "Ban Pa" },
    { name: "M855A1 Ammo", price: 3400, drop: 27.5, loc: "YBL-1" }
];

// ========== STATE ==========
let currentMode = "pro";
let currentWeapon = weapons[0];
let customParts = { optic: null, muzzle: null, grip: null, stock: null, magazine: null };
let currentZoom = 1;

// ========== RENDER FUNCTIONS ==========
function renderGear() {
    const container = document.getElementById("gearGrid");
    if (!container) return;
    container.innerHTML = gear.map(g => `<div class="gear-item"><span class="gear-name">${g.name}</span><span class="gear-price">💰 $${g.price.toLocaleString()}</span><span class="gear-drop">🎲 ${g.drop}%</span><span class="gear-loc">📍 ${g.loc}</span></div>`).join("");
}

function renderWeapons() {
    const container = document.getElementById("weaponSelector");
    if (!container) return;
    container.innerHTML = weapons.map(w => `<button class="weapon-btn ${currentWeapon.id === w.id ? "active" : ""}" data-id="${w.id}">${w.name}</button>`).join("");
    document.querySelectorAll(".weapon-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            currentWeapon = weapons.find(w => w.id === btn.dataset.id) || weapons[0];
            renderWeapons();
            updateWeaponDetails();
            renderAttachments();
        });
    });
    updateWeaponDetails();
}

function updateWeaponDetails() {
    const container = document.getElementById("weaponDetails");
    if (container) {
        container.innerHTML = `<strong>${currentWeapon.name}</strong><br>🎯 Damage: ${currentWeapon.dmg} | 🔻 Recoil: ${currentWeapon.recoil} | 🧘 Ergo: ${currentWeapon.ergo}<br>💰 Base Price: $${currentWeapon.price.toLocaleString()} | 🎲 Drop Rate: ${currentWeapon.drop}% | 🔫 Caliber: ${currentWeapon.caliber}`;
    }
}

function getPartsByMode() {
    const parts = {};
    for (const [cat, items] of Object.entries(attachments)) {
        if (currentMode === "pro") parts[cat] = items.find(a => a.tier === "pro") || items[0];
        else if (currentMode === "popular") parts[cat] = items.find(a => a.tier === "popular") || items[0];
        else parts[cat] = customParts[cat];
    }
    return parts;
}

function renderAttachments() {
    const container = document.getElementById("attachmentSlots");
    if (!container) return;
    if (currentMode === "custom") {
        let html = "";
        for (const [cat, items] of Object.entries(attachments)) {
            const selected = customParts[cat]?.name || "";
            html += `<div class="attachment-slot"><label>${cat.toUpperCase()}</label><select class="attachment-select" data-cat="${cat}"><option value="">-- None --</option>${items.map(a => `<option value="${a.name}" ${selected === a.name ? "selected" : ""}>${a.name} | Recoil:${a.recoil} Ergo:${a.ergo} | $${a.price}</option>`).join("")}</select></div>`;
        }
        container.innerHTML = html;
        document.querySelectorAll(".attachment-select").forEach(select => {
            select.addEventListener("change", (e) => {
                const cat = select.dataset.cat;
                const name = select.value;
                customParts[cat] = name ? attachments[cat].find(a => a.name === name) : null;
                updateBuildStats();
            });
        });
        updateBuildStats();
    } else {
        const parts = getPartsByMode();
        let html = `<div style="display: flex; flex-wrap: wrap; gap: 0.8rem;">`;
        for (const [cat, part] of Object.entries(parts)) {
            if (part) html += `<div class="attachment-slot" style="flex:1; min-width:120px;"><label>${cat}</label><div style="font-weight:500;">${part.name}</div><div style="font-size:0.7rem;">💰 $${part.price} | 🎲 ${part.drop}%</div></div>`;
        }
        html += `</div>`;
        container.innerHTML = html;
        updateBuildStats();
    }
}

function updateBuildStats() {
    let totalRecoil = currentWeapon.recoil;
    let totalErgo = currentWeapon.ergo;
    let totalPrice = currentWeapon.price;
    const partsUsed = [];
    if (currentMode === "pro" || currentMode === "popular") {
        const parts = getPartsByMode();
        for (const part of Object.values(parts)) {
            if (part) {
                totalRecoil += part.recoil || 0;
                totalErgo += part.ergo || 0;
                totalPrice += part.price;
                partsUsed.push(part.name);
            }
        }
    } else {
        for (const part of Object.values(customParts)) {
            if (part) {
                totalRecoil += part.recoil || 0;
                totalErgo += part.ergo || 0;
                totalPrice += part.price;
                partsUsed.push(part.name);
            }
        }
    }
    const container = document.getElementById("buildResult");
    if (container) {
        container.innerHTML = `<strong>⚙️ BUILD STATISTICS</strong><br>🔻 Recoil: ${totalRecoil}<br>🧘 Ergonomics: ${totalErgo}<br>💰 Cost: $${totalPrice.toLocaleString()}<br>🧩 Parts: ${partsUsed.length ? partsUsed.join(", ") : "Standard"}<br>🎯 Drop Rate: ${currentWeapon.drop}%`;
    }
}

// ========== MAP FUNCTIONS ==========
function highlightZone(zoneKey) {
    const highlighter = document.getElementById("mapHighlighter");
    const zone = zones[zoneKey];
    const details = document.getElementById("zoneDetails");
    if (!zone || !highlighter) return;
    const c = zone.coords;
    highlighter.innerHTML = `<div style="position:absolute; left:${c.x}%; top:${c.y}%; width:${c.w}%; height:${c.h}%; background:rgba(255,255,255,0.35); border:3px solid #fff; border-radius:12px; box-shadow:0 0 30px rgba(255,255,255,0.8);"></div>`;
    const zoneLoot = lootDatabase.filter(l => l.zone === zoneKey);
    details.innerHTML = `<strong>📍 ${zone.name}</strong><br>🚩 Faction: ${zone.faction}<br>🎁 Loot (${zoneLoot.length} items): ${zoneLoot.slice(0,5).map(l => l.name).join(", ")}${zoneLoot.length > 5 ? "..." : ""}<br>✨ Click loot sidebar for details`;
}

function setZoom(zoomLevel) {
    currentZoom = Math.min(2.5, Math.max(1, zoomLevel));
    const container = document.getElementById("zoomContainer");
    const slider = document.getElementById("zoomSlider");
    const zoomValue = document.getElementById("zoomValue");
    if (container) {
        container.style.transform = `scale(${currentZoom})`;
        container.style.transformOrigin = "center center";
    }
    if (slider) slider.value = currentZoom;
    if (zoomValue) zoomValue.textContent = `${Math.round(currentZoom * 100)}%`;
}

function resetMapView() { setZoom(1); }

// ========== LOOT SIDEBAR ==========
let currentCategory = "all";
let searchTerm = "";

function renderLootList() {
    const container = document.getElementById("lootList");
    if (!container) return;
    let filtered = lootDatabase.filter(l => (currentCategory === "all" || l.category === currentCategory) && (l.name.toLowerCase().includes(searchTerm.toLowerCase())));
    document.getElementById("lootCount").textContent = `${filtered.length} items`;
    container.innerHTML = filtered.map(loot => `<div class="loot-item" data-zone="${loot.zone}"><div class="loot-name"><span>${loot.name}</span><span class="loot-price">💰 $${loot.price.toLocaleString()}</span></div><div class="loot-details"><span class="loot-drop">🎲 ${loot.dropRate}%</span><span>📍 ${loot.loc}</span><span>🏷️ ${loot.category}</span></div></div>`).join("");
    document.querySelectorAll(".loot-item").forEach(item => {
        item.addEventListener("click", () => {
            document.querySelectorAll(".loot-item").forEach(i => i.classList.remove("selected"));
            item.classList.add("selected");
            highlightZone(item.dataset.zone);
            const loot = lootDatabase.find(l => l.name === item.querySelector(".loot-name span:first-child")?.innerText);
            if (loot) document.getElementById("zoneDetails").innerHTML = `<strong>🔫 ${loot.name}</strong><br>📍 ${loot.loc}<br>🎲 Drop: ${loot.dropRate}%<br>💰 Value: $${loot.price.toLocaleString()}<br>🏷️ ${loot.category}`;
        });
    });
}

function renderCategories() {
    const container = document.getElementById("lootCategories");
    if (!container) return;
    const categories = ["all", ...new Set(lootDatabase.map(l => l.category))];
    container.innerHTML = categories.map(cat => `<button class="category-chip ${currentCategory === cat ? "active" : ""}" data-category="${cat}">${cat === "all" ? "📦 ALL" : cat}</button>`).join("");
    document.querySelectorAll(".category-chip").forEach(btn => {
        btn.addEventListener("click", () => {
            currentCategory = btn.dataset.category;
            renderCategories();
            renderLootList();
        });
    });
}

// ========== TABS AND INIT ==========
function initTabs() {
    const tabs = document.querySelectorAll(".nav-item");
    const pages = { welcome: document.getElementById("welcome"), builder: document.getElementById("builder"), map: document.getElementById("map") };
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            Object.values(pages).forEach(p => p.classList.remove("active"));
            if (pages[target]) pages[target].classList.add("active");
            if (target === "builder") { renderWeapons(); renderAttachments(); }
            if (target === "map") { renderLootList(); renderCategories(); }
        });
    });
}

function initModes() {
    document.querySelectorAll(".mode-pill").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".mode-pill").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentMode = btn.dataset.mode;
            customParts = { optic: null, muzzle: null, grip: null, stock: null, magazine: null };
            renderAttachments();
        });
    });
}

function initMapControls() {
    document.getElementById("zoomInBtn")?.addEventListener("click", () => setZoom(currentZoom + 0.1));
    document.getElementById("zoomOutBtn")?.addEventListener("click", () => setZoom(currentZoom - 0.1));
    document.getElementById("resetViewBtn")?.addEventListener("click", resetMapView);
    document.getElementById("zoomSlider")?.addEventListener("input", (e) => setZoom(parseFloat(e.target.value)));
    document.getElementById("lootSearch")?.addEventListener("input", (e) => { searchTerm = e.target.value; renderLootList(); });
}

document.addEventListener("DOMContentLoaded", () => {
    renderGear();
    renderWeapons();
    renderAttachments();
    renderLootList();
    renderCategories();
    initTabs();
    initModes();
    initMapControls();
    setZoom(1);
});
