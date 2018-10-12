import React from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { v4 as uuid } from 'uuid';
import { Auth } from 'aws-amplify';
import { listAllPhotos } from '../graphql/queries';
import { uploadPhoto } from '../graphql/mutations';

class UploadPhoto extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getDefaultState();
    }

    getDefaultState() {
        return {
            busy: false,
            file: '',
        };
    }

    handleChange(field, event) {
        const { target: { value, files } } = event;
        const [file,] = files || [];

        this.setState({
            [field]: file || value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        this.setState({ busy: true });

        const { uploadPhoto, bucket, region } = this.props;

        const visibility = 'public';

        const { file: selectedFile } = this.state;

        let file;

        if (selectedFile) {
            const { name: fileName, type: mimeType } = selectedFile;
            const [, , , extension] = /([^.]+)(\.(\w+))?$/.exec(fileName);

            const key = `${visibility}/${uuid()}${extension && '.'}${extension}`;

            file = {
                bucket,
                key,
                region,
                mimeType,
                localUri: selectedFile,
            };
        }

        try {
            await uploadPhoto({ file });

            this.setState({ busy: false });
        } catch (error) {
            console.error(error);
        }

        this.setState(this.getDefaultState());
    }

    render() {
        const { busy, file, file: { value: _, ...fileProps } } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>Image
                    <input type="file" onChange={this.handleChange.bind(this, 'file')} {...fileProps} />
                </label>
                <input disabled={busy || !file} type="submit" />
            </form>
        );
    }
}

export default graphql(
    gql(uploadPhoto),
    {
        props: ({ mutate, ownProps: { bucket, region } }) => ({
            uploadPhoto: variables => mutate({ variables }),
            bucket,
            region,
        }),
        options: {
            update: (cache, { data: { uploadPhoto } }) => {
                if (!uploadPhoto) {
                    return;
                }

                const query = gql(listAllPhotos);
                const result = cache.readQuery({ query });

                const data = { listAllPhotos: [...result.listAllPhotos, uploadPhoto] };

                cache.writeQuery({ query, data });
            }
        }
    }
)(UploadPhoto);
