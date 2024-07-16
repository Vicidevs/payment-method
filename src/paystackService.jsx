import axios from 'axios';

const publicKey = 'pk_test_99a5fbabfa99c79e57b7a0a1dcebbef1504e13d3';
const secretKey = 'sk_test_2fbc47b338d4748b05b197b1024ce710930b62c5';

const PayStackService = {
  initializePayment: async(amount, email) => {
    try{
      const response = await axios.post( 
        'https://api.paystack.co/transaction/initialize',
        {
          email: email,
          amount: amount * 100,
        },
        {
          headers: {
            Authorization: `Bearer${secretKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data.data;
    } catch(error){
      console.error('Error initializing payment:', error);
      throw new Error('An error occurred while initializing payment. please try again.');
    }
  },
}

export default PayStackService;