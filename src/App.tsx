import { FC } from 'react'
import { Provider } from 'react-redux'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import MainContent from './components/main-content/MainContent'
import store from './redux/store'

const App: FC = () => {
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
