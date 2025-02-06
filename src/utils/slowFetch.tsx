export async function fetch(url: string, init?: RequestInit) {
  await new Promise((r) => setTimeout(r, 500));
  return await window.fetch(url, init);
}
