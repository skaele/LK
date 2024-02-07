type PositiveInteger<T extends number> = `${T}` extends '0' | `-${any}` | `${any}.${any}` ? never : T

const importFunction = (path: string) => import(/* @vite-ignore */ path)

const identity = (e: any) => e
const uriOrRelativePathRegex = /"((\w+:(\/?\/?))?[^\s]+)"/
function parseModulePathFromImporterBody(importer: () => any): string | null {
    const fnString = importer.toString()
    const match = fnString.match(uriOrRelativePathRegex)
    if (!match) return null
    return match.filter(identity)[1]
}

function createDynamicImportWithRetry<T extends number>(maxRetries: PositiveInteger<T>) {
    return async (importer: () => Promise<any>) => {
        try {
            return await importer()
        } catch (error: any) {
            const modulePath = parseModulePathFromImporterBody(importer)

            if (!modulePath) {
                throw error
            }

            // retry x times with 2 second delay base and backoff factor of 2 (1/2, 1, 2, 4, 8 seconds)
            //
            for (let i = 0; i < maxRetries; i++) {
                // add a timestamp to the url to force a reload the module (and not use the cached version - cache busting)
                const cacheBustedPath = `${modulePath}?t=${+new Date()}`

                try {
                    return await importFunction(cacheBustedPath)
                } catch (e) {
                    await new Promise((resolve) => setTimeout(resolve, 1000 * 2 ** (i - 1)))
                }
            }
            throw error
        }
    }
}

export const lazy = createDynamicImportWithRetry(3)
