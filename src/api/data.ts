import { PostResponse, CommentsResponse, Author } from "api/types";

export const postsList: PostResponse = {
  fWO0a6c5rnv3dl0zcUVDW: {
    id: "fWO0a6c5rnv3dl0zcUVDW",
    title: "Nullish Coalescing Operator",
    createdAt: "2020-08-17T06:42:08.680Z",
    authorId: "utLiISqIVK0l8k_qDQfho",
    comments: null,
    likes: 10,
  },
  vaYaH7k0E2ntCES_RXeIE: {
    id: "vaYaH7k0E2ntCES_RXeIE",
    title: "Augmenting Interfaces, Typing Functions",
    createdAt: "2020-08-17T06:42:08.680Z",
    authorId: "WhS6uZmdSu4gBn5zgwYEy",
    comments: ["CrZYhYneDCtP1eDEovmn8"],
    likes: 4,
  },
  "Qm2_B8iEZDoIbA-X6xHAF": {
    id: "Qm2_B8iEZDoIbA-X6xHAF",
    title: "Alternatives to Enums",
    createdAt: "2020-08-17T06:42:08.680Z",
    authorId: "utLiISqIVK0l8k_qDQfho",
    comments: [
      "4fOw7DbgGLWPvcAeo8pDG",
      "eqmxF7Zxh-9TKpu4OToiw",
      "BV1cjdUQnSh7kRefX6yCP",
    ],
    likes: 0,
  },
  StGpO1t4UDR_XGD4VTM84: {
    id: "StGpO1t4UDR_XGD4VTM84",
    title: "TypeScript + React",
    createdAt: "2020-08-17T06:42:08.680Z",
    authorId: "j53lG54r_Lw6fQwTL9NYo",
    comments: [],
    likes: 31,
  },
  "zVChd1Bf7rYOsoSO5MV-8": {
    id: "zVChd1Bf7rYOsoSO5MV-8",
    title: "Interfaces vs Type Aliases",
    createdAt: "2020-08-17T06:42:08.680Z",
    authorId: "WhS6uZmdSu4gBn5zgwYEy",
    comments: ["FxC40sbH8CrQ97gqQD0RB"],
    likes: 9,
  },
};

export const authorsList: Record<string, Author> = {
  j53lG54r_Lw6fQwTL9NYo: {
    id: "j53lG54r_Lw6fQwTL9NYo",
    name: "max_jackson",
    avatar: "https://api.adorable.io/avatars/50/abott@adorable.png",
  },
  utLiISqIVK0l8k_qDQfho: {
    id: "utLiISqIVK0l8k_qDQfho",
    name: "leroy_franklin",
    avatar: "https://api.adorable.io/avatars/50/abott@adorable1.png",
  },
  WhS6uZmdSu4gBn5zgwYEy: {
    id: "WhS6uZmdSu4gBn5zgwYEy",
    name: "daniel_tate",
    avatar: "https://api.adorable.io/avatars/50/abott@adorable3.png",
  },
  WhS6a5mdSu4gBn5zgwYEy: {
    id: "WhS6a5mdSu4gBn5zgwYEy",
    name: "luna_delgado",
    avatar: "https://api.adorable.io/avatars/50/abott@adorable4.png",
  },
  WhS6a5mdSu4gB11zgwYEy: {
    id: "WhS6a5mdSu4gB11zgwYEy",
    name: "gavin_horton",
    avatar: "https://api.adorable.io/avatars/50/abott@adorable5.png",
  },
  ffS6a5mdSu4gB11zgwYEy: {
    id: "ffS6a5mdSu4gB11zgwYEy",
    name: "joy_cross",
    avatar: "https://api.adorable.io/avatars/50/abott@adorable6.png",
  },
  ffS6a5mdxx4gB11zgwYEy: {
    id: "ffS6a5mdxx4gB11zgwYEy",
    name: "bob_wells",
    avatar: "https://api.adorable.io/avatars/50/abott@adorable7.png",
  },
};

export const commentsList: CommentsResponse = [
  {
    id: "4fOw7DbgGLWPvcAeo8pDG",
    postId: "Qm2_B8iEZDoIbA-X6xHAF",
    text:
      "Irure veniam sunt non eiusmod pariatur amet voluptate occaecat nulla sunt fugiat veniam ipsum. Ipsum mollit aliqua Lorem culpa aliquip cupidatat et sunt.",
    author: "WhS6a5mdSu4gBn5zgwYEy",
    createdAt: "2020-08-17T06:42:08.680Z",
  },
  {
    id: "eqmxF7Zxh-9TKpu4OToiw",
    postId: "Qm2_B8iEZDoIbA-X6xHAF",
    text: "Pariatur nulla laborum magna. Ex cupidatat id tempor magna.",
    author: "WhS6a5mdSu4gB11zgwYEy",
    createdAt: "2020-08-17T06:42:08.680Z",
  },
  {
    id: "CrZYhYneDCtP1eDEovmn8",
    postId: "vaYaH7k0E2ntCES_RXeIE",
    text:
      "Eiusmod labore culpa enim mollit Lorem ea culpa ea anim consectetur. Velit sint amet et nulla qui non irure consequat ipsum nisi laboris incididunt mollit.",
    author: "ffS6a5mdSu4gB11zgwYEy",
    createdAt: "2020-08-17T06:42:08.680Z",
  },
  {
    id: "BV1cjdUQnSh7kRefX6yCP",
    postId: "Qm2_B8iEZDoIbA-X6xHAF",
    text: "Ipsum veniam culpa nisi. Mollit qui et sit id aliquip est.",
    author: "WhS6a5mdSu4gBn5zgwYEy",
    createdAt: "2020-08-17T06:42:08.680Z",
  },
  {
    id: "FxC40sbH8CrQ97gqQD0RB",
    postId: "zVChd1Bf7rYOsoSO5MV-8",
    text:
      "Sit amet ad labore nisi commodo Lorem cupidatat dolor sint veniam id proident. Nulla cillum mollit ipsum amet tempor enim sit.",
    author: "ffS6a5mdxx4gB11zgwYEy",
    createdAt: "2020-08-17T06:42:08.680Z",
  },
];
