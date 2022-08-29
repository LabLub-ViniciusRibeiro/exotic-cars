import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { useRef, useState } from 'react';
import CarouselContainer from './styles';

const initialLeftOffset = getResponsiveOffset();

function getResponsiveOffset(): number {
    const windowWidth = window.innerWidth;
    switch (true) {
        case (windowWidth < 600):
            return windowWidth / 2.8;
        case (windowWidth >= 600 && windowWidth <= 900):
            return windowWidth / 2.5;
        case (windowWidth > 900):
            return windowWidth / 2.8;
        default:
            return 0;
    }
}

interface Props {
    imgUrls: string[],
    imgIndex: number,
    setImgIndex: React.Dispatch<React.SetStateAction<number>>
}

function Carousel({ imgUrls, imgIndex, setImgIndex }: Props) {

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

    function handleClick(index: number) {
        if (index > imgIndex) {
            for (let i = 0; i < (index - imgIndex); i++) {
                setLeft(value => value - (ref.current?.width as number + 50))
            }
        }

        if (imgIndex > index) {
            for (let i = 0; i < (imgIndex - index); i++) {
                setLeft(value => value + (ref.current?.width as number + 50))
            }
        }
        setImgIndex(index);
    }

    return (
        <CarouselContainer left={left} >
            {imgIndex !== 0 && <ArrowLeft size={48} onClick={handlePreviousClick} />}
            <div>
                {imgUrls.map((img, index) => {
                    return (
                        <div className={index === imgIndex ? `active` : ''} key={index}
                            onClick={() => handleClick(index)}>
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