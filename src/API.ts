/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type S3ObjectInput = {
  region: string,
  bucket: string,
  key?: string | null,
  localUri?: string | null,
  mimeType?: string | null,
};

export type CreatePhotoInput = {
  owner: string,
  file?: S3ObjectInput | null,
};

export type UpdatePhotoInput = {
  id: string,
  owner?: string | null,
  file?: S3ObjectInput | null,
};

export type DeletePhotoInput = {
  id?: string | null,
};

export type ModelPhotoFilterInput = {
  id?: ModelIDFilterInput | null,
  owner?: ModelStringFilterInput | null,
  and?: Array< ModelPhotoFilterInput | null > | null,
  or?: Array< ModelPhotoFilterInput | null > | null,
  not?: ModelPhotoFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type UploadPhotoMutationVariables = {
  file?: S3ObjectInput | null,
};

export type UploadPhotoMutation = {
  uploadPhoto:  {
    __typename: "Photo",
    id: string,
    owner: string,
    file:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
  } | null,
};

export type UpvotePhotoMutationVariables = {
  photoId: string,
};

export type UpvotePhotoMutation = {
  upvotePhoto:  {
    __typename: "Photo",
    id: string,
    owner: string,
    file:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
  } | null,
};

export type DownvotePhotoMutationVariables = {
  photoId: string,
};

export type DownvotePhotoMutation = {
  downvotePhoto:  {
    __typename: "Photo",
    id: string,
    owner: string,
    file:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
  } | null,
};

export type CreatePhotoMutationVariables = {
  input: CreatePhotoInput,
};

export type CreatePhotoMutation = {
  createPhoto:  {
    __typename: "Photo",
    id: string,
    owner: string,
    file:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
  } | null,
};

export type UpdatePhotoMutationVariables = {
  input: UpdatePhotoInput,
};

export type UpdatePhotoMutation = {
  updatePhoto:  {
    __typename: "Photo",
    id: string,
    owner: string,
    file:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
  } | null,
};

export type DeletePhotoMutationVariables = {
  input: DeletePhotoInput,
};

export type DeletePhotoMutation = {
  deletePhoto:  {
    __typename: "Photo",
    id: string,
    owner: string,
    file:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
  } | null,
};

export type ListAwesomePhotosQuery = {
  listAwesomePhotos:  Array< {
    __typename: "Photo",
    id: string,
    owner: string,
    file:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
  } | null > | null,
};

export type GetPhotoQueryVariables = {
  id: string,
};

export type GetPhotoQuery = {
  getPhoto:  {
    __typename: "Photo",
    id: string,
    owner: string,
    file:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
  } | null,
};

export type ListPhotosQueryVariables = {
  filter?: ModelPhotoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPhotosQuery = {
  listPhotos:  {
    __typename: "ModelPhotoConnection",
    items:  Array< {
      __typename: "Photo",
      id: string,
      owner: string,
      file:  {
        __typename: "S3Object",
        region: string,
        bucket: string,
        key: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePhotoSubscription = {
  onCreatePhoto:  {
    __typename: "Photo",
    id: string,
    owner: string,
    file:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
  } | null,
};

export type OnUpdatePhotoSubscription = {
  onUpdatePhoto:  {
    __typename: "Photo",
    id: string,
    owner: string,
    file:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
  } | null,
};

export type OnDeletePhotoSubscription = {
  onDeletePhoto:  {
    __typename: "Photo",
    id: string,
    owner: string,
    file:  {
      __typename: "S3Object",
      region: string,
      bucket: string,
      key: string,
    } | null,
  } | null,
};
