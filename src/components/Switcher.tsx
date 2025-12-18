import { switcherPropsType } from '@/helpers/types';
import { Switch } from '@mui/material';
import React from 'react';

const Switcher = <T extends boolean>({
  state,
  setState,
  labels,
  color = 'default',
  className,
  disabled = false,
}: switcherPropsType<T>) => {
  return (
    <div
      className={`${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'} flex flex-col items-center`}
      onClick={disabled ? undefined : () => setState(!state as T)}
    >
      <Switch
        color={color}
        onChange={disabled ? undefined : () => setState(!state as T)}
        value={state}
        disabled={disabled}
      />
      <span className="text-center">{state ? labels[0] : labels[1]}</span>
    </div>
  );
};

export default Switcher;
