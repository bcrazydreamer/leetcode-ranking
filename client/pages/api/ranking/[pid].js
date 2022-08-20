export default function handler(req, res) {
  let payload = {
    query: `{
      globalRanking(page: ${req.query.pid || 1}) {
        totalUsers
        userPerPage
        rankingNodes {
          currentRating
          currentGlobalRanking
          dataRegion
          user {
            username
            profile {
              userAvatar
            }
          }
        }
      }
  }`,
  };

  if (req.query.pageInfo === 'true') {
    payload = {
      query: `{
        globalRanking(page: 1) {
          totalUsers
          userPerPage
        }
      }`,
    };
  }

  fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      origin: 'https://leetcode.com',
      pragma: 'no-cache',
      referer: 'https://leetcode.com/contest/globalranking/',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      res.status(200).json({ data: data?.data?.globalRanking || {} });
    })
    .catch((err) => {
      console.error(err);
      res.status(200).json({ data: { totalUsers: 0, userPerPage: 0, rankingNodes: [] } });
    });
}
