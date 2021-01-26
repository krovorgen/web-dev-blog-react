import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import forest from "../assets/Forest-0.jpg";
import forest_1 from "../assets/forest-1.jpg";
import forest_2 from "../assets/forest-2.jpg";
import forest_3 from "../assets/forest.jpg";

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ forest_1 }
                        alt="winter forest"
                    />
                    <Carousel.Caption>
                        <h3>Максим</h3>
                        <p>Для меня долгое время было загадкой, как что-то очень дорогое и технологичное может быть столь бесполезным. И вскоре я осознал, что компьютер — это глупая машина, обладающая способностями выполнять невероятно умные вещи, тогда как программисты — это умные люди, у которых талант делать невероятные глупости. Короче, они нашли друг друга.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ forest }
                        alt="autumn forest"
                    />
                    <Carousel.Caption>
                        <h3>Роман</h3>
                        <p>Счастье не зависит от количества денег… Но грустить лучше в «Бентли», чем в маршрутке.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ forest_2 }
                        alt="winter forest"
                    />
                    <Carousel.Caption>
                        <h3>Надежда</h3>
                        <p>Быть богатым и иметь много денег – не одно и то же. По настоящему богат, тот кто удовлетворён своей жизнью.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ forest_3 }
                        alt="winter forest"
                    />
                    <Carousel.Caption>
                        <h3>Любовь</h3>
                        <p>«Есть три ответа на результат дизайна – да, нет и НИЧЕГО СЕБЕ! «Ничего себе» – это то, к чему надо стремиться»</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;