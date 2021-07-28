import { FaSearch } from 'react-icons/fa';

import { useAddress } from '../../hooks/useAddress';
import * as S from './styles';

export function InputSearch() {
  const { cep, setCep, getAddressByCep, loading } = useAddress();

  function formateValueToCep(cep: string): void {
    const cepFormated = cep
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');

    setCep(cepFormated);
  }

  return (
    <S.Container>
      <S.Content>
        <input 
          type="text" 
          placeholder="Digite o seu cep..."
          value={cep}
          onChange={(event) => formateValueToCep(event.target.value)}
        />
        <button 
          onClick={getAddressByCep}
          disabled={loading || cep === ''}
        >
          <FaSearch color="#ffca2c" size={32}/>
        </button>
      </S.Content>
    </S.Container>
  );
}