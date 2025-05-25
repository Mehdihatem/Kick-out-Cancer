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
    assert: {
      assertions: {
        'best-practices': ['warn', {minScore: 0.83}],
        'performance': ['error', {minScore: 0.9}],
        'accessibility': ['error', {minScore: 0.9}],
        'seo': ['error', {minScore: 0.9}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}; 