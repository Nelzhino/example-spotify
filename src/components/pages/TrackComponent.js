import React from 'react';

const IFrame = ({src, width, height, frameBorder, allow}) => {
    const iframe = {
        __html: `<iframe src=${src} width=${width}  height=${height} frameBorder=${frameBorder}  allow=${allow} />`
    }

    return (
        <div dangerouslySetInnerHTML={ iframe } />
    )
}


const TrakComponent = ({ track }) => {

    return (
        <tr>
            <td><img src={ track.album.images[0].url } alt="..." style={ {width:"50px"} } /></td>
            <td>{ track.album.name }</td>
            <td>{ track.name }</td>
            <td>
                <IFrame src={`https://open.spotify.com/embed/track/${ track.id }`} width="300" height="80" frameBorder="0"  allow="encrypted-media" />
            </td>
        </tr>
    )
}

export default TrakComponent;