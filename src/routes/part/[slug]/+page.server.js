import { parts } from "../../data"
export function load({ params }) {
  const part = parts.find(v=>v.id.toString() == params.slug)
  return {
    params:params,
    part:part,
  };
}