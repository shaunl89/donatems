export enum Category {
  TOPS = 'tops',
  BOTTOMS = 'bottoms',
  FOOTWEAR = 'footwear',
}

export interface Donation {
  uri: string;
  category: Category;
  description: string;
}
