import { Check } from 'phosphor-react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
}

export const Checkbox: React.FC<CheckboxProps> = ({ ...rest }) => {

    return (
        <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...rest}>
            <CheckboxPrimitive.Indicator asChild >
                <Check weight='bold' className='h-5 w-5 text-cyan-500' />
            </CheckboxPrimitive.Indicator>

        </CheckboxPrimitive.Root>
    )
}