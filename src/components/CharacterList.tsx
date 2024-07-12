import useCharacters from '../hooks/useCharacters';

const CharacterList = () => {
  const { data: characters } = useCharacters();

  return (
    <div>
      {characters?.map(character => (
        <div key={character.id}>
          <h1>{character.name}</h1>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
