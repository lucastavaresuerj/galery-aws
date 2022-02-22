cd lambda

for folder in *; do
  cd ${folder}
  sudo ./deploy.sh
  cd ../
done