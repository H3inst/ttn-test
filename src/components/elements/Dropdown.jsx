import { useEffect, useRef, useState } from 'react';

function Dropdown({ className, width, placeholder, options = [], onChange = () => { } }) {
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
    onChange(item.toLowerCase());
    setIsMenuOpen(false);
  };

  const renderMenuOptions = (item, index) => {
    return (
      <div
        key={index}
        className="dropdown-list__item"
        onClick={() => handleSetValue(item)}
      >
        {item}
      </div>
    );
  };

  const render = () => {
    return (
      <div
        className={className}
        style={{ position: 'relative', width }}
        ref={wrapperRef}
      >
        <div
          className="dropdown"
          style={{ width }}
        >
          <span>{selectedValue || placeholder}</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        {isMenuOpen && (
          <div className="dropdown-list">
            {options.length ? options.map(renderMenuOptions) : (
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