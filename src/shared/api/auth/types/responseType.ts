export interface ResType<T> {
  status: number;
  data: T | undefined;
  message: string;
  error: {
    [key: string]: string;
  };
}

export interface LoginRes {
  token: any;
}
export interface UserInfoRes {
  info: {
    profileImage: string;
    providerType: 'GOOGLE' | 'APPLE';
    name: string;
    email: string;
  };
}

export interface WithdrawalRes {
  info: {
    profileImage: string;
    providerType: 'GOOGLE' | 'APPLE';
    name: string;
    email: string;
  };
}
