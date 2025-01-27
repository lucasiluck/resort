import { Container, Content, Navigation } from './style';
import { Images } from './DataSlides'
import { useEffect, useState } from 'react';
import ArrowLeft from '../../assets/arrowLeft.svg';
import ArrowRight from '../../assets/arrowRight.svg';

export function SlideShow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = (): void => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % Images.length)
    }

    const goToPrevious = (): void => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + Images.length) % Images.length)
    }

    const goToSlide = (index: number): void => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 7000);
        return () => clearInterval(interval);
    }, [currentIndex]);


    return (
        <Container>
            <Content>
                <div className='arrow'>
                    <button onClick={goToPrevious}><img src={ArrowLeft} alt="Anterior" /></button>
                    <button onClick={goToNext}><img src={ArrowRight} alt="Próxima" /></button>
                </div>
                <div className='nav'>
                    {Images.map((_, index) => (
                        <Navigation
                            key={index}
                            activate={index === currentIndex}
                            index={index - Math.floor(Images.length / 2)}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
                {Images.map((src, index) => (
                    <img

                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                    />
                ))}

            </Content>
        </Container>
    );
}