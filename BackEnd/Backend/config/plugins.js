module.exports = ({ env }) => ({
    email: {
      provider: 'nodemailer',
      providerOptions: {
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        ssl: true,
        tls: true,
          
        auth: {
            user: env('proyectotics3de2021@gmail.com'),
            pass: env('ProyectoDeTics3'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'noreply@recipee.com',
        defaultReplyTo: 'nonreply@recipee.com',
      },
    },
  });