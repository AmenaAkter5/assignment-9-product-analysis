import useUsers from '../../hooks/useUsers';
import Users from '../Users/Users';

const Reviews = () => {

    // useUsers hook : users data state
    const [users] = useUsers();

    return (
        <div className="container mx-auto my-5">
            <h2 className="mb-5 text-center">What Our Customers Say!</h2>
            <div className="user-reviews-container">
                {
                    users.map(user => <Users
                        key={user.id}
                        user={user}
                    ></Users>)
                }
            </div>
        </div>
    );
};

export default Reviews;