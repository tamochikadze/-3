function getCity(user) {
    const { banks = [] } = user;
    const { address = {} } = banks[2] || {};
    const { city } = address;
    return city;
  }
  

  const user1 = {
    banks: [
      { address: { city: 'თბილისი' } },
      { address: { city: 'მცხეთა' } },
      { address: { city: 'ბათუმი' } },
    ],
  };
  
  const user2 = {
    banks: [
      { address: { city: 'თბილისი' } },
      { address: { city: 'მცხეთა' } },
    ],
  };
  
  console.log(getCity(user1)); 
  console.log(getCity(user2)); 
  