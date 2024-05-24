export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        index: {
            title: 'Unlimited movies and much more',
            subtitle: 'Discover a world of unlimited entertainment!'
        },
        user: {
            signin: 'Sign In',
            email: 'Email',
            password: 'Password',
            login_button: 'Sign In',
            forgot_password: 'Forgot your password?'
        }
      },
      es: {
        index: {
            title: 'Películas ilimitadas y mucho más',
            subtitle: '¡Descubre un mundo de entretenimiento sin límites'
        },
        user: {
            signin: 'Inicia sesión',
            email: 'Email',
            password: 'Contraseña',
            login_button: 'Iniciar sesión',
            forgot_password: '¿Olvidaste la contraseña?'
        }
      },
    }
  }))
  