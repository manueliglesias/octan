// eslint-disable
// this is an auto generated file. This will be overwritten

export const uploadPhoto = `mutation UploadPhoto($file: S3ObjectInput) {
  uploadPhoto(file: $file) {
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
export const upvotePhoto = `mutation UpvotePhoto($photoId: ID!) {
  upvotePhoto(photoId: $photoId) {
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
export const downvotePhoto = `mutation DownvotePhoto($photoId: ID!) {
  downvotePhoto(photoId: $photoId) {
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
export const createPhoto = `mutation CreatePhoto($input: CreatePhotoInput!) {
  createPhoto(input: $input) {
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
export const updatePhoto = `mutation UpdatePhoto($input: UpdatePhotoInput!) {
  updatePhoto(input: $input) {
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
export const deletePhoto = `mutation DeletePhoto($input: DeletePhotoInput!) {
  deletePhoto(input: $input) {
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
