interface TasksSeparatorProps {
  children: React.ReactNode;
}

export const TasksSeparator = ({ children }: TasksSeparatorProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-1 border-b border-solid border-slate-500 pb-3 text-sm text-slate-300">
        {children}
      </div>
    </div>
  );
};
