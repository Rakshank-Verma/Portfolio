import './index.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Footer/Navbar';
import { useSelector } from 'react-redux';
import { Cursor } from './Components/Cursor';


function App() {
    const theme = useSelector(state => state.theme.theme)
    
    if(theme === "dark"){
        document.documentElement.classList.remove("bg-[#e5e4df]");
        document.documentElement.classList.add("bg-[#1A1917]");
    }
    if(theme === "light"){
        document.documentElement.classList.remove("bg-[#1A1917]");
        document.documentElement.classList.add("bg-[#e5e4df]");
    }


    return (
        <>
            <Header />
            <Main />
            <Footer />
            <Navbar />
            <Cursor />
        </>
    )
}

export default App;
