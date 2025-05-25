module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: [
        'http://localhost:3000',
        'http://localhost:3000/qui-sommes-nous',
        'http://localhost:3000/event-2025'
      ],
      numberOfRuns: 3,
    },
    assert: false,
    upload: {
      target: 'temporary-public-storage',
    },
  },
}; 