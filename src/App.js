import Layout from "components/layout";
import { GlobalStyle } from "./styled/global";
import TweetBox from 'components/tweetbox';
import Feed from 'components/feed';

function App() {
  return <>
    <GlobalStyle />
    <Layout>
      <TweetBox />
      <Feed />

      {/* TweetList */}
    </Layout>
  </>
}

export default App;
