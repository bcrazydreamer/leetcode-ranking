import { Box, Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ totalPage, currentPage, onChange }) => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <MuiPagination
        count={totalPage}
        defaultPage={currentPage}
        onChange={(_, v) => onChange && onChange(v)}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
};

export default Pagination;
