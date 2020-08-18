export type Post = {
  id: string;
  title: string;
  body?: string;
  createdAt: string;
  author: Author;
  comments: string[] | null;
  likes: number;
};

export type PostResponse = Record<
  string,
  Omit<Post, "author"> & {
    authorId: string;
  }
>;

export type Posts = Record<string, Post>;

export type Author = {
  id: string;
  name: string;
  avatar: string;
};

export type Comment = {
  id: string;
  postId: string;
  text: string;
  author: Author;
  createdAt: string;
};

export type CommentsResponse = Array<
  Omit<Comment, "author"> & { author: string }
>;

export type Comments = Record<string, Comment[]>;

export type CreatePostPayload = {
  title: string;
  body: string;
};
