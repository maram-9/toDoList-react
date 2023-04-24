import { Wrapper, SectionBody, Header, Title } from './styled';

const Section = ({ title, body, extraHeaderContent }) => (
    <Wrapper>
        <Header>
            <Title>{title}</Title>
                {extraHeaderContent}
        </Header>
        <SectionBody>
            {body}
        </SectionBody>
    </Wrapper>
);

export default Section;