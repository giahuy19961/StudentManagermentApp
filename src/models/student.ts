export interface Student {
  name: string;
  age: number;
  gender: 'male' | 'female';
  mark: number;
  createdAt?: number;
  updatedAt?: number;
  city: string;
  id?: string;
}
