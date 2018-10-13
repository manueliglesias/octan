import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { listAllPhotos } from '../graphql/queries';
import Photo from "./Photo";

class ListPhotos extends React.Component {

    state = {
        urls: null
    };

    renderPhoto = (photo) => (
        photo && <li key={photo.id} className={["Photo-Item", photo.isAwesome && "Is-Awesome"].join(' ')}>
            <Photo photo={photo} />
        </li>
    )

    render() {
        const { photos } = this.props;

        return (
            <ul>
                {[...photos].sort((a, b) => -`${a.votes}`.localeCompare(b.votes)).map(this.renderPhoto)}
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
