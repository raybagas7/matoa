import generateUniqueId from "generate-unique-id";

export const idGenerator = () =>
  generateUniqueId({
    length: 8,
  });
