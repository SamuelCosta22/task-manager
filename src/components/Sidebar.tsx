import { SidebarButton } from './SidebarButton';

export const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-slate-800 text-slate-100 shadow-lg">
      <div className="space-y-2 px-6 py-6">
        <h1 className="text-2xl font-bold text-emerald-400">Task Manager</h1>
        <p className="text-sm text-slate-400">
          Um simples{' '}
          <span className="font-semibold text-emerald-400">
            organizador de tarefas
          </span>
          .
        </p>
      </div>

      <div className="flex flex-col gap-2 px-4">
        <SidebarButton text="Início" variant="default" />
        <SidebarButton text="Minhas Tarefas" variant="active" />
      </div>
    </div>
  );
};
