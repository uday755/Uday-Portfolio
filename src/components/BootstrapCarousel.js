import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function BootstrapCarousel() {
    return (

        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{height : '70vh' , width : '100vw'}}
                        src="./images/1.jpg"
                        alt='Image 1'
                    />
                    <Carousel.Caption>
                        <h3>Welcome to my Portfolio - built for programmers</h3>
                        <p >"Code can make you God or can take you on Road"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{height : '70vh' , width : '100vw'}}
                        src="./images/2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>A developer can understand a developer</h3>
                        <p>"Code Never Lies ,Comments Sometimes Do" --- Ron Jeffries</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{height : '70vh' , width : '100vw'}}
                        src="./images/3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Life for Code , Code for Life</h3>
                        <p>"First Solve the Problem , Then write the Code" --- Martin Flower</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    )
}
