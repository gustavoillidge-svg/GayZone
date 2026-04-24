// ========== WEAPONS DATABASE ==========
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

// ========== ATTACHMENTS DATABASE ==========
const attachments = {
    optic: [
        { name: "EOTech EXPS3", price: 8700, drop: 18.2, recoil: -2, ergo: 3, tier: "pro" },
        { name: "Vortex Razor HD", price: 14200, drop: 7.4, recoil: -5, ergo: 2, tier: "pro" },
        { name: "Trijicon ACOG", price: 9900, drop: 9.1, recoil: -2, ergo: 1, tier: "popular" },
        { name: "Kobra Red Dot", price: 3100, drop: 25, recoil: -1, ergo: 1, tier: "popular" },
        { name: "Holosun HS510C", price: 5200, drop: 15.3, recoil: -1, ergo: 2, tier: "custom" }
    ],
    muzzle: [
        { name: "Raptor 556 SD", price: 14300, drop: 4.2, recoil: -12, ergo: -2, tier: "pro" },
        { name: "SureFire WarComp", price: 5200, drop: 12.8, recoil: -6, ergo: 0, tier: "popular" },
        { name: "ASR Brake", price: 3800, drop: 15, recoil: -4, ergo: 0, tier: "popular" },
        { name: "SRVV Jet Brake", price: 6800, drop: 8.5, recoil: -8, ergo: -1, tier: "pro" },
        { name: "Flash Hider", price: 1200, drop: 35, recoil: -2, ergo: 0, tier: "custom" }
    ],
    grip: [
        { name: "AFG Angled", price: 4200, drop: 22, recoil: -5, ergo: 4, tier: "pro" },
        { name: "RVG Vertical", price: 2800, drop: 28, recoil: -4, ergo: 2, tier: "popular" },
        { name: "EMOD Grip", price: 3900, drop: 11, recoil: -5, ergo: 3, tier: "pro" },
        { name: "BCM Gunfighter", price: 2300, drop: 19, recoil: -3, ergo: 0, tier: "custom" }
    ],
    stock: [
        { name: "Magpul CTR", price: 5600, drop: 12, recoil: -3, ergo: 6, tier: "pro" },
        { name: "UBR Gen2", price: 7200, drop: 6.5, recoil: -5, ergo: 4, tier: "pro" },
        { name: "Skeleton Stock", price: 3400, drop: 14, recoil: -2, ergo: 5, tier: "custom" },
        { name: "Standard Stock", price: 0, drop: 85, recoil: 0, ergo: 0, tier: "popular" }
    ],
    mag: [
        { name: "PMAG 30", price: 1200, drop: 38, recoil: 0, ergo: 1, tier: "popular" },
        { name: "Drum Mag 60", price: 3400, drop: 7.8, recoil: 0, ergo: -3, tier: "custom" },
        { name: "Lancer L5", price: 1800, drop: 22, recoil: 0, ergo: 0, tier: "pro" }
    ]
};

// ========== COMPLETE LOOT DATABASE (TODO el loot del juego) ==========
const lootDatabase = [
    // YBL-1 Bunker
    { name: "M4 SOPMOD Block II", zone: "ybl", category: "Weapon", dropRate: 8.3, price: 39800, loc: "YBL-1 Bunker" },
    { name: "RPC Carrier", zone: "ybl", category: "Armor", dropRate: 7.2, price: 28500, loc: "YBL-1 Bunker" },
    { name: "M855A1 Ammo (60rd)", zone: "ybl", category: "Ammo", dropRate: 27.5, price: 3400, loc: "YBL-1 Bunker" },
    { name: "AK-12", zone: "ybl", category: "Weapon", dropRate: 15.0, price: 17900, loc: "YBL-1 Bunker" },
    
    // Tiger Bay Marina
    { name: "Ops-Core FAST Helmet", zone: "tiger", category: "Helmet", dropRate: 6.8, price: 22300, loc: "Tiger Bay Marina" },
    { name: "EOTech EXPS3", zone: "tiger", category: "Optic", dropRate: 18.2, price: 8700, loc: "Tiger Bay Marina" },
    { name: "JPC 2.0", zone: "tiger", category: "Armor", dropRate: 10.0, price: 18400, loc: "Tiger Bay Marina" },
    { name: "MPX SMG", zone: "tiger", category: "Weapon", dropRate: 11.2, price: 26400, loc: "Tiger Bay Marina" },
    
    // Ban Pa
    { name: "AFG Angled Grip", zone: "banpa", category: "Grip", dropRate: 22.0, price: 4200, loc: "Ban Pa" },
    { name: "AK-12", zone: "banpa", category: "Weapon", dropRate: 22.0, price: 17900, loc: "Ban Pa" },
    { name: "JPC 2.0", zone: "banpa", category: "Armor", dropRate: 14.5, price: 18400, loc: "Ban Pa" },
    { name: "Kobra Red Dot", zone: "banpa", category: "Optic", dropRate: 25.0, price: 3100, loc: "Ban Pa" },
    
    // Fort Narith
    { name: "DDM4 (Rare)", zone: "fort", category: "Weapon", dropRate: 3.5, price: 51200, loc: "Fort Narith" },
    { name: "SRVV Jet Brake", zone: "fort", category: "Muzzle", dropRate: 8.5, price: 6800, loc: "Fort Narith" },
    { name: "Repair Kit", zone: "fort", category: "Consumable", dropRate: 15.0, price: 5000, loc: "Fort Narith" },
    { name: "SCAR-H", zone: "fort", category: "Weapon", dropRate: 5.1, price: 45200, loc: "Fort Narith" },
    
    // Midnight Sapphire
    { name: "PVS-31 NVGs", zone: "midnight", category: "NVG", dropRate: 2.9, price: 32200, loc: "Midnight Sapphire" },
    { name: "Raptor 556 SD", zone: "midnight", category: "Muzzle", dropRate: 4.2, price: 14300, loc: "Midnight Sapphire" },
    { name: "GPNVG-18 Quad", zone: "midnight", category: "NVG", dropRate: 1.2, price: 54600, loc: "Midnight Sapphire" },
    { name: "Holosun HS510C", zone: "midnight", category: "Optic", dropRate: 15.3, price: 5200, loc: "Midnight Sapphire" },
    
    // Additional loot
    { name: "6B23 Armor", zone: "banpa", category: "Armor", dropRate: 12.0, price: 12000, loc: "Ban Pa" },
    { name: "Standard Flash Hider", zone: "tiger", category: "Muzzle", dropRate: 35.0, price: 1200, loc: "Tiger Bay" },
    { name: "RVG Vertical Grip", zone: "ybl", category: "Grip", dropRate: 28.0, price: 2800, loc: "YBL-1" },
    { name: "PMAG 30", zone: "tiger", category: "Magazine", dropRate: 38.0, price: 1200, loc: "Tiger Bay" },
    { name: "Drum Mag 60", zone: "fort", category: "Magazine", dropRate: 7.8, price: 3400, loc: "Fort Narith" },
    { name: "Magpul CTR Stock", zone: "midnight", category: "Stock", dropRate: 12.0, price: 5600, loc: "Midnight Sapphire" }
];

// ========== ZONES WITH COORDINATES ==========
const zones = {
    ybl: { name: "YBL-1 Bunker", faction: "Crimson/Mithras", coords: { x: 18, y: 22, w: 22, h: 12 } },
    tiger: { name: "Tiger Bay Marina", faction: "Lamang", coords: { x: 48, y: 38, w: 19, h: 10 } },
    banpa: { name: "Ban Pa Village", faction: "Mithras", coords: { x: 72, y: 52, w: 17, h: 10 } },
    fort: { name: "Fort Narith", faction: "Crimson", coords: { x: 12, y: 68, w: 20, h: 11 } },
    midnight: { name: "Midnight Sapphire", faction: "Elite Guard", coords: { x: 62, y: 78, w: 20, h: 10 } }
};

// ========== GEAR DATABASE (para welcome) ==========
const gear = [
    { name: "RPC Carrier", price: 28500, drop: 7.2, loc: "YBL-1 Bunker" },
    { name: "JPC 2.0 Plate Carrier", price: 18400, drop: 14.5, loc: "Ban Pa / Tiger Bay" },
    { name: "Ops-Core FAST Helmet", price: 22300, drop: 6.8, loc: "Midnight Sapphire" },
    { name: "PVS-31 NVGs", price: 32200, drop: 2.9, loc: "Night Boss" },
    { name: "GPNVG-18 Quad", price: 54600, drop: 1.2, loc: "Secret Bunker" },
    { name: "Raptor Suppressor", price: 14300, drop: 4.2, loc: "Midnight Sapphire" },
    { name: "AFG Angled Grip", price: 4200, drop: 22, loc: "Ban Pa" },
    { name: "M855A1 Ammo", price: 3400, drop: 27.5, loc: "YBL-1" },
    { name: "DDM4", price: 51200, drop: 3.5, loc: "Fort Narith" },
    { name: "SCAR-H", price: 45200, drop: 5.1, loc: "Fort Narith" }
];

// ========== STATE ==========
let currentMode = "pro";
let currentWeapon = weapons[0];
let customParts = { optic: null, muzzle: null, grip: null, stock: null, mag: null };
let currentZoom = 1;
let isDragging = false;
let dragStart = { x: 0, y: 0 };
let currentTranslate = { x: 0, y: 0 };
let currentHighlightedZone = null;
let currentSelectedLoot = null;

// ========== RENDER GEAR (welcome) ==========
function renderGear() {
    const container = document.getElementById("gearGrid");
    if (!container) return;
    container.innerHTML = gear.map(g => `
        <div class="gear-item">
            <span class="gear-name">${g.name}</span>
            <span class="gear-price">💰 $${g.price.toLocaleString()}</span>
            <span class="gear-drop">🎲 ${g.drop}%</span>
            <span class="gear-loc">📍 ${g.loc}</span>
        </div>
    `).join("");
}

// ========== RENDER WEAPONS ==========
function renderWeapons() {
    const container = document.getElementById("weaponSelector");
    if (!container) return;
    container.innerHTML = weapons.map(w => `
        <button class="weapon-btn ${currentWeapon.id === w.id ? "active" : ""}" data-id="${w.id}">
            ${w.name}
        </button>
    `).join("");
    
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
        container.innerHTML = `
            <strong>${currentWeapon.name}</strong><br>
            🎯 Damage: ${currentWeapon.dmg} | 🔻 Recoil: ${currentWeapon.recoil} | 🧘 Ergo: ${currentWeapon.ergo}<br>
            💰 Base Price: $${currentWeapon.price.toLocaleString()} | 🎲 Drop Rate: ${currentWeapon.drop}%
        `;
    }
}

// ========== RENDER ATTACHMENTS ==========
function getPartsByMode() {
    const parts = {};
    for (const [cat, items] of Object.entries(attachments)) {
        if (currentMode === "pro") {
            parts[cat] = items.find(a => a.tier === "pro") || items[0];
        } else if (currentMode === "popular") {
            parts[cat] = items.find(a => a.tier === "popular") || items[0];
        } else {
            parts[cat] = customParts[cat];
        }
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
            html += `
                <div class="attachment-slot">
                    <label>${cat.toUpperCase()}</label>
                    <select class="attachment-select" data-cat="${cat}">
                        <option value="">-- None --</option>
                        ${items.map(a => `<option value="${a.name}" ${selected === a.name ? "selected" : ""}>${a.name} | Recoil:${a.recoil} Ergo:${a.ergo} | $${a.price}</option>`).join("")}
                    </select>
                </div>
            `;
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
            if (part) {
                html += `
                    <div class="attachment-slot" style="flex: 1; min-width: 120px;">
                        <label>${cat}</label>
                        <div style="font-weight: 500; margin-top: 0.3rem;">${part.name}</div>
                        <div style="font-size: 0.7rem; color: #8e8e93;">💰 $${part.price} | 🎲 ${part.drop}%</div>
                    </div>
                `;
            }
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
        container.innerHTML = `
            <strong>⚙️ BUILD STATISTICS</strong><br>
            🔻 Total Recoil: ${totalRecoil}<br>
            🧘 Total Ergonomics: ${totalErgo}<br>
            💰 Total Cost: $${totalPrice.toLocaleString()}<br>
            🧩 Attachments: ${partsUsed.length ? partsUsed.join(", ") : "Standard Setup"}<br>
            🎯 Weapon Drop Rate: ${currentWeapon.drop}%
        `;
    }
}

// ==========
