import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateWarehouse } from '../store/slice/warehouseSlice';


const DetailsPage = () => {
  const { id: warehouseId } = useParams();
  const warehouseData = useSelector((state) => state.warehouseDetails.filteredData);
  const dispatch = useDispatch();

  
  const warehouse = warehouseData.find((data) => data.id === parseInt(warehouseId));

  
  const [editFields, setEditFields] = useState({
    name: warehouse?.name || '',
    city: warehouse?.city || '',
    cluster: warehouse?.cluster || '',
    space_available: warehouse?.space_available || '',
    is_live: warehouse?.is_live || false,
  });

  const [customFields, setCustomFields] = useState([]);

  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditFields({
      ...editFields,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  
  const addCustomField = () => {
    setCustomFields([...customFields, { key: '', value: '' }]);
  };

  
  const handleCustomFieldChange = (index, field, value) => {
    const updatedFields = [...customFields];
    updatedFields[index][field] = value;
    setCustomFields(updatedFields);
  };

  
  const saveChanges = () => {
    const updatedWarehouse = {
      ...warehouse,
      ...editFields,
      customFields, 
    };
    dispatch(updateWarehouse(updatedWarehouse)); 
    alert('Warehouse details updated successfully!');
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 w-full h-full gap-3">
      
      <div className="w-full lg:w-[70%] h-full flex justify-center items-center">
        <img src={warehouse?.image} alt={warehouse?.name} className="w-full h-full" />
      </div>

      
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-xl border-2 shadow-xl bg-yellow-100 p-4">
        
        <div className="flex flex-col items-start gap-3 border-2 shadow-xl p-4 bg-white rounded-md w-full">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={editFields.name}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={editFields.city}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </label>
          <label>
            Cluster:
            <input
              type="text"
              name="cluster"
              value={editFields.cluster}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </label>
          <label>
            Space Available:
            <input
              type="number"
              name="space_available"
              value={editFields.space_available}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </label>
          <label>
            Live Status:
            <input
              type="checkbox"
              name="is_live"
              checked={editFields.is_live}
              onChange={handleInputChange}
              className="ml-2"
            />
          </label>
        </div>

        
        <div className="flex flex-col items-start gap-3 border-2 shadow-xl p-4 bg-white rounded-md w-full">
          <h3>Custom Fields:</h3>
          {customFields.map((field, index) => (
            <div key={index} className="flex gap-2 w-full">
              <input
                type="text"
                placeholder="Key"
                value={field.key}
                onChange={(e) => handleCustomFieldChange(index, 'key', e.target.value)}
                className="border p-2 flex-1"
              />
              <input
                type="text"
                placeholder="Value"
                value={field.value}
                onChange={(e) => handleCustomFieldChange(index, 'value', e.target.value)}
                className="border p-2 flex-1"
              />
            </div>
          ))}
          <button onClick={addCustomField} className="bg-blue-500 text-white p-2 mt-2">
            Add Custom Field
          </button>
        </div>

        
        <button onClick={saveChanges} className="bg-green-500 text-white p-3 mt-4 w-full">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
