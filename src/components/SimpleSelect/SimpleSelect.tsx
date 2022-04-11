import React, { Dispatch, SetStateAction } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuItem from '@mui/material/MenuItem'

// Styles
import { CustomSelect } from './SimpleSelect.styles'

interface SelectProps {
  setValue: Dispatch<SetStateAction<any>>
  value: string
  name: string
  options: Array<{ value: any; label: string }>
}

export default function SimpleSelect({ value, name, options, setValue }: SelectProps): JSX.Element {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value)
  }

  return (
    <CustomSelect IconComponent={ExpandMoreIcon} value={value} name={name} onChange={handleChange}>
      {options &&
        options.map((option, idx) => (
          <MenuItem key={idx} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </CustomSelect>
  )
}
