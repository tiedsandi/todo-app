import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/new meetup form/NewMeetupForm';

const NewMeetup = () => {
  const navigate = useNavigate();
  const addMeetupHandler = (meetupData) => {
    fetch('https://meets-up-a8fcf-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
