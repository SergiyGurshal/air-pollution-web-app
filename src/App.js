import { Provider } from 'react-redux'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import MainContent from './components/main-content/MainContent'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
