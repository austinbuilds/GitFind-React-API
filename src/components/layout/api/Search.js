import React, { useEffect, useState } from 'react';
import Repo from './Repo';

function Search() {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const [didMount, setDidMount] = useState(false)
  useEffect(() => setDidMount(true), [])

  if (didMount) { };

  useEffect(() => {
    const getAPI = async () => {
      if (didMount) {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=${query}&page=1&per_page=12&sort=stars&order=desc`
        );
        const data = await response.json();
        setRepos(data.items);
        console.log(data);
        console.log(data.items);
      }
    };
    getAPI();
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="search mx-auto justify-content-center">
      <h2 className="display-5 mb-4">Search Repositories.</h2>
      <form onSubmit={getSearch} className="form-inline justify-content-center mb-5">
        <input className="form-control mr-sm-2" type="search" placeholder="Repository" aria-label="Search" value={search} onChange={updateSearch} />
        <button className="btn btn-search my-2 my-sm-0" type="submit">Search</button>
      </form>
      <div className='card-deck repos'>
        {repos.map(repo => (
          <Repo
            title={repo.name}
            language={repo.language}
            description={repo.description}
            owner={repo.owner.login}
            image={repo.owner.avatar_url}
            url={repo.html_url}
            stars={repo.stargazers_count}
            key={repo.node_id}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
