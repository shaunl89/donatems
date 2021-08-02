export enum Category {
  TOPS = 'Tops',
  BOTTOMS = 'Bottoms',
  FOOTWEAR = 'Footwear',
}

export enum Status {
  AVAILABLE,
  CHOPED,
  WASTED,
  PENDING,
  WANTED,
  CONTACT,
}
export interface Donation {
  uri: string;
  category: Category;
  description: string;
  user: User;
  status: Status;
}

export interface User {
  name: string;
  profileImage: string;
  contactNumber: string;
}