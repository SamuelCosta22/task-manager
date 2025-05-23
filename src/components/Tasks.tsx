import { CloudSun, Eraser, Moon, PlusIcon, Sun } from 'lucide-react';
import { Button } from './Button';
import { TasksSeparator } from './TasksSeparator';
import { useState } from 'react';
import { TASKS } from '../constants/tasks';
import { TaskItem } from './TaskItem';

export const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);

  const morningTasks = tasks.filter((task) => task.period === 'morning');
  const afternoonTasks = tasks.filter((task) => task.period === 'afternoon');
  const nightTasks = tasks.filter((task) => task.period === 'night');

  return (
    <div className="w-full space-y-6 px-10 py-16">
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

      <div className="space-y-4 rounded-xl bg-slate-800 p-6">
        <TasksSeparator>
          <Sun size={18} />
          <p>Manhã</p>
        </TasksSeparator>

        {morningTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}

        <TasksSeparator>
          <CloudSun size={18} />
          <p>Tarde</p>
        </TasksSeparator>

        {afternoonTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}

        <TasksSeparator>
          <Moon size={18} />
          <p>Noite</p>
        </TasksSeparator>

        {nightTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
