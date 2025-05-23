interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'danger';
}

export const Button = ({ children, variant = 'primary' }: ButtonProps) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-emerald-600  hover:bg-emerald-500';
    } else if (variant === 'danger') {
      return 'bg-red-700 hover:bg-red-500';
    }
  };

  return (
    <button
      className={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-white transition ${getVariantClasses()}`}
    >
      {children}
    </button>
  );
};
