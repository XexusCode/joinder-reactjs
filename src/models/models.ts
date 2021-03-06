export interface UserEventObject {
	username: string;
	id: string;
	color: string;
	rank: number;
}

export interface UserAuth {
  uid: string;
  username: string;
}

export interface EventObject {
  id?: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  nmax: number;
  img: string;
  password: string;
  description?: string;
  userEvents: Array<UserEventObject>;
  todos: Array<TodoObject>;
  comments: Array<CommentObject>;
}

export interface TodoObject {
  id: number;
  text: string;
}
export interface CommentObject {
  id: number;
  userEventUsername: string;
  text: string;
  date: string;
}
