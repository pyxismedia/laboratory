import { getPosts } from '../queries/posts';

export const Query = {
  posts: (__, { section, orderBy, skip, limit, labels }) => getPosts(section, orderBy, skip, limit, labels),
};
