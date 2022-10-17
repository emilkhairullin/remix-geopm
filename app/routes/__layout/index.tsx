import type { LinksFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {
	Breadcrumbs,
	links as breadcrumbsLinks,
} from '~/components/Breadcrumbs';
import { Divider, links as dividerLinks } from '~/components/Divider';
import {
	AlternativeNames,
	links as alternativeNamesLinks,
} from '~/components/pages/city/AlternativeNames';
import { Cities, links as citiesLinks } from '~/components/pages/city/Cities';
import {
	CityHeader,
	links as cityHeaderLinks,
} from '~/components/pages/city/CityHeader';
import {
	KeyFacts,
	links as keyFactsLinks,
} from '~/components/pages/city/KeyFacts';
import { links as onMapLinks, OnMap } from '~/components/pages/city/OnMap';
import {
	links as popularCitiesLinks,
	PopularCities,
} from '~/components/pages/city/PopularCities';
import {
	links as sunInfoLinks,
	SunInfo,
} from '~/components/pages/city/SunInfo';
import {
	links as timeDifferenceLinks,
	TimeDiffernce,
} from '~/components/pages/city/TimeDifference';
import {
	links as timezoneLinks,
	Timezone,
} from '~/components/pages/city/Timezones';
import {
	links as watchesLinks,
	Watches,
} from '~/components/pages/city/Watches';
import useWatch from '~/hooks/useWatch';

export const links: LinksFunction = () => {
	return [
		...dividerLinks(),
		...breadcrumbsLinks(),
		...cityHeaderLinks(),
		...watchesLinks(),
		...timeDifferenceLinks(),
		...timezoneLinks(),
		...sunInfoLinks(),
		...citiesLinks(),
	];
};

export const loader = () => {
	const time = new Date().toLocaleTimeString('us', {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	});

	return json({ time });
};

const IndexPage = () => {
	const data = useLoaderData<typeof loader>();
	const { currentTime } = useWatch(data.time);

	return (
		<>
			<Breadcrumbs />
			<CityHeader />
			<Divider />
			<Watches />
			<Divider />
			<TimeDiffernce />
			<Divider />
			<Timezone />
			<SunInfo />
			<Divider />
			<AlternativeNames />
			<Divider />
			<OnMap />
			<Divider />
			<KeyFacts />
			<Divider />
			<Cities />
			<Divider />
			<PopularCities />
		</>
	);
};

export default IndexPage;
