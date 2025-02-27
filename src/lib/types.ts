export type EventType = {
  link: string;
  address: string;
  time: string;
  date: string;
  eventId: number;
  eventName: string;
  slug: string;
  description: string;
  city: string;
  organizerName: string;
  contactNo: string;
  email: string;
  category: string;

  createdAt: Date;
  updatedAt: Date;
};

export type CommentType = {
  commenterName: string;
  comment: string;
  eventId: number;
};

export type User = {
  email: string;
  password: string;
  userId: number;
  username: string;
  isEmailVerified: boolean;
};
