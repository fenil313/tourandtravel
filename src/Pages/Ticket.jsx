import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPrint, FaHome, FaPlaneDeparture, FaBarcode, FaCheckCircle, FaStamp } from 'react-icons/fa';
import '../styles/Ticket.css';

const Ticket = () => {
  const { state: data } = useLocation();
  const navigate = useNavigate();

  if (!data) {
    return (
      <div className="error-wrapper">
        <h2>No Document Found</h2>
        <button onClick={() => navigate('/')}>Return to Base</button>
      </div>
    );
  }

  return (
    <div className="ticket-page-container">
      {/* Controls: Hidden on Print */}
      <div className="ticket-controls no-print">
        {/* <button onClick={() => window.print()} className="btn-print"><FaPrint /> SAVE AS PDF</button> */}
        <button onClick={() => navigate('/')} className="btn-home"><FaHome /> DISMISS</button>
      </div>

      <div className="boarding-pass-document">
        {/* MAIN BODY */}
        <div className="pass-body">
          <header className="pass-header">
            <div className="pass-logo">
              <FaPlaneDeparture />
              <span>UMIYA <strong>TRAVELS</strong></span>
            </div>
            <div className="pass-status">
              <FaCheckCircle /> DOCUMENT VALIDATED
            </div>
          </header>

          <div className="pass-info-grid">
            <div className="info-item">
              <label>PASSENGER NAME</label>
              <p>{data.fullName}</p>
            </div>
            <div className="info-item">
              <label>DEPARTURE DATE</label>
              <p>{data.travelDate || "UPON REQUEST"}</p>
            </div>
            <div className="info-item">
              <label>REGISTRY ID</label>
              <p>{data.paymentId.substring(0, 12)}</p>
            </div>
            <div className="info-item">
              <label>CAPACITY</label>
              <p>{data.guests} ADULT(S)</p>
            </div>
          </div>

          <div className="itinerary-summary">
            <h4>SELECTED EXPEDITION</h4>
            {data.items.map((item, index) => (
              <div key={index} className="itinerary-row">
                <span className="dest-name">{item.title}</span>
                <span className="dest-price">₹{item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
          
          <FaStamp className="watermark-stamp" />
        </div>

        {/* TEAR-OFF STUB (RECEIPT) */}
        <div className="pass-stub">
          <div className="stub-header">
            <p>E-RECEIPT</p>
            <strong>UMIYA</strong>
          </div>

          <div className="stub-financials">
            <div className="s-row">
              <span>BASE FARE</span>
              <span>₹{data.subtotal.toLocaleString()}</span>
            </div>
            <div className="s-row">
              <span>TAXES (GST)</span>
              <span>₹{data.taxAmount.toLocaleString()}</span>
            </div>
            <div className="total-highlight">
              <label>TOTAL PAID</label>
              <h2>₹{data.totalAmount.toLocaleString()}</h2>
            </div>
          </div>

          <div className="stub-barcode">
            <FaBarcode className="barcode-img" />
            <code>{data.paymentId.toUpperCase()}</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;