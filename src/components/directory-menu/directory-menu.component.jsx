import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import MenuItem from '../../components/menu-item/menu-item.component'

const DirectoryMenu = ({ className }) => {
  const sections = useSelector((state) => state.directory.sections)
  return (
    <div className={className}>
      {sections.map(({ id, ...restSectionProps }) => (
        <MenuItem key={id} {...restSectionProps} />
      ))}
    </div>
  )
}

export default styled(DirectoryMenu)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
