import { useEffect, useState } from "react";

const useUsers = () => {

    // data load state
    const [users, setUsers] = useState([]);

    // users data fetch
    useEffect(() => {
        fetch('users.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return [users, setUsers];
};

export default useUsers;