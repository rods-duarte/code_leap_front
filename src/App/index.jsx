import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from '../assets/styles/global';
import store from '../redux/store';
import HomePage from '../pages/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Provider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
