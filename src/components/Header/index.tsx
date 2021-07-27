import * as S from './styles';

import Logo from '../../assets/logo.png';

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img src={Logo} alt="Logo" />
        {/* <h1>Eureka Cep</h1> */}
      </S.Content>
    </S.Container>
  )
}