export type UserApiInterface = {
  email: string;
  salt: string;
  hash: string;
  iterations: number;
  keylen: number;
  digest: string;
  id: number;
  token: string;
  name: string;
  address: string;
  phone: string;
};
