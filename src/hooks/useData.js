import { useEffect, useState } from "react";


const useData = () => {

    // data load state
    const [data, setData] = useState([]);

    // data fetch
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return [data, setData];
};

export default useData;