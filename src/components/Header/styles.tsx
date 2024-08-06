import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  height: 6.5rem;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    width: fit-content;
    display: flex;

    align-items: center;
    justify-content: space-between;

    line-height: 130%;
    font-size: 0.875rem;

    gap: 1rem;
  }
`

export const Location = styled.li`
  width: 143px;
  height: 38px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  line-height: 130%;
  font-size: 0.875rem;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const Cart = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;
  padding-top: 0.275rem;

  border-radius: 8px;
  background: ${(props) => props.theme['yellow-light']};
  line-height: 130%;
  font-size: 0.875rem;
  outline: none;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    outline: none;
  }

  a {
    text-decoration: none;
  }
`
