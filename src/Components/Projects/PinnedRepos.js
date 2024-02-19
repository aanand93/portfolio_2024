import React, { useState, useEffect } from 'react';
import { graphql } from '@octokit/graphql';
import './Projects.css';

const PinnedRepos = ({ username }) => {
	const [repos, setRepos] = useState([]);
	const githubToken = process.env.REACT_APP_GITHUB_TOKEN;

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
							authorization: `token ${githubToken}`,
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
			<div className='repos-list'>
				{repos.map((repo) => (
					<a className='' href={repo.url} alt='list of repos'>
						<li className='card' key={repo.id}>
							<h4 href={repo.url} alt='repo in list'>
								{repo.name}
							</h4>
							<p>{repo.description}</p>
							{repo.languages && (
								<p className='languages'>
									Languages:{' '}
									{repo.languages.edges
										.map((edge) => edge.node.name)
										.join(', ')}
								</p>
							)}
						</li>
					</a>
				))}
			</div>
		</div>
	);
};

export default PinnedRepos;
