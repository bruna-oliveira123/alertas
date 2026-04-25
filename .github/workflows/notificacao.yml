name: CI Alertas e Testes
on: [push, pull_request]

jobs:
  testes:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm test
      - name: Notificar Discord
        if: always()
        run: |
          curl -H "Content-Type: application/json" \
          -X POST \
          -d "{\"content\": \"Projeto Alertas: Os testes terminaram com status ${{ job.status }}\"}" \
          ${{ secrets.DISCORD_WEBHOOK }}
