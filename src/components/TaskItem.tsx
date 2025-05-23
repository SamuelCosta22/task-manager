import { Check, Loader2, SquareArrowUpRight } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  period: string;
}

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-[rgba(52,211,153,0.6)] text-emerald-200';
    } else if (task.status === 'in_progress') {
      return 'bg-[rgba(253,224,71,0.6)] text-yellow-300';
    } else {
      return 'bg-gray-400 text-gray-600';
    }
  };

  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-lg px-4 py-2 ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === 'done'}
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          {task.status === 'done' && <Check />}
          {task.status === 'in_progress' && (
            <Loader2 className="animate-spin" />
          )}
        </label>
        <div className="flex flex-col">
          <h2 className="font-semibold">{task.title}</h2>
          <p className="text-sm text-slate-900">{task.description}</p>
        </div>
      </div>
      <a href="#" className="text-slate-300 transition hover:opacity-55">
        <SquareArrowUpRight />
      </a>
    </div>
  );
};
