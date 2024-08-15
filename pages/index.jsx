import Hero 		from '../components/sections/index/hero'
import About 		from '../components/sections/index/about'
import Technical 	from '../components/sections/index/technical'
import FeaturedProjects	from '../components/sections/projects/featured'

import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			<Hero />
			<FeaturedProjects />
			<About />
			<Technical />
		</>
	);
}