import { FaCopy, FaMap } from 'react-icons/fa'
import { useAddress } from '../../hooks/useAddress';

import { Loading } from '../Loading';

import * as S from './styles';

export function ResultAddress() {
  const { address, loading } = useAddress();

  async function copyText(textCopy: string) {
    await navigator.clipboard.writeText(textCopy);
  }

  function renderWelcome() {
    return (
      <S.WelcomeContainer>
        <FaMap color="#ebebeb" size={32} />
        <h2>Encontre endereços pelo CEP</h2>
      </S.WelcomeContainer>
    );
  }

  function renderAddress() {
    return (
      <>
        <S.InputContainer>
          <label>CEP:</label>
          <input 
            readOnly
            disabled
            value={address?.cep}
          />
          <button onClick={() => copyText(address?.cep as string)}>
            <FaCopy 
              color="#333" 
              size={24}  
            />
          </button>
        </S.InputContainer>
        <S.InputContainer>
          <label>Bairro:</label>
          <input 
            readOnly
            disabled
            value={address?.bairro}
          />
          <button
            disabled={address?.bairro === ''}
            onClick={() => copyText(address?.bairro as string)}
          >
            <FaCopy 
              color="#333" 
              size={24}  
            />
          </button>
        </S.InputContainer>
        <S.InputContainer>
          <label>Município:</label>
          <input 
            readOnly
            disabled
            value={address?.municipio}
          />
          <button onClick={() => copyText(address?.municipio as string)}>
            <FaCopy 
              color="#333" 
              size={24}  
            />
          </button>
        </S.InputContainer>
        <S.InputContainer>
          <label>Logradouro:</label>
          <input 
            readOnly
            disabled
            value={address?.logradouro}
          />
          <button
            disabled={address?.bairro === ''}
            onClick={() => copyText(address?.logradouro as string)}
          >
            <FaCopy 
              color="#333" 
              size={24}  
            />
          </button>
        </S.InputContainer>
      </>
    );
  }

  return (
    <S.Container>
      {loading 
        ? <Loading />
        : (
          address === null 
            ? renderWelcome()
            : renderAddress()
        )
      }
    </S.Container>
  );
}