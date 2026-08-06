export interface ProductInfo {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  image: string;
  thumbnail: string;
}

export interface CharacterList {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string; // <-- Missing hai
  url: string;
}
export interface RecipeProps {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  difficulty: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  caloriesPerServing: number;
  rating: number;
  reviewCount: number;
  ingredients: string[];
  instructions: string[];
}
