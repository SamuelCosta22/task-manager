interface SidebarButtonProps {
  text: string;
  variant: 'default' | 'active';
}

export const SidebarButton = ({ text, variant }: SidebarButtonProps) => {
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
      className={`rounded-md px-4 py-2 transition ${getVariantClasses()}`}
    >
      {text}
    </a>
  );
};
