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
    <div className={`flex flex-col rounded-lg px-4 py-2 ${getStatusClasses()}`}>
      <h2 className="font-semibold">{task.title}</h2>
      <p className="ml-2 text-sm text-slate-900">{task.description}</p>
    </div>
  );
};
