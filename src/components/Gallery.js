import Carousel from "react-grid-carousel";
import GalleryItem from "./GalleryItem";

export default function Gallery() {
    return (
        <Carousel
        cols={1}
        rows={1}
        gap={0}
        autoplay={2500}
        loop>
            <Carousel.Item>
            <GalleryItem image="https://picsum.photos/1920/1080/?random=1"
            copy="Vær med fra starten"
            ctaLink="/morgenyoga"
            ctaCopy="Klik for at tilmelde dig!"/>
            </Carousel.Item>
            <Carousel.Item>
            <GalleryItem image="https://picsum.photos/1920/1080/?random=2"
            copy="Start din morgen friskt!"
            ctaLink="/morgenyoghurt"
            ctaCopy="Se Tilbud!"/>
            </Carousel.Item>
            <Carousel.Item>
            <GalleryItem image="https://picsum.photos/1920/1080/?random=3"
            copy="tips & tricks"
            ctaLink="/faq"
            ctaCopy="Direkte fra eksperterne!"/>
            </Carousel.Item>
        </Carousel>
    )
}