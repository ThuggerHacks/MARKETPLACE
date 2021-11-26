import './style/style.css';
import Header from '../components/Header';

const Home = () => {

    window.onload = () => {
        if(sessionStorage.email===undefined){
            window.open('/','_self');
        }
    }

    return(
        <div>
            <Header/>
        </div>
    );
}

export default Home;