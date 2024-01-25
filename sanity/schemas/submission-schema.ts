const submission = {
	name: 'submission',
	title: 'Contact Form Submissions',
	type: 'document',
	readOnly: true,
	fields: [
		{
			name: 'submissionDate',
			title: 'Submission Date',
			type: 'datetime',
		},
		{
			name: 'name',
			title: 'Full Name',
			type: 'string',
		},
		{
			name: 'company',
			title: 'Company',
			type: 'string',
		},
		{
			name: 'email',
			title: 'Email',
			type: 'string',
		},
		{
			name: 'phone',
			title: 'Phone',
			type: 'string',
		},
		{
			name: 'subject',
			title: 'Subject',
			type: 'string',
		},
		{
			name: 'message',
			title: 'Message',
			type: 'text',
		},
	],
};

export default submission;
