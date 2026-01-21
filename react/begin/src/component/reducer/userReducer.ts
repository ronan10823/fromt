// userReducer()

import { initialUser, type UserType } from './UserApp2';

type UserAction =
  | {
      type: 'SET_NAME';
      name: string;
    }
  | {
      type: 'SET_YEAR';
      name: number;
    }
  | {
      type: 'RESET';
    };

// set -- 작업 : action 선언
export function userReducer(user: UserType, action: UserAction) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...user,
        name: action.name.trim().toLowerCase(),
      };
    case 'SET_YEAR':
      const age = new Date().getFullYear() - action.year;
      if (age < 18) {
        return {
          ...user,
          year: action.year,
          warning: '최소 나이는 18세여야 합니다',
        };
      } else {
        return {
          ...user,
          year: action.year,
          warning: '',
        };
      }
    case 'RESET':
      return initialUser;
    default:
      throw new Error('Unknown action type');
  }
}
