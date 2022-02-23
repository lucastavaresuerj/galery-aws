cd lambda

for folder in *; do
  cd ${folder}
  sam build
  FUNC_NAME=${folder} ./deploy.sh
  cd ../
done