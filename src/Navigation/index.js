import {toAuthor, toTasks} from "../routes";
import { List, Item, StyledNavLink, Nav } from "./styled";

const Navigation = () => {
    return (
        <Nav>
            <List>
                <Item>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
                </Item>
            </List>
        </Nav>
    );
};

export default Navigation;