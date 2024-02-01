import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Slider = ({ slides }) => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((quote, inx) => (
                <SwiperSlide key={inx}>
                    <div className='quote'>{quote}</div>
                </SwiperSlide>)
            )}
        </Swiper>
    )
}

export default Slider