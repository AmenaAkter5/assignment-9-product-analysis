import { useNavigate } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import logo from '../../images/logo.PNG';
import Users from '../Users/Users';
import './Home.css';

const Home = () => {

    // useUsers hook : users data state
    const [users] = useUsers();

    // see all reviews button navigation
    const navigate = useNavigate();

    const seeAllReviews = () => {
        const path = `/reviews`;
        navigate(path);
    }

    return (
        <section className="container mx-auto">
            <div className="d-flex justify-content-between align-items-center my-5 py-3">
                <div className="w-50">
                    <h1 className="mb-4">Best android app to <br />
                        <span>learn programming</span></h1>
                    <p><b>"Coding just got fun"</b>  this is the slogan of programming hero team. They launched their app to make a good influence to the programming learners. Who wanted to learn programming in a very interesting method he or she can rely on this app. The learning system is interesting, creative of this app. So, this is recommended for the very beginner who wanted to learn programming with interesting learning method.</p>
                    <button className="btn">Live Demo</button>
                </div>
                <div>
                    <img className="rounded rounded-5" src={logo} alt="" />
                </div>
            </div>
            <div className="my-5">
                <h2 className="text-center mb-4">User Reviews</h2>
                <div className="user-reviews-container">
                    {
                        users.slice(0, 3).map(user => <Users
                            key={user.id}
                            user={user}
                        ></Users>)
                    }
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button className="btn" onClick={seeAllReviews}>See All Reviews</button>
                </div>
            </div>
        </section>
    );
};

export default Home;