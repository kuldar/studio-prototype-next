// Libraries
import styled from 'styled-components'

// Assets
import LeftArrow from '../vectors/left-arrow-icon'
import RightArrow from '../vectors/right-arrow-icon'

// Pagination
const Pagination = () => {
  return (
    <Wrapper>
      <ArrowButton>
        <LeftArrow />
      </ArrowButton>
      <Input value="800" />
      <span>–</span>
      <Input value="900" />
      <span>of 1,492</span>
      <ArrowButton>
        <RightArrow />
      </ArrowButton>
    </Wrapper>
  )
}

// Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  background-color: ${p => p.theme.colors.gray200};
  color: ${p => p.theme.main.foreground};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
`

const Input = styled.input`
  border: none;
  outline: none;
  width: 36px;
  margin: 0 6px;
  color: ${p => p.theme.main.foreground};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  border-radius: 3px;
  text-align: center;
`

const ArrowButton = styled.div`
  padding: 0 8px;
  color: ${p => p.theme.colors.gray800};
  opacity: 0.5;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`

export default Pagination