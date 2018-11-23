import { Target } from "./types";

export const target = ({ target = 'node'}: { target?: Target } = {}) => ({
  target,
});
