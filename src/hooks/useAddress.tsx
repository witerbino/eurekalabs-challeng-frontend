import { 
  createContext, 
  ReactNode, 
  useState, 
  useContext 
} from 'react';

import { api } from '../services/api';

type AddressContextProps = {
  cep: string;
  setCep: (value: string) => void;
  address: Address | null;
  setAddress: (address: Address) => void;
  loading: boolean;
  getAddressByCep: () => void;
}

type AddressProviderProps = {
  children: ReactNode
}

type Address = {
  cep: string;
  bairro: string;
  municipio: string;
  logradouro: string;
}

export const AddressContext = createContext(
  {} as AddressContextProps
);

export function AddressProvider({ 
  children 
}: AddressProviderProps) {
  
  const [cep, setCep] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [address, setAddress] = useState<Address | null>(null);

  async function getAddressByCep(): Promise<void> {
    const cepValue = cep.trim().replace('-', '');
    if (cepValue === '') {
      alert('O campo deve ser preenchido!');
    } else {
      setLoading(true);
      const { data } = await api.get(`/address/${cepValue}`);
      setAddress(data.data);
      setCep('');
      setLoading(false);
    }
  }

  return (
    <AddressContext.Provider 
      value={{
        cep,
        setCep,
        address,
        setAddress,
        loading,
        getAddressByCep
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export function useAddress() {
  return useContext(AddressContext);
}