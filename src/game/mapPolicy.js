// The era map is deliberately driven by a replaceable, reviewable base layer.
// Do not put an unverified provincial outline or an ad-hoc China SVG in the UI.
export const STANDARD_MAP = Object.freeze({
  state:"awaiting-approved-asset",
  sourceUrl:"https://bzdt.tianditu.gov.cn/",
  catalogHint:"中国地图 1:4800万 64开 分省设色 有邻国 线划二",
  approvalNo:null,
  assetUrl:null,
  assetSha256:null,
  reviewRecord:null
});

export function hasPublishableStandardMap(map=STANDARD_MAP){
  return Boolean(map.assetUrl&&map.approvalNo&&map.assetSha256&&map.reviewRecord);
}
