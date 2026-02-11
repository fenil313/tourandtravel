import React, { useContext } from 'react';
import { Table, Button, Typography, Card, Empty, Space, Tag } from 'antd';
import { motion } from 'framer-motion';
import { TravelContext } from '../context/TravelContext';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';

const { Title, Text } = Typography;

const Cart = () => {
  const { cart, setCart } = useContext(TravelContext);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const columns = [
    {
      title: 'Destination',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <Tag color="blue">{price}</Tag>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button 
          type="text" 
          danger 
          icon={<FaTrash />} 
          onClick={() => removeItem(record.id)}
        />
      ),
    },
  ];

  return (
    <div className="page-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="container"
      >
        <Title level={2} className="mb-4">Your Travel Cart</Title>
        
        {cart.length > 0 ? (
          <Card className="central-card" style={{ padding: '20px' }}>
            <Table 
              dataSource={cart} 
              columns={columns} 
              pagination={false} 
              rowKey="id"
            />
            <div className="mt-5 text-end">
              <Space direction="vertical" align="end">
                <Title level={4}>Total Items: {cart.length}</Title>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    type="primary" 
                    size="large" 
                    shape="round" 
                    icon={<FaCheckCircle />}
                    className="book-btn"
                  >
                    Proceed to Checkout
                  </Button>
                </motion.div>
              </Space>
            </div>
          </Card>
        ) : (
          <Card className="central-card py-5">
            <Empty description="Your cart is empty. Start exploring!" />
          </Card>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;