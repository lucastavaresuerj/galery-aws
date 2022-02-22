cd ../lambda

for folder in *; do
  cd ${folder}/function/
  echo "zipping ${folder}"
  zip -r "function.zip" .
  rm "${folder}/function"
  cd ../../ 
done