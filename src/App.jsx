import Content from './components/Content';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <h1 className='big-title'>React Drag & Drop Playground</h1>
      <DndProvider backend={HTML5Backend}>
        <Content />
      </DndProvider>
    </div>
  );
}

export default App;
