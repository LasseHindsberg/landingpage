// src/components/galleryItem.js
import Carousel from "react-grid-carousel";
import './GalleryItem.scss';

export default function GalleryItem({ image, copy, ctaLink, ctaCopy}) {
    return(

        <Carousel.Item>
    <div className="carouselItem">
        <img src={image} alt="" className="carouselItem__image"/>
        <div className="carouselItem__content">
            <p className="carouselItem__copy">{copy}</p>
            <a href={ctaLink} className="carouselItem__CTA" 
            //eslint-disable-next-line
            onClick={gtag([ "event", "select_content", { "content_type": ctaLink}])}>{ctaCopy}</a>
        </div>
    </div>
</Carousel.Item>
    );
}