
export interface Beer {
  id: string;
  name: string;
  style: string;
  abv: number;
  brewery: string;
  description: string;
  image?: string;
  averageRating: number;
  totalRatings: number;
}

export interface Comment {
  id: string;
  beerId: string;
  userName: string;
  comment: string;
  rating: number;
  date: Date;
}

export interface NewComment {
  userName: string;
  comment: string;
  rating: number;
}
