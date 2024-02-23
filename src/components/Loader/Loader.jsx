import './Loader.css'
import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

const LoadingScreen = (props) => {
    const { started, setStarted } = props;
    const { progress, total, loaded, item } = useProgress();

    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                setStarted(true);
            }, 2000);
        }
    }, [progress, total, loaded, item]);

    return (
        <div
            className='loader'
            style={{ opacity: started ? 0 : 1 }}
        >
            <div style={{ width: '20rem', height: '20rem', paddingBottom: '92%', position: 'relative', opacity: started ? 0 : 1 }}>
                <iframe src="https://giphy.com/embed/3S59TcvgxZK8kA45mu" width="100%" height="100%" style={{ position: 'absolute' }} class="giphy-embed" allowFullScreen frameBorder="0" ></iframe>

                {/* <iframe src="https://giphy.com/embed/3oEjHWbXcpeKhTktXi" width="100%" height="100%" style={{ position: 'absolute' }} frameBorder="0" class="giphy-embed" allowFullScreen /> */}
            </div>
        </div>
    );
};

export default LoadingScreen