export function buildImageUrl(path) {
  if (!path) return "";
  // If it's already an absolute URL or protocol-relative, return as-is
  if (/^(https?:)?\/\//i.test(path)) return path;

  const base = process.env.NEXT_PUBLIC_IMG_BASE_URL || "";
  if (!base) return path;

  // Ensure there's exactly one slash between base and path
  return `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}
