cp ./bin/git-hooks/pre-commit .git/hooks/
chmod u+x .git/hooks/pre-commit

npm install
npm run coverage
