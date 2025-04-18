import { switcherPropsType } from '@/helpers/types';
import { Switch } from '@mui/material';
import React from 'react';

const Switcher = <T extends boolean>({
  state,
  setState,
  labels,
  color = 'default',
  className,
}: switcherPropsType<T>) => {
  return (
    <div className={`${className} flex flex-col items-center cursor-pointer`}
     onClick={() => setState(!state as T)}>
      <Switch color={color} onChange={() => setState(!state as T)} value={state} />
      <span className='text-center'>{state ? labels[0] : labels[1]}</span>
    </div>
  );
};

export default Switcher;
