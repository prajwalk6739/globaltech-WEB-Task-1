const regForm = document.getElementById('reg-form');
const studentsContainer = document.getElementById('students-container');

let students = [];

regForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const name = e.target.name.value;
	const email = e.target.email.value;
	const dob = e.target.dob.value;

	const student = {
		name,
		email,
		dob
	}

	students.push(student);

	// Reset form
	e.target.reset();

	displayStudents();
});

function displayStudents() {
	let studentsHTML = '<h2>Registered Students</h2>';

	students.forEach((student) => {
		studentsHTML += `
			<div>
				<p><strong>Name:</strong> ${student.name}</p>
				<p><strong>Email:</strong> ${student.email}</p>
				<p><strong>Date of Birth:</strong> ${student.dob}</p>
			</div>
			<hr>
		`;
	});

	studentsContainer.innerHTML = studentsHTML;
}
