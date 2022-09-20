import { useNavigate } from 'react-router-dom';
import { ICardProps } from '../../interfaces/cardProps';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import { Container } from '@mui/system';

const CardPokemon: React.FC<ICardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleSelectedPokemon = () => {
    navigate(`/pokemon/${pokemon.name}`, { replace: false });
  };

  return (
    <>
      <Card
        sx={{ width: 250, height: 140, cursor: 'pointer' }}
        onClick={() => handleSelectedPokemon()}
      >
        <Container
          maxWidth="md"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <CardHeader
            sx={{ padding: 0, marginTop: 2 }}
            title={pokemon.name}
            subheader={pokemon?.types?.map((type) => (
              <Box mb={1} key={type?.type?.name}>
                <Chip
                  avatar={
                    <Avatar
                      style={{ width: 30, height: 20 }}
                      alt={pokemon.name}
                      src={pokemon.sprites?.front_shiny}
                    />
                  }
                  label={type?.type?.name}
                  variant="filled"
                />
              </Box>
            ))}
          />
          <CardMedia
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 2,
            }}
            component="img"
            height="100"
            width="100"
            image={pokemon.sprites?.front_default}
            alt={pokemon.name}
          />
        </Container>
      </Card>
    </>
  );
};

export default CardPokemon;
