import "./TestimonialCard.scss";

export default function TestimonialCard({ image, copy }) {
    return(

        <article className="testimonialCard">
        <img src={image} alt=""
        className="testimonialCard__image" />

        <p className="testimonialCard__content">{copy}</p>
    </article>
        );
}