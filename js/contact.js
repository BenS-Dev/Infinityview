document.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.getElementById('phone');
  const form = document.getElementById('contact-form');

  // Format phone as (123) 456-7891, enforce max 10 digits
  phoneInput.addEventListener('input', () => {
    let digits = phoneInput.value.replace(/\D/g, '').slice(0, 10);
    let formatted = '';
    if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
      formatted = `(${digits}`;
    }
    phoneInput.value = formatted;
  });

  // Prevent submit if not exactly 10 digits
  form.addEventListener('submit', (e) => {
    const count = phoneInput.value.replace(/\D/g, '').length;
    if (count !== 10) {
      e.preventDefault();
      alert('Please enter a valid 10-digit phone number.');
    }
  });
});
