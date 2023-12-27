FROM public.ecr.aws/lambda/nodejs:18
# Alternatively, you can pull the base image from Docker Hub: amazon/aws-lambda-nodejs:12

# Assumes your function is named "app.js", and there is a package.json file in the app directory 
WORKDIR /app
COPY . .
RUN npm install --global yarn
# Install NPM dependencies for function
RUN yarn install
RUN yarn prisma generate
RUN yarn build
# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "/app/dist/lambda.handler" ]