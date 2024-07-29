import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import useCharacters from '../hooks/useCharacters';
import usePagination from '../hooks/usePagination';
import {
  usePaginationStore,
  setPage,
  setOffset,
} from '../store/usePaginationStore';

const CustomPagination = styled(Pagination)(({ theme }) => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#fff',
    },
  },
}));


const CharactersPagination = () => {
  const PAGINATION_OFFSET = 20;

  const { page, offset } = usePaginationStore(state => ({
    page: state.page,
    offset: state.offset,
  }));

  const { data: characterData } = useCharacters(offset);

  const handlePageChange = (event, value) => {
    const newOffset = value > 1 ? (value - 1) * 20 : 0;
    setPage(value);
    setOffset(newOffset);
  };

  return characterData ? (
    <Stack spacing={2}>
      <CustomPagination
        page={page}
        count={Math.ceil(characterData?.total / PAGINATION_OFFSET)}
        variant="outlined"
        size="large"
        color="secondary"
        onChange={handlePageChange}
      />
    </Stack>
  ) : null;
};

export default CharactersPagination;
