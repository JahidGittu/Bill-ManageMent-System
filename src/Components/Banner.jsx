import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Banner = () => {
    const [banners, setBanners] = useState([]);

    // Step 1: Create refs for buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        fetch('/BannerData.json')
            .then(res => res.json())
            .then(data => setBanners(data));
    }, []);

    return (
        <div className="w-full relative">
            <Swiper
                modules={[Navigation]}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                    // Step 2: Assign refs after DOM is ready
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="rounded-xl overflow-hidden relative"
            >
                {banners.map(banner => (
                    <SwiperSlide key={banner.id}>
                        <div className="relative">
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-[450px] object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-start px-8 text-white">
                                <h2 className="text-3xl font-bold mb-2">{banner.title}</h2>
                                <p className="text-lg">{banner.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Step 3: Buttons with ref */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex justify-center gap-2">
                    <button ref={prevRef} className="btn btn-xs">❮</button>
                    <button ref={nextRef} className="btn btn-xs">❯</button>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;
