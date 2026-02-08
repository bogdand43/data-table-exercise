import DataTable from './components/DataTable/DataTable';
import './App.scss';

function App() {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <div className="AppContainer">
        <header className="AppHeader">
          <h1 className="AppTitle">Operations Dashboard</h1>
        </header>
        <main className="AppContent">
          <DataTable />
        </main>
        <footer className="AppFooter">
          <p>
            &copy;
            {' '}
            {year}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
