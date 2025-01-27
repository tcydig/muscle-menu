import { parts } from "./data"
export function load() {
  return {
    parts: parts.map((part) => ({
      id: part.id,
      name: part.name,
      img: part.img
    }))
  }
}