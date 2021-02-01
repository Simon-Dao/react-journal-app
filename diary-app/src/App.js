import './css/App.css';
import './css/EntryList.css';
import './css/EntryViewer.css'
import EntryList from './components/List/EntryList'
import EntryViewer from './components/Viewer/EntryViewer'

function App() {
  return (
    <div class='app-container'>
      <EntryList/>
      <EntryViewer/>
    </div>
  )
}

export default App;
