import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: ''
  });

  const handleInputChange = e => {
    setQuery({ ...query, name: e.target.value });
  };

  const handleSearch = e => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <section className="search-form">
     <form onSubmit={handleSearch}>
       <div>
         <div>
           <input 
            type='text'
            onChange={handleInputChange}
            value={query.name}
            tabIndex='0'
            placeholder='search by name'
            autoComplete='off'
          />
         </div>
       </div>
     </form>
    </section>
  );
}
