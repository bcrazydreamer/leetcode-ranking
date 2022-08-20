import { Box, Typography, Divider, Skeleton, Avatar } from '@mui/material';

const ordinalSuffix = function (val) {
  const mod = val % 10;
  let p = '';
  if (mod === 1 && val !== 11) {
    p = 'st';
  } else if (mod === 2 && val !== 12) {
    p = 'nd';
  } else if (mod === 3 && val !== 13) {
    p = 'rd';
  } else {
    p = 'th';
  }
  return val + p;
};

const UserDetail = ({ user }) => {
  return (
    <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" width="100%">
        <Avatar
          src={`/api/imageProxy?url=${user?.user?.profile?.userAvatar}`}
          alt={user.user.username}
          sx={{ width: 50, height: 50 }}
        />
        <Box display="flex" ml={2}>
          <Typography variant="h6">{user.user.username}</Typography>
        </Box>
      </Box>
      <Box width="100%" display="flex" justifyContent="end">
        <Typography variant="body1" sx={{ color: '#482997' }}>
          Rating {parseInt(user.currentRating)}
        </Typography>
      </Box>
    </Box>
  );
};

const Skel = () => {
  return (
    <Box display="flex" alignItems="center" px={4} py={2} justifyContent="space-between">
      <Box display="flex" alignItems="center" gap={2}>
        <Skeleton variant="rounded" width={50} height={20} />
        <Skeleton variant="circular" width={50} height={50} />
        <Skeleton variant="rounded" width={210} height={20} />
      </Box>
      <Skeleton variant="rounded" width={210} height={20} />
    </Box>
  );
};

const getLink = ({ username = '', country = '' }) => {
  let base = 'https://leetcode.com/';
  if(country === "CN") {
    base = base.replace('com', 'cn');
  }
  return base + username;
};

const UsersList = ({ users, loading }) => {
  return (
    <>
      {loading ? (
        <>
          {[...new Array(10)].map((v) => (
            <Skel key={v} />
          ))}
        </>
      ) : (
        <>
          {users.map((user, i) => {
            return (
              <Box key={i} pt={'30px'} px={'10px'}>
                <a
                  href={getLink({ username: user.user.username, country: user.dataRegion })}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Box display="flex" pb="30px" px="10px" alignItems="center">
                    <Box>
                      <Typography variant="body2">{ordinalSuffix(user.currentGlobalRanking)}</Typography>
                    </Box>
                    <Box ml={2} width="100%">
                      <UserDetail user={user} />
                    </Box>
                  </Box>
                </a>
                <Divider />
              </Box>
            );
          })}
        </>
      )}
    </>
  );
};

export default UsersList;
