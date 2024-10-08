// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Carousel = ({ items }) => {
    return (
        <Swiper
            slidesPerView={1}
            speed={1000}
            loop={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-svh"
            style={{
                "--swiper-pagination-color": "#d89b21",
                "--swiper-navigation-color": "#d89b21",
            }}
        >
            {items.map((item) => (
                <SwiperSlide key={item.title}>
                    <a
                        href={`${item.slug}`}
                        className="relative block group"
                    >
                        <div className="w-full h-svh">
                            <img
                                className="cursor-pointer object-cover rounded w-full h-full"
                                src={item.image}
                            />
                        </div>
                        <div className="absolute opacity-50 w-full bottom-0 pt-4 pb-8 left-0 justify-center items-center text-center text-sekano-dark bg-white">
                            <h2 className="text-xl lg:text-4xl pt-2">
                                {item.title}
                            </h2>
                        </div>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;