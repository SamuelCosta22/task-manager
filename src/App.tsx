import { Sidebar } from './components/Sidebar';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <div className="flex gap-8">
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
