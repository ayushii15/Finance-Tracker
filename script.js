function calculateTotalSpends() {
	const spendEl = document.querySelectorAll('.number');
	let totalSpends = 0;
  
	spendEl.forEach((spendEl) => {
	  const spendValue = parseFloat(spendEl.value);
	  if (!isNaN(spendValue)) {
		totalSpends += spendValue;
	  }
	});
  
	const totalForm = document.querySelector('#total-spends');
	totalForm.value = totalSpends;
  
	document.querySelector('#available-balance-input').value =
	  document.querySelector('#current-balance-input').value - totalSpends;
  }
  
  window.addEventListener('load', () => {
	const form = document.querySelector("#new-spend-form");
	const input = document.querySelector("#new-spend-input");
	const list_el = document.querySelector("#spends");
  
	document.querySelector('#calculatetotal').addEventListener('click', calculateTotalSpends);
  
	form.addEventListener('submit', (e) => {
	  e.preventDefault();
  
	  const spend = input.value;
	  const spendText = document.querySelector("#spend-text").value; // Added line to get the spend text
	  const spendDate = document.querySelector("#spend-date").value;
  
	  if (spend.trim() === '') {
		alert('Please enter a value for the spend.');
		return;
	  }
	  const spend_el = document.createElement('div');
	  spend_el.classList.add('spend');
  
	  const spend_content_el = document.createElement('div');
	  spend_content_el.classList.add('content');
  
	  spend_el.appendChild(spend_content_el);
  
	  const spend_input_el = document.createElement('input');
	  spend_input_el.classList.add('number');
	  spend_input_el.type = 'number';
	  spend_input_el.value = spend;
	  spend_input_el.setAttribute('readonly', 'readonly');
  
	  spend_content_el.appendChild(spend_input_el);
  
	  const spend_text_el = document.createElement('div'); // Added line to create the spend text element
	  spend_text_el.classList.add('spend-text');
	  spend_text_el.textContent = spendText; // Added line to set the spend text content
  
	  spend_content_el.appendChild(spend_text_el); // Added line to append the spend text element

	    
	  const spend_date_el = document.createElement('div');
	  spend_date_el.classList.add('spend-date');
	  spend_date_el.textContent = spendDate; 

	  spend_content_el.appendChild(spend_date_el);
  
	  const spend_actions_el = document.createElement('div');
	  spend_actions_el.classList.add('actions');
  
  
	  const spend_delete_el = document.createElement('button');
	  spend_delete_el.classList.add('delete');
	  spend_delete_el.innerText = 'Delete';
  
	  spend_actions_el.appendChild(spend_delete_el);
  
	  spend_el.appendChild(spend_actions_el);
  
	  list_el.appendChild(spend_el);
  
	  input.value = '';
	  document.querySelector("#spend-text").value = ''; // Added line to clear the spend text input
      document.querySelector("#spend-date").value = '';

	  spend_delete_el.addEventListener('click', (e) => {
		list_el.removeChild(spend_el);
		calculateTotalSpends();
	  });
	});
  });
  