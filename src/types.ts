export enum Category {
  TOPS = 'Tops',
  BOTTOMS = 'Bottoms',
  FOOTWEAR = 'Footwear',
}

export interface Donation {
  uri: string;
  category: Category;
  description: string;
  user: User;
}

export interface User {
  name: string;
  profileImage: string;
  contactNumber: string;
}