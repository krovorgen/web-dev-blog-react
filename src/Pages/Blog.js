import React, { Component } from 'react';
import { Container, Media, Row, Col, ListGroup, Card } from 'react-bootstrap';

class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                alt="JavaScript"
                                src="https://mssolutions.it/sites/default/files/js_1024_0.png"
                            />
                            <Media.Body>
                                <h5>JavaScript</h5>
                                <p>
                                    Если на странице не просто отображается текст, а происходит нечто большее – это JS в действии. Например, отображается карта с возможностью изменения масштаба, воспроизводится видео, работает анимация или даже просто автоматически обновляется текст. JavaScript отвечает за динамический контент.
                                </p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3 br-5"
                                alt="HTML5"
                                src="https://brest.kbp.by/wp-content/uploads/2020/05/html.png"
                            />
                            <Media.Body>
                                <h5>HTML5</h5>
                                <p>
                                    HTML5 — это не продолжатель языка разметки гипертекста, а новая открытая платформа, предназначенная для создания веб-приложений использующих аудио, видео, графику, анимацию и многое другое.
                                </p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                alt="JavaScript"
                                src="https://cdn.worldvectorlogo.com/logos/css10.svg"
                            />
                            <Media.Body>
                                <h5>CSS3</h5>
                                <p>
                                    CSS — формальный язык описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML).
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML</ListGroup.Item>
                                <ListGroup.Item>CSS</ListGroup.Item>
                                <ListGroup.Item>JS</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title className="text-center">Side widget</Card.Title>
                                <Card.Text className="text-center">
                                    Веб-программирование — раздел программирования, ориентированный на разработку веб-приложений (программ, обеспечивающих функционирование динамических сайтов Всемирной паутины).
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;