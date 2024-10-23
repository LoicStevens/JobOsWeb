import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Roger Scott',
      position: 'System Analyst',
      quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, atque!',
      image: '/pic1.jpg', // Assurez-vous que l'image est dans le dossier public
    },
    {
      id: 2,
      name: 'Alice Johnson',
      position: 'Marketing Manager',
      quote: 'Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/pic1.jpg', // Assurez-vous que l'image est dans le dossier public
    },
    {
      id: 3,
      name: 'Michael Smith',
      position: 'Interface Designer',
      quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/pic1.jpg', // Assurez-vous que l'image est dans le dossier public
    },
  ];

  const settings = {
    dots: true, // Afficher les points de navigation
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Nombre de témoignages affichés à la fois
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 témoignages pour les écrans plus petits
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 1 témoignage pour les très petits écrans
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-8">Témoignages</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg min-h-[300px] transition-transform transform hover:scale-105"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-32 w-32 rounded-full object-cover mb-4"
            />
            <blockquote className="italic text-gray-600 mb-2">
              &quot;{testimonial.quote}&quot;
            </blockquote>
            <h3 className="text-lg font-bold">{testimonial.name}</h3>
            <p className="text-gray-400">{testimonial.position}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
