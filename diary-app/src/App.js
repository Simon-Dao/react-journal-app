import './css/App.css';
import './css/EntryList.css';
import './css/EntryViewer.css'
import './css/Entry.css'
import EntryList from './components/List/EntryList'
import EntryViewer from './components/Viewer/EntryViewer'
import SelectedContextProvider from './contexts/SelectedContext'
import Entry from './components/Entry'

function App() {
  return (
    <div class='app-container'>
      <SelectedContextProvider>
        <EntryList/>
        <EntryViewer/>
      </SelectedContextProvider>
    </div>
  )
}


export default App;
