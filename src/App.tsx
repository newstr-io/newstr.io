import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faLinesLeaning } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="app">
      <div className="app-splash">
        <header>
          <div className="logo">
            <FontAwesomeIcon icon={faLinesLeaning}/>Newstr
          </div>
        </header>
        <div className="content medium">
          <div>News, straight to you.</div>
          <div className="medium sub">Coming April, 20th 2023</div>
        </div>
        <footer className="footer">
          <div className="powered-by">Powered by <a href="https://nostr.com/">NOSTR</a></div>
          <div className="small">
            <FontAwesomeIcon icon={faCopyright} size="xs" /> Copyright 13x, LLC 2023
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
