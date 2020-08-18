import { LoremIpsum } from "lorem-ipsum";

import { delay, getRandomAuthor } from "utils";

import { postsList, authorsList, commentsList } from "./data";
import { Posts, CreatePostPayload, Post } from "./types";
import { nanoid } from "@reduxjs/toolkit";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const Api = {
  fetchPosts: async () => {
    await delay(500);

    const posts: Posts = {};

    for (const [postId, post] of Object.entries(postsList)) {
      const { authorId, ...rest } = post;
      posts[postId] = {
        ...rest,
        author: authorsList[authorId],
      };
    }

    return posts;
  },
  fetchCommentsByPostId: async (postId: string) => {
    await delay(500);

    const postComments = commentsList.filter(
      (comment) => comment.postId === postId
    );

    return postComments.map((comment) => ({
      ...comment,
      author: authorsList[comment.author],
    }));
  },
  fetchPost: async (postId: string) => {
    await delay(500);

    const { authorId, ...post } = postsList[postId];
    return {
      ...post,
      author: authorsList[authorId],
      body: lorem.generateParagraphs(3),
    };
  },
  createPost: async ({ title, body }: CreatePostPayload) => {
    await delay(500);

    const post: Post = {
      id: nanoid(),
      title,
      body,
      createdAt: new Date().toISOString(),
      author: getRandomAuthor(),
      comments: null,
      likes: 0,
    };

    return post;
  },
};

export type ApiService = typeof Api;
