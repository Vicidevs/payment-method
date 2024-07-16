import { useState } from 'react'
import { PaystackButton } from 'react-paystack';
import './App.css'

function App() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   amount: '',
  //   phone: ''
  // })

  const publicKey = 'pk_test_99a5fbabfa99c79e57b7a0a1dcebbef1504e13d3';

  // States Variables 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name, 
      phoneNumber,
    },
    publicKey,
    text: 'Confirm Payment',
    className: 'submit-button',
    onSuccess: () => alert('Payment Successfully'),
    onClose: () => alert('Are you sure you want to close')
  }
  const handleSuccess = () => {
    setPaymentSuccess(true);
    setName('');
    setEmail('');
    setAmount(0);
    setPhone('')
  }

  return (
    <>
      <h2>Make your payment</h2>
      <div className='form'>
        <input 
        type="text" 
        name='name'
        value={name}
        placeholder='Full Name' 
        onChange={(e) => setName(e.target.value)}
        disabled={paymentSuccess}
        />

        <input 
        type="email" 
        name='email'
        value={email}
        placeholder = 'Enter Email'
        onChange= {(e) => setEmail(e.target.value)}
        disabled={paymentSuccess}
        />

        <input 
        type='number'
        name='amount'
        value={amount} 
        placeholder='Enter Amount'
        onChange= {(e) => setAmount(e.target.value)}
        disabled={paymentSuccess}
        />

        <input 
        type="number" 
        name='phone'
        value={phoneNumber}
        placeholder='Enter Phone Number'
        onChange= {(e) => setPhone(e.target.value.substring(0, 11))}
        disabled={paymentSuccess}
        />

        {/* <button>Confirm payment</button> */}
        <PaystackButton amount={amount} onSuccess={handleSuccess} {...componentProps}/>
      </div>
    </>
  )
}

export default App
