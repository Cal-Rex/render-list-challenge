import css from './App.module.css';
import Content from './components/Content';
// import Sidebar from "./components/Sidebar";
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      {/* <Sidebar /> */}
      {/* <Content /> */}
      <ContentHooks />
    </div>
  );
}

export default App;