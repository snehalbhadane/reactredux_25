import logo from './logo.svg';
import './App.css';
import Themecomponent from './components/Themecomponent';
import { ThemeProvider } from './components/Themecontext';

function App() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">Welcome to testing</h1>
      <ThemeProvider>
        <Themecomponent/>
      </ThemeProvider>
    </div>
  );
}

export default App;
