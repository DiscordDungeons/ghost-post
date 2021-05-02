PACKAGE_VERSION := $(shell jq -r ".version" < package.json)

publish:
	npm run clean
	npm run build
	npm run package
	git add dist
	git commit -am "🚀 Deploy Release v$(PACKAGE_VERSION)"
	git push origin releases/v$(PACKAGE_VERSION)