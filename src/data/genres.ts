
export interface Genre {
  slug: string;
  name: string;
}

const genres: Genre[] = [
  { slug: "mmorpg", name: "MMORPG" },
  { slug: "shooter", name: "Shooter" },
  { slug: "strategy", name: "Strategy" },
  { slug: "moba", name: "MOBA" },
  { slug: "racing", name: "Racing" },
  { slug: "sports", name: "Sports" },
  { slug: "sandbox", name: "Sandbox" },
  { slug: "open-world", name: "Open World" },
  { slug: "survival", name: "Survival" },
  { slug: "battle-royale", name: "Battle Royale" },
  { slug: "action", name: "Action" },
  { slug: "action-rpg", name: "Action RPG" },
  { slug: "fantasy", name: "Fantasy" },
  { slug: "sci-fi", name: "Sci-Fi" },
  { slug: "fighting", name: "Fighting" },
  { slug: "horror", name: "Horror" },
  { slug: "social", name: "Social" },
  { slug: "card", name: "Card" },
  { slug: "anime", name: "Anime" },
];

export default genres;
