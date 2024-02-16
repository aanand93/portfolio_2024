import React, { useState, useEffect } from 'react';
import { graphql } from '@octokit/graphql';

const PinnedRepos = ({ username }) => {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const fetchPinnedRepos = async () => {
			try {
				const { user } = await graphql(
					`
						query ($login: String!) {
							user(login: $login) {
								pinnedItems(first: 6, types: [REPOSITORY]) {
									edges {
										node {
											... on Repository {
												id
												name
												description
												url
												languages(first: 5) {
													edges {
														node {
															name
														}
													}
												}
											}
										}
									}
								}
							}
						}
					`,
					{
						login: username,
						headers: {
							authorization: `token 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`,
						},
					}
				);
				setRepos(user.pinnedItems.edges.map((edge) => edge.node));
			} catch (error) {
				console.error('Error fetching pinned repositories:', error.message);
			}
		};

		fetchPinnedRepos();
	}, [username]);

	return (
		<div className='pinned-repos'>
			<h2>Pinned Repositories</h2>
			<ul>
				{repos.map((repo) => (
					<a className='' href={repo.url}>

					<li className='card' key={repo.id}>
						<a href={repo.url}>{repo.name}</a>
						<p>{repo.description}</p>
						{repo.languages && (
							<p className='languages'>
								Languages:{' '}
								{repo.languages.edges.map((edge) => edge.node.name).join(', ')}
							</p>
						)}
					</li>
					</a>
				))}
			</ul>
		</div>
	);
};

export default PinnedRepos;
