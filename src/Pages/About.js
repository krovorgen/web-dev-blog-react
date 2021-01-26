import React, { Component } from 'react';
import { Container, Nav, Row, Tab, Col } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-3">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Максим</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Роман</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Надежда</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Любовь</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://sokolov.pl/photos/razrabotka-saytov/1@1200w.jpg" className="d-block w-100" alt="create site"/>
                                    <p class="mt-2">Хороший сайт не является гарантом успешного бизнеса. Комплексная работа, которая включает настройку контекстной рекламы, Seo-продивжение и оптимизацию, SMM и работа в соцсети, гарантирует вам поток целевых клиентов, которые готовы совершать конверсионные действия у вас на сайте. Посмотрите на примеры наших бизнес-проектов.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://protraffic.com/wp-content/uploads/2020/07/reklama-v-instagrame.jpg" className="d-block w-100" alt="create site"/>
                                    <p class="mt-2">Меня зовут Роман и я помогаю предпринимателям увеличить прибыль с их аккаунтов. Основная деятельность направлена на рекламу в сети инстаграм. Я перепробовал много стратегий и способов увеличения продаж. У меня есть свои наработки того, как с минимальными вложениями можно добиться высоких показателей. Нацелен на длительное сотрудничество с моими клиентами.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://cdn-front.kwork.ru/pics/t3/45/9717086-1600760145.jpg" className="d-block w-100" alt="create site"/>
                                    <p class="mt-2">Сторисмейкер – специалист, профессионально занимающийся сторисмейкеством для блогеров и бизнеса. Простыми словами это человек, который берет на себя всю работу по сторис: оформление, съемку, создание игр, подбор шрифтов, музыки, фильтров.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://userinterfacetalk.com/wp-content/uploads/2015/03/ui-ux-design.jpg" className="d-block w-100" alt="create site"/>
                                    <p class="mt-2">Заказать iu ux дизайн в нашей компании, значит получить тот интерфейс, который будет полностью отвечать специфике деятельности компании и потребностям пользователя. На самом деле, кажущаяся сложной аббревиатура означает User Interface (дословно пользовательский интерфейс) и User eXperience (опыт пользователя). Таким образом дизайнер создает такой интерфейс, в котором сочетаются красивый фирменный стиль и высокий уровень юзабилити и пользователи всегда получают то, зачем пришли на сайт. </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;