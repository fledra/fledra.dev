export default function (val: unknown): val is number {
  const parsed = Number.parseInt(String(val));
  return !Number.isNaN(parsed);
}
