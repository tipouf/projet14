import {Routes, Route} from 'react-router-dom';
import Home from '../page/home/Home';
import List from '../page/list/List';

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/list" element={<List />} />
		</Routes>
	)
}