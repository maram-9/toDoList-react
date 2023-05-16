import React from "react";
import Container from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
    <Container>
        <Header title={"O autorze"} />
        <Section
            title="Marzena Malka"
            body={
                <>
                <p>Czesc, nazywam sie Marzena Malka. Dziewczna z wielkimi marzeniami i ambicjami, ktora od ponad 10 lat mieszaka w Austrii. </p> 
                <p>Obecnym pragnieniem jest zostac <strong>frotnend developerem.</strong></p>
                <p>Uwielbiam <b>sport, podroze</b> i <b>czas spedzony z rodzina.</b></p>
                </>
            }
            />
    </Container>
);

export default AuthorPage;