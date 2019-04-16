/**
 * Common Typescript error handling code to test the Sentry Extension
 */

/**
 *  v0
 */

// src: https://sourcegraph.com/github.com/sourcegraph/codeintellify/-/blob/src/hoverifier.test.ts#L667:25
throw new Error('not called')

// src: https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/client/browser/src/libs/github/file_info.ts#L16
throw new Error('cannot determine file path')

throw new Error('cannot determine delta info')

// src: https://sourcegraph.com/github.com/sourcegraph/sourcegraph@master/-/blob/shared/src/api/extension/types/selection.ts?diff=70c07329b65f3cd4dafb8f872a7f07e5744a8fff#L64
throw new Error('Invalid arguments')

// random
console.error('this is a test')

// src: https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/shared/src/api/extension/extensionHost.ts#L225
console.warn(
    'sourcegraph.languages.registerTypeDefinitionProvider was removed. Use sourcegraph.languages.registerLocationProvider instead.'
)

// GITLAB
// src: https://sourcegraph.com/gitlab.com/rluna-open-source/code-management/sourcegraph/sourcegraph/-/blob/client/browser/src/e2e/chrome.e2e.test.ts#L52:17
// Rendering a warning when the project repo doesn't match.
console.warn('Running as root, disabling sandbox')

/**
 * v1: more complex error messages
 */

// src: https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/client/browser/src/libs/options/OptionsContainer.tsx#L95:17
const err = 'test error'
console.log('Error fetching current tab status', err)
