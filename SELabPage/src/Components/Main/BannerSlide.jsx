// Components/BannerSlide.jsx
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const bannerImages = ["/Images/Banner1.png", "/Images/Banner2.png", "/Images/Banner3.png"];

const BannerSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = bannerImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [total]);

  return (
    <SliderWrapper>
      <SlideTrack currentIndex={currentIndex}>
        {bannerImages.map((src, index) => (
          <Slide key={index}>
            <img src={src} alt={`banner-${index}`} />
          </Slide>
        ))}
      </SlideTrack>
    </SliderWrapper>
  );
};

export default BannerSlide;

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #1e1e1e;
  height: 45vh; /* ✅ 슬라이드 높이 지정 */

  @media (max-width: 1024px) {
    height: 35vh; /* 태블릿 정도 */
  }

  @media (max-width: 768px) {
    height: 30vh; /* 모바일 */
  }

  @media (max-width: 480px) {
    height: 18vh; /* 작은 모바일 */
  }

  @media (max-width: 320px) {
    height: 13vh; /* ✅ 초소형 화면 대응 */
  }
`;

const SlideTrack = styled.div`
  display: flex;
  transform: translateX(${({ currentIndex }) => `-${currentIndex * 100}%`});
  transition: transform 0.8s ease-in-out;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  height: 45vh; /* ✅ 슬라이드 높이 지정 */

  @media (max-width: 1024px) {
    height: 35vh; /* 태블릿 정도 */
  }

  @media (max-width: 768px) {
    height: 30vh; /* 모바일 */
  }

  @media (max-width: 480px) {
    height: 18vh; /* 작은 모바일 */
  }

  @media (max-width: 320px) {
    height: 13vh; /* ✅ 초소형 화면 대응 */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;
