import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Card } from '@mui/material';
import Header from './Header';
import Top3 from './Top3';
import UsersList from './UsersList';
import Pagination from './Pagination';

const Ranking = ({ data, page, totalPage }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // reset loading
  useEffect(() => {
    setLoading(false);
  }, [page]);

  const handleChange = (page) => {
    setLoading(true);
    router.push(`/ranking/${page}`);
  };

  return (
    <>
      <Header/>
      <Box px="25%" height="100vh">
        <Box height="100%">
          {(data?.rankingNodes?.slice(0, 3) || []).length === 3 && (
            <Top3 users={data?.rankingNodes?.slice(0, 3)} loading={loading} />
          )}
          {data?.rankingNodes?.length !== 0 && (
            <>
              <Box component={Card} my={2} py={2}>
                <Pagination totalPage={totalPage} currentPage={page} onChange={handleChange} />
              </Box>
              <Card sx={{ mt: 2 }}>
                <UsersList users={data.rankingNodes} loading={loading} />
              </Card>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Ranking;
