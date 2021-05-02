# MasterMailing

MasterMailing is an API for:
- Susbscribe users to a newsletter
- Send a welcome email if register is successful


## API Reference

####  Register a subscriber

```http
  POST /subscriber/register
```

####  Send email

```http
  POST /subscriber/send
```



  
## Authors

- [@RubDevs](https://www.github.com/RubDevs)

  
## Contributing

1. Fork it (<https://github.com/RubDevs/MasterMailing/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MAILCHIMP_URL`

`MAILCHIMP_AUDIENCE`

`MAILCHIMP_KEY`

`MONGO_URL`

`PORT`

## Docker usage

To run this project from a container run the following command

`docker run -d -p <HOST_PORT>:3001 rubsdevs/mailing`
