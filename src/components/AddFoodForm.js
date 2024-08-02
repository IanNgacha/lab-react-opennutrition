import { useState } from "react";
import { Input, Button, Form } from "antd";

export default function AddFoodForm({ addFood }) {
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        calories: '',
        servings: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        
        addFood({
            name: formData.name,
            image: formData.image,
            calories: parseFloat(formData.calories),
            servings: parseInt(formData.servings, 10),
        });

        setFormData({
            name: '',
            image: '',
            calories: '',
            servings: ''
        });
    };

    return (
        <Form onFinish={handleSubmit} layout="vertical">
            <Form.Item label="Name">
                <Input 
                    name="name"
                    value={formData.name}
                    type="text"
                    onChange={handleChange}
                />
            </Form.Item>
            <Form.Item label="Image URL">
                <Input 
                    name="image"
                    value={formData.image}
                    type="text"
                    onChange={handleChange}
                />
            </Form.Item>
            <Form.Item label="Calories">
                <Input 
                    name="calories"
                    value={formData.calories}
                    type="number"
                    onChange={handleChange}
                />
            </Form.Item>
            <Form.Item label="Servings">
                <Input 
                    name="servings"
                    value={formData.servings}
                    type="number"
                    onChange={handleChange}
                />
            </Form.Item>
            <Button type="primary" htmlType="submit">Add Food</Button>
        </Form>
    )
}