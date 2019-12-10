import React, { useEffect, useState } from 'react';
import Repo from './Repo';

function Popular() {
  const [repos, setRepos] = useState([]);
  const URL = `https://api.github.com/search/repositories?q=+language:"javascript"&page=1&per_page=12&sort=stars&order=desc`;

  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setRepos(data.items);
    };
    getAPI();
  }, [URL]);


  return (
    <div>
      <h2 className="display-5 mb-5">Popular Repositories.</h2>
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

export default Popular;
