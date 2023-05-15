import React, { useState } from "react";

const NewColorForm = ({ addColor }) => {
    const INITIAL_STATE = {
        name: "",
        value: "",
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ ...formData });
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Color Name </label>
            <input
                id="colorName"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Color Name"
                onChange={handleChange}
            />
            <label htmlFor="value">Color Value </label>
            <input
                id="colorValue"
                type="color"
                name="value"
                value={formData.value}
                onChange={handleChange}
            />
            <button>Add Color</button>
        </form>
    );
};

export default NewColorForm;
