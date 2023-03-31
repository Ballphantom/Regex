export function isMatch(s: string, p: string): boolean {
  const pattern = `^${p}$`;
  const regex = new RegExp(pattern.replace(/\./g, '\\.').replace(/\*/g, '.*'));
  return regex.test(s);
}