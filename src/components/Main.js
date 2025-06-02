import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

function Main(props) {
  return (
    <main>
      <article className='con1'>
        <h2>슬라이드 영역</h2>
        <Swiper
          modules={[Navigation,Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}>
          <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide1.png`} alt='슬라이드1' /></SwiperSlide>
          <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide2.png`} alt='슬라이드2' /></SwiperSlide>
        </Swiper>
      </article>

      <article className='con2 clearfi'>
        <h2>
          <img src={`${process.env.PUBLIC_URL}/images/title_shopping_icon.png`} alt='쇼핑 아이콘' />
        </h2>
        <p className='con2-title'><strong>지니펫쇼핑</strong>하러 가기</p>

        <div className='go-btn'>
          <p>바로가기</p>
        </div>

        <div className='con2-item clearfix'>
          <div className='item-slide'>
          <Swiper
            modules={[Navigation,Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 20000 }}>
            <SwiperSlide className='slide'><img src={`${process.env.PUBLIC_URL}/images/172162785542800.jpg`} alt='상품슬라이드1' /></SwiperSlide>
            <SwiperSlide className='slide'><img src={`${process.env.PUBLIC_URL}/images/172120232891700.jpg`} alt='상품슬라이드2' /></SwiperSlide>
          </Swiper>
          </div>

          <ul className='item'>
            <li>([영양제] 더캣 더케어)</li>
            <li>더케어 더캣 유리너스&스트레스</li>
            <li>(60g,2g*30ea)</li>
            <li>12,000원</li>
          </ul>

          <div className='item-btn'>
            <button><FontAwesomeIcon icon={faShoppingCart} /></button>
            <button><FontAwesomeIcon icon={faHeart} /></button>
            <button><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></button>
          </div>
        </div>
      </article>

      <article className='con3'>
        <h2>
          <img src={`${process.env.PUBLIC_URL}/images/banner_story_icon.png`} alt='지니펫스토리' />
        </h2>
        <div className='text-box'>
        <p className='con2-title'>지니펫<strong>스토리</strong></p>
        <p>소중한 반려견을 위한</p>
        <p>지니펫의 다양한 소식을 만나보세요</p>
        </div>

        <div className='go-btn'>
          <p>자세히보기</p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/images/banner_story_img.png`} style={{
          position: 'relative',
          zIndex: '100'
          }} />
      </article>

      <article className='con4'>
        <h2>
          <img src={`${process.env.PUBLIC_URL}/images/title_instar_icon.png`} alt='인스타그램' /> 
          지니펫 <strong>in 스타</strong>
        </h2>
        <div className='con4-item'>
          <p>지니펫의 다양한 소식과 정보를 만나보세요</p>

          <ul className='instar'>
            <li><img src={`${process.env.PUBLIC_URL}/images/snsTitle_1.jpg`} alt='최근게시물' /></li>
            <li><img src={`${process.env.PUBLIC_URL}/images/1672300757689.jpg`} alt='인스타그램 이미지1' /></li>
          </ul>

          <ul className='instar'>
            <li><img src={`${process.env.PUBLIC_URL}/images/snsTitle_2.jpg`}alt='베스트게시물' /></li>
            <li><img src={`${process.env.PUBLIC_URL}/images/1692944142605.jpg`} alt='인스타그램 이미지2' /></li>
          </ul>
        </div>
        
      </article>
    </main>
  );
}

export default Main;