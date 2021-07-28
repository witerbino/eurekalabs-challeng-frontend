import { 
  Header,
  InputSearch, 
  ResultAddress
} from './components';

import { AddressProvider } from './hooks/useAddress';

import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <>
      <AddressProvider>
        <Header />
        <InputSearch />
        <ResultAddress />
      </AddressProvider>
      <GlobalStyles />
    </>
  );
}
