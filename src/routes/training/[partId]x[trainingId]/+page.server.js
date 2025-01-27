import { equipments, parts,muscles } from "../../data"
export function load({ params }) {
  const part = parts.find(v=>v.id.toString() == params.partId)
  const menu = part?.menus.find(v => v.id.toString() == params.trainingId)
  const equipmentsJp = equipments.filter(v=> menu?.equipment.includes(v.id))
  const msuclesJp = muscles.filter(v=> menu?.muscles.includes(v.id))

  return {
    params:params,
    part:part,
    menu:menu,
    equipments:equipmentsJp.map(v => v.name),
    muscles:msuclesJp.map(v=>v.name),
    procedures:menu?.procedure ?? [],
    hints: menu?.hint ?? []
  };
}