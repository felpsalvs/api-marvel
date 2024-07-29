import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import useCharacters from '../hooks/useCharacters';
import { usePaginationStore } from '../store/usePaginationStore';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CharacterList = () => {
  const { offset } = usePaginationStore(state => ({
    offset: state.offset,
  }));
}

  const { data: characterData } = useCharacters(offset);

  return characterData ? (
    <Box sx={{ width: '100%', minHeight: 253 }}>
      <Masonry columns={{ xs: 3, sm: 4 }} spacing={2}>
        {characterData?.map((character, index) => (
          <Item key={index}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </Item>
        ))}
      </Masonry>
    </Box>
  ) : null;
};

export default CharacterList;
