export interface ImageItem {
  id: number;
  title: string;
  category: string;
  url: string;
  thumbnailUrl: string;
  description: string;
  author: string;
  date: string;
  likes: number;
  liked?: boolean;
  tags: string[];
}
