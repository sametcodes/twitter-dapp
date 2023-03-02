import { useContractRead } from 'wagmi'
import Contract from 'contract';
import Tweet from 'components/tweet'

import { TweetFeed } from 'styled/feed'

const Feed = () => {
    const {data, isLoading} = useContractRead({
        address: Contract.address,
        abi: Contract.abi,
        functionName: 'getTweets',
        watch: true
    })

    if(isLoading) return <div>Loading...</div>

    return <TweetFeed>
        {data.map(tweet => <Tweet key={tweet.tweetId} data={tweet} />)}
    </TweetFeed>
}

export default Feed;