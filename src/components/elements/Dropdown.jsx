import { useEffect, useRef, useState } from 'react';

function Dropdown({ width, placeholder, options = [], onChange = () => { } }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      } else {
        setIsMenuOpen(true);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSetValue = (item) => {
    setSelectedValue(item);
    onChange(item);
    setIsMenuOpen(false);
  };

  const render = () => {
    return (
      <div
        className="w-100"
        style={{ position: 'relative' }}
        ref={wrapperRef}
      >
        <div
          className="dropdown"
          style={{ width }}
        >
          <span>{selectedValue || placeholder}</span>
          <i className="ms-Icon ms-Icon--ChevronDown"></i>
        </div>
        {isMenuOpen && (
          <div className="dropdown-list">
            {options.length ? options.map((item, index) => (
              <div
                key={index}
                className="dropdown-list__item"
                onClick={() => handleSetValue(item)}
              >
                {item}
              </div>
            )) : (
              <div className="dropdown-list__item">
                No data
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return render();
}

export default Dropdown;