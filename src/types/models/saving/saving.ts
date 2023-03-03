export type PartialSaving = Partial<Saving>;

export interface Saving {
  uuid: string;
  user_email: string;
  title: string;
  amount_saved: number;
  goal: number;
  goal_date: string;
  percentage: number;
  status: string;
}
