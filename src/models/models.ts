export interface UserObjects {
  username: string;
  uid: string;
  color: string;
  rank: number;
}

export interface EventObject {
  idevent: string;
  name: string;
  owner: string;
  start_date: string;
  end_date: string;
  location: string;
  nmax: number;
  users: Array<UserObjects>;
}
