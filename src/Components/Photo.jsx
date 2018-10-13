import React from "react";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { listAllPhotos } from '../graphql/queries';
import { S3Image } from 'aws-amplify-react';
import { upvotePhoto, downvotePhoto } from "../graphql/mutations";

class Photo extends React.Component {

    handleVote = async vote => {
        const { photo: { id: photoId }, upvotePhoto, downvotePhoto } = this.props;

        switch (vote) {
            case 'up':
                await upvotePhoto({ photoId });
                break;
            case 'down':
                await downvotePhoto({ photoId });
                break;
        }
    }

    render() {
        const { photo: { votes, isAwesome, file: { key } } } = this.props;
        return (
            <div className="Photo">
                <strong>{votes} votes{isAwesome && ', is awesome!!'}</strong>
                <div>
                    <input type="button" value="UpVote" onClick={this.handleVote.bind(this, 'up')} />
                    <input type="button" value="DownVote" onClick={this.handleVote.bind(this, 'down')} />
                </div>
                <S3Image imgKey={key.match(/\/([^/]+)$/)[1]} />
            </div>
        )
    }
}

export default compose(
    graphql(
        gql(upvotePhoto),
        {
            props: ({ mutate }) => ({
                upvotePhoto: variables => mutate({
                    variables,
                    update: (cache, { data: { upvotePhoto } }) => {
                        if (upvotePhoto === null) {
                            return;
                        }

                        const query = gql(listAllPhotos);
                        const result = cache.readQuery({ query });

                        const data = {
                            listAllPhotos: [...result.listAllPhotos.map(photo => {
                                if (photo.id === upvotePhoto.photoId) {
                                    return {
                                        ...photo,
                                        votes: photo.votes + 1,
                                        isAwesome: (photo.votes + 1) >= 10,
                                    };
                                }

                                return photo;
                            })]
                        };

                        cache.writeQuery({ query, data });
                    }
                })
            }),
        },
    ),
    graphql(
        gql(downvotePhoto),
        {
            props: ({ mutate }) => ({
                downvotePhoto: variables => mutate({
                    variables,
                    update: (cache, { data: { downvotePhoto } }) => {
                        if (downvotePhoto === null) {
                            return;
                        }

                        const query = gql(listAllPhotos);
                        const result = cache.readQuery({ query });

                        const data = {
                            listAllPhotos: [...result.listAllPhotos.map(photo => {
                                if (photo.id === downvotePhoto.photoId) {
                                    return {
                                        ...photo,
                                        votes: photo.votes - 1,
                                        isAwesome: (photo.votes - 1) >= 10,
                                    };
                                }

                                return photo;
                            })]
                        };

                        cache.writeQuery({ query, data });
                    }
                })
            })
        },
    ),
)(Photo);