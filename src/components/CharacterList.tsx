import useCharacters from '../hooks/useCharacters';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CharacterList = () => {
  const { data: characters } = useCharacters();

  return characters ? (
    <Box sx={{ width: '100%', minHeight: 253 }}>
      <Masonry columns={{ xs: 3, sm: 4 }} spacing={2}>
        {characters?.map((character, index) => (
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
