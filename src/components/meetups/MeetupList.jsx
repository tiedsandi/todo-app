import MeetupItem from './MeetupItem';
import classes from './Meetup.module.css';

const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          addres={meetup.addres}
          desription={meetup.desription}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
