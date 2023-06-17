import { Link} from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <Link to={'/chakraui'}>chakraUI</Link>
      <Link to={'/hooks'}>Hooks</Link>
    </div>

  )
}

export default Home
