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
