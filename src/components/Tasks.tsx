import { Eraser, PlusIcon } from 'lucide-react';
import { Button } from './Button';

export const Tasks = () => {
  return (
    <div className="w-full px-10 py-16">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-emerald-400">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold text-slate-200">
            Minhas Tarefas
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <Button>
            Nova tarefa
            <PlusIcon size={18} />
          </Button>
          <Button variant="danger">
            Limpar tarefas
            <Eraser size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};
