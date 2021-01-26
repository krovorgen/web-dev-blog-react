import React, { Component } from 'react';
import { Container, Card, CardDeck, Button } from 'react-bootstrap';
import CarouselBox from "../Components/CarouselBox";

class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4">Our Team</h2>
                    <CardDeck className="m-4">
                        <Card>
                            <Card.Img 
                            variant="top" 
                            src="https://telegra.ph/file/1dde1b056f0b74fe8d6e3.jpg"
                            />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title className="text-center">Developers</Card.Title>
                                <Card.Text>Создание сайтов любой сложности командой профессионалов. Мы сделали 100+ проектов! · Порталы. Корпоративные сайты. Интернет-магазины. </Card.Text>
                                <Button>Заказать</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img 
                            variant="top" 
                            src="https://www.domreklam22.ru/wp-content/uploads/2020/08/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%8B.jpg"
                            />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title className="text-center">Сommercial</Card.Title>
                                <Card.Text>Делаем вашу страницу интересной и стимулируем подписчиков почаще заглядывать к вам на страницу или на сайт за покупками.</Card.Text>
                                <Button>Заказать</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img 
                            variant="top" 
                            src="https://vncoder.vn/upload/img/news/1587286531.png"
                            />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <Card.Title className="text-center">UX/UI design</Card.Title>
                                <Card.Text>UX дизайнер разрабатывает самый оптимальный механизм взаимодействия пользователя с сайтом.</Card.Text>
                                <Button>Заказать</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}

export default Home;