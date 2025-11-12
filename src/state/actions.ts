import { User } from './types';

export interface statusAction {
  type: string;
  payload: boolean;
}

export interface userAction {
  type: string;
  payload: User;
}
