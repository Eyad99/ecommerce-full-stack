/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import EyeToggleButton from './password-field/eye-toggle-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface TextFieldProps {
	className?: string;
	containerClassName?: string;
	label?: string;
	labeClassName?: string;
	removeLabel?: boolean;
	error?: boolean;
	helperText?: string | any;
	placeholder?: string;
	disabled?: boolean | false;
	show?: boolean;
	click?: () => void;
	icon?: { position: 'left' | 'right'; className?: string; component?: any };
}

const TextField: React.FC<React.ComponentProps<'input'> | TextFieldProps> = ({
	className,
	containerClassName,
	label,
	labeClassName,
	removeLabel,
	error,
	helperText,
	placeholder,
	disabled,
	show,
	click,
	icon,
	...props
}: any) => {
	return (
		<div>
			<div className={cn('grid w-full items-center gap-1.5', containerClassName)}>
				{label && (
					<Label htmlFor={label} className={cn('ml-1.5 text-[12px] font-bold capitalize text-navy-700 dark:text-white', labeClassName)}>
						{label}
					</Label>
				)}

				<div className='relative '>
					<div className='relative w-full'>
						<Input
							id={props.name}
							className={cn(
								'left-3 peer h-[40px] placeholder-transparent focus-visible:ring-0 focus-visible:border-none',
								error ? '!border-red-500' : '',
								className
							)}
							disabled={disabled}
							placeholder={removeLabel ? placeholder : ' '}
							{...props}
						/>

						{!removeLabel && (
							<Label
								htmlFor={props.name}
								className={cn(
									'left-3 absolute transform -translate-y-1/2 text-gray-400 text-[10px] transition-all duration-200 pointer-events-none',
									String(props.value)?.length > 0 ? 'top-[18%] text-[8px]' : 'top-1/2',
									'peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[10px]',
									'peer-focus:top-[18%] peer-focus:text-[8px]',
									'z-10'
								)}
							>
								{placeholder}
							</Label>
						)}
					</div>
					{icon?.position === 'right' && (
						<div className={cn('absolute left-[80%] top-1/2 -translate-y-1/2 transform cursor-pointer', icon?.className)}>
							{props?.type == 'password' || show ? <EyeToggleButton show={show} click={click} /> : icon?.component}
						</div>
					)}
				</div>
			</div>
			{error && <Label className='ml-1.5 text-red-500 mb-2'>{helperText}</Label>}
		</div>
	);
};

export default TextField;
