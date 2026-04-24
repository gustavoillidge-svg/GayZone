// ========== WEAPONS DATABASE (ALL 9 WEAPONS) ==========
const weapons = [
    { id: "m4", name: "M4 SOPMOD Block II", price: 39800, drop: 8.3, dmg: 42, recoil: 68, ergo: 72 },
    { id: "ak12", name: "AK-12", price: 17900, drop: 22.0, dmg: 48, recoil: 74, ergo: 61 },
    { id: "ddm4", name: "DDM4 (Rare)", price: 51200, drop: 3.5, dmg: 46, recoil: 65, ergo: 78 },
    { id: "mpx", name: "MPX SMG", price: 26400, drop: 11.2, dmg: 34, recoil: 45, ergo: 85 },
    { id: "scar", name: "SCAR-H", price: 45200, drop: 5.1, dmg: 58, recoil: 82, ergo: 58 },
    { id: "hk416", name: "HK416 A5", price: 47500, drop: 4.2, dmg: 44, recoil: 64, ergo: 75 },
    { id: "mdr", name: "MDR", price: 48900, drop: 3.9, dmg: 52, recoil: 70, ergo: 68 },
    { id: "aug", name: "Steyr AUG", price: 31200, drop: 9.5, dmg: 43, recoil: 66, ergo: 74 },
    { id: "vector", name: "KRISS Vector", price: 39800, drop: 6.7, dmg: 36, recoil: 42, ergo: 82 }
];

// ========== ATTACHMENTS DATABASE (ALL PARTS) ==========
const attachments = {
    optic: [
        { name: "EOTech EXPS3", price: 8700, drop: 18.2, recoil: -2, ergo: 3, type: "pro" },
        { name: "Vortex Razor HD", price: 14200, drop: 7.4, recoil: -5, ergo: 2, type: "pro" },
        { name: "Trijicon ACOG", price: 9900, drop: 9.1, recoil: -2, ergo: 1, type: "popular" },
        { name: "Kobra Red Dot", price: 3100, drop: 25, recoil: -1, ergo: 1, type: "popular" },
        { name: "Holosun HS510C", price: 5200, drop: 15.3, recoil: -1, ergo: 2, type: "custom" }
    ],
    muzzle: [
        { name: "Raptor 556 SD", price: 14300, drop: 4.2, recoil: -12, ergo: -2, type: "pro" },
        { name: "SureFire WarComp", price: 5200, drop: 12.8, recoil: -6, ergo: 0, type: "popular" },
        { name: "ASR Brake", price: 3800, drop: 15, recoil: -4, ergo: 0, type: "popular" },
        { name: "SRVV Jet Brake", price: 6800, drop: 8.5, recoil: -8, ergo: -1, type: "pro" },
        { name: "Flash Hider", price: 1200, drop: 35, recoil: -2, ergo: 0, type: "custom" }
    ],
    grip: [
        { name: "AFG Angled", price: 4200, drop: 22, recoil: -5, ergo: 4, type: "pro" },
        { name: "RVG Vertical", price: 2800, drop: 28, recoil: -4, ergo: 2, type: "popular" },
        { name: "EMOD Grip", price: 3900, drop: 11, recoil: -5, ergo: 3, type: "pro" },
        { name: "BCM Gunfighter", price: 2300, drop: 19, recoil: -3, ergo: 0, type: "custom" }
    ],
    stock: [
        { name: "Magpul CTR", price: 5600, drop: 12, recoil: -3, ergo: 6, type: "pro" },
        { name: "UBR Gen2", price: 7200, drop: 6.5, recoil: -5, ergo: 4, type: "pro" },
        { name: "Skeleton Stock", price: 3400, drop: 14, recoil: -2, ergo: 5, type: "custom" },
        { name: "Standard Stock", price: 0, drop: 85, recoil: 0, ergo: 0, type: "popular" }
    ],
    mag: [
        { name: "PMAG 30", price: 1200, drop: 38, recoil: 0, ergo: 1, type: "popular" },
        { name: "Drum Mag 60", price: 3400, drop: 7.8, recoil: 0, ergo: -3, type: "custom" },
        { name: "Lancer L5", price: 1800, drop: 22, recoil: 0, ergo: 0, type: "pro" }
    ]
};

// ========== GEAR DATABASE ==========
const gear = [
    { name: "RPC Carrier", price: 28500, drop: 7.2, loc: "YBL-1 Bunker" },
    { name: "JPC 2.0", price: 18400, drop: 14.5, loc: "Ban Pa/Tiger Bay" },
    { name: "Ops-Core FAST", price: 22300, drop: 6.8, loc: "Midnight Sapphire" },
    { name: "PVS-31 NVGs", price: 32200, drop: 2.9, loc: "Night Boss" },
    { name: "Raptor Suppressor", price: 14300, drop: 4.2, loc: "Midnight Sapphire" },
    { name: "AFG Grip", price: 4200, drop: 22, loc: "Ban Pa" }
];

// ========== ZONES DATA ==========
const zones = {
    ybl: { name: "YBL-1 Bunker", faction: "Crimson/Mithras", loot: "M4 SOPMOD (8.3%), RPC (7.2%), M855A1 (27%)", coords: { x: 18, y: 22, w: 22, h: 12 } },
    tiger: { name: "Tiger Bay Marina", faction: "Lamang", loot: "Ops-Core FAST (6%), EOTech (18%), JPC 2.0 (10%)", coords: { x: 48, y: 38, w: 19, h: 10 } },
    banpa: { name: "Ban Pa", faction: "Mithras", loot: "AFG Grip (22%), AK-12 (22%), JPC 2.0 (14.5%)", coords: { x: 72, y: 52, w: 17, h: 10 } },
    fort: { name: "Fort Narith", faction: "Crimson", loot: "DDM4 (3.5%), SRVV Brake (8.5%), Repair Kits", coords: { x: 12, y: 68, w: 20, h: 11 } },
    midnight: { name: "Midnight Sapphire", faction: "Elite Guard", loot: "NVGs (2.9%), Raptor Suppressor (4.2%), GPNVG (1.2%)", coords: { x: 62, y: 78, w: 20, h: 10 } }
};

// ========== STATE ==========
let currentMode = "pro";
let currentWeapon = weapons[0];
let customParts = { optic: null, muzzle: null, grip: null, stock: null, mag: null };

// ========== RENDER GEAR TABLE ==========
function renderGear() {
    const container = document.getElementById("gearTable");
    if (!container) return;
    container.innerHTML = gear.map(g => `
        <div class="gear-item">
            <span class="gear-name">${g.name}</span>
            <span class="gear-price">$${g.price.toLocaleString()}</span>
            <span class="gear-drop">${g.drop}%</span>
            <span class="gear-loc">📍 ${g.loc}</span>
        </div>
    `).join("");
}

// ========== RENDER WEAPON LIST ==========
function renderWeaponList() {
    const container = document.getElementById("weaponList");
    if (!container) return;
    container.innerHTML = weapons.map(w => `
        <button class="weapon-btn ${currentWeapon.id === w.id ? "active" : ""}" data-id="${w.id}">
            ${w.name}
        </button>
    `).join("");
    
    document.querySelectorAll(".weapon-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            currentWeapon = weapons.find(w => w.id === id) || weapons[0];
            renderWeaponList();
            updateWeaponStats();
            renderParts();
        });
    });
    updateWeaponStats();
}

function updateWeaponStats() {
    const container = document.getElementById("weaponStats");
    if (container) {
        container.innerHTML = `
            <strong>${currentWeapon.name}</strong><br>
            🎯 DMG: ${currentWeapon.dmg} | 🔻 Recoil: ${currentWeapon.recoil} | 🧘 Ergo: ${currentWeapon.ergo}<br>
            💰 $${currentWeapon.price.toLocaleString()} | 🎲 ${currentWeapon.drop}% drop rate
        `;
    }
}

// ========== GET ATTACHMENTS BY MODE ==========
function getAttachmentsByMode() {
    const result = {};
    for (const [cat, items] of Object.entries(attachments)) {
        if (currentMode === "pro") {
            result[cat] = items.filter(a => a.type === "pro")[0] || items[0];
        } else if (currentMode === "popular") {
            result[cat] = items.filter(a => a.type === "popular")[0] || items[0];
        } else {
            result[cat] = customParts[cat] || null;
        }
    }
    return result;
}

// ========== RENDER PARTS ==========
function renderParts() {
    const container = document.getElementById("partsContainer");
    if (!container) return;
    
    if (currentMode === "custom") {
        let html = "";
        for (const [cat, items] of Object.entries(attachments)) {
            const selected = customParts[cat]?.name || "";
            html += `
                <div class="part-group">
                    <label>${cat.toUpperCase()}</label>
                    <select class="part-select" data-cat="${cat}">
                        <option value="">-- None --</option>
                        ${items.map(a => `<option value="${a.name}" ${selected === a.name ? "selected" : ""}>${a.name} | Recoil:${a.recoil} Ergo:${a.ergo} | $${a.price} (${a.drop}%)</option>`).join("")}
                    </select>
                </div>
            `;
        }
        container.innerHTML = html;
        
        document.querySelectorAll(".part-select").forEach(select => {
            select.addEventListener("change", (e) => {
                const cat = select.dataset.cat;
                const name = select.value;
                if (name && attachments[cat]) {
                    customParts[cat] = attachments[cat].find(a => a.name === name);
                } else {
                    customParts[cat] = null;
                }
                updateBuildStats();
            });
        });
    } else {
        const parts = getAttachmentsByMode();
        let html = '<div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">';
        for (const [cat, part] of Object.entries(parts)) {
            if (part) {
                html += `
                    <div class="part-group" style="flex: 1; min-width: 100px;">
                        <label>${cat}</label>
                        <div style="margin-top: 6px; font-weight: 500;">${part.name}</div>
                        <div class="stats-preview" style="margin-top: 4px; font-size: 0.7rem;">💰 $${part.price} | 🎲 ${part.drop}%</div>
                    </div>
                `;
            }
        }
        html += '</div>';
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
        const parts = getAttachmentsByMode();
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
    
    const container = document.getElementById("buildStats");
    if (container) {
        container.innerHTML = `
            <strong>⚙️ Build Statistics</strong><br>
            🔻 Total Recoil: ${totalRecoil}<br>
            🧘 Total Ergonomics: ${totalErgo}<br>
            💰 Total Cost: $${totalPrice.toLocaleString()}<br>
            🧩 Attachments: ${partsUsed.length ? partsUsed.join(", ") : "Standard configuration"}<br>
            🎯 Weapon Drop Rate: ${currentWeapon.drop}% (high-tier crates)
        `;
    }
}

// ========== MAP ZONES ==========
function initMap() {
    const buttons = document.querySelectorAll(".zone-btn");
    const overlay = document.getElementById("mapOverlay");
    const info = document.getElementById("zoneInfo");
    
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const zoneId = btn.dataset.zone;
            const zone = zones[zoneId];
            
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            if (zone && overlay) {
                info.innerHTML = `
                    <strong>📍 ${zone.name}</strong><br>
                    🚩 Faction: ${zone.faction}<br>
                    🎁 Loot: ${zone.loot}<br>
                    ✨ Recommended: Night raids for higher spawns
                `;
                
                const c = zone.coords;
                overlay.innerHTML = `
                    <div style="position: absolute; left: ${c.x}%; top: ${c.y}%; width: ${c.w}%; height: ${c.h}%; 
                                background: rgba(255, 255, 255, 0.15); border: 2px solid #fff; 
                                border-radius: 12px; box-shadow: 0 0 20px rgba(255,255,255,0.5);">
                    </div>
                `;
            }
        });
    });
}

// ========== TABS ==========
function initTabs() {
    const tabs = document.querySelectorAll(".nav-tab");
    const contents = {
        welcome: document.getElementById("welcome"),
        builder: document.getElementById("builder"),
        map: document.getElementById("map")
    };
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            Object.values(contents).forEach(c => c.classList.remove("active"));
            if (contents[target]) contents[target].classList.add("active");
        });
    });
}

// ========== BUILD MODES ==========
function initModes() {
    const modes = document.querySelectorAll(".mode-btn");
    modes.forEach(btn => {
        btn.addEventListener("click", () => {
            modes.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentMode = btn.dataset.mode;
            customParts = { optic: null, muzzle: null, grip: null, stock: null, mag: null };
            renderParts();
        });
    });
}

// ========== INIT ==========
document.addEventListener("DOMContentLoaded", () => {
    renderGear();
    renderWeaponList();
    renderParts();
    initTabs();
    initModes();
    initMap();
});
