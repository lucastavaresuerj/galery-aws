cd lambda

for folder in *; do
  cd ${folder}
  FUNC_NAME=${folder} ./deploy.sh
  cd ../
done