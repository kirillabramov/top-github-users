import React from 'react';
import styled from 'styled-components';



const UserCard = ({ user }) => {
    const { avatar_url, login, html_url, name, bio, location, email } = user;
    return(
        <Wrapper>
            <Avatar>
                <AvatarImg src={avatar_url}></AvatarImg>
            </Avatar>
            <UserInfo>
                <UserTitle>
                    <UserNickname href={html_url} target="_blank">
                        { login }
                    </UserNickname>
                    <UserName>
                        { name }
                    </UserName>
                </UserTitle>
                <UserBio>
                    { bio }
                    <UserContacts>
                        <UserLocation>
                            <svg className="octicon octicon-location" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                            { location }
                        </UserLocation>
                        {!email ? null :                         
                        <UserEmail href={`mailto:${email}`}>
                            <svg className="octicon octicon-mail" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fillRule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
                            {email}
                        </UserEmail>}
                    </UserContacts>

                </UserBio>
            </UserInfo>
        </Wrapper>
    )
}

export default UserCard;


const Wrapper = styled.div`
    display: flex;
    border-bottom: 1px solid #ddd;
    padding-bottom: 30px;
    margin-top: 30px;
`;

const Avatar = styled.div`

`;

const AvatarImg = styled.img`

    width: 50px;
    height: 50px;
    border-radius: 3px;

`;

const UserInfo = styled.div``;
const UserTitle = styled.div``;
const UserContacts = styled.div`
    display: flex;
    margin-top: 5px;
`;
const UserLocation = styled.div`
    margin-right: 20px;
    svg{
        margin-right: 5px;
        position: relative;
        bottom: 2px;
    }
`;
const DefaultLink = styled.a`
    &:hover{
        text-decoration: none;
        color: #007bff;
    }
`;
const UserEmail = styled(DefaultLink)`
    svg{
        position: relative;
        bottom: 1px;
        margin-right: 5px;
    }

`;

const UserBio = styled.div`
    margin-left: 10px;
`;



const UserNickname = styled(DefaultLink)`
    text-decoration: none;
    margin: 0 7px 0 10px;
`;
const UserName = styled.span`
    color: #000;
`;

