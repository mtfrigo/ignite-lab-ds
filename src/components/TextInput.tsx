
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export interface TextInputRootProps {
    children: ReactNode;
}

const TextInputRoot: React.FC<TextInputRootProps> = ({ children }) => {
    return (
        <div className={clsx("flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800   w-full focus-within:ring-2 ring-cyan-300")}>
            {children}
        </div>
    )
}

export interface TextInputIconProps {
    children: ReactNode;
}

const TextInputIcon: React.FC<TextInputIconProps> = ({ children }) => {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {children}
        </Slot>
    )
}

const TextInputInput: React.FC<TextInputInputProps> = ({ ...rest }) => {

    return (
        <input className="bg-transparent flex-1  text-gray-100 text-xs placeholder:text-gray-400 outline-none" {...rest} />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}