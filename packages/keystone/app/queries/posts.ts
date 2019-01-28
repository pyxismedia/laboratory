import { list } from 'keystone';

const Post = list('Post');

// eslint-disable-next-line import/prefer-default-export
export const getPosts = (section, orderBy, skip = 0, limit = 10, labels = []) => (
  Post.model.aggregate([
    {
      $project: {
        '_id': false,
        id: '$_id',
        title: true,
        subtitle: true,
        date: true,
        content: true,
        author: true,
        section: true,
        labels: true,
        state: true,
        image: true,
        // show is true if any of label matches or multiple
        show: {
          $setIsSubset: [labels, '$labels']
        }
      }
    },
    {
      $match: {
        show: true,
      },
    },
    {
      $lookup: {
        from: 'sections',
        localField: 'section',
        foreignField: '_id',
        as: 'section',
      },
    },
    {
      $unwind: '$section',
    },
    {
      $match: {
        'section.name': section,
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'author',
        foreignField: '_id',
        as: 'author',
      },
    },
    {
      $unwind: '$author',
    },
    {
      $project: {
        id: true,
        title: true,
        subtitle: true,
        date: true,
        content: true,
        'author.name': true,
        'section.name': true,
        labels: true,
        state: true,
        image: true,
      },
    },
    {
      $sort: orderBy,
    },
    {
      $skip: skip,
    },
    {
      $limit: limit,
    },
  ])
);
