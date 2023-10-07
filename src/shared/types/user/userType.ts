export interface User {
  name: string;
  email: string;
  profileImage: string;
  providerType: 'GOOGLE' | 'APPLE' | '';
}
