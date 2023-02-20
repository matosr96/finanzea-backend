export type PartialExpense = Partial<Expense>;

export interface Expense {
  uuid: string;
  user_email: string;
  category: string;
  title: string;
  description: string;
  amount: number;
  support: string;
  status: string;
}
