import React, { useState } from 'react';
import { DatePicker, Input, Button, Table, Modal, Form, InputNumber, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import './Page1.css';

const { RangePicker } = DatePicker;

const fetchProducts = async () => {
  const { data } = await axios.get('https://dummyjson.com/products');
  return data.products;
};

const Page1 = () => {
  const [dates, setDates] = useState([dayjs().subtract(7, 'days'), dayjs()]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(null);

  const { data: products } = useQuery('products', fetchProducts);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      message.warning("Please enter something to search.");
      return;
    }
    const filtered = products?.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setFilteredProducts(null);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleModalSubmit = (values) => {
    closeModal();
    navigate('/confirmation', { state: { product: values } });
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
  ];

  return (
    <div className="page-container">
      <h1 className="header">My Products App</h1>
      
      <div className="filter-controls">
        <RangePicker
          value={dates}
          onChange={setDates}
          disabledDate={(current) => current && current > dayjs().endOf('day')}
          style={{ width: 300 }}
        />

        <Input.Group compact className="custom-search-bar">
          <Input
            placeholder="Search products"
            value={searchTerm}
            onChange={handleInputChange}
            style={{ width: 250, borderRadius: '5px 0 0 5px' }}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={handleSearch}
            style={{ borderRadius: '0 5px 5px 0' }}
          />
        </Input.Group>

        <Button type="primary" onClick={openModal}>
          + Add
        </Button>
      </div>

      <div className="table-container">
        <Table dataSource={filteredProducts || products} columns={columns} rowKey="id" />
      </div>

      <Modal
        title={<div className="modal-title">Add New Product</div>}
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
      >
        <Form form={form} onFinish={handleModalSubmit} layout="vertical" className="modal-form">
          <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please enter a title' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please enter a price' }]}>
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={3} />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </Form>
      </Modal> 
    </div>
  );
};

export default Page1;
