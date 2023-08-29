import RepositoryItem from './RepositoryItem';

// const repositoryName = 'unform2';

function RepositoryList() {

  const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/GilCarvalhal'
  };

  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}

export default RepositoryList;
