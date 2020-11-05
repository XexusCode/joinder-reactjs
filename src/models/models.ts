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
  start_date: string;
  end_date: string;
  location: any;
  nmax: number;
  img: string;
  description?: string;
  users: Array<UserObjects>;
  items?: Array<ItemObject>;
}

export interface ItemObject {
  id: number;
  text: string;
}
