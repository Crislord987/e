'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const products = [
  {
    id: 1,
    name: 'Roll Up Banners',
    description: 'Banners retráctiles de alta calidad para eventos y exhibiciones',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1200&fit=crop',
  },
  {
    id: 2,
    name: 'Banner Stands Premium',
    description: 'Estructuras profesionales para presentaciones corporativas',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1200&fit=crop',
  },
  {
    id: 3,
    name: 'Banners Personalizados',
    description: 'Diseños únicos adaptados a tus necesidades',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=1200&fit=crop',
  },
  {
    id: 4,
    name: 'Señalización Corporativa',
    description: 'Soluciones profesionales para espacios comerciales',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=1200&fit=crop',
  },
  {
    id: 5,
    name: 'Impresión Gran Formato',
    description: 'Impresión de alta resolución en grandes dimensiones',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1200&fit=crop',
  },
  {
    id: 6,
    name: 'Material POP',
    description: 'Elementos publicitarios para punto de venta',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1200&fit=crop',
  },
];

export default function ProductSlider() {
  return (
    <div className="relative px-4 md:px-12 lg:px-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: -50,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            },
          },
          768: {
            slidesPerView: 2,
            coverflowEffect: {
              rotate: 0,
              stretch: -30,
              depth: 150,
              modifier: 2,
              slideShadows: false,
            },
          },
          1024: {
            slidesPerView: 3,
            coverflowEffect: {
              rotate: 0,
              stretch: -50,
              depth: 200,
              modifier: 2.5,
              slideShadows: false,
            },
          },
        }}
        className="product-swiper !pb-16"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="!h-auto">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-white transition-all duration-500 mx-2">
              {/* Image Container */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 via-pink-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Product Info - Always Visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{product.name}</h3>
                <p className="text-white/90 text-sm mb-4 drop-shadow-md">{product.description}</p>
                <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 duration-200">
                  Ver Detalles ›
                </button>
              </div>

              {/* Badge de nuevo o destacado */}
              <div className="absolute top-4 right-4 bg-cyan-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm z-10">
                Nuevo
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-pink-500 hover:text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="swiper-button-next-custom absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-pink-500 hover:text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <style jsx global>{`
        .product-swiper .swiper-pagination-bullet {
          background: #ec4899;
          opacity: 0.5;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }
        .product-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: linear-gradient(135deg, #ec4899, #06b6d4);
          width: 40px;
          border-radius: 6px;
        }
        .swiper-slide {
          height: auto;
          transition: all 0.5s ease;
          opacity: 1 !important;
        }
        .product-swiper {
          padding: 40px 0;
          overflow: visible;
        }

        /* Tarjetas laterales - más pequeñas */
        .swiper-slide:not(.swiper-slide-active) {
          transform: scale(0.75);
          opacity: 0.85;
        }

        /* Tarjeta central - destacada y más grande */
        .swiper-slide-active {
          transform: scale(1) !important;
          z-index: 10;
          opacity: 1 !important;
        }

        .swiper-slide-active .group {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
        }

        /* Efecto de brillo en la tarjeta activa */
        .swiper-slide-active .group::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1));
          border-radius: 1rem;
          pointer-events: none;
          z-index: 1;
        }

        /* Mantener las tarjetas laterales visibles */
        .swiper-slide-prev,
        .swiper-slide-next {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}