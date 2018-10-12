import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { listAllPhotos } from '../graphql/queries';
import { S3Image } from 'aws-amplify-react';

export default class Photo extends React.Component {

    handleVote = vote => {
        switch (vote) {
            case 'up':
            case 'down':
                break;
        }
    }

    render() {
        const { photo: { id, votes, isAwesome, file: { key } } } = this.props;
        return (
            <div className="Photo">
                <strong>{votes} votes{isAwesome && ', is awesome!!'}</strong>
                <div>
                    <input type="button" value="UpVote" onClick={this.handleVote.bind(this, 'up')} />
                    <input type="button" value="DownVote" onClick={this.handleVote.bind(this, 'down')} />
                </div>
                <S3Image imgKey={key.match(/\/([^\/]+)$/)[1]} />
            </div>
        )
    }
}
