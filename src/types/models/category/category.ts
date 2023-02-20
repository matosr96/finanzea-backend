export interface Category {
  uuid: string;
  user_email: string;
  name: string;
  status: string;
}

export type PartialCategory = Partial<Category>;

