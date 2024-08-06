import * as S from './styles'

import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import coffeeLogo from '../../assets/coffee-logo.svg'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={coffeeLogo} alt="coffee logo" />
      <nav>
        <ul>
          <S.Location>
            <MapPin weight="fill" size={22} />
            Porto Alegre, RS
          </S.Location>
          <S.Cart>
            <NavLink to="#">
              <ShoppingCart weight="fill" size={22} />
            </NavLink>
          </S.Cart>
        </ul>
      </nav>
    </S.HeaderContainer>
  )
}
