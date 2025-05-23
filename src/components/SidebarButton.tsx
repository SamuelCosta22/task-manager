interface SidebarButtonProps {
  variant: 'default' | 'active';
  children?: React.ReactNode;
}

export const SidebarButton = ({ variant, children }: SidebarButtonProps) => {
  const getVariantClasses = () => {
    if (variant === 'active') {
      return 'bg-emerald-600 text-white hover:bg-emerald-500';
    } else {
      return 'text-slate-300 hover:bg-slate-700 hover:text-white';
    }
  };

  return (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-md px-4 py-2 transition ${getVariantClasses()}`}
    >
      {children}
    </a>
  );
};
