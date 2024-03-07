import NeoGrid from './Grid';
// import "ag-grid-community/styles/ag-grid.css";

const App = () => {
  return (
    <>
    <header className="ag-theme-quartz" style={{ height: 70, width: 1920, backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <p style={{ fontWeight: 'bold', fontSize: '30px' }}>Near-Earth Object Overview</p>
    </header>
    <NeoGrid />
    </>
  );
}

export default App;
