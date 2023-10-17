import './App.css';
import Header from './components/Header'
import Container from "./components/Container";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header></Header>
            </header>
            <main className="App-main">
                <Container></Container>
            </main>
        </div>
    );
}

export default App;
