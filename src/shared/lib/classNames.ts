type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key),
    ...additional,
  ].join(" ");
}

const res = classNames("remove-btn", { hovered: true, selectable: true, red: false }, [
  "pdg",
]);

console.log(res)