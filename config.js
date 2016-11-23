'use strict';

const config = {
    port: process.env.PORT || 3000,
    ip: process.env.IP || '0.0.0.0',

    // MongoDB connection string. For example, '127.0.0.1:27017/davis'
    database: {
        dsn: 'mongodb://mongo:27017/davis'
    },

    // Currently only US english is supported
    lang: 'en-us',

    // The dynatrace URL and token
    // More information can be found here: https://help.dynatrace.com/api-documentation/v1/
    dynatrace: {
        url: 'https://<dynatrace_tentant_host>',
        token: '<dynatrace_api_token>',
        // Optional - Set to false when using self signed certs
        strictSSL: true
    },

    // A public WIT key can be found on the GitHub page.
    nlp: {
        wit: '<WIT>'
    },

    // Watson STT and TTS is only needed for the WebUI
    watson: {
        enabled: false,
        stt: {
            user: '<watson_stt_user_name>',
            password: '<watson_stt_password>'
        },
        tts: {
            user: '<watson_tts_user_name>',
            password: '<watson_tts_password>'
        }
    },
    
    web: {
        enabled: true,
        auth_required: false
    },

    // The Slack bot token can be created on the apps and integrations page
    slack: {
        enabled: false,
        key: '<slack_token>',
        notifications: {
            alerts: {
                enabled: true,
                channels: [
                    {
                        name: '<slack_channel_name>',
                        state: ['open', 'resolved'],
                        impact: ['application', 'service', 'infrastructure'],
                        tags: {
                            includes: [],
                            excludes: []
                        }
                    }
                ]
            }
        }
    },

    // The Alexa ID is generated by Amazon when you configure your Alexa app.
    alexa: [{
        id: '<alexa_token>',
        name: {
            first: '<first_name>',
            last: '<last_name>'
        },
        timezone: 'America/Detroit'
    }],

    /**
     * User defined aliases
     *      name - The name found in Dynatrace
     *      display:
     *          audible - How Davis will audibly respond
     *          visual - How Davis will visually respond
     *      aliases - An array of alternate ways someone might refer to this entity
     */
    aliases: {
        applications: [{
            name: 'easyTravel',
            display: {
                audible: 'Easy Travel',
                visual: 'easyTravel'
            },
            aliases: ['easy travel']
        }],
        services: [{
            name: 'easyTravelDB',
            display: {
                audible: 'easy travel database',
                visual: 'easyTravel DB'
            },
            aliases: ['db', 'database']
        }],
        infrastructure: [{
            name: 'easyTravel host 1',
            display: {
                audible: 'easy travel host 1',
                visual: 'easyTravel host 1'
            },
            aliases: []
        }]
    }
};

module.exports = config;