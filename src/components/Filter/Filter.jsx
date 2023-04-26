import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import css from './Filter.module.scss';

export const Filter = () => {
    const dispatch = useDispatch();
    
    const inputFilter = event => {
        const value = event.target.value;
        dispatch(setFilters(value.toLowerCase()));
    }
    return (
        <label className={css.label}>
            Find contacts by name
            <input className={css.input} type='text' name='filter'  value={useSelector(selectFilter)} onChange={inputFilter} />
        </label>
    );
}
