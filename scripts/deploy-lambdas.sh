cd lambda

for folder in *; do
  cd ${folder}
  ./deploy.sh
  cd ../
done