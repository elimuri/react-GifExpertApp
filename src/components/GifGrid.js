import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className="card-grid">
                    {images.map(image =>
                        <GifGridItem {...image} key={image.id} />
                    )}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}