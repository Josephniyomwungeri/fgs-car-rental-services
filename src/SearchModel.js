import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const SearchModal = ({ isOpen, onClose, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm.toLowerCase().trim());
    setSearchTerm('');
    onClose(); // Close the modal
  };

  if (!isOpen) return null;

  return (
    <div className="search-modal">
      <div className="modal-content">
        <div className="modal-header">
          <img src="/logo.png" alt="Logo" height={50} />
          <IoMdClose className="close-icon" onClick={onClose} />
        </div>
        <div className="modal-body">
          <input
            type="text"
            placeholder="Type your keyword and hit"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <FaSearch className="search-icon" onClick={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
