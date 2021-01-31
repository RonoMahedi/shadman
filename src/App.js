import './App.css';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Profile from "./components/Profle";
import ReviewList from "./components/ReviewList";
import RecentRides from "./components/RecentRides";
import UserReview from "./components/UserReview";

function App() {
  return (
    <>
     <Navbar/>
     <UserReview/>
     {/*<Profile/>*/}
     {/*<ReviewList/>*/}
     {/*<RecentRides/>*/}
     <Footer/>
    </>
  );
}

export default App;
