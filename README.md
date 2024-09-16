1. Открыть cypress можно командами
   - npx cypress open 
   - npx cypress open --env "viewVersion=mobile"
   - npx cypress open --env "viewVersion=notebook"
2. Запустить тестирование можно командами (в режиме без запуска отображения)
   - npx cypress run 
   - npx cypress run --env "viewVersion=mobile"
   - npx cypress run --env "viewVersion=notebook"
3. Запустить тестирование можно командами (в режиме c запуском отображения)
   - npx cypress run --headed
   - npx cypress run --env "viewVersion=mobile" --headed
   - npx cypress run --env "viewVersion=notebook" --headed
4. Запустить тестирование можно командами (в режиме c запуском отображения в конкретном браузере)
   - npx cypress run --env "viewVersion=notebook" --headed --browser chrome
   - npx cypress run --env "viewVersion=mobile" --headed --browser firefox
   - npx cypress run --headed --browser edge
5. Если --headed не указывать, то отображения тестирования не будет. Можно явно указать --headless (отображение тестирования в браузере происходить не будет)
6. Запуск тестирования возможен с помощью скриптов, прописанных в packege.json. Тогда запуск скрипта должен выглядеть так:
   - npm run test_chrome_headed
   - npm run test_chrome_headless
   - npm run test_firefox_headed
   - npm run test_edge_headed