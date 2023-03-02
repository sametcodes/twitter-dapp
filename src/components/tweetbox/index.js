import { useEffect, useState } from "react";

import { TextArea, TweetBoxContainer } from "styled/tweetbox";
import { Button } from "styled/shared";

import Contract from 'contract'

import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";

const TweetBox = () => {
    const [tweet, setTweet] = useState('');

    const { config } = usePrepareContractWrite({
        address: Contract.address, abi: Contract.abi,
        functionName: "createTweet", args: [tweet, false, 0]
    })
    const { write, data } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    const onChange = (event) => {
        setTweet(event.target.value);
    }

    // TODO: clear the value of textarea if TX is successful

    return <TweetBoxContainer>
        <TextArea disabled={isLoading} onChange={onChange} placeholder="What's happening?" />
        <Button style={{ marginTop: 10 }} onClick={write}>
            {isLoading ? 'Sending...' : 'Send'}
        </Button>
    </TweetBoxContainer>
}

export default TweetBox;