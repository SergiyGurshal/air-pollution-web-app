import { DropdownProvider } from './components/dropdown/dropodown-context'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import MainContent from './components/main-content/MainContent'

function App() {
  return (
    <DropdownProvider>
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </DropdownProvider>
  )
}

export default App
