import Container from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
    <Container>
        <Header title={"About Author"} />
        <Section
            title="Marzena Malka"
            body={
                <>
                <p>Hello, I am Marzena - mom, wife and person who love to learn all the time new things and expands horizons. </p> 
                <p>My present dream is to be <strong>frotend developer.</strong></p>
                <p>I love <b>sport, travelling</b> and <b>spend time with family and friends</b></p>
                </>
            }
            />
    </Container>
);

export default AuthorPage;