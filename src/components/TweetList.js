import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteTweetAction } from "../actions/tweetsActions";
import moment from "moment";

export default function TweetList() {
  const tweets = useSelector((state) => state.tweets.tweets);
  return (
    <>
      {tweets.length === 0 ? (
        <>
          <h2 className="text-center mt-4">No hay Tweets</h2>
          <h3 className="text-center mt-4">🚀 Por favor tweetea algo </h3>
        </>
      ) : (
        tweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)
      )}
    </>
  );
}

function Tweet({ tweet }) {
  const dispatch = useDispatch();
  const deleteTweet = (id) => dispatch(deleteTweetAction(id));

  return (
    <Card className="mb-3 mt-3">
      <Card.Header className="text-right">
        {moment(tweet.date).fromNow()}
      </Card.Header>
      <Card.Body>
        <Card.Title>{tweet.name}</Card.Title>
        <Card.Text>{tweet.tweet}</Card.Text>
        <Button variant="danger" onClick={() => deleteTweet(tweet.id)}>
          Eliminar Tweet
        </Button>
      </Card.Body>
    </Card>
  );
}
