const industryDetails = {
    id: 1,
    industryName: 'Automobile',
    featureSections: [
        {
            name: 'Call Recording',
            icon: 'recording_icon',
            tagline: 'Track your team effortlessly',
            description: 'Because you need to know what your staff is doing in real-time.',
            points: ['Automatically track and record all calls.', 
                'Revisit conversations and track agent performance by accessing the call recordings.'],
            image: 'recording_img'
        },
        {
            name: 'Lead Management',
            icon: 'lead_management_icon',
            tagline: 'Complete client interaction history in one place',
            description: 'Because when you focus on the wrong leads, your team won`t get any results even if they are working hard',
            points: ['Manage and track every inbound/outbound call, WhatsApp message, SMS, email, etc from one central hub.', 
                'Securely store lead documents, registration certificates, and purchase invoices, or any document for easy access.',
                'Streamline your lead communication and sales pipeline'],
            image: 'lead_management_img'
        }
    ]
}

export default industryDetails;