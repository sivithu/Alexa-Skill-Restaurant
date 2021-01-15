module.exports = {
    en: {
        translation: {
            WELCOME_MSG: 'Welcome to Happy Birthday. Let\'s have some fun with your birthday ?',
            REGISTER_MSG: 'Your birthday is {{month}} {{day}} {{year}}.',
            REJECTED_MSG: 'OK. Give me another birthday date',
            HELP_MSG: 'You can say Hello to me ! How can I help ?',
            REFLECTOR_MSG: 'You just triggered {{intent}}',
            GOODBYE_MSG: 'Goodbye !',
            FALLBACK_MSG: 'Sorry, I don\t know about that. Please try again',
            ERROR_MSG: 'Sorry, there was an error. Please try again'
        }
    },
    fr: {
        translation: {
            WELCOME_MSG: "Bonjour, Je vois que vous avez faim. Attendez quelques petites secondes, je vous trouve un restaurant.",
            WELCOME_BACK_MSG: "Content de vous revoir !",
            REJECTED_MSG: "Désolé, une erreur s'est produite lors de votre demande, veuillez réessayer en demandant d'enregister l'adresse ou le prix.",
            REPROMPT_MSG: "Pour obtenir plus d'informations sur ce que je peux faire pour vous, demandez moi de l'aide. Si vous voulez quitter la skill, dites simplement 'stop'. ",
            
            POSITIVE_SOUND:"<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/>",
            GREETING_SPEECHCON: "<say-as interpret-as='interjection'>Cocorico</say-as>",
            DOUBT_SPEECHCON: "<say-as interpret-as='interjection'>Hmmm</say-as>",
            
            MISSING_MSG: "$t(DOUBT_SPEECHCON). Il me semble que vous ne m'avez pas encore dit votre adresse.",
            MISSING_PRICE: "$t(DOUBT_SPEECHCON). Il me semble que vous ne m'avez pas encore dit votre prix maximum souhaité.",
            
            COUNT_STORE: 'Il y a actuellement {{count}} restaurant au alentour.',
            COUNT_MENU: 'Le restaurant contient {{count}} menu.',
            
            CONFIRM_MENU: `OK. Vous avez choisi {{menu}}, le temps de livraison sera de {{time}} minutes. Et le prix est de {{price}} euros`,
            
            
            
            HELP_MSG: "Je peux me souvenir de votre date de naissance. Dites-moi votre jour, mois et année de naissance ou bien dites moi simplement \"enregistre mon anniversaire\". ",
            GOODBYE_MSG: ['Au revoir {{name}}!', 'A bientôt {{name}}', 'A la prochaine fois {{name}}'],
            REFLECTOR_MSG: "Vous avez invoqué l'intention {{intent}}",
            FALLBACK_MSG: 'Désolé, je ne sais pas. Pouvez vous reformuler ?',
            ERROR_MSG: "Désolé, je n'ai pas compris. Pouvez vous reformuler ?",
            
            API_ERROR_MSG: "Désolé, je n'arrive pas à me connecter à l'API externe pour obtenir des résultats. Veuillez réessayer plus tard. ",
        }
    },
    "fr-CA": {
        translation: {
            WELCOME_MSG: "Bienvenue sur la skill des fêtes !",
        }
    }
}