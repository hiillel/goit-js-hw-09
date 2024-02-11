const feedbackForm = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', () => {
  const { email, message } =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  feedbackForm.elements.email.value = email || '';
  feedbackForm.elements.message.value = message || '';
});

function updateFormData() {
  const formData = {
    email: feedbackForm.elements.email.value.trim(),
    message: feedbackForm.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

feedbackForm.addEventListener('input', updateFormData);

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = {
    email: feedbackForm.elements.email.value.trim(),
    message: feedbackForm.elements.message.value.trim(),
  };

  if (!formData.email || !formData.message) {
    alert('Будь ласка, заповніть усі поля!');
    return;
  }

  console.log(formData);

  feedbackForm.reset();
  localStorage.removeItem('feedback-form-state');
});
