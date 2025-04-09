import React, { useState } from 'react';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchSection = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <section id="search" className="py-4 bg-light">
      <Container>
        <InputGroup>
          <FormControl
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
      </Container>
    </section>
  );
};

export default SearchSection;
