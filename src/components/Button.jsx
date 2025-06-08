import { twMerge } from 'tailwind-merge';

export default function Button({ children, size = 'medium', className }) {
  const sizeClassNames = {
    //12px
    small: 'text-sm px-3 py-2',
    //14px
    medium: 'text-base px-5 py-3',
    //17px
    large: 'text-lg px-8 py-4',
  };
  return (
    <button
      className={twMerge(
        'bg-white text-textBlack rounded-full flex items-center',
        sizeClassNames[size],
        className
      )}
    >
      {children}
    </button>
  );
}
