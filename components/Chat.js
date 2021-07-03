import { Avatar } from "@material-ui/core";
import styled from "styled-components";

function Chat({id, users}) {
    return (
        <Container>
            <UserAvatar />
            <p>Reciepient email</p>
        </Container>
    )
}

export default Chat

const Container = styled.div``;

const UserAvatar = styled(Avatar)`
margin: 5px;
margin-right: 15px;
`;