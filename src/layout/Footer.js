import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
  return (
    <footer>
      <h2>공지사항</h2>
      <div>
        <ul className='f_notice'>
          <li><Link to='/'>개인정보처리방침</Link></li>
          <li><Link to='/'>쇼핑몰약관</Link></li>
          <li><img src={`${process.env.PUBLIC_URL}/images/footer_sns_2.gif`} alt='푸터인스타' /></li>
        </ul>
        <div className='border'></div>
      </div>
      <ul className='f_info'>
        <li>고객센터</li>
        <li>02-2166-7770</li>
        <li>평일 10:00 ~ 17:00</li>
        <li>(점심: 12:00 ~ 13:00)</li>
      </ul>
      <div className='border'></div>

      <div className='f_company'>
        <h3>지니펫 사업자 정보 확인&nbsp;
          <img src={`${process.env.PUBLIC_URL}/images/iconArrow_bottom.png`} alt='지니펫 로고' />
        </h3>
      </div>

      <div>
        <ul className='f_bottom'>
          <li><img src={`${process.env.PUBLIC_URL}/images/ci_grey_kgclifengin.png`} alt='사업자이미지' /></li>
          <li>경기도 과천시 과천대로 7길 65, 과천상상자이타워 A-105~108(1층)</li>
          <li>상호 및 대표자 : (주)케이지씨라이프앤진, 정철</li>
          <li>사업자등록번호 : 211-87-38806</li>
          <li>통신판매신고번호 : 제 2024-경기과천-0227 호</li>
          <li>사업자 정보확인 | 호스팅서비스제공자 : (주)케이지씨라이프앤진</li>
          <li>Email: ginipet@kgclifengin.com</li>
          <li>ⓒ kgclifengin Corp.</li>
          <li>구매안전(에스크로)서비스 가입사실 확인</li>
          <li>고객님은 안전거래를 위해 현금등으로 결제시 저희 쇼핑몰에 가입한KCP의 구매 안전 서비스를 이용하실 수 있습니다.</li>
        </ul>
        <img src={`${process.env.PUBLIC_URL}/images/logo_grey.png`} alt='푸터로고'/>
      </div>
      <div className='border'></div>
    </footer>
  );
}

export default Footer;