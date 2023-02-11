import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes';
import GlobalStyle from './styles/global';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minute
      cacheTime: 1000 * 60 * 60, // 1 hour
      refetchOnWindowFocus: true,
    },
  },
});

const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router>
          <RoutesApp />
        </Router>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
