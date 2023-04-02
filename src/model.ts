export function isMatch(s: string, p: string): boolean {
  const pattern = `^${p}$`;
  const regex: RegExp = new RegExp(pattern)
  return regex.test(s);
}