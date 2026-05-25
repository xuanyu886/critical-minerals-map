const minerals = [
  {
    id: "lithium",
    name: "锂",
    color: "#0aa99a",
    tag: "电池核心",
    note: "盐湖与硬岩锂矿并存，南美锂三角和澳大利亚是最醒目的供应区域。",
    countries: ["澳大利亚", "智利", "阿根廷", "玻利维亚", "中国", "津巴布韦", "葡萄牙"],
    points: [
      ["澳大利亚", 810, 438, "major", 16, 18],
      ["智利", 300, 412, "major", -42, 18],
      ["阿根廷", 322, 426, "major", 15, 24],
      ["玻利维亚", 284, 388, "major", -58, -12],
      ["中国", 742, 230, "significant"],
      ["津巴布韦", 535, 400, "emerging"],
      ["葡萄牙", 465, 185, "emerging"]
    ]
  },
  {
    id: "cobalt",
    name: "钴",
    color: "#2368c4",
    tag: "电池与合金",
    note: "刚果民主共和国占据突出地位，印尼等镍钴共生资源近年重要性上升。",
    countries: ["刚果民主共和国", "印度尼西亚", "俄罗斯", "澳大利亚", "古巴", "菲律宾", "加拿大"],
    points: [
      ["刚果民主共和国", 523, 327, "major"],
      ["印度尼西亚", 758, 349, "significant"],
      ["俄罗斯", 662, 124, "significant"],
      ["澳大利亚", 820, 430, "significant"],
      ["古巴", 265, 246, "emerging"],
      ["菲律宾", 780, 299, "emerging"],
      ["加拿大", 238, 110, "emerging"]
    ]
  },
  {
    id: "nickel",
    name: "镍",
    color: "#2f9d52",
    tag: "不锈钢与电池",
    note: "东南亚红土镍矿集中，俄罗斯、加拿大、澳大利亚仍是重要供应区。",
    countries: ["印度尼西亚", "菲律宾", "俄罗斯", "新喀里多尼亚", "加拿大", "澳大利亚", "巴西"],
    points: [
      ["印度尼西亚", 762, 350, "major"],
      ["菲律宾", 786, 294, "major"],
      ["俄罗斯", 673, 116, "significant"],
      ["新喀里多尼亚", 872, 424, "significant"],
      ["加拿大", 220, 104, "significant"],
      ["澳大利亚", 818, 431, "significant"],
      ["巴西", 340, 354, "emerging"]
    ]
  },
  {
    id: "rareearths",
    name: "稀土",
    color: "#7a4ac7",
    tag: "磁材与高端制造",
    note: "中国是最重要的生产和加工中心，美国、澳大利亚、缅甸等也具有战略意义。",
    countries: ["中国", "美国", "澳大利亚", "缅甸", "越南", "巴西", "印度", "俄罗斯"],
    points: [
      ["中国", 738, 230, "major"],
      ["美国", 210, 190, "significant"],
      ["澳大利亚", 803, 434, "significant"],
      ["缅甸", 716, 281, "significant"],
      ["越南", 733, 300, "emerging"],
      ["巴西", 338, 355, "emerging"],
      ["印度", 675, 290, "emerging"],
      ["俄罗斯", 670, 120, "emerging"]
    ]
  },
  {
    id: "copper",
    name: "铜",
    color: "#d67222",
    tag: "电网与电气化",
    note: "安第斯山脉铜带极为关键，中非铜钴带也是全球供应链核心区域。",
    countries: ["智利", "秘鲁", "刚果民主共和国", "赞比亚", "美国", "中国", "澳大利亚", "墨西哥"],
    points: [
      ["智利", 299, 421, "major"],
      ["秘鲁", 286, 366, "major"],
      ["刚果民主共和国", 522, 328, "major"],
      ["赞比亚", 536, 365, "significant"],
      ["美国", 204, 196, "significant"],
      ["中国", 742, 230, "significant"],
      ["澳大利亚", 812, 435, "emerging"],
      ["墨西哥", 188, 230, "emerging"]
    ]
  },
  {
    id: "graphite",
    name: "石墨",
    color: "#3e4649",
    tag: "负极材料",
    note: "天然石墨资源和加工能力高度集中，中国、莫桑比克、马达加斯加等是重点区域。",
    countries: ["中国", "莫桑比克", "马达加斯加", "巴西", "印度", "坦桑尼亚", "加拿大"],
    points: [
      ["中国", 744, 230, "major"],
      ["莫桑比克", 553, 405, "significant"],
      ["马达加斯加", 592, 420, "significant"],
      ["巴西", 340, 355, "significant"],
      ["印度", 676, 291, "emerging"],
      ["坦桑尼亚", 548, 357, "emerging"],
      ["加拿大", 230, 104, "emerging"]
    ]
  },
  {
    id: "pgm",
    name: "铂族金属",
    color: "#8b9aa3",
    tag: "催化与氢能",
    note: "南非布什维尔德杂岩体是全球铂族金属最关键的资源集中区。",
    countries: ["南非", "俄罗斯", "津巴布韦", "加拿大", "美国"],
    points: [
      ["南非", 524, 451, "major"],
      ["俄罗斯", 665, 118, "major"],
      ["津巴布韦", 535, 398, "significant"],
      ["加拿大", 232, 107, "emerging"],
      ["美国", 206, 190, "emerging"]
    ]
  },
  {
    id: "uranium",
    name: "铀",
    color: "#a9bb2f",
    tag: "核能燃料",
    note: "哈萨克斯坦、加拿大和澳大利亚是最重要的铀资源与生产区域。",
    countries: ["哈萨克斯坦", "加拿大", "澳大利亚", "纳米比亚", "尼日尔", "乌兹别克斯坦", "俄罗斯"],
    points: [
      ["哈萨克斯坦", 642, 209, "major"],
      ["加拿大", 230, 104, "major"],
      ["澳大利亚", 815, 433, "major"],
      ["纳米比亚", 505, 410, "significant"],
      ["尼日尔", 495, 295, "significant"],
      ["乌兹别克斯坦", 630, 230, "emerging"],
      ["俄罗斯", 665, 118, "emerging"]
    ]
  }
];

const markerLayer = document.querySelector("#markerLayer");
const filters = document.querySelector("#filters");
const legendItems = document.querySelector("#legendItems");
const detailCards = document.querySelector("#detailCards");
const summaryText = document.querySelector("#summaryText");
const resetView = document.querySelector("#resetView");
let activeId = "all";

const rankSize = { major: 12, significant: 9, emerging: 7 };
const rankName = { major: "主要", significant: "重要", emerging: "新兴" };

function createSvgElement(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
  return el;
}

function renderFilters() {
  const all = document.createElement("button");
  all.type = "button";
  all.className = "filter-button";
  all.dataset.id = "all";
  all.setAttribute("aria-pressed", "true");
  all.innerHTML = '<span class="swatch" style="--mineral-color:#6f7f83"></span>全部';
  filters.appendChild(all);

  minerals.forEach((mineral) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.dataset.id = mineral.id;
    button.style.setProperty("--mineral-color", mineral.color);
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = `<span class="swatch"></span>${mineral.name}`;
    filters.appendChild(button);
  });
}

function renderLegend() {
  legendItems.innerHTML = minerals
    .map(
      (mineral) => `
        <div class="legend-row" style="--mineral-color:${mineral.color}">
          <span><i class="swatch"></i> ${mineral.name}</span>
          <span>${mineral.tag}</span>
        </div>`
    )
    .join("");
}

function renderMarkers() {
  markerLayer.innerHTML = "";
  minerals.forEach((mineral) => {
    mineral.points.forEach(([country, x, y, rank], index) => {
      const group = createSvgElement("g", {
        class: "marker",
        "data-mineral": mineral.id,
        "data-country": country,
        transform: `translate(${x} ${y})`,
        style: `--mineral-color:${mineral.color}`
      });
      const circle = createSvgElement("circle", { r: rankSize[rank] });
      const labelX = mineral.points[index][4] ?? rankSize[rank] + 7;
      const labelY = mineral.points[index][5] ?? (index % 2 === 0 ? -8 : 18);
      const label = createSvgElement("text", {
        x: labelX,
        y: labelY
      });
      label.textContent = country;
      const title = createSvgElement("title");
      title.textContent = `${mineral.name} · ${country} · ${rankName[rank]}`;
      group.append(title, circle, label);
      markerLayer.appendChild(group);
    });
  });
}

function renderCards() {
  const visible = activeId === "all" ? minerals : minerals.filter((item) => item.id === activeId);
  detailCards.innerHTML = visible
    .map(
      (mineral) => `
        <article class="mineral-card" style="--mineral-color:${mineral.color}">
          <h3>${mineral.name}<span class="tag">${mineral.tag}</span></h3>
          <p>${mineral.note}</p>
          <div class="country-list">
            ${mineral.countries.map((country) => `<span>${country}</span>`).join("")}
          </div>
        </article>`
    )
    .join("");
  summaryText.textContent =
    activeId === "all"
      ? "共展示 8 类关键矿产，点位大小表示区域重要程度。"
      : `${visible[0].name}：${visible[0].countries.join("、")}`;
}

function setActive(id) {
  activeId = id;
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.id === id));
  });
  document.querySelectorAll(".marker").forEach((marker) => {
    const match = id === "all" || marker.dataset.mineral === id;
    marker.classList.toggle("is-dim", !match);
    marker.classList.toggle("is-active", match && id !== "all");
  });
  renderCards();
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  setActive(button.dataset.id);
});

markerLayer.addEventListener("click", (event) => {
  const marker = event.target.closest(".marker");
  if (!marker) return;
  setActive(marker.dataset.mineral);
  document.querySelector(".detail-section").scrollIntoView({ block: "start" });
});

resetView.addEventListener("click", () => setActive("all"));

renderFilters();
renderLegend();
renderMarkers();
renderCards();
