import makeAsyncScriptLoader from 'react-async-script';

import MessengerPlugin from './MessengerPlugin';

const URL = '//connect.facebook.net/fr_FR/sdk.js';

export default makeAsyncScriptLoader(MessengerPlugin, URL, {
    globalName: 'FB'
});
