import { Outlet } from 'react-router-dom'

import * as S from './styles'

export function DefaultLayout() {
  return (
    <S.LayoutContainer>
      <Outlet />
    </S.LayoutContainer>
  )
}
