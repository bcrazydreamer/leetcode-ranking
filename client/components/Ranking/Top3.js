/* eslint-disable @next/next/no-img-element */
import { Box, Skeleton } from '@mui/material';

const Skel = ({ sx, ...rest }) => {
  return (
    <Box borderRadius="50%" {...rest} sx={sx} bgcolor="#fff">
      <Skeleton variant="circular" sx={sx} />
    </Box>
  );
};

const Top3 = ({ users, loading }) => {
  return (
    <>
      <Box width="100%" pt={10} display="flex" justifyContent="center">
        <Box display="flex">
          <Box display="flex" justifyContent="center" flexDirection="column">
            {loading ? (
              <Skel mr="-10px" sx={{ width: `100px`, height: `100px` }} />
            ) : (
              <>
                <Box
                  overflow="hidden"
                  borderRadius="50%"
                  height="100px"
                  width="100px"
                  mr="-10px"
                  border="5px solid #C0C0C0"
                  position="relative"
                >
                  <img
                    src={`/api/imageProxy?url=${users[1]?.user?.profile?.userAvatar}`}
                    alt={users[1]?.user.username}
                    height="100%"
                    width="100%"
                  />
                </Box>
              </>
            )}
          </Box>
          <Box display="flex" justifyContent="center" flexDirection="column">
            {loading ? (
              <Skel mt={-5} zIndex={1} sx={{ width: `120px`, height: `120px` }} />
            ) : (
              <>
                <Box
                  overflow="hidden"
                  borderRadius="50%"
                  height="120px"
                  width="120px"
                  mt={-5}
                  zIndex={1}
                  border="5px solid #FFD700"
                  position="relative"
                >
                  <img
                    src={`/api/imageProxy?url=${users[0]?.user?.profile?.userAvatar}`}
                    alt={users[0]?.user.username}
                    height="100%"
                    width="100%"
                  />
                </Box>
              </>
            )}
          </Box>
          <Box display="flex" justifyContent="center" flexDirection="column">
            {loading ? (
              <Skel ml="-10px" sx={{ width: '100px', height: '100px' }} />
            ) : (
              <>
                <Box
                  overflow="hidden"
                  borderRadius="50%"
                  height="100px"
                  width="100px"
                  ml="-10px"
                  border="5px solid #CD7F32"
                  position="relative"
                >
                  <img
                    src={`/api/imageProxy?url=${users[2]?.user?.profile?.userAvatar}`}
                    alt={users[2]?.user.username}
                    height="100%"
                    width="100%"
                  />
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Top3;
