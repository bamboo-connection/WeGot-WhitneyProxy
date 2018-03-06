import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from '../../../lib/react-images';

function SlideShowView(props) {
  const gridViewButton = (
    <button
      className="grid-view-button"
      onClick={() => props.handleGridButtonClick()}
    ><i className="fa fa-th fa-2x" />
    </button>);

  const name = props.placeName.toUpperCase();
  const placeName = <div className="place-name">{name}</div>;
  const photoCounter = <div className="slideshow-counter">{props.current + 1} of {props.photos.length}</div>;

  return (
    <div id="slideshow">
      <Lightbox
        images={props.photos}
        onClose={() => props.closeLightbox()}
        onClickPrev={() => props.clickPrev()}
        onClickNext={() => props.clickNext()}
        currentImage={props.current}
        isOpen={props.isLightboxOpen}
        height={400}
        width={1600}
        customControls={[gridViewButton, placeName, photoCounter]}
        className="image"
      />
    </div>
  );
}

SlideShowView.propTypes = {
  photos: PropTypes.shape.isRequired,
  current: PropTypes.number.isRequired,
  placeName: PropTypes.string.isRequired,
  isLightboxOpen: PropTypes.bool.isRequired,
  closeLightbox: PropTypes.func.isRequired,
  clickPrev: PropTypes.func.isRequired,
  clickNext: PropTypes.func.isRequired,
  handleGridButtonClick: PropTypes.func.isRequired,
};

export default SlideShowView;
