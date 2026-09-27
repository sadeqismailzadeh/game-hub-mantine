export interface Platform {
  slug: string;
  name: string;
}

const platforms: Platform[] = [
  { slug: "windows", name: "PC (Windows)" },
  { slug: "browser", name: "Browser" },
];

const usePlatforms = () => ({platforms , isLoading: false, error: "" }) as const;

export default usePlatforms;
