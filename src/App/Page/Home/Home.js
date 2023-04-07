import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    return (
        <>
            <ToastContainer />
            <button onClick={() => toast.success('lỗi')}>click me !</button>
        </>
    );
}

export default Home;
