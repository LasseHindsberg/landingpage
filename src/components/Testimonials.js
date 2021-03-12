// src/components/Testimonials.js
import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";

export default function Testimonials() {
return (
<section className="testimonials">
    <TestimonialCard image="https://picsum.photos/200/200?random=1"
        copy="Nemo quos illum fugiat dolores! Eos cupiditate expedita eligendi eveniet! Adipisci veritatis dignissimos aut. Ad
            officiis dolores voluptatem corporis porro odio illo pariatur quia earum quaerat, veniam sequi id accusamus!" />
    <TestimonialCard image="https://picsum.photos/200/200?random=2"
        copy="Nemo quos illum fugiat dolores! Eos cupiditate expedita eligendi eveniet! Adipisci veritatis dignissimos aut. Ad
            officiis dolores voluptatem corporis porro odio illo pariatur quia earum quaerat, veniam sequi id accusamus!" />
    <TestimonialCard image="https://picsum.photos/200/200?random=3"
        copy="Nemo quos illum fugiat dolores! Eos cupiditate expedita eligendi eveniet! Adipisci veritatis dignissimos aut. Ad
            officiis dolores voluptatem corporis porro odio illo pariatur quia earum quaerat, veniam sequi id accusamus!" />
</section>
)
}