import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { useRef, useState } from 'react';
import CarouselContainer from './styles';

const initialLeftOffset = getResponsiveOffset();

function getResponsiveOffset(): number {
    const windowWidth = window.innerWidth;
    switch (true) {
        case (windowWidth < 600):
            return windowWidth / 3;
        case (windowWidth >= 600 && windowWidth <= 900):
            return windowWidth / 2.5;
        case (windowWidth > 900):
            return windowWidth / 2.8;
        default:
            return 0;
    }
}

interface Props {
    imgUrls: string[]
}

function Carousel({ imgUrls }: Props) {

    const [imgIndex, setImgIndex] = useState<number>(0);
    const [left, setLeft] = useState(initialLeftOffset);
    const ref = useRef<HTMLImageElement>(null);

    function handlePreviousClick() {
        if (imgIndex !== 0) {
            setImgIndex(indexValue => indexValue - 1);
            setLeft(value => value + (ref.current?.width as number + 50))
        }
    }

    function handleNextClick() {
        if (imgIndex < imgUrls.length - 1) {
            setImgIndex(indexValue => indexValue + 1);
            setLeft(value => value - (ref.current?.width as number + 50))
        }
    }

    return (
        <CarouselContainer left={left} >
            {imgIndex !== 0 && <ArrowLeft size={48} onClick={handlePreviousClick} />}
            <div>
                {imgUrls.map((img, index) => {
                    return (
                        <div className={index === imgIndex ? `active` : ''} key={index}>
                            <img src={img} ref={ref} />
                        </div>
                    )
                })}
            </div>
            {imgIndex !== imgUrls.length - 1 &&
                <ArrowRight size={48} onClick={handleNextClick} />}
        </CarouselContainer>
    )
}

export default Carousel