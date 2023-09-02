import {toAuthor, toTasks} from "../routes";
import { List, Item, StyledNavLink, Nav } from "./styled";

const Navigation = () => {
    return (
        <Nav>
            <List>
                <Item>
                    <StyledNavLink to={toTasks()}>Tasks</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={toAuthor()}>About Author</StyledNavLink>
                </Item>
            </List>
        </Nav>
    );
};

export default Navigation;