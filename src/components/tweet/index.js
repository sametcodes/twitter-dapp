import Blockies from 'react-blockies';
import { TweetContainer, Avatar, TweetContent, TweetOwnerAddress } from 'styled/tweet';

const Tweet = ({ data }) => {
    const { text, owner } = data;
    return <TweetContainer>
        <Avatar>
            <Blockies
                seed={owner}
                size={15}
                scale={3}
                color="#dfe"
            />
        </Avatar>
        <TweetContent>
            <TweetOwnerAddress>{owner}</TweetOwnerAddress>
            <div>{text}</div>
        </TweetContent>
    </TweetContainer>
}


export default Tweet;