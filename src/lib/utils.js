export function appendCapped(array, item, limit) {
  const output = [...array, item];

  if (output.length < limit) return output;

  return output.slice(output.length - limit);
}
