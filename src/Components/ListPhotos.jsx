import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { listAllPhotos } from '../graphql/queries';
import { S3Image } from 'aws-amplify-react';

class ListPhotos extends React.Component {

    state = {
        urls: null
    };

    handleVote = vote => {
        switch (vote) {
            case 'up':
            case 'down':
                break;
        }
    }

    renderPhoto = ({ id, votes, isAwesome, file: { key } }) => (
        <li key={id} >
            <h1>{votes} votes{isAwesome && ', is awesome!!'}</h1>
            <div>
                <input type="button" value="UpVote" onClick={this.handleVote.bind(this, 'up')} />
                <input type="button" value="DownVote" onClick={this.handleVote.bind(this, 'down')} />
            </div>
            <S3Image imgKey={key.match(/\/([^\/]+)$/)[1]} />
        </li>
    )

    render() {
        const { photos } = this.props;

        return (
            <ul>
                {photos.map(this.renderPhoto)}
            </ul>
        );
    }
}

export default graphql(
    gql(listAllPhotos),
    {
        props: ({ data: { listAllPhotos } }) => ({
            photos: listAllPhotos || []
        }),
        options: {
            fetchPolicy: 'cache-and-network',
        }
    }
)(ListPhotos);
