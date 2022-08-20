import { Box, Pagination as MuiPagination, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Pagination = ({ totalPage, currentPage, onChange }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {matches && (
        <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" px={2}>
          <IconButton
            disabled={currentPage === 1}
            onClick={() => {
              onChange && onChange(currentPage + 1);
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            disabled={currentPage === totalPage}
            onClick={() => {
              onChange && onChange(currentPage + 1);
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      )}

      {!matches && (
        <Box width="100%" display="flex" justifyContent="center">
          <MuiPagination
            count={totalPage}
            defaultPage={currentPage}
            onChange={(_, v) => onChange && onChange(v)}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      )}
    </>
  );
};

export default Pagination;
