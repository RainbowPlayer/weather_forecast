import { useDispatch } from 'react-redux';
import { addCard } from '../../app/dataCardSlice';
import Button from "../Button/Button";
import './style.css';
import Input from '../Input/Input';
import { useState } from 'react';

const ModalWindow = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState('');
    const [minEndDate, setMinEndDate] = useState('');
    const [maxEndDate, setMaxEndDate] = useState('');

    const today = new Date().toISOString().split('T')[0];
    const maxStartDate = new Date();
    maxStartDate.setDate(new Date().getDate() + 15);
    const formattedMaxStartDate = maxStartDate.toISOString().split('T')[0];

    const updateEndDateLimits = (selectedStartDate) => {
        const tempStartDate = new Date(selectedStartDate);
        setMinEndDate(tempStartDate.toISOString().split('T')[0]);

        const tempMaxEndDate = new Date(selectedStartDate);
        tempMaxEndDate.setDate(tempMaxEndDate.getDate() + 15);
        setMaxEndDate(tempMaxEndDate.toISOString().split('T')[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newCard = {
            cityName: formData.get('city'),
            date1: formData.get('startDate'),
            date2: formData.get('endDate'),
        }   ;

        await dispatch(addCard(newCard));
        onClose();

    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <select id="city" name="city" required>
                            <option value="">select city</option>
                            <option value="Berlin">Berlin</option>
                            <option value="Paris">Paris</option>
                            <option value="Rome">Rome</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDate">Start Date</label>
                        <Input type="date" id="startDate" name="startDate" required={true} min={today} max={formattedMaxStartDate} onChange={(e) => {setStartDate(e.target.value); updateEndDateLimits(e.target.value);}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endDate">End Date</label>
                        <Input type="date" id="endDate" name="endDate" required={true} min={minEndDate} max={maxEndDate} />
                    </div>
                    <div className="modal-actions">
                        <Button className="button button-save" type="submit" content="Зберегти" />
                        <Button className="button button-cancel" type="button" content="Скасувати" onClick={onClose} />
                    </div>
                </form>
            </div>
        </div>
  );
};

export default ModalWindow;