import Hero from '../components/Hero';
import Nav from '../components/Nav';
import About from '../components/About';
import RecentShows from '../components/RecentShows';
import Form from '../components/Form';
import Footer from '../components/Footer';
import UpcomingEvents from '../components/UpcomingEvents';
import HearMyRemixes from '../components/HearMyRemixes';
import Merchandise from '../components/Merchandise';

export default function Home() {
	return (
		<div>
			<Nav />
			<Hero />
			<About />
			<RecentShows />
			<UpcomingEvents />
			<HearMyRemixes />
			<Form />
			<Footer />
		</div>
	);
}
