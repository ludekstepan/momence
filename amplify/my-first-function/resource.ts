import { defineFunction } from "@aws-amplify/backend";

export const myFirstFunction = defineFunction({
  name: "my-first-function",
  runtime: 22, // Node v22
  entry: "./handler.ts"
});
