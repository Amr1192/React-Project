import React, { useState } from 'react';
import Pagination from './components/Pagination';

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // فرضاً فيه 10 صفحات

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Current Page: {currentPage}</h2>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Home;
