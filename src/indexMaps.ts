type  Maps {
    id : string;
    name: string;
  }
  
  // Initialize an empty Map
  const usersMap = new Map<string, Maps>();
  
  
  usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }