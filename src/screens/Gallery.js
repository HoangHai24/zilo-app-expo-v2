import React from 'react';
import Gallery from 'src/components/Gallery/Gallery'
const GalleryScreen = (props) => {
    const {data,index} = props.route.params;
    return (
        <Gallery data={data} index={index} />
    );
};

export default GalleryScreen;
