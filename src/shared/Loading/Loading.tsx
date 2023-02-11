import { CircularProgress } from '@mui/material';
import { WrapperLoading } from './style';

const Loading: React.FC = () => {
  return (
    <WrapperLoading>
      <CircularProgress />
    </WrapperLoading>
  );
};

export default Loading;
