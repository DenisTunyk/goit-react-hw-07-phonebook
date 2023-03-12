import { nanoid } from 'nanoid';
import './Filter.module.css';
import { useState } from 'react';
// import { setFilter } from 'redux/filterSlice';
// import { getFilter } from 'redux/selectors';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const [filterStr, setFilterStr] = useState('');

  //const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    setFilterStr(e.currentTarget.value);
    dispatch(setFilter(filterStr));
  };

  const inputFilter = nanoid();
  return (
    <div>
      <label htmlFor={inputFilter}> Find contacts by Name</label>
      <input
        id={inputFilter}
        type="text"
        name="filter"
        value={filterStr}
        onChange={onChange}
      />
    </div>
  );
};
