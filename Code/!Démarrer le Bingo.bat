IF EXIST node_modules (
	git pull && start http://localhost:3000/ && yarn start
) ELSE (
	npm i -g yarn && npm i && yarn build && start http://localhost:3000/ && yarn start
)