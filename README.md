# Donald Ipsum Twitter Bot #
A very simple Twitter bot, which retrieves a sentence of glorious Donald Ipsum from [the Donald Ipsum API][api], and posts it to [the Donald Ipsum Twitter account][twitter].

[api]: https://github.com/monooso/api.donaldipsum.net
[twitter]: https://twitter.com/donaldipsum

## Configuration ##
The bot requires that the @DonaldIpsum [Twitter OAuth tokens][tokens] be provided via environment variables, as follows.

[tokens]: https://dev.twitter.com/oauth/overview/application-owner-access-tokens "Twitter developer documentation"

| Name                          | Description             |
|:------------------------------|:------------------------|
| `TWITTER_ACCESS_TOKEN_KEY`    | The access token key    |
| `TWITTER_ACCESS_TOKEN_SECRET` | The access token secret |
| `TWITTER_CONSUMER_KEY`        | The consumer key        |
| `TWITTER_CONSUMER_SECRET`     | Left as an exercise for the reader |

## Example usage ##

```shell
$> TWITTER_ACCESS_TOKEN_KEY=abc123 \
   TWITTER_ACCESS_TOKEN_SECRET=xyx987 \
   TWITTER_CONSUMER_KEY=123abc \
   TWITTER_CONSUMER_SECRET=987xyz \
   npm start
```