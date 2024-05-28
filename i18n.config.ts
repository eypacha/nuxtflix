export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      index: {
        title: "Unlimited movies and much more",
        subtitle: "Discover a world of unlimited entertainment!",
      },
      user: {
        signin: "Sign In",
        email: "Email",
        password: "Password",
        login_button: "Sign In",
        forgot_password: "Forgot your password?",
        translate: "Translate"
      },
      browse: {
        more_info: "More info"
      },
      watch: {
        director: "Director:",
        writer: "Writer:",
        cast: "Cast:",
        awards: "Awards:",
        no_movie: "Oops! We couldn't find the movie",
        find_other_titles: "But there are many others at",
        home: "home",
        go_back: "Go back to browse"
      },
      error: {
        default_message: "An unknown error occurred",
        goto_gome: "Go to home"
      },
    },
    es: {
      index: {
        title: "Películas ilimitadas y mucho más",
        subtitle: "¡Descubre un mundo de entretenimiento sin límites!",
      },
      user: {
        signin: "Inicia sesión",
        email: "Email",
        password: "Contraseña",
        login_button: "Iniciar sesión",
        forgot_password: "¿Olvidaste la contraseña?",
        translate: "Traducir"
      },
      browse: {
        more_info: "Más info"
      },
      watch: {
        director: "Director:",
        writer: "Escritor:",
        cast: "Elenco:",
        awards: "Premios:",
        no_movie: "¡Uy! No encontramos esa película",
        find_other_titles: "Pero hay muchos otro en el",
        home: "inicio",
        go_back: "Volver a explorar"
      },
      error: {
        default_message: "Ha ocurrido un error desconocido",
        goto_gome: "Ir al inicio",
      },
    },
  },
}));
