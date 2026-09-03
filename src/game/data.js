export const REGIONS = [
  { id:"water", name:"水利面", chapter:"第一面", subtitle:"水网没有孤立的一段", objective:"沿西堤抵达木闸，放下北桥；过桥完成洲岛架桥，再沿南桥走向离城门。", color:0x79aeb6, ground:0xaeb08a, puzzles:["water-gates","water-crossing"] },
  { id:"grain", name:"稻作面", chapter:"第二面", subtitle:"雨影先于雨抵达田野", objective:"观察旗、云与谷物的状态，在雨线抵达前完成收、晒、运。", color:0xd7b95e, ground:0xb6a66b, puzzles:["grain-weather","grain-ferry"] },
  { id:"jade", name:"制玉面", chapter:"第三面", subtitle:"光、砂与声音都是量具", objective:"布置看料灯阵照亮整块玉料，再推动断面钻芯校准三条对钻孔道。", color:0x7eae95, ground:0x89957e, puzzles:["jade-light","jade-drill"] },
  { id:"ritual", name:"城台面", chapter:"第四面", subtitle:"位置把零散证据变成关系", objective:"在反山M12的抽象平面上复原器物关系，再从八幅纹样中找出连续中轴。", color:0xbb806a, ground:0x8f806f, puzzles:["ritual-map","ritual-pattern"] }
];

export const PUZZLES = {
  "water-gates": { region:"water", glyph:0, kicker:"水利面 · 闸渠网", title:"二十五闸成网", copy:"转动每块木闸，让中央水源抵达全部二十五格。每一个渠口都必须与相邻渠口互接，不能冲向边界，也不能留下孤立水段。", type:"pipes" },
  "water-crossing": { region:"water", glyph:1, kicker:"水利面 · 洲岛", title:"十五岛连桥", copy:"岛上大字是它需要连接的桥数。让同一横列或竖列、且中间没有其他岛的两座岛相连；每段可为零、一或两座桥。数字吻合、桥不相交且十五岛全连通时，南桥才会落下。", type:"bridge" },
  "grain-weather": { region:"grain", glyph:2, kicker:"稻作面 · 雨线", title:"雨前八刻", copy:"八道工序被风吹乱了。利用先后、紧邻与固定间距线索，把收割、脱粒、扬场、晒谷、装篓、水运和入仓排进唯一次序。", type:"timeline" },
  "grain-ferry": { region:"grain", glyph:3, kicker:"稻作面 · 四水道", title:"一潮四舟", copy:"二十格物资要在同一潮次离岸。舱位只是上限，船可留空；读懂水道、货性、同舟与避让关系，才能推演出唯一的调度。", type:"cargo" },
  "jade-light": { region:"jade", glyph:4, kicker:"制玉面 · 看料", title:"玉料灯阵", copy:"在玉料空格点灯，让全部玉面受光。两盏灯不能彼此照见；刻有数字的深色玉料四周，必须恰有相应数量的灯。", type:"light" },
  "jade-drill": { region:"jade", glyph:5, kicker:"制玉面 · 对钻", title:"三芯校孔", copy:"三枚钻芯卡在断面里。每次只能从背后推动，不能回拉；把它们分别推入发光孔位，为玉琮的三条对钻孔道校正轴线。", type:"drill" },
  "ritual-map": { region:"ritual", glyph:6, kicker:"城台面 · 探方", title:"夯土边界", copy:"一百个探方只留下每行、每列的连续土色记录。按数字标出夯土；不同数字之间必须至少隔一个空格。", type:"map" },
  "ritual-pattern": { region:"ritual", glyph:7, kicker:"城台面 · 微雕", title:"神徽九宫", copy:"九块神徽拓片被滑乱。每次只能把相邻拓片滑进空槽；让羽冠在上、神人居中、兽面重圈眼在下，复原完整微雕。", type:"pattern" }
};

export const INTRO_LINES = [
  ["观察记录", "这件器物高约八点九厘米，最宽处约十七点六厘米：内圆外方，中央对钻成孔。"],
  ["观察记录", "四面直槽内，上下各有一幅完整神人兽面纹；八幅微雕，是进入器内世界的八条线索。"],
  ["结构投影", "转动观察器物。按住一面向外拖开；四面展开后，再分离上下射口。城市会从内壁显现。"]
];

export const REGION_COMPLETE_LINES = {
  water:"河道已经贯通，浮桥落在可以行走的位置。",
  grain:"最后一筐干燥稻谷赶在雨线之前入仓。",
  jade:"光找到了裂隙，两端孔道也在黑暗中相遇。",
  ritual:"器物关系与纹样中轴同时复原，中央圆孔重新显出归路。"
};
