export enum Category {
  TOPS = 'Tops',
  BOTTOMS = 'Bottoms',
  FOOTWEAR = 'Footwear',
}

export enum Status {
  AVAILABLE,
  CHOPED, // receiver chopes item --> giver sees Confirm / Cancel in My Donations, receiver sees Decline item in My Selection
  CONTACT, // allow users to arrange after acknowledging
  COMPLETE, // after item is donated
}

export interface Donation {
  uri: string;
  category: Category;
  description: string;
  giver: User;
  receiver?: User;
  status: Status;
}

export interface User {
  name: string;
  profileImage: string;
  contactNumber: string;
}