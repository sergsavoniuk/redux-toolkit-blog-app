import { authorsList } from "api/data";

export const getRandomAuthor = () => {
  const authorId = Object.keys(authorsList)[
    Math.floor(Math.random() * Object.keys(authorsList).length)
  ];

  return authorsList[authorId];
};

export const delay = (ms: number = 500) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));
