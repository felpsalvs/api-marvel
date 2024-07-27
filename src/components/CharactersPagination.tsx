import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import useCharacters from '../hooks/useCharacters';
import usePagination from '../hooks/usePagination';

const CustomPagination = styled(Pagination)(({ theme }) => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#fff',
    },
  },
}));

interface Props {
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const CharactersPagination = ({ onPageChange }: Props) => {
  const PAGINATION_OFFSET = 20;

  const { page, setPage, offset, setOffset } = usePagination();

  const { data: characterData } = useCharacters(offset);

  const handlePageChange = (event, value) => {
    const newOffset = value > 1 ? (value - 1) * 20 : 0;
    setPage(value);
    setOffset(newOffset);
    onPageChange(event, newOffset);
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
