// eslint-disable
// this is an auto generated file. This will be overwritten

export const listAllPhotos = `query ListAllPhotos {
  listAllPhotos {
    id
    owner
    file {
      region
      bucket
      key
    }
    votes
    isAwesome
  }
}
`;
export const getPhoto = `query GetPhoto($id: ID!) {
  getPhoto(id: $id) {
    id
    owner
    file {
      region
      bucket
      key
    }
    votes
    isAwesome
  }
}
`;
export const listPhotos = `query ListPhotos(
  $filter: ModelPhotoFilterInput
  $limit: Int
  $nextToken: String
) {
  listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      file {
        region
        bucket
        key
      }
      votes
      isAwesome
    }
    nextToken
  }
}
`;
