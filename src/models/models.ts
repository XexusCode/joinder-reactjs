export interface UserObjects {
  username: string;
  uid: string;
  color: string;
  rank: number;
}

export interface EventObject {
  idevent?: string;
  name: string;
  owner: string;
  start_date: number;
  end_date: number;
  location: any;
  nmax: number;
  img: string;
  users: Array<UserObjects>;
}
