// Libraries
import styled from 'styled-components'
import { transparentize } from 'polished'

// Assets
import CloseIcon from '../vectors/close-icon'
import ChevronIcon from '../vectors/chevron-icon'
import TypeIconBoolean from '../vectors/type-icon-boolean'
import TypeIconString from '../vectors/type-icon-string'

// Filters
const Filters = () => {
  return (
    <Wrapper>
      <Card>
        <Filter>
          <FilterDelete><CloseIcon /></FilterDelete>
          <FilterSelect value="isAdmin" icon={<TypeIconBoolean/>} />
          <FilterLabel>is</FilterLabel>
          <FilterSelect value="false" />
        </Filter>
        <Filter>
          <FilterDelete><CloseIcon /></FilterDelete>
          <FilterSelect value="firstName" icon={<TypeIconString/>} />
          <FilterSelect value="includes" />
          <FilterInput value="Bob" />
        </Filter>
      </Card>
      <AddLink>Add a filter</AddLink>
    </Wrapper>
  )
}

const FilterSelect = ({ value, icon }) => {
  return (
    <SelectContainer>
      {/* <select><options>{value}</options></select> */}
      { icon && <SelectIcon>{icon}</SelectIcon> }
      <SelectValue>{value}</SelectValue>
      <SelectArrow><ChevronIcon /></SelectArrow>
    </SelectContainer>
  )
}

// Styles
const Wrapper = styled.div`
  padding: 0 8px 8px 8px;
`

const Card = styled.div`
  border-radius: 6px;
  background-color: ${p => p.theme.card.background};
  margin-bottom: 8px;
  box-shadow: ${p => p.theme.shadows.light};
`

const AddLink = styled.div`
  transition: opacity 0.1s ease;
  color: ${p => p.theme.main.foreground};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  opacity: 0.5;
  margin: 10px 0 2px 6px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

const Filter = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  & + & { border-top: 1px solid ${p => p.theme.colors.gray300}; }
`

const FilterDelete = styled.div`
  transition: opacity ${p => p.theme.transitions.normal};
  color: ${p => p.theme.colors.gray600};
  opacity: 0.5;
  padding: 8px 8px 8px 12px;

  svg { display: block; }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

const FilterLabel = styled.div`
  color: ${p => p.theme.main.foreground};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  margin-right: 8px;
`

const FilterInput = styled.input`
  border: none;
  outline: none;
  color: ${p => p.theme.colors.gray800};
  background-color: ${p => p.theme.colors.gray200};
  font-weight: 600;
  line-height: 1;
  font-size: 12px;
  height: 24px;
  padding: 4px 6px;
  margin-right: 8px;
  border-radius: 3px;
  width: 120px;

  &:hover {
    /* cursor: pointer; */
    background-color: ${p => p.theme.colors.gray300};
  }
`

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${p => p.theme.colors.gray200};
  height: 24px;
  padding: 4px;
  margin-right: 8px;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.gray300};
  }
`

const SelectIcon = styled.div`
  svg { display: block; }
  .foreground { fill: ${p => p.theme.code.background}; }
  .background { fill: ${p => transparentize(0.5, p.theme.code.foreground)}; }
`

const SelectValue = styled.div`
  color: ${p => p.theme.main.foreground};
  font-weight: 600;
  font-size: 12px;
  line-height: 1;
  margin: 0 4px;
`

const SelectArrow = styled.div`
  color: ${p => p.theme.gray800};
  opacity: 0.5;
  margin: 0 2px 0 0;
  svg { display: block; }
`

export default Filters