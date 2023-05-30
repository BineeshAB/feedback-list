
import {useState} from "react";
import './App.css';
import Header from './components/Header';
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStatus from "./components/FeedbackStatus";
import FeedbackForm from "./components/FeedbackForm";

function App() {

  const [feedback, setFeedback] = useState(FeedbackData);

  const feedbackDelete = (id) =>{
    if(window.confirm("Are you sure want to delete ?")){
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStatus feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={feedbackDelete}/>
      </div>
    </>
  );
}

export default App;