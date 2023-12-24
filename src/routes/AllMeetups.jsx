import React, { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://meets-up-a8fcf-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetups;
