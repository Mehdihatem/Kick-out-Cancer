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
        'categories:best-practices': ['off'],
        'categories:performance': ['warn', {minScore: 0.5}],
        'categories:seo': ['warn', {minScore: 0.8}],
        'categories:accessibility': ['warn', {minScore: 0.8}]
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}; 