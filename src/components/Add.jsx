import React, {useState} from 'react'
import ResultCard from './ResultCard';

const Add = () => {
    const [query, setQuery]= useState('');
    const [results, setResults]= useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMBD_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((res)=>res.json())
        .then((data)=>{
               if(!data.error){
                setResults(data.results)
        }else{
            setResults([]);
        }
        }        
     
        );
    }

  return (
    <div className="add-page">
        <div className="container">
            <div className="add-content">
                <div className="input-wrapper">
                    <p>video stopped at 36:52</p>
                    <input
                        type='text'
                        placeholder='Search for a movie'
                        value={query}
                        onChange={handleChange}
                    />
                </div>

                {
                    results.length > 0 && (
                        <ul className="results">
                            {
                                results.map((movie, index) => (
                                    <li key={index}>
                                    <ResultCard 
                                      movie={movie}
                                    />
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Add