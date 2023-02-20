
import './App.css'
import FileInputs from './Components/Files/FileInput'
import FolderComponent from './Components/Folder/FolderComponent'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>

      <FolderComponent/>
      <FileInputs />
      
     
    </div>
  )
}

export default App
